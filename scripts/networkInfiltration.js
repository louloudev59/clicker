// Idlepunk by Asher is licensed under CC BY-NC-SA 4.0 - https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
/*jshint esversion: 6 */
/*jshint eqeqeq: true */
/*jshint supernew: true */
/*jshint multistr: true */

function netWorkInfiltrationConstructor() {
    window.grid = new function() {
        // Names of DOM elements.
        this.DOM = {
            selectorDetail: "selectorName",
            selectorDescription: "selectorDescription",
            selectorCost: "selectorCost",
            selectorCostNumber: "selectorCostNumber",
            selectorAccess: "selectorAccess",
            selectorICE: "selectorICE"
        };
        const canvas = document.getElementById("hackGame");
        this.ctx = canvas.getContext("2d");
        // Base width of lines. 
        this.ctx.lineWidth = "3";
        this.dimensions = {
            // Dimensions of the display area, change in HTML file as well.
            gridHeight: 400,
            gridWidth: 400,
            // Number of cells you want on the grid.
            // Note: Currently maps I made are for 10x10 grids, changing the number of cells will require new maps.
            cellNumX: 10,
            cellNumY: 10,
            cellPadding: 20 // Distance between cells.
        };
        this.colors = {
            playerAccess: '#00ff00',
            ICEMain: 'red',
            ICEAlt: '#FF5900',
            ICEDead: '#AD4D4D',
            ICEHeadMain: 'red',
            ICEHeadAlt: 'yellow',
            selector: 'white'
        };
        // Sets the dimensions of cells
        this.dimensions.cellWidth = this.dimensions.gridWidth / this.dimensions.cellNumX;
        this.dimensions.cellHeight = this.dimensions.gridHeight / this.dimensions.cellNumY;
        // Sets the dimensions of the canvas.
        this.ctx.canvas.width = this.dimensions.gridWidth;
        this.ctx.canvas.height = this.dimensions.gridHeight;
        // Start position of selector.
        this.selector = {
            x: 0,
            y: 0
        };

        this.cells = [[]];

        this.currentLevel = 0;
        this.levels = [];
    };
}

class ICEAI {
    constructor() {
        this.targets = [];
        this.isHunting = false;
        this.animation = {
            startEvery: 5,
            tickCount: 0,
            renderHeads: []
        };
    }
}

class ICEAITarget {
    constructor(x, y) {
        this.targetX = x;
        this.targetY = y;
        this.path = null;
        this.steps = 0;
        this.severed = false;
    }
}

class Cell {
    constructor(x, y){
        this.coords = {x: x, y: y};
        this.dimensions = {};
        this.access = grid.levels[grid.currentLevel].playerAccess[y][x];
        this.connection = grid.levels[grid.currentLevel].connections[y][x];
        this.setDefaultICEStatus();
        this.isHeadOfICE = false; // Move to setDefaultICEStatus?
    }
}   

class Switch extends Cell {
    constructor(x, y) {
        super(x, y);
        this.createGridItem({
            name: "Switch",
            id: 0,
            description: "There is nothing of import here",
            costMultiplier: 1,
            fillColor: false
        });
    }
}

class EntryNode extends Cell {
    constructor(x, y) {
        super(x, y);
        this.createGridItem({
            name: "Entry Node",
            id: 1,
            description: "Start Here",
            costMultiplier: false,
            fillColor: grid.colors.playerAccess
        });
    }
}

class NodeCore extends Cell {
    constructor(x, y) {
        super(x, y);
        this.createGridItem({
            name: "Node Core",
            id: 2,
            description: "Contains large quantities of sensitive information",
            costMultiplier: 5,
            fillColor: "#283747"
        });
    }
}

class Firewall extends Cell {
    constructor(x, y) {
        super(x, y);
        this.createGridItem({
            name: "Firewall",
            id: 3,
            description: "Prevents access",
            costMultiplier: 3,
            fillColor: "grey"
        });
    }
}

class ICE extends Cell {
    constructor(x, y) {
        super(x, y);
        this.createGridItem({
            name: "ICE",
            id: 4,
            description: "Attacks Intruders",
            costMultiplier: 0,
            fillColor: "#E74C3C"
        });
    }
}

class Server extends Cell {
    constructor(x, y) {
        super(x, y);
        this.createGridItem({
            name: "Server",
            id: 5,
            description: "Contains information",
            costMultiplier: 2,
            fillColor: "#2980B9"
        });
    }
}

class level {
    constructor(levelData) {
        this.items = levelData.items;
        this.connections = levelData.connections;
        this.ICEConnections = levelData.connections;
        this.playerAccess = levelData.playerAccess;
    }
}

Cell.prototype.setDefaultICEStatus = function () {
    this.ICE = {
        hasICE: false,
        pathIntact: true,
        animationOffset: (grid.dimensions.cellNumX - this.coords.x) + (grid.dimensions.cellNumY - this.coords.y),
        connection: grid.levels[grid.currentLevel].ICEConnections[this.coords.y][this.coords.x]
    };
};

Cell.prototype.createGridItem = function(itemData) {
    // TODO.
    this.name = itemData.name;
    this.id = itemData.id;
    this.description = itemData.description;
    this.costMultiplier = itemData.costMultiplier;
    this.fillColor = itemData.fillColor;
};

Cell.prototype.renderCell = function() {
    if (this.fillColor) {
        this.drawCellFill();
    }
    this.renderPlayerAccess();
    this.renderICE();
    this.renderSelector();
};

Cell.prototype.renderPlayerAccess = function(x, y) {
    // Draws cells that the player has access to.
    if (this.access) {
        this.drawCellOutline(grid.colors.playerAccess);
    }
};

Cell.prototype.renderICE = function() {
    // Draws cells that contain ICE.
    if (this.ICE.hasICE) {
        if (!this.ICE.pathIntact) {
            // If the path is broken, display the dead ICE color.
            this.drawCellInternalOutline(grid.colors.ICEDead);
        }
        else {
            // Else pick a color based on animation.
            this.drawCellInternalOutline(this.getICEAnimationColor());
        }
    }
};

Cell.prototype.getICEAnimationColor = function() {
    // Alternate colors are displayed based on the tick count and how far away the Cell is from the exit point.
    // This creates a pulsing snake like animation starting at the exit and traveling down the ICE chain.
    const shouldAltColorRender = (grid.ICE.animation.tickCount - this.ICE.steps) % grid.ICE.animation.startEvery === 0;
    return shouldAltColorRender ? grid.colors.ICEAlt : grid.colors.ICEMain;
};

Cell.prototype.renderSelector = function() {
    // If the selector is over this Cell, display a white outline over it.
    if (grid.selector.y === this.coords.y && grid.selector.x === this.coords.x) {
        this.drawCellOutline("white");
        this.renderSelectorText();
    }
};

Cell.prototype.renderSelectorText = function() {
    // Displays the detailed text of the state of the cell where the selector is.
    if (this.connection) {
        this.setCellNameText();
        this.setCellDescriptionText();
        this.setCellCostText();
        this.setCellAccessText();
        this.setCellICEText();
    }
    // If there is no connection to the cell then it is inaccessible.
    else {
        clearSelectorText();
        this.setCellNameText();
        this.setCellInaccessableText();
    }
};

Cell.prototype.setCellNameText = function() {
    HTMLEditor(grid.DOM.selectorDetail, this.name);
    const color = this.fillColor || theme.colorTheme[theme.currentTheme].bodyColor;
    HTMLColorChange(grid.DOM.selectorDetail, color);
};

Cell.prototype.setCellDescriptionText = function() {
    HTMLEditor(grid.DOM.selectorDescription, this.description);
};

Cell.prototype.setCellCostText = function() {
    HTMLEditor(grid.DOM.selectorCostNumber, formatBytes(this.getCostToAccess()));

    const color = this.canAffordAccess() ? "Green" : "Red";
    HTMLColorChange(grid.DOM.selectorCostNumber, color);
};

Cell.prototype.setCellAccessText = function() {
    if (this.access) {
        // Cell is accessed.
        HTMLEditor(grid.DOM.selectorAccess, "You have access to this.");
        HTMLColorChange(grid.DOM.selectorAccess, "Green");
    }
    else {
        // Cell is not accessed and is connected.
        HTMLEditor(grid.DOM.selectorAccess, "You do not have access to this.");
        HTMLColorChange(grid.DOM.selectorAccess, "Red");
    }
};

Cell.prototype.setCellICEText = function() {
    // Severed ICE.
    if (!this.ICE.pathIntact && this.ICE.hasICE) {
        HTMLEditor(grid.DOM.selectorICE, "Disconnected ICE is present here.");
        HTMLColorChange(grid.DOM.selectorICE, "Yellow");
    }
    // Normal ICE.
    else if (this.ICE.hasICE) {
        HTMLEditor(grid.DOM.selectorICE, "ICE is present here.");
        HTMLColorChange(grid.DOM.selectorICE, "Red");
    }
    // No ICE.
    else {
        HTMLEditor(grid.DOM.selectorICE, "ICE is not present here.");
        HTMLColorChange(grid.DOM.selectorICE, "Green");
    }
};

Cell.prototype.setCellInaccessableText = function() {
        HTMLEditor(grid.DOM.selectorAccess, "You cannot gain access to this.");
        HTMLColorChange(grid.DOM.selectorAccess, "Gray");
};

Cell.prototype.drawCellFill = function(color) {
    // Draws a filled square.
    grid.ctx.lineWidth = "4";
    grid.ctx.fillStyle = color || this.fillColor;

    const drawX = this.dimensions.x - 1.5;
    const drawY = this.dimensions.y - 1.5;

    const cellWidth = grid.dimensions.cellWidth - grid.dimensions.cellPadding + 3;
    const cellHeight = grid.dimensions.cellHeight - grid.dimensions.cellPadding + 3;

    grid.ctx.fillRect(drawX, drawY, cellWidth, cellHeight);
};

Cell.prototype.drawCellOutline = function(color) {
    // Draws the outline of a square.
    grid.ctx.lineWidth = "3";
    grid.ctx.strokeStyle = color || this.fillColor;

    const drawX = this.dimensions.x;
    const drawY = this.dimensions.y;

    const cellWidth = grid.dimensions.cellWidth - grid.dimensions.cellPadding;
    const cellHeight = grid.dimensions.cellHeight - grid.dimensions.cellPadding;

    grid.ctx.strokeRect(drawX, drawY, cellWidth, cellHeight);
};

Cell.prototype.drawCellInternalOutline = function(color) {
    // Draws the outline of a square with some negative padding so it looks like an internal border.
    const bonusPad = 3;
    grid.ctx.lineWidth = "3";
    grid.ctx.strokeStyle = color || this.color;

    const drawX = this.dimensions.x + bonusPad;
    const drawY = this.dimensions.y + bonusPad;

    const cellWidth = grid.dimensions.cellWidth - grid.dimensions.cellPadding - (bonusPad * 2);
    const cellHeight = grid.dimensions.cellHeight - grid.dimensions.cellPadding - (bonusPad * 2);

    grid.ctx.strokeRect(drawX, drawY, cellWidth, cellHeight);
};

Cell.prototype.takeAction = function() {
    // The player has taken an action on a cell.
    if (canEnableAccessAtSelector() && this.canAffordAccess()) {
        subtractData(this.getCostToAccess());
        //const x = this.coords.x;
        //const y = this.coords.y;
        this.enableAccessOnCell();
        // If this is a server or ICE, start ICE hunting.
        if (this.isServer() || this.isICE()) {
            grid.ICE.isHunting = true;
        }
        grid.ICE.takeAction();
    }
};

Cell.prototype.isICE = function() {
	return this.id === 4;
};

Cell.prototype.isServer = function() {
	return this.id === 5;
};

Cell.prototype.enableAccessOnCell = function() {
    // Enables player access, removes ICE and severs ICE connections.
    this.access = true;
    grid.cells[this.coords.y][this.coords.x].ICE.connection = false;
    this.ICE.hasICE = false;
};

Cell.prototype.isAccessed = function() {
    // Yeah... this is fairly pointless...
    // TODO.
    return this.access;
};

Cell.prototype.canAffordAccess = function() {
    return (gameData.dataHacked >= this.getCostToAccess());
};

Cell.prototype.getCostToAccess = function() {
    return this.costMultiplier * itemList[getBestUnlockedItem()].itemData.baseCost;
};

Cell.prototype.toggleHeadOfICE = function() {
    this.isHeadOfICE = !this.isHeadOfICE;
}

function startHackGame() {
    // First time run.
    importLevels(defaultLevels);
    // Converts the easy to read/make binary arrays to easy to process booleans.

    parseLevels();

    createCellMap();
    populateCellMap();

    createDimensionalCoordianates();

    grid.ICE = new ICEAI;
    grid.ICE.setServersAsTargets();
    refreshNetworkInfiltration();

}

function importLevels(newLevels) {
	// Must iterate forwards.
	for (let i = 0, len = newLevels.length; i < len; i++) {
		grid.levels.push(newLevels[i]);
	}
}

function parseLevels() {
    convertBinaryMapToBooleanMap(grid.levels[grid.currentLevel].playerAccess);
    convertBinaryMapToBooleanMap(grid.levels[grid.currentLevel].connections);
    convertBinaryMapToBooleanMap(grid.levels[grid.currentLevel].ICEConnections);
}

function refreshNetworkInfiltration() {
    // Refreshes the UI without changing the game state.
    clearGrid();
    renderCellConnections();
    renderCellBase();
    renderCellItems();
    grid.ICE.update();
    grid.ICE.renderHeads();

    //updateICEHunt();
    updateICEAnimation();
}

function updateICEAnimation() {
    grid.ICE.animation.tickCount++;
}

function clearGrid() {
    // Completely clears the grid area, make it a blank area.
    grid.ctx.clearRect(0, 0, grid.dimensions.gridWidth, grid.dimensions.gridHeight);
}

function clearSelectorText() {
    HTMLEditor(grid.DOM.selectorDetail, '');
    HTMLEditor(grid.DOM.selectorDescription, '');
    HTMLEditor(grid.DOM.selectorAccess, '');
    HTMLEditor(grid.DOM.selectorICE, '');
}

function convertBinaryMapToBooleanMap(grid) {
    // Converts an array of 1s & 0s to an array of trues & falses.
    for (let y = grid.length - 1; y >= 0; y--) {
        for (let x = grid[y].length - 1; x >= 0; x--) {
            grid[y][x] = grid[y][x] !== 0 ? true : false;
        }
    }
}


function createDimensionalCoordianates() {
    // Creates coordinates for the top left (right?) of each cell.
    // Coords are based off of dimensions and padding of cells.
    // They are used for rendering locations.

    let cellPosX = 0;
    let cellPosY = 0;

    for (let cellDimensionY = 1; cellDimensionY < grid.dimensions.gridHeight; cellDimensionY += grid.dimensions.cellHeight) {
        for (let cellDimensionX = 1; cellDimensionX < grid.dimensions.gridWidth; cellDimensionX += grid.dimensions.cellWidth) {
            insertCellCoord(cellDimensionX, cellDimensionY, cellPosX, cellPosY);
            cellPosX++;
        }
        cellPosY++;
        cellPosX = 0;
    }
}

function insertCellCoord(dimensionX, dimensionY, cellPosX, cellPosY) {
    grid.cells[cellPosY][cellPosX].dimensions = {
        x: dimensionX,
        y: dimensionY
    };
}

function createCellMap() {
    // Creates empty 2d grid based on how many cells can fit inside.
    const cellNumX = grid.dimensions.cellNumX;
    const cellNumY = grid.dimensions.cellNumY;
    grid.cells = new Array(cellNumY);
    for (let i = 0; i < cellNumX; i++) {
        grid.cells[i] = new Array(cellNumX);
    }
}

function populateCellMap() {
    // Populates the Cell map with Cell data.
    for (let y = grid.levels[grid.currentLevel].items.length - 1; y >= 0; y--) {
        for (let x = grid.levels[grid.currentLevel].items[y].length - 1; x >= 0; x--) {
            createCell(x, y);
        }
    }
}

function createCell(x, y) {
    // Creates an item Cell based on what item is in the level builder items array.
    const itemID = grid.levels[grid.currentLevel].items[y][x];
    const itemClass = getItemClass(itemID);
    grid.cells[y][x] = new itemClass(x, y);
}

function getItemClass(id) {
    // Returns a class from an ID.
    // It is bad that each class contains an ID and this is a separate list.
    // TODO.
    itemTypes = {
        0: Switch,
        1: EntryNode,
        2: NodeCore,
        3: Firewall,
        4: ICE,
        5: Server
    }[id];
    return itemTypes;
}

function renderLineBetweenCells(startCellX, startCellY, endCellX, endCellY, color) {
    // Draws a line between two cells.
    grid.ctx.lineWidth = "3";
    grid.ctx.strokeStyle = color;

    // Offset is so the lines only touch the cells, not enter them.
    // Ternary determines if line is horizontal or vertical.
    // Horizontal Offset = Width*2^-2.
    // Vertical Offset = Height*2^-2.
    const offsetX = startCellX !== endCellX ? grid.dimensions.cellWidth  * Math.pow(2, -2) : null;
    const offsetY = startCellY !== endCellY ? grid.dimensions.cellHeight * Math.pow(2, -2) : null;


    const paddingX = (grid.dimensions.cellWidth - grid.dimensions.cellPadding) / 2;
    const paddingY = (grid.dimensions.cellHeight - grid.dimensions.cellPadding) / 2;

    const startX = grid.cells[startCellY][startCellX].dimensions.x + paddingX + offsetX;
    const startY = grid.cells[startCellY][startCellX].dimensions.y + paddingY + offsetY;

    const endX = grid.cells[endCellY][endCellX].dimensions.x + paddingX - offsetX;
    const endY = grid.cells[endCellY][endCellX].dimensions.y + paddingY - offsetY;

    grid.ctx.beginPath();
    grid.ctx.moveTo(startX, startY);
    grid.ctx.lineTo(endX, endY);
    grid.ctx.stroke();
}

function renderCellBase() {
    // Draws the grid based on coordinates.
    for (let y = grid.cells.length - 1; y >= 0; y--) {
        for (let x = grid.cells[y].length - 1; x >= 0; x--) {
            grid.cells[y][x].drawCellOutline(theme.colorTheme[theme.currentTheme].bodyColor);
        }
    }
}

function renderCellItems() {
    // Fills grid in with objects from the .maps.cells.
    for (let y = grid.cells.length - 1; y >= 0; y--) {
        for (let x = grid.cells[y].length - 1; x >= 0; x--) {
            grid.cells[y][x].renderCell();
        }
    }
}

function renderCellConnections() {
    // Cell connections are the line running between cells, indicating where the player and ICE can 'travel'.
    for (let y = grid.cells.length - 1; y >= 0; y--) {
        for (let x = grid.cells[y].length - 1; x >= 0; x--) {
            renderLinesWhereConnectionsExist(x, y);
        }
    }
}

function renderLinesWhereConnectionsExist(x, y) {
    // Starts in the bottom right of the grid.
    if (connectionRightOfCell(x, y)) {
        renderLinesByAccess(x, y, x + 1, y);
    }
    if (connectionAboveCell(x, y)) {
        renderLinesByAccess(x, y, x, y + 1);
    }
}

function renderLinesByAccess(startX, startY, endX, endY) {
    // Renders a line between two cells, the color is based on access status.
    if (grid.cells[startY][startX].isAccessed() && grid.cells[endY][endX].isAccessed()) {
        renderLineBetweenCells(startX, startY, endX, endY ,grid.colors.playerAccess);
    }
    else {
        renderLineBetweenCells(startX, startY, endX, endY, theme.colorTheme[theme.currentTheme].importantColor);
    }
}

function connectionRightOfCell(x, y) {
    // Checks if both the Cell at the provided coordinates and the one to the right of it are connection cells.
    return x === grid.cells[y].length - 1 ? false : grid.cells[y][x].connection && grid.cells[y][x + 1].connection;
}

function connectionAboveCell(x, y) {
    // Checks if both the Cell at the provided coordinates and the one above it are connection cells.
    return y === grid.cells[x].length - 1 ? false : grid.cells[y][x].connection && grid.cells[y + 1][x].connection;
}

document.onkeydown = function(e) {
    // Either moves the selector to another Cell or takes an action on the Cell.
    // Different keys call different functions.
    // foo = {bar: () => baz()} will not call baz() when foo is initialized, baz can be called through foo().
    const actionFromInput = {
        // Move Left.
        37: () => moveSelectorLeft(), // Left Arrow
        65: () => moveSelectorLeft(), // A
        100: () => moveSelectorLeft(), // Numpad 4
        // MoveRight.
        39: () => moveSelectorRight(), // Right Arrow
        68: () => moveSelectorRight(), // D
        102: () => moveSelectorRight(), // Numpad 6
        // Move Down.
        40: () => moveSelectorDown(), // Down Arrow
        83: () => moveSelectorDown(), // S
        98: () => moveSelectorDown(), // Numpad 2
        // Move Up.
        87: () => moveSelectorUp(), // Up arrow
        38: () => moveSelectorUp(), // W
        104: () => moveSelectorUp(), // Numpad 8
        // Move diagonally left/up.
        36: () => {moveSelectorLeft(); moveSelectorUp();}, // Home
        103: () => {moveSelectorLeft();moveSelectorUp();}, // Numpad 7
        // Move diagonally right/up.
        33: () => {moveSelectorRight();moveSelectorUp();}, // Page Up
        105: () => { moveSelectorRight(); moveSelectorUp();}, // Numpad 9
        // Move diagonally left/down.
        35: () => {moveSelectorLeft();moveSelectorDown();}, // End
        97: () => {moveSelectorLeft();moveSelectorDown();}, // Numpad 1
        // Move diagonally right/down.
        34: () => {moveSelectorRight();moveSelectorDown();}, // Page Down
        99: () => {moveSelectorRight();moveSelectorDown();}, // Numpad 3
        // Action.
        32: () => playerAction(), // Space bar
        69: () => playerAction(), // E
        13: () => playerAction(), // Enter
        107: () => playerAction() // +
    }[e.keyCode]; // Determines what function actionFromInput() should call.
    // If an input keyCode isn't a key in actionFromInput, it will be undefined.
    if (actionFromInput) {
        actionFromInput();
        refreshNetworkInfiltration();
    }
    else {
        console.log(e.key + " is not bound to anything.");
    }
};

function moveSelectorUp() {
    // If the selector is not at the top, move up, if it is at the top, move to bottom.
    grid.selector.y = grid.selector.y !== 0 ? grid.selector.y - 1: grid.cells.length - 1;
}

function moveSelectorDown() {
    // If the selector is not at the bottom, move down, if it is at the bottom, move to top.
    grid.selector.y = grid.selector.y !== grid.cells.length - 1 ? grid.selector.y + 1 : grid.selector.y = 0;
}

function moveSelectorLeft() {
    // If the selector is not leftmost, move left, if it is leftmost, move rightmost.
    grid.selector.x = grid.selector.x !== 0 ? grid.selector.x - 1 : grid.cells.length - 1;
}

function moveSelectorRight() {
    // If the selector is not rightmost, move right, if it is rightmost, move leftmost.
    grid.selector.x = grid.selector.x !== grid.cells.length - 1 ? grid.selector.x + 1 : grid.selector.x = 0;
}

function playerAction() {
    // Makes the Cell that the selector is over take an action.
    grid.cells[grid.selector.y][grid.selector.x].takeAction();
}

function giveDataReward() {
    // TODO.
    const rewardAmount = calculateDataReward();
    addData(rewardAmount);
}

function calculateDataReward() {
    // TODO.
    // At the moment servers reward data equal to the next upgrade cost of the best item the player owns.
    const item = itemList[getBestUnlockedItem()];
    return item.upgrade.nextUpgradeCost;
}

function getBestUnlockedItem() {
    // Returns the highest tier item that the player has unlocked.
    for (let i = itemList.length - 1; i >= 0; i--) {
        if (itemList[i].itemData.itemCount !== 0) {
            return i;
        }
    }
    return 0; // Player has not unlocked or bought anything.
}

function isSelectorOverConnectionCell() {
    return grid.cells[grid.selector.y][grid.selector.x].connection;
}

function isSelectorOverAccessedCell() {
    return grid.cells[grid.selector.y][grid.selector.x].isAccessed();
}

function canEnableAccessAtSelector() {
    // If Cell can be changed from unaccessed to accessed.
    // It has to be:
    // 1. Over a Cell that is connected.
    // 2. Adjacent to a Cell that the player has already accessed.
    // 3. Over a Cell that the player has not already accessed.
    return isSelectorOverConnectionCell() && isSelectorAdjacentToAccessedCell() && !isSelectorOverAccessedCell();
}

function isSelectorAdjacentToAccessedCell() {
    const x = grid.selector.x;
    const y = grid.selector.y;
    return (isCellAboveAccessed(x, y) || isCellBelowAccessed(x, y) || isCellToLeftAccessed(x, y) || isCellToRightAccessed(x, y));
}

function isCellAboveAccessed(x, y) {
    return y === 0 ? false : grid.cells[y - 1][x].isAccessed();
}

function isCellBelowAccessed(x, y) {
    return y === grid.cells.length - 1 ? false : grid.cells[y + 1][x].isAccessed();
}

function isCellToLeftAccessed(x, y) {
    return x === 0 ? false : grid.cells[y][x - 1].isAccessed();
}

function isCellToRightAccessed(x, y) {
    return x === grid.cells[y].length - 1 ? false : grid.cells[y][x + 1].isAccessed();
}

ICEAI.prototype.setServersAsTargets = function() {
	// Loops through cells, setting servers as targets for ICE.
    for (let y = 0; y < grid.cells.length; y++) {
        for (let x = 0; x < grid.cells[y].length; x++) {
            if (grid.cells[y][x].isServer()) {
                this.addTarget(x, y);
            }
        }
    }
};

ICEAI.prototype.addTarget = function(x, y) {
    this.targets.push(new ICEAITarget(x, y));
};

ICEAI.prototype.takeAction = function() {
    // If an ICE cell has not been accessed, isHunting will be false and no action should happen.
    if (this.isHunting) {
        this.calculatePath();
        this.increaseSteps();
        refreshNetworkInfiltration();
    }
};

ICEAI.prototype.calculatePath = function() {
    // Loops through targets, calculating paths to reach them.
    for (let i = this.targets.length - 1; i >= 0; i--){
        this.targets[i].getPath();
    }   
};

ICEAI.prototype.increaseSteps = function() {
    this.clearHeads(); // The head locations are going to change once a step occurs.
    for (let i = this.targets.length - 1; i >= 0; i--){
        this.targets[i].takeStep();
    }   
};

ICEAI.prototype.update = function() {
    if (this.isHunting) {
        for (let i = this.targets.length - 1; i >= 0; i--){
            this.targets[i].setPath();
        }
    }
};

ICEAITarget.prototype.getPath = function() {
    // A* algo for finding path that ICE uses.
    const es = new EasyStar.js();
    es.setIterationsPerCalculation(Infinity); // Forces path to be returned during current tick.
    es.setGrid(grid.levels[grid.currentLevel].ICEConnections);
    es.setAcceptableTiles([true]); // Cells that are True are accessible by ICE.

    es.findPath(9, 9, this.targetX, this.targetY, function(path) {
        if (path === null) {
            throw('Level Error: No possible path for ICE', this);
        }
        else {
            this.path = path;            
        }
    }.bind(this));
    es.calculate();
};

ICEAITarget.prototype.takeStep = function() {
    this.steps++;
    this.setHead();
};

ICEAITarget.prototype.setPath = function() {
    if (this.path) { // Path may not be found.
        for (let step = 0; step < this.steps; step++)
            this.updateCell(step);
    }
};

ICEAITarget.prototype.updateCell = function(step) {
    if (this.path[step]) {
        const x = this.path[step].x;
        const y = this.path[step].y;

        // Tells the cell how many steps from the origin point it is.
        grid.cells[y][x].ICE.steps = step; 

        // ICE may only travel to cells where the player has not accessed.
        if (!grid.cells[y][x].access) {
            grid.cells[y][x].ICE.hasICE = true;
            grid.cells[y][x].ICE.pathIntact = true;
        }
        else {
            // If the player has accessed this cell, remove ICE.
            grid.cells[y][x].ICE.hasICE = false;
            this.severPath(step);
        }
    }
};

ICEAITarget.prototype.severPath = function(step) {
    // Removes all steps to reach a target after the given step 
    // Marks all cells along the path as severed.
    for (let i = this.path.length - 1; i >= step; i--) {
        grid.cells[this.path[i].y][this.path[i].x].ICE.pathIntact = false;
    }
    this.path.splice(step);
    this.severed = true;
};

ICEAITarget.prototype.setHead = function() {
    // Sets the location of the front of this ICE chain.
    // If the chain has been severed at any point then the head will stay dead and not move.
    if (this.path && !this.severed && this.steps < this.path.length) {
        let x = this.path[this.steps - 1].x;
        let y = this.path[this.steps - 1].y;
        grid.ICE.animation.renderHeads.push({x, y});

    }
}

ICEAI.prototype.clearHeads = function() {
    grid.ICE.animation.renderHeads = [];
}

ICEAI.prototype.renderHeads = function () {
    // Loop through the heads, displaying them if they are still intact.
    for (let i = this.animation.renderHeads.length - 1; i >= 0; i--) {
        let x = this.animation.renderHeads[i].x
        let y = this.animation.renderHeads[i].y
        if (grid.cells[y][x].ICE.pathIntact) {
            grid.cells[y][x].renderHead();
        }
    }
}

Cell.prototype.renderHead = function() {
    const flashRate = 4;
    const shouldAltColorRender = (grid.ICE.animation.tickCount) % flashRate === 0;
    const color = shouldAltColorRender ? grid.colors.ICEHeadAlt : grid.colors.ICEHeadMain;
    //this.drawCellFill(color);
    //this.drawCellInternalOutline(grid.colors.ICEHeadAlt);
    this.drawCellInternalOutline(color);
}
