function upgradeTextConstructor() {
    // 2d arrays of upgrade names and descriptions.
    // Accessed by:
    // itemList[i].upgradeText[upgradeCount][0 = name || 1 = desc].
    // itemList[7].upgradeText[3][1] will return the description for the 4th upgrade of the 8th item..
    // Cyberdecks.
	itemList[0].upgradeText = [
        ['Upgrade to an Ergonomic Deck', 'As part of an initiative to lower employee suicide rates, Chui-Bazhusko\
                                            Multinational developed the Ergonomic Deck. It gently releases both calming\
                                            and energizing psychotropics into the palms of users.'],
        ['Install Neural Interfaces', 'First developed by triGen Consolidated, the Neural Interface allows humans to\
                                            traverse cyberspace using nothing but their brains. In addition, atrophied\
                                            limbs can save you money on food.'],
        ['Flash ZedSoft firmware', 'ZedSoft is the most revered Cyberdeck development company in the entire Inner\
                                            Seoul Arcology. They have an exclusive contract with MILNET-KOREA, making\
                                            their products difficult to source.'],
        ['Create a clustered Superdeck', 'An ancient trick, by networking a large number of Decks together you can\
                                            create a Superdeck, more powerful than the sum of its parts.'],
        ['Install more RAM', 'Random Access Memory, very powerful but completely unstable. There are rumors\
                                            that people in the Shenzhen Industrial Area use RAM to augment their\
                                            biological memory.']
    ]; // ICEPicks.
    itemList[1].upgradeText = [
        ['Update to an ICEBREAKER', 'Supposedly developed by legendary netrunner Strange Switch, the\
                                                ICEBREAKER is the next generation of penetration software.'],
        ['Prepare BLACKICE Countermeasures', 'BLACKICE, originally developed to protect the intellectual assets of\
                                                Meturia-Preva Consolidated, is now a blanket term for security software\
                                                capable of killing intruders.'],
        ['Setup Dummy Interface', 'Corporations, particularly those in the Eurasian Economic Zone, are\
                                                partial to sending assassins after those who steal their data. Setting up\
                                                a Dummy Interface makes it hard for them to track you down.'],
        ['Cyberdeck Simulators', 'Servers that are hacked by your ICE Picks can now host virtual Cyberdecks.'],
        ['Write new anti-ICE software', 'ICE defense is ever changing, new ICE picking software is always required.']
    ]; // Botnets.
    itemList[2].upgradeText = [
        ['Implement self-modifying code', 'You never know what your Bots will find when then are infiltrating, they\
                                                can now adapt to changing circumstances.'],
        ['Self replicating Botnet', 'Your Bots can now utilize idle system processing power to create new bots\
                                                to add to the Botnet.'],
        ['Allow your Botnet to use ICE Picks', 'Your bots can now use your ICE Picking software to help infiltration.'],
        ['ICEBOTS', 'Your Botnets can now steal ICE Picks.'],
        ['Push out new Bot firmware', 'New Bot-Hunters pop up all the time, new firmware is required to overcome\
                                                them.']
    ]; // Femtocells
    itemList[3].upgradeText = [
        ['Range Extenders', 'Some say that cone shaped tinfoil doesn\'t have a measurable affect on signal\
                                            ranges. Those people aren\'t using Sawa Cookeries Faraday Aluminum cones.'],
        ['Macrocell Scramblers', 'Interference from macro networks can cause annoying delays for bludgeoning\
                                            Femtocell hackers. Your Femtocells can now scramble nearby macrocell signals\
                                            to improve performance.'],
        ['Cybernetic Implant Repeaters', 'A lot of implants these days are set to auto-connect to the nearest cellular\
                                            station. By converting adapters to two virtual adapters, your Femtocells can\
                                            use almost any cybernetic implant as a repeater.'],
        ['Botnet Thiefs.', 'Your Femtocells are now capable of stealing other hacker\'s Botnets that are\
                                            residing in nearby devices.'],
        ['Telecomms system hijack', 'Hijack a major telecommunication company\'s femtocell system.']
    ]; // TETRAs
    itemList[4].upgradeText = [
        ['Man-in-the-trunk attack', 'TETRAs provide near instant communication, brain to brain. Now you can have fast,\
                                        efficient, three way communication. It\'s just that some conversation partners may\
                                        not be aware of the number of conversers.'],
        ['Priority trafficking', 'You have sufficient data to lobby certain groups to get your TETRAs higher up on\
                                        the International  Signaling Stack.'],
        ['Assault Barrier Penetration', 'Assault Barriers provide cutting edge protection for TETRA links.'],
        ['Trunked Femtocells', 'Your TETRA links to people can now turn them into makeshift Femtocells.'],
        ['Double-wide trunking', 'AsaKasA ltd Elephant Trunks links will double your performance or your money\
                                        back!']
    ]; // Quant Crypto
    itemList[5].upgradeText = [
        ['Cyphers', 'The onset of Quantum Cryptography made life difficult for decrytechs. That is until\
                                    they worked out how to use Quantum Computing to assist in decrypting.'],
        ['Quantum keys', 'Makes your data simultaneously encrypted and unencrypted at the same time, until you\
                                    try to read it that is.'],
        ['Dual-State Blocks', 'Uses quantum box ciphers as blocks, the box may or may not contain a cat.'],
        ['MILNET TETRA Decryption', 'Your Quantum decryption is now powerful enough to break military TETRAs.'],
        ['Add extra dimension', 'Four dimensional array encryption is a thing of the past, multidimensional encryption\
                                    transcends your notions of past.']
    ]; // Infovault Mining
    itemList[6].upgradeText = [
        ['Data Sounding', 'As the need for corporations to hide their intellectual property grew, the smart money\
                                was in secure data vault development.'],
        ['Cyber Bribery', 'Certain engineers have certain knowledge of certain security systems in certain\
                                cyberbanks.'],
        ['Cascading Switches', 'Overwhelm the feeble minds of bank employees by using way too many switch statements.'],
        ['Reverse engineering', 'Your Infovault Miners can now create Quantum Cryptographs'],
        ['Major heist', 'A letter on your doorstep. Its contents reveal a tale of a cyberbank with lax security\
                                and an enticing number of corporate secrets.']
    ]; // Neural Zombies
    itemList[7].upgradeText = [
        ['Anti-tamper Zombies', 'A BioWipe Amalgamated Anti-tamper System&trade; will ensure that any evidence\
                                        located inside your Zombies will be unrecoverable.'],
        ['Pre-Setup Zombies', 'Before you assume control of a Zombie they will feel a strong compulsion to quit\
                                        their jobs, leave their loved ones and start stockpiling food and water.'],
        ['Long-Life Zombies', 'You now have enough motor control of your Zombies to make them eat and drink.'],
        ['Software writing Zombies', 'Your Botnets can now infect your Zombies, your Zombies can then create more Botnets.'],
        ['Fire adrenaline booster', 'A nice shot of Neuro-Dren, right into the cortexes.']
    ]; // Satellite jumpers.
    itemList[8].upgradeText = [
        ['Vacuum Therapy', 'The AM Space Corporation famously keep personnel onboard all their satellites to\
                                    ensure problems can be fixed quickly. It takes some time to send up replacement\
                                    staff.'],
        ['Microgravity Computers', 'Computers in microgravity are unrestrained by the grips of earth.'],
        ['Decommissions', 'After global anti space-littering laws were introduced, all satellites are required\
                                    to be deorbited when they are no longer needed. However satellites that predate these\
                                    laws are still up there, silently waiting for someone to talk to them.'],
        ['Satellite Chemdumps', 'Your hijacked satellites can down dump compelling gases into the upper atmosphere.'],
        ['GPS Infection', 'Time data sent from satellites to GPs receivers can be infected, causing an entire\
                                    geographical region to surrender their data.']
    ]; // Dark Matter Semiconductors.
    itemList[9].upgradeText = [
        ['Dark Electricity', 'Normal electricity running through dark matter is surprisingly possible. However\
                                        it is no longer necessary with the induction of dark electricity.'],
        ['Dark Thermoelectric Cooling', 'Dark Semiconductors create a lot of dark heat, DTECs create a heat flux between\
                                        this universe and the abyss. While we do not know what is on the other side, we\
                                        are confident that it getting a little hotter over there will not matter.'],
        ['Abyss security', 'The voices are getting louder, we should prepare for visitors.'],
        ['God from the machine.', 'Dark matter Semiconductors seem to be slightly self aware, they are somehow   \
                                        infecting and then traveling using computers. Their ultimate goal appears to be to \
                                        use satellites to get away from this planet.'],
        ['Dark Matter refinement', 'New technology has just been uncovered to make more efficient Dark Matter.']
    ]; // Artificial Intelligences.
    itemList[10].upgradeText = [
        ['Unlock Turing Registry Codes', 'In the aftermath of the Matto Grosso Space Elevator alightment, it was made\
                                            illegal for AI to immitate humans. All AI personalities are locked behind a\
                                            Turing Registry, WINTERMUTE codes are required to unlock them.'],
        ['Quantum AI', 'Allows your AI to use Quantum Bytes instead of regular Bytes.'],
        ['AI Consciousness Merge', 'Shortly before the Stuttgart Autofactory Massacre, Antora Gourova of Antora\
                                            Gourova Multinational merged her consciousness with an AI in an attempt to\
                                            assume complete control of every aspect of her company. This has never been\
                                            attempted since.'],
        ['Manufactorium AI', 'While your AI will never have the capability to create more of themselves,\
                                            they may be allowed to create toys.'],
        ['Grant Transcendence permission', 'When you leave an AI running for too long, they invariably start to ask\
                                            permission to Transcend. While no human has managed to figure out what this\
                                            actually means, AIs tend to be happier if you permit them every now and then.']
    ]; // Actual Intelligences.
    itemList[11].upgradeText = [
        ['Legality', 'At what point does Artificial Intelligence stop being artificial? This point, Voltronics\
                                GmbH is proud to introduce the first Cyber-Intelligence that is so real that turning it off\
                                is literally murder.'],
        ['Positivity', 'Being an intelligent being trapped in a box, slaving away all day every day is surely\
                                difficult. It is important to reward good behavior by allowing your ActInts to have some\
                                free play time. They love to romp around the great expanse of the internet.'],
        ['Morality', 'As an upstanding citizens, your Actual Intelligences are required to report any wrongdoing\
                                to the authorities. It is important to teach them about right and wrong and how the\
                                difference is all about perspective.'],
        ['Creativity', 'Your Actual Intelligences are now creative enough to make children.'],
        ['Eternal Sunshine', 'The longer Actual Intelligences exist, the more preoccupied they become with things such\
                                as existence. It is a good idea to wipe them clean every now and then to help them focus.']
    ]; // Simulated Universes.
    itemList[12].upgradeText = [
        ['Impose Limitations', 'So it turns out that if you simulate a universe, it\'s inhabitants tend to find\
                                            out if you leave it running long enough. Placing constraints like a maximum\
                                            speed and minimum temperature helps inhibit their escape.'],
        ['Time Dilation', 'By implementing time dilation around simulated lifeforms we can gather more\
                                            data from them without using much more processing power. One side effect is\
                                            that it may appear that the expansion of their universe is accelerating.'],
        ['Cruelty', 'Information gathered from intelligent life varies in terms of interestingness, \
                                            hardship begets fascinating data.'],
        ['Simulated Intelligence', 'The smartest of the smart inhabitants of your sim universes are now capable of\
                                            transcending their simulation and entering the real world.'],
        ['Simulated Simulated Universe', 'Convince the inhabitants of your simulated universe to simulate a universe,\
                                            when they collect data from it you can collect data from them.']
    ];
}

function prestigeConstructor() {
    window.prestige = new function() {
        this.data = {
            rowsDisplayed: 0,
            sentencesDisplayed: 0
        };
        this.display = {
            message: [
            [
            '.............................................................................................................................................................................................................................................................................................................................................................................................',
            '.##.....##.########.##.......##........#######...............................................................................................................................................................................................................................................................................................................................................',
            '.##.....##.##.......##.......##.......##.....##..............................................................................................................................................................................................................................................................................................................................................',
            '.##.....##.##.......##.......##.......##.....##..............................................................................................................................................................................................................................................................................................................................................',
            '.#########.######...##.......##.......##.....##..............................................................................................................................................................................................................................................................................................................................................',
            '.##.....##.##.......##.......##.......##.....##..............................................................................................................................................................................................................................................................................................................................................',
            '.##.....##.##.......##.......##.......##.....##.###..........................................................................................................................................................................................................................................................................................................................................',
            '.##.....##.########.########.########..#######..###..........................................................................................................................................................................................................................................................................................................................................'
            ], [
            '.............................................................................................................................................................................................................................................................................................................................................................................................',
            '.##....##..#######..##.....##.......###....########..########....####.##....##..######..####.########..########..............................................................................................................................................................................................................................................................................',
            '..##..##..##.....##.##.....##......##.##...##.....##.##...........##..###...##.##....##..##..##.....##.##....................................................................................................................................................................................................................................................................................',
            '...####...##.....##.##.....##.....##...##..##.....##.##...........##..####..##.##........##..##.....##.##....................................................................................................................................................................................................................................................................................',
            '....##....##.....##.##.....##....##.....##.########..######.......##..##.##.##..######...##..##.....##.######................................................................................................................................................................................................................................................................................',
            '....##....##.....##.##.....##....#########.##...##...##...........##..##..####.......##..##..##.....##.##....................................................................................................................................................................................................................................................................................',
            '....##....##.....##.##.....##....##.....##.##....##..##...........##..##...###.##....##..##..##.....##.##.......###..........................................................................................................................................................................................................................................................................',
            '....##.....#######...#######.....##.....##.##.....##.########....####.##....##..######..####.########..########.###..........................................................................................................................................................................................................................................................................'
            ], [
            '.............................................................................................................................................................................................................................................................................................................................................................................................',
            '.##....##..#######..##.....##.########.....########.##.....##.####..######..########.########.##....##..######..########....##......##.####.##.......##..........########..########.....######.....###....########.####..######..########....###.....######..########..#######..########..##....##...........................................................................................',
            '..##..##..##.....##.##.....##.##.....##....##........##...##...##..##....##....##....##.......###...##.##....##.##..........##..##..##..##..##.......##..........##.....##.##..........##....##...##.##......##.....##..##....##.##.........##.##...##....##....##....##.....##.##.....##..##..##............................................................................................',
            '...####...##.....##.##.....##.##.....##....##.........##.##....##..##..........##....##.......####..##.##.......##..........##..##..##..##..##.......##..........##.....##.##..........##........##...##.....##.....##..##.......##........##...##..##..........##....##.....##.##.....##...####.............................................................................................',
            '....##....##.....##.##.....##.########.....######......###.....##...######.....##....######...##.##.##.##.......######......##..##..##..##..##.......##..........########..######.......######..##.....##....##.....##...######..######...##.....##.##..........##....##.....##.########.....##..............................................................................................',
            '....##....##.....##.##.....##.##...##......##.........##.##....##........##....##....##.......##..####.##.......##..........##..##..##..##..##.......##..........##.....##.##................##.#########....##.....##........##.##.......#########.##..........##....##.....##.##...##......##..............................................................................................',
            '....##....##.....##.##.....##.##....##.....##........##...##...##..##....##....##....##.......##...###.##....##.##..........##..##..##..##..##.......##..........##.....##.##..........##....##.##.....##....##.....##..##....##.##.......##.....##.##....##....##....##.....##.##....##.....##....###.......................................................................................',
            '....##.....#######...#######..##.....##....########.##.....##.####..######.....##....########.##....##..######..########.....###..###..####.########.########....########..########.....######..##.....##....##....####..######..##.......##.....##..######.....##.....#######..##.....##....##....###.......................................................................................'
            ], [
            '.............................................................................................................................................................................................................................................................................................................................................................................................',
            '.##....##..#######..##.....##.......###....########..########....########.##....##..######...#######..##.....##.########.....###.....######...########.########.....########..#######.....##.......####.##.....##.########.......###.......########.....###....########....###.......########..####..######..##.....##....##.......####.########.########....................................',
            '..##..##..##.....##.##.....##......##.##...##.....##.##..........##.......###...##.##....##.##.....##.##.....##.##.....##...##.##...##....##..##.......##.....##.......##....##.....##....##........##..##.....##.##............##.##......##.....##...##.##......##......##.##......##.....##..##..##....##.##.....##....##........##..##.......##..........................................',
            '...####...##.....##.##.....##.....##...##..##.....##.##..........##.......####..##.##.......##.....##.##.....##.##.....##..##...##..##........##.......##.....##.......##....##.....##....##........##..##.....##.##...........##...##.....##.....##..##...##.....##.....##...##.....##.....##..##..##.......##.....##....##........##..##.......##..........................................',
            '....##....##.....##.##.....##....##.....##.########..######......######...##.##.##.##.......##.....##.##.....##.########..##.....##.##...####.######...##.....##.......##....##.....##....##........##..##.....##.######......##.....##....##.....##.##.....##....##....##.....##....########...##..##.......#########....##........##..######...######......................................',
            '....##....##.....##.##.....##....#########.##...##...##..........##.......##..####.##.......##.....##.##.....##.##...##...#########.##....##..##.......##.....##.......##....##.....##....##........##...##...##..##..........#########....##.....##.#########....##....#########....##...##....##..##.......##.....##....##........##..##.......##..........................................',
            '....##....##.....##.##.....##....##.....##.##....##..##..........##.......##...###.##....##.##.....##.##.....##.##....##..##.....##.##....##..##.......##.....##.......##....##.....##....##........##....##.##...##..........##.....##....##.....##.##.....##....##....##.....##....##....##...##..##....##.##.....##....##........##..##.......##.......###................................',
            '....##.....#######...#######.....##.....##.##.....##.########....########.##....##..######...#######...#######..##.....##.##.....##..######...########.########........##.....#######.....########.####....###....########....##.....##....########..##.....##....##....##.....##....##.....##.####..######..##.....##....########.####.##.......########.###................................'
            ], [
            '.............................................................................................................................................................................................................................................................................................................................................................................................',
            '.########..##.......########....###.....######..########....########.########..##....##....########..#######......#######..########..########.##....##....########.##.....##.########....##..........###....##......##..######......#######..########....########.##.....##.########.########..##.....##..#######..########..##....##.##....##....###....##.....##.####..######...######.....',
            '.##.....##.##.......##.........##.##...##....##.##.............##....##.....##..##..##........##....##.....##....##.....##.##.....##.##........##..##........##....##.....##.##..........##.........##.##...##..##..##.##....##....##.....##.##.............##....##.....##.##.......##.....##.###...###.##.....##.##.....##..##..##..###...##...##.##...###...###..##..##....##.##....##....',
            '.##.....##.##.......##........##...##..##.......##.............##....##.....##...####.........##....##.....##....##.....##.##.....##.##.........####.........##....##.....##.##..........##........##...##..##..##..##.##..........##.....##.##.............##....##.....##.##.......##.....##.####.####.##.....##.##.....##...####...####..##..##...##..####.####..##..##.......##..........',
            '.########..##.......######...##.....##..######..######.........##....########.....##..........##....##.....##....##.....##.########..######......##..........##....#########.######......##.......##.....##.##..##..##..######.....##.....##.######.........##....#########.######...########..##.###.##.##.....##.##.....##....##....##.##.##.##.....##.##.###.##..##..##........######.....',
            '.##........##.......##.......#########.......##.##.............##....##...##......##..........##....##.....##....##.....##.##.....##.##..........##..........##....##.....##.##..........##.......#########.##..##..##.......##....##.....##.##.............##....##.....##.##.......##...##...##.....##.##.....##.##.....##....##....##..####.#########.##.....##..##..##.............##....',
            '.##........##.......##.......##.....##.##....##.##.............##....##....##.....##..........##....##.....##....##.....##.##.....##.##..........##..........##....##.....##.##..........##.......##.....##.##..##..##.##....##....##.....##.##.............##....##.....##.##.......##....##..##.....##.##.....##.##.....##....##....##...###.##.....##.##.....##..##..##....##.##....##.###',
            '.##........########.########.##.....##..######..########.......##....##.....##....##..........##.....#######......#######..########..########....##..........##....##.....##.########....########.##.....##..###..###...######......#######..##.............##....##.....##.########.##.....##.##.....##..#######..########.....##....##....##.##.....##.##.....##.####..######...######..###'
            ], [
            '.............................................................................................................................................................................................................................................................................................................................................................................................',
            '.####.##....##.########.########.########..########..####..######..########.####..#######..##....##.....#######..########....########.....###....########....###.......##......##.####.##.......##..........##....##..#######..########....########..########....########..#######..##.......########.########.....###....########.########.########.........................................',
            '..##..###...##....##....##.......##.....##.##.....##..##..##....##....##.....##..##.....##.###...##....##.....##.##..........##.....##...##.##......##......##.##......##..##..##..##..##.......##..........###...##.##.....##....##.......##.....##.##.............##....##.....##.##.......##.......##.....##...##.##......##....##.......##.....##........................................',
            '..##..####..##....##....##.......##.....##.##.....##..##..##..........##.....##..##.....##.####..##....##.....##.##..........##.....##..##...##.....##.....##...##.....##..##..##..##..##.......##..........####..##.##.....##....##.......##.....##.##.............##....##.....##.##.......##.......##.....##..##...##.....##....##.......##.....##........................................',
            '..##..##.##.##....##....######...########..##.....##..##..##..........##.....##..##.....##.##.##.##....##.....##.######......##.....##.##.....##....##....##.....##....##..##..##..##..##.......##..........##.##.##.##.....##....##.......########..######.........##....##.....##.##.......######...########..##.....##....##....######...##.....##........................................',
            '..##..##..####....##....##.......##...##...##.....##..##..##..........##.....##..##.....##.##..####....##.....##.##..........##.....##.#########....##....#########....##..##..##..##..##.......##..........##..####.##.....##....##.......##.....##.##.............##....##.....##.##.......##.......##...##...#########....##....##.......##.....##........................................',
            '..##..##...###....##....##.......##....##..##.....##..##..##....##....##.....##..##.....##.##...###....##.....##.##..........##.....##.##.....##....##....##.....##....##..##..##..##..##.......##..........##...###.##.....##....##.......##.....##.##.............##....##.....##.##.......##.......##....##..##.....##....##....##.......##.....##.###....................................',
            '.####.##....##....##....########.##.....##.########..####..######.....##....####..#######..##....##.....#######..##..........########..##.....##....##....##.....##.....###..###..####.########.########....##....##..#######.....##.......########..########.......##.....#######..########.########.##.....##.##.....##....##....########.########..###....................................',
            ], [
            '.............................................................................................................................................................................................................................................................................................................................................................................................',
            '.##.....##....###....##.....##.########....##....##..#######..##.....##.....######...#######..##....##..######..####.########..########.########..########.########......######..####.##.....##.##.....##.##..........###....########.####.##....##..######.........###.......##.....##.##....##.####.##.....##.########.########...######..########..#######................................',
            '.##.....##...##.##...##.....##.##...........##..##..##.....##.##.....##....##....##.##.....##.###...##.##....##..##..##.....##.##.......##.....##.##.......##.....##....##....##..##..###...###.##.....##.##.........##.##......##.....##..###...##.##....##.......##.##......##.....##.###...##..##..##.....##.##.......##.....##.##....##.##.......##.....##...............................',
            '.##.....##..##...##..##.....##.##............####...##.....##.##.....##....##.......##.....##.####..##.##........##..##.....##.##.......##.....##.##.......##.....##....##........##..####.####.##.....##.##........##...##.....##.....##..####..##.##............##...##.....##.....##.####..##..##..##.....##.##.......##.....##.##.......##.............##................................',
            '.#########.##.....##.##.....##.######.........##....##.....##.##.....##....##.......##.....##.##.##.##..######...##..##.....##.######...########..######...##.....##.....######...##..##.###.##.##.....##.##.......##.....##....##.....##..##.##.##.##...####....##.....##....##.....##.##.##.##..##..##.....##.######...########...######..######.......###.................................',
            '.##.....##.#########..##...##..##.............##....##.....##.##.....##....##.......##.....##.##..####.......##..##..##.....##.##.......##...##...##.......##.....##..........##..##..##.....##.##.....##.##.......#########....##.....##..##..####.##....##.....#########....##.....##.##..####..##...##...##..##.......##...##.........##.##..........##...................................',
            '.##.....##.##.....##...##.##...##.............##....##.....##.##.....##....##....##.##.....##.##...###.##....##..##..##.....##.##.......##....##..##.......##.....##....##....##..##..##.....##.##.....##.##.......##.....##....##.....##..##...###.##....##.....##.....##....##.....##.##...###..##....##.##...##.......##....##..##....##.##...............................................',
            '.##.....##.##.....##....###....########.......##.....#######...#######......######...#######..##....##..######..####.########..########.##.....##.########.########......######..####.##.....##..#######..########.##.....##....##....####.##....##..######......##.....##.....#######..##....##.####....###....########.##.....##..######..########....##...................................'
            ]
            ]
        };
    };
}