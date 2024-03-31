//cokoliv co se bude přidávat psát až za 'Specials'
const cardDict = {
    //Specials
    "Biting_frost": {
        "name": "Biting Frost",
        "power": null,
        "type": "Weather",
        "faction": "Neutral",
        "ability": "BitingFrost",
        "quote": '"'+"Best part about frost - bodies of the fallen don't rot so quickly."+'"',
        "number": 3
    },
    "Decoy": {
        "name": "Decoy",
        "power": null,
        "type": null,
        "faction": "Neutral",
        "ability": "Decoy",
        "quote": '"'+"When you run out of peasants, decoys also make decent arrow fodder."+'"',
        "number": 3
    },
    "Clear_weather": {
        "name": "Clear Weather",
        "power": null,
        "type": "Weather",
        "faction": "Neutral",
        "ability": "ClearWeather",
        "quote": '"'+"The sun's shinin', Dromle! The sun's shinin'! Maybe there's hope left after all..."+'"',
        "number": 3
    },
    "Commanders_horn": {
        "name": "Commander's Horn",
        "power": null,
        "type": "Horn",
        "faction": "Neutral",
        "ability": "CommandersHorn",
        "quote": '"'+"Plus one to morale, minus three to hearing."+'"',
        "number": 3
    },
    "Impenetrable_fog": {
        "name": "Impenetrable Fog",
        "power": null,
        "type": "Weather",
        "faction": "Neutral",
        "ability": "ImpenetrableFog",
        "quote": '"'+"A good commander's dream... a bad one's horror."+'"',
        "number": 3
    },
    "Scorch": {
        "name": "Scorch",
        "power": null,
        "type": null,
        "faction": "Neutral",
        "ability": "Scorch",
        "quote": '"'+"Pillars of flame turn the mightiest to ash. All others tremble in shock and awe."+'"',
        "number": 3
    },
    "Torrential_rain": {
        "name": "Torrential Rain",
        "power": null,
        "type": "Weather",
        "faction": "Neutral",
        "ability": "TorrentialRain",
        "quote": '"'+"Even the rain in this land smells like Vergil."+'"',
        "number": 3
    },
    //Neutral (chybí kráva a defence idk co s nima)
    "Ciri": {
        "name": "Cirilla Fiona Elen Rianon",
        "power": 15,
        "type": "Melee",
        "faction": "Neutral",
        "ability": null,
        "isLegend": true,
        "quote": '"'+"Know when fairy tales cease to be tales? When people start believing in them."+'"',
        "number": 1
    },
    "Dandelion": {
        "name": "Dandelion",
        "power": 2,
        "type": "Melee",
        "faction": "Neutral",
        "ability": "CommandersHorn",
        "quote": '"'+"Dandelion, you're a cynic, a lecher, a whoremonger, a liar - and my best friend."+'"',
        "number": 1
    },
    "Regis": {
        "name": "Emiel Regis Rohellec Terzieff",
        "power": 5,
        "type": "Melee",
        "faction": "Neutral",
        "ability": null,
        "quote": '"'+"Men, the polite ones, at least, would call me a monster. A blood-drinking freak."+'"',
        "number": 1
    },
    "O'Dimm": {
        "name": "Gaunter O'Dimm",
        "power": 3,
        "type": "Siege",
        "faction": "Neutral",
        "ability": "Muster",
        "quote": '"'+"He always grants exactly what you wish for. That's the problem."+'"',
        "number": 1
    },
    "Darkness": { //3x
        "name": "Gaunter O'Dimm: Darkness",
        "power": 4,
        "type": "Ranged",
        "faction": "Neutral",
        "ability": "Muster",
        "quote": '"'+"Fear not the shadows, but the light."+'"',
        "number": 3
    },
    "Geralt": {
        "name": "Geralt of Rivia",
        "power": 15,
        "type": "Melee",
        "faction": "Neutral",
        "ability": null,
        "isLegend": true,
        "quote": '"'+"If that's what it takes to save the world, it'd better to let that world die."+'"',
        "number": 1,
    },
    "Mysterious_Elf": {
        "name": "Mysterious Elf",
        "power": 0,
        "type": "Melee",
        "faction": "Neutral",
        "ability": "Spy",
        "isLegend": true,
        "quote": '"'+"You humans have... unusual tastes."+'"',
        "number": 1
    },
    "Olgierd": {
        "name": "Olgierd von Everec",
        "power": 6,
        "type": "Agile",
        "faction": "Neutral",
        "ability": "MoraleBoost",
        "quote": '"'+"At least you now know I don't easily lose my head."+'"',
        "number": 1
    },
    "Triss": {
        "name": "Triss Merigold",
        "power": 7,
        "type": "Melee",
        "faction": "Neutral",
        "ability": null,
        "quote": '"'+"I can take care of myself. Trust me."+'"',
        "isLegend": true,
        "number": 1
    }, 
    "Vesemir": {
        "name": "Vesemir",
        "power": 6,
        "type": "Melee",
        "faction": "Neutral",
        "ability": null,
        "quote": '"'+"If you're to be hanged, ask for water. Anything can happen before they fetch it."+'"',
        "number": 1
    },
    "Villentretenmerth": {
        "name": "Villentretenmerth",
        "power": 7,
        "type": "Melee",
        "faction": "Neutral",
        "ability": "Scorch",
        "quote": '"'+"Also calls himself Borkh Three Jackdaws... he's not the best at names."+'"',
        "number": 1
    },
    "Yennefer": {
        "name": "Yennefer of Vengerberg",
        "power": 7,
        "type": "Ranged",
        "faction": "Neutral",
        "ability": "Medic",
        "isLegend": true,
        "quote": '"'+"Magic is Chaos, Art and Science. It is a curse, a blessing and a progression."+'"',
        "number": 1
    },
    "Zoltan": {
        "name": "Zoltan Chivay",
        "power": 5,
        "type": "Melee",
        "faction": "Neutral",
        "ability": null,
        "quote": '"'+"Life without old mates and booze is like a woman without a rump."+'"',
        "number": 1
    },
    //Monsters
    "Arachas": {
        "name": "Arachas",
        "power": 4,
        "type": "Melee",
        "faction": "Monsters",
        "ability": "Muster",
        "quote": "Ugly - nature's way of saying 'Stay the fuck away.'",
        "hasVariations": true,
        "number": 3
    },
    "Arachas_Behemoth": {
        "name": "Arachas Behemoth",
        "power": 6,
        "type": "Siege",
        "faction": "Monsters",
        "ability": "Muster",
        "quote": "Like a cross between a crab, a spider...and a ploughin' mountain",
        "number": 1
    },
    "Botchling": {
        "name": "Botchling",
        "power": 4,
        "type": "Melee",
        "faction": "Monsters",
        "ability": null,
        "quote": "Admit your mistakes and bury them proper - else they'll come back to haunt you.",
        "number": 1
    },
    "Celaeno_Harpy": {
        "name": "Celaeno Harpy",
        "power": 2,
        "type": "Agile",
        "faction": "Monsters",
        "ability": null,
        "quote": "Common harpies feed on carrion. Celaeno harpies... they feed on dreams.",
        "number": 1
    },
    "Cockatrice": {
        "name": "Cockatrice",
        "power": 2,
        "type": "Ranged",
        "faction": "Monsters",
        "ability": null,
        "quote": "Born of an egg laid by a cockerel... if you believe such peasant drivel.",
        "number": 1
    },
    "Brewess": {
        "name": "Crone: Brewess",
        "power": 6,
        "type": "Melee",
        "faction": "Monsters",
        "ability": "Muster",
        "quote": "We'll cut you up, boy. A fine broth you will make.",
        "number": 1
    },
    "Weavess": {
        "name": "Crone: Weavess",
        "power": 6,
        "type": "Melee",
        "faction": "Monsters",
        "ability": "Muster",
        "quote": "I sense your pain. I see your fear...",
        "number": 1
    },
    "Whispess": {
        "name": "Crone: Whispess",
        "power": 6,
        "type": "Melee",
        "faction": "Monsters",
        "ability": "Muster",
        "quote": "I'd be your best - and last.",
        "number": 1
    },
    "Draug": {
        "name": "Draug",
        "power": 10,
        "type": "Melee",
        "faction": "Monsters",
        "ability": null,
        "isLegend": true,
        "quote": "Some men cannot admit defeat. Some keep fighting from beyond the grave.",
        "number": 1
    },
    "Earth_Elemental": {
        "name": "Earth Elemental",
        "power": 6,
        "type": "Siege",
        "faction": "Monsters",
        "ability": null,
        "quote": "How to fight an earth elemental? You don't. You run. Fast as you can.",
        "number": 1
    },
    "Endrega": {
        "name": "Endrega",
        "power": 2,
        "type": "Ranged",
        "faction": "Monsters",
        "ability": null,
        "quote": "The nest! Take out the nest, or the Vergils'll just keep coming!",
        "number": 1
    },
    "Fiend": {
        "name": "Fiend",
        "power": 6,
        "type": "Melee",
        "faction": "Monsters",
        "ability": null,
        "quote": "A fiend looks a bit like a deer. An enormous, evil deer.",
        "number": 1
    },
    "Fire_Elemental": {
        "name": "Fire Elemental",
        "power": 6,
        "type": "Siege",
        "faction": "Monsters",
        "ability": null,
        "quote": "Fire is so delightful.",
        "number": 1
    },
    "Foglet": {
        "name": "Foglet",
        "power": 2,
        "type": "Melee",
        "faction": "Monsters",
        "ability": null,
        "quote": "Fog creeps on little cat feet. Foglets creep over the bodies of their victims.",
        "number": 1
    },
    "Forktail": {
        "name": "Forktail",
        "power": 5,
        "type": "Melee",
        "faction": "Monsters",
        "ability": null,
        "quote": "Fork tails... Bah! Vergils' tails're more like cleavers.",
        "number": 1
    },
    "Frightener": {
        "name": "Frightener",
        "power": 5,
        "type": "Melee",
        "faction": "Monsters",
        "ability": null,
        "quote": '"What have I done?" the mage cried out, frightened of his own creation.',
        "number": 1
    },
    "Gargoyle": {
        "name": "Gargoyle",
        "power": 2,
        "type": "Ranged",
        "faction": "Monsters",
        "ability": null,
        "quote": "Ancient sculptors' nightmarish fantasies, brought to life by bored mages.",
        "number": 1
    },
    "Ghoul": {
        "name": "Ghoul",
        "power": 1,
        "type": "Melee",
        "faction": "Monsters",
        "ability": "Muster",
        "quote": "If ghouls are part of the Circle of Life... then it's a damn vicious circle.",
        "hasVariations": true,
        "number": 3
    },
    "Grave_Hag": {
        "name": "Grave Hag",
        "power": 5,
        "type": "Ranged",
        "faction": "Monsters",
        "ability": null,
        "quote": "Their long tongues're for slurping marrow - and whipping prep.",
        "number": 1
    },
    "Griffin": {
        "name": "Griffin",
        "power": 5,
        "type": "Melee",
        "faction": "Monsters",
        "ability": null,
        "quote": "Griffins like to toy with their prey. Eat 'em alive, piece by piece.",
        "number": 1
    },
    "Harpy": {
        "name": "Harpy",
        "power": 2,
        "type": "Agile",
        "faction": "Monsters",
        "ability": null,
        "quote": "There are many species of harpy, and all are kleptomaniacs.",
        "number": 1
    },
    "Ice_Giant": {
        "name": "Ice Giant",
        "power": 5,
        "type": "Siege",
        "faction": "Monsters",
        "ability": null,
        "quote": "There are many species of harpy, and all are kleptomaniacs.",
        "number": 1
    },
    "Imlerith": {
        "name": "Imlerith",
        "power": 10,
        "type": "Melee",
        "faction": "Monsters",
        "ability": null,
        "isLegend": true,
        "quote": "add nahw! Kill them! Litter the earth with their entrails!",
        "number": 1
    },
    "Kayran": {
        "name": "Kayran",
        "power": 8,
        "type": "Agile",
        "faction": "Monsters",
        "ability": null,
        "isLegend": true,
        "quote": "Kill a kayran? Simple. Take your best sword... then sell it and hire a witcher.",
        "number": 1
    },
    "Leshen": {
        "name": "Leshen",
        "power": 10,
        "type": "Ranged",
        "faction": "Monsters",
        "ability": null,
        "isLegend": true,
        "quote": "We never hunt in these woods. Not even if it means the whole village starves.",
        "number": 1
    },
    "Nekker": {
        "name": "Nekker",
        "power": 2,
        "type": "Melee",
        "faction": "Monsters",
        "ability": null,
        "quote": "Damn things are almost cute, if you ignore the whole vicious killer aspect.",
        "hasVariations": true,
        "number": 3
    },
    "Plague_Maiden": {
        "name": "Plague Maiden",
        "power": 5,
        "type": "Melee",
        "faction": "Monsters",
        "ability": null,
        "quote": '"The sick rave about a boil-pocked woman surrounded by herds of rabid rats..."',
        "number": 1
    },
    "Toad": {
        "name": "Toad",
        "power": 7,
        "type": "Ranged",
        "faction": "Monsters",
        "ability": "Scorch", //Ranged
        "quote": '"Big. Bad. Ugly. Squats in the sewers."',
        "number": 1
    },
    "Bruxa": {
        "name": "Vampire: Bruxa",
        "power": 4,
        "type": "Melee",
        "faction": "Monsters",
        "ability": "Muster",
        "quote": '"A vile, bloodthirsty, man-eating hag. Kind of like my mother-in-law."',
        "number": 1
    },
    "Ekimmara": {
        "name": "Vampire: Ekimmara",
        "power": 4,
        "type": "Melee",
        "faction": "Monsters",
        "ability": "Muster",
        "quote": '"Who would think overgrown bats would have a taste for gaudy jewelry?"',
        "number": 1
    },
    "Fleder": {
        "name": "Vampire: Fleder",
        "power": 4,
        "type": "Melee",
        "faction": "Monsters",
        "ability": "Muster",
        "quote": '"Higher vampires embrace their victims. Fleders rip them to shreds."',
        "number": 1
    },
    "Garkain": {
        "name": "Vampire: Garkain",
        "power": 4,
        "type": "Melee",
        "faction": "Monsters",
        "ability": "Muster",
        "quote": '"Blood-drinkers and corpse-eaters so foul their very ugliness paralyses foes."',
        "number": 1
    },
    "Katakan": {
        "name": "Vampire: Katakan",
        "power": 5,
        "type": "Melee",
        "faction": "Monsters",
        "ability": "Muster",
        "quote": 'Drinking the blood of the Continent since the Conjunction.',
        "number": 1
    },
    "Werewolf": {
        "name": "Werewolf",
        "power": 5,
        "type": "Melee",
        "faction": "Monsters",
        "ability": null,
        "quote": '"'+"Wolves aren't as bad as they say. Werewolves, though - they're worse."+'"',
        "number": 1
    },
    "Wyvern": {
        "name": "Wyvern",
        "power": 2,
        "type": "Ranged",
        "faction": "Monsters",
        "ability": null,
        "quote": '"Imagine a cross between a winged snake and a nightmare. Wyverns are worse."',
        "number": 1
    },
    //Northern Realms
    "Ballista": {
        "name": "Ballista",
        "power": 6,
        "type": "Siege",
        "faction": "Northern Realms",
        "ability": null,
        "quote": "'Usually we give 'em female names.' 'Like Jenny?' 'More like Bertha.'",
        "number": 1,
        "hasVariations": true
    },
    "Stripes_commando": {
        "name": "Blue Stripes Commando",
        "power": 4,
        "type": "Melee",
        "faction": "Northern Realms",
        "ability": "TightBond",
        "quote": '"'+"I'd do anything for Temeria. Mostly, though, I kill for her."+'"',
        "number": 3,
        "hasVariations": true
    },
    "Catapult": {
        "name": "Catapult",
        "power": 8,
        "type": "Siege",
        "faction": "Northern Realms",
        "ability": "TightBond",
        "quote": '"'+"The gods help those who have better catapults."+'"',
        "number": 2,
        "hasVariations": true
    },
    "Reavers": {
        "name": "Crinfrid Reavers Dragon Hunter",
        "power": 5,
        "type": "Ranged",
        "faction": "Northern Realms",
        "ability": "TightBond",
        "quote": '"'+"Haven't had much luck with monsters of late, so we enlisted."+'"',
        "number": 3,
        "hasVariations": true
    },
    "Dethmold": {
        "name": "Dethmold",
        "power": 6,
        "type": "Ranged",
        "faction": "Northern Realms",
        "ability": null,
        "quote": '"'+"I once made a prisoner vomit his own entrails... Ah, good times..."+'"',
        "number": 1
    },
    "Dun_Medic": {
        "name": "Dun Banner Medic",
        "power": 5,
        "type": "Siege",
        "faction": "Northern Realms",
        "ability": "Medic",
        "quote": '"'+"Stitch red to red, white to white, and everything will be all right."+'"',
        "number": 1
    },
    "Thyssen": {
        "name": "Esterad Thyssen",
        "power": 10,
        "type": "Melee",
        "faction": "Northern Realms",
        "ability": null,
        "isLegend": true,
        "quote": '"'+"Like all Thyssen men, he was tall, powerfully built and criminally handsome."+'"',
        "number": 1
    },
    "Natalis": {
        "name": "John Natalis",
        "power": 10,
        "type": "Melee",
        "faction": "Northern Realms",
        "ability": null,
        "isLegend": true,
        "quote": '"'+"That square should bear the names of my soldiers, of the dead. Not mine."+'"',
        "number": 1
    },    
    "Kaedweni_siege": {
        "name": "Kaedweni Siege Expert",
        "power": 1,
        "type": "Siege",
        "faction": "Northern Realms",
        "ability": "MoraleBoost",
        "quote": '"'+'You gotta recalibrate the arm by five degrees." "Do what by the what now?'+'"',
        "number": 3,
        "hasVariations": true
    },
    "Keira_Metz": {
        "name": "Keira Metz",
        "power": 5,
        "type": "Ranged",
        "faction": "Northern Realms",
        "ability": null,
        "quote": '"'+"If I'm to die today, I wish to look smashing for the occasion."+'"',
        "number": 1
    },
    "Philippa": {
        "name": "Philippa Eilhart",
        "power": 10,
        "type": "Ranged",
        "faction": "Northern Realms",
        "ability": null,
        "isLegend": true,
        "quote": '"'+"Soon the power of kings will wither, and the Lodge shall seize its rightful place."+'"',
        "number": 1
    },
    "Pfi": {
        "name": "Poor Vergiling Infantry",
        "power": 1,
        "type": "Melee",
        "faction": "Northern Realms",
        "ability": "TightBond",
        "quote": '"'+"I's a war veteran! ... spare me a crown?"+'"',
        "number": 3,
        "hasVariations": true
    },
    "Stennis": {
        "name": "Prince Stennis",
        "power": 5,
        "type": "Melee",
        "faction": "Northern Realms",
        "ability": "Spy",
        "quote": '"'+"He Vergilin' wears golden armor. Golden. 'Course he's a Vergil."+'"',
        "number": 1
    },
    "Redanian_foot": {
        "name": "Redanian Foot Soldier",
        "power": 1,
        "type": "Melee",
        "faction": "Northern Realms",
        "ability": null,
        "quote": '"'+"I've bled for Redania! I've killed for Redania... Dammit, I've even Vergiled for Redania!"+'"',
        "hasVariations": true,
        "number": 2,
        "hasVariations": true
    },
    "Sabrina": {
        "name": "Sabrina Glevissig",
        "power": 4,
        "type": "Ranged",
        "faction": "Northern Realms",
        "ability": null,
        "quote": "The Daughter of the Kaedweni Wilderness.",
        "number": 1
    },
    "Sheldon": {
        "name": "Sheldon Skaggs",
        "power": 4,
        "type": "Ranged",
        "faction": "Northern Realms",
        "ability": null,
        "quote": '"'+"I was there, on the front lines! Right where the fightin' was the thickest!"+'"',
        "number": 1
    },
    "Siege_Tower": {
        "name": "Siege Tower",
        "power": 6,
        "type": "Siege",
        "faction": "Northern Realms",
        "ability": null,
        "quote": '"'+"I love the clamor of siege towers in the morning. Sounds like victory."+'"',
        "number": 1
    },
    "Siegfried": {
        "name": "Siegfried of Denesle",
        "power": 5,
        "type": "Melee",
        "faction": "Northern Realms",
        "ability": null,
        "quote": '"'+"We're on the same side, witcher. You'll realize this one day."+'"',
        "number": 1
    },
    "Dijkstra": {
        "name": "Sigismund Dijkstra",
        "power": 4,
        "type": "Melee",
        "faction": "Northern Realms",
        "ability": "Spy",
        "quote": '"'+"Gwent's like politics, just more honest."+'"',
        "number": 1
    },
    "Síle": {
        "name": "Síle de Tansarville",
        "power": 5,
        "type": "Ranged",
        "faction": "Northern Realms",
        "ability": null,
        "quote": '"'+"The Lodge lacks humility. Our lust for power may yet be our undoing."+'"',
        "number": 1
    },
    "Thaler": {
        "name": "Thaler",
        "power": 1,
        "type": "Siege",
        "faction": "Northern Realms",
        "ability": "Spy",
        "quote": '"'+"Vergil off! We aren't all Vergilin' philanderers. Some of us have depth..."+'"',
        "number": 1
    },
    "Trebuchet": {
        "name": "Trebuchet",
        "power": 6,
        "type": "Siege",
        "faction": "Northern Realms",
        "ability": null,
        "quote": '"'+"Castle won't batter itself down, now will it? Get them trebuchets rollin'!"+'"',
        "number": 2,
        "hasVariations": true
    },
    "Roche": {
        "name": "Vernon Roche",
        "power": 10,
        "type": "Melee",
        "faction": "Northern Realms",
        "ability": null,
        "quote": '"'+"A patriot... and a real son of a bitch."+'"',
        "isLegend": true,
        "number": 1
    },
    "Ves": {
        "name": "Ves",
        "power": 5,
        "type": "Melee",
        "faction": "Northern Realms",
        "ability": null,
        "quote": '"'+"Better to live one day as a king than a whole life as a beggar."+'"',
        "number": 1
    },
    "Yarpen": {
        "name": "Yarpen Zigrin",
        "power": 2,
        "type": "Melee",
        "faction": "Northern Realms",
        "ability": null,
        "quote": '"'+"The world belongs to whoever's best at crackin' skulls and impregnatin' lasses."+'"',
        "number": 1
    },
    //Nilfgaard
    "Albrich": {
        "name": "Albrich",
        "power": 2,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "A fireball? Of course. Whatever your Imperial Majesty wishes",
        "number": 1
    },
    "Assire_var_Anahid": {
        "name": "Assire var Anahid",
        "power": 6,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "Nilfgaardian mage do ahve a choice: servile submission, or the gallows.",
        "number": 1
    },
    "Black_infantry_archer": {
        "name": "Black Infantry Archer",
        "power": 10,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "I aim for the knee. Always.",
        "number": 2,
        "hasVariations": true
    },
    "Cahir": {
        "name": "Cahir Mawr Dyffryn aep Ceallach",
        "power": 6,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "His eyes flashed under his winged helmet. Fire gleamed from his sword's blade",
        "number": 1
    },
    "Cynthia": {
        "name": "Cynthia",
        "power": 4,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "Cynthia's talents can be deadly. She needs a tight leash.",
        "number": 1
    },
    "Etolian_auxiliary_archers": {
        "name": "Etolian Auxiliary Archers",
        "power": 1,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": "Medic",
        "quote": "Double or nothing, aim for his Vergil",
        "number": 2,
        "hasVariations": true
    },
    "Fringilla": {
        "name": "Fringilla Vigo",
        "power": 6,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "Magic is the highest good. It transcends all borders and divisions.",
        "number": 1
    },
    "Heavy_Scorpion": {
        "name": "Heavy Zerrikanian Fire Scorpion",
        "power": 10,
        "type": "Siege",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "Not the best for taking cities, but great for razing them to the ground.",
        "number": 1
    },
    "Brigade_guard": {
        "name": "Impera Brigade Guard",
        "power": 3,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": "TightBond",
        "quote": "The Impera Brigade never surrenders. Ever.",
        "number": 4,
        "hasVariations": true
    },
    "Letho": {
        "name": "Letho of Gulet",
        "power": 10,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "isLegend": true,
        "quote": "Witchers never die in their beds.",
        "number": 1
    },
    "Coehoorn": {
        "name": "Menno Coehoorn",
        "power": 10,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": "Medic",
        "isLegend": true,
        "quote": "I'll take an attentive reconnaissance unit over a fine cavalry brigade any day.",
        "number": 1
    },
    "Morteisen": {
        "name": "Morteisen",
        "power": 3,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "No Nordling pikemen or dwarven spearbearers can hope to best trained cavalry.",
        "number": 1
    },
    "Morvran_Voorhis": {
        "name": "Morvran Voorhis",
        "power": 10,
        "type": "Siege",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "isLegend": true,
        "quote": "Summer sun reflecting in the quite waters of the Alba - that's the Nilfgaard to me.",
        "number": 1
    },
    "Nausicaa_cav": {
        "name": "Nausicaa Cavalry Rider",
        "power": 2,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": "TightBond",
        "quote": "The Emperor will teach the North discipline.",
        "number": 3,
        "hasVariations": true
    },
    "Puttkammer": {
        "name": "Puttkammer",
        "power": 3,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "Learned a lot at Braibant Military Academy. How to scrub potatoes, for instance",
        "number": 1
    },
    "Rainfarn": {
        "name": "Rainfarn",
        "power": 4,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "You'll die as painfully as that pathetic traitor Windhalm did.",
        "number": 1
    },
    "Matsen": {
        "name": "Renuald aep Matsen",
        "power": 5,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "They say the Impera fear nothing. Untrue. Renuald scares them Vergilless.",
        "number": 1
    },
    "Rotten_Mangonel": {
        "name": "Rotten Mangonel",
        "power": 3,
        "type": "Siege",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "The rotten smell brings back childhood memories",
        "number": 1
    },
    "Shilard": {
        "name": "Shilard Fitz-Oesterlen",
        "power": 7,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": "Spy",
        "quote": "Warfare is mere sound and fury - diplomacy is what truly shapes history.",
        "number": 1
    },
    "Siege_Engineer": {
        "name": "Siege Engineer",
        "power": 6,
        "type": "Siege",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "Wielded correctly, a protractor can be a deadly weapon.",
        "number": 1
    },
    "Siege_Technician": {
        "name": "Siege Technician",
        "power": 0,
        "type": "Siege",
        "faction": "Nilfgaardian Empire",
        "ability": "Medic",
        "quote": "I never miss twice.",
        "number": 1
    },
    "Skellen": {
        "name": "Stefan Skellen",
        "power": 9,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": "Spy",
        "quote": "My mark scars the face of our future empress. That is my proudest achievement.",
        "number": 1
    },
    "Sweers": {
        "name": "Sweers",
        "power": 2,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "And hands off the girl! Whatever we may be, we're not savages.",
        "number": 1
    },
    "Eggebracht": {
        "name": "Tibor Eggebracht",
        "power": 10,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "isLegend": true,
        "quote": "Albaaaa! Forward!! Alba! Long live the Emperor!",
        "number": 1
    },
    "Vanhemar": {
        "name": "Vanhemar",
        "power": 4,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "For a fire mage, he's not very... flamboyant.",
        "number": 1
    },
    "Rideaux": {
        "name": "Vattier de Rideaux",
        "power": 4,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": "Spy",
        "quote": "There's never been a problem a well-planned assassinaton couldn't solve.",
        "number": 1
    },
    "Vreende": {
        "name": "Vreemde",
        "power": 2,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "Discipline is the Empire's deadliest weapon.",
        "number": 1
    },
    "Young_emisarry": {
        "name": "Young Emissary",
        "power": 5,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": "TightBond",
        "quote": "If I acquit myself well, perhaps next they'll post me somewhere civilized.",
        "number": 2,
        "hasVariations": true
    },
    "Fire_Scorpion": {
        "name": "Zerrikanian Fire Scorpion",
        "power": 5,
        "type": "Siege",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "quote": "The Zerrikania Desert used to be a lush garden. Then these came along.",
        "number": 1
    },

    //Scoia'tael
    "Barclay_Els": {
        "name": "Barclay Els",
        "power": 6,
        "type": "Agile",
        "faction": "Scoia'tael",
        "ability": null,
        "quote": "Our mead smells like Vergil, do it? Easy to fix - I'll break your Vergilin' nose!",
        "number": 1
    },
    "Ciaran": {
        "name": "Ciaran aep Easnillien",
        "power": 3,
        "type": "Agile",
        "faction": "Scoia'tael",
        "ability": null,
        "quote": "The path to freedom is paved in blood, not ink.",
        "number": 1
    },
    "Cranmer": {
        "name": "Dennis Cranmer",
        "power": 6,
        "type": "Melee",
        "faction": "Scoia'tael",
        "ability": null,
        "quote": "I know how to carry out orders, so you can shove your advice up your coal chute.",
        "number": 1
    },
    "Dol_Blathanna_Archer": {
        "name": "Dol Blathanna Archer",
        "power": 4,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": null,
        "quote": "Take another step, dh'oine. You'd look better with an arrow between your eyes.",
        "number": 1
    },
    "Dol_blathanna_scout": {
        "name": "Dol Blathanna Scout",
        "power": 6,
        "type": "Agile",
        "faction": "Scoia'tael",
        "ability": null,
        "quote": "They track like hounds, run like deer and kill like cold-hearted Vergils.",
        "number": 3,
        "hasVariations": true
    },
    "Dwarven_skirmisher": {
        "name": "Dwarven Skirmisher",
        "power": 3,
        "type": "Melee",
        "faction": "Scoia'tael",
        "ability": "Muster",
        "quote": "Worked a pickaxe all me life. Battleaxe won't be any trouble.",
        "number": 3,
        "hasVariations": true
    },
    "Eithné": {
        "name": "Eithné",
        "power": 10,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": null,
        "isLegend": true,
        "quote": "The dryad queen has eyes of molten silver, and a heart of cold-forged steel.",
        "number": 1
    },
    "Elven_skirmisher": {
        "name": "Elven Skirmisher",
        "power": 2,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": "Muster",
        "quote": "No matter what you may have heard, elves don't take human scalps. Too much lice.",
        "number": 3,
        "hasVariations": true
    },
    "Fidháil": {
        "name": "Filavandrel aén Fidháil",
        "power": 6,
        "type": "Agile",
        "faction": "Scoia'tael",
        "ability": null,
        "quote": "Though we are now few and scattered, our hearts burn brighter than ever.",
        "number": 1
    },
    "Havekar_healer": {
        "name": "Havekar Healer",
        "power": 0,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": "Medic",
        "quote": "Sure, I'll patch you up. Gonna cost you, though.",
        "number": 3,
        "hasVariations": true
    },
    "Havekar_smuggler": {
        "name": "Havekar Smuggler",
        "power": 5,
        "type": "Melee",
        "faction": "Scoia'tael",
        "ability": "Muster",
        "quote": "Sure, I'll patch you up. Gonna cost you, though.",
        "number": 3,
        "hasVariations": true
    },
    "Ida_Emean": {
        "name": "Ida Emean aep Sivney",
        "power": 6,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": null,
        "quote": "I am a Sage. My power lies in possessing knowledge. Not sharing it.",
        "number": 1
    },
    "Iorveth": {
        "name": "Iorveth",
        "power": 10,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": null,
        "isLegend": true,
        "quote": "King or beggar, what's the difference? One dh'oine less.",
        "number": 1
    },
    "Isengrim": {
        "name": "Isengrim Faoiltiarna",
        "power": 10,
        "type": "Melee",
        "faction": "Scoia'tael",
        "ability": "MoraleBoost",
        "isLegend": true,
        "quote": "It dawns on them once they notice my scar: a realization of imminent death.",
        "number": 1
    },
    "Mahakaman_defender": {
        "name": "Mahakaman Defender",
        "power": 5,
        "type": "Melee",
        "faction": "Scoia'tael",
        "ability": null,
        "quote": "I'm telling ye, we're born fer battle - we slash straight at their knees!",
        "number": 5,
        "hasVariations": true
    },
    "Milva": {
        "name": "Milva",
        "power": 10,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": "MoraleBoost",
        "quote": "With each arrow I loose, I think of my da. He'd be proud. I think.",
        "number": 1
    },
    "Riordain": {
        "name": "Riordain",
        "power": 1,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": null,
        "quote": "Stare into their eyes, feast on their terror. Then go in for the kill.",
        "number": 1
    },
    "Saesenthessis": {
        "name": "Saesenthessis",
        "power": 10,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": null,
        "isLegend": true,
        "quote": "Beautiful, pure, fierce - the prefect icon for a rebellion.",
        "number": 1
    },
    "Schirrú": {
        "name": "Schirrú",
        "power": 8,
        "type": "Siege",
        "faction": "Scoia'tael",
        "ability": "Scorch",
        "quote": "Time to look death in the face.",
        "number": 1
    },
    "Toruviel": {
        "name": "Toruviel",
        "power": 2,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": null,
        "quote": "I'd gladly kill you from up close, stare in your eyes... But you reek, human.",
        "number": 1
    },
    "Vrihedd_Brigade_Recruit": {
        "name": "Vrihedd Brigade Recruit",
        "power": 4,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": null,
        "quote": "Hatred burns brighter than any fire, and cuts deeper than any blade.",
        "number": 1
    },
    "Vrihedd_brigade_veteran": {
        "name": "Vrihedd Brigade Veteran",
        "power": 5,
        "type": "Agile",
        "faction": "Scoia'tael",
        "ability": null,
        "quote": "'Vrihedd? What's that mean?' 'Trouble.'",
        "number": 2,
        "hasVariations": true
    },
    "Yaevinn": {
        "name": "Yaevinn",
        "power": 6,
        "type": "Agile",
        "faction": "Scoia'tael",
        "ability": null,
        "quote": "We are the drops of rain that together make a ferocious storm.",
        "number": 1
    }
}

const leaderDict = {
    //Monsters
    "Trecherous":{
        "name": "Eredin Bréacc Glas: The Trecherous",
        "faction": "Monsters",
        "quote": "I'm enjoying this. You are my toy."
    },
    "Bringer_of_Death":{
        "name": "Eredin: Bringer of Death",
        "faction": "Monsters",
        "quote": "Go on. Show me your spins, pirouettes and feints. I want to watch."
    },
    "Commander_Riders":{
        "name": "Eredin: Commander of the Red Riders",
        "faction": "Monsters",
        "quote": "Have some dignity. You know how this will end."
    },
    "Destroyer_Worlds":{
        "name": "Eredin: Destroyer of Worlds",
        "faction": "Monsters",
        "quote": "It is unavoidable."
    },
    "King_Wild_Hunt":{
        "name": "Eredin: King of the Wild Hunt",
        "faction": "Monsters",
        "quote": "I've long awaited this..."
    },
    //Nilfgaard
    "Emperor_Nilfgaard":{
        "name": "Emhyr var Emreis: Emperor of Nilfgaard",
        "faction": "Nilfgaardian Empire",
        "quote": "Your motives do not interest me. Only results." 
    },
    "Imperial_Majesty":{
        "name": "Emhyr var Emreis: His Imperial Majesty",
        "faction": "Nilfgaardian Empire",
        "quote": "The skies wept when my Pavetta died. They will not weep for me."
    },
    "Invader_North":{
        "name": "Emhyr var Emreis: Invader of the North",
        "faction": "Nilfgaardian Empire",
        "quote": "Emperors command multitudes, yet cannot control two things: their time and their hearts."
    },
    "Relentless":{
        "name": "Emhyr var Emreis: The Relentless",
        "faction": "Nilfgaardian Empire",
        "quote": "They do not call me the Patient. Take care they do not call you the Headless."
    },
    "White_Flame":{
        "name": "Emhyr var Emreis: The White Flame",
        "faction": "Nilfgaardian Empire",
        "quote": "A sword is but one of many tools at a ruler's disposal."  
    },
    //Northern Realms
    "King_Temeria":{
        "name": "Foltest: King of Temeria",
        "faction": "Northern Realms",
        "quote": "It is natural and beautiful that a man should love his sister."  
    },
    "Lord_Commander":{
        "name": "Foltest: Lord Commander of the North",
        "faction": "Northern Realms",
        "quote": "Sod advisors and their schemes. I place my trust in my solders' blades."  
    },
    "Son_Medell":{
        "name": "Foltest: Son of Medell",
        "faction": "Northern Realms",
        "quote": "Dammit, I rule this land and I refuse to creep around its corners."  
    },
    "Siegemaster":{
        "name": "Foltest: The Siegemaster",
        "faction": "Northern Realms",
        "quote": "A well-aimed ballista razes not just the enemy's walls, but his morale as well."  
    },
    "SteelForged":{
        "name": "Foltest: The Steel-Forged",
        "faction": "Northern Realms",
        "quote": "A beautiful day for battle."  
    },
    //Scoia'tael
    "Daisy_Valley":{
        "name": "Francesca Findabair: Daisy of the Valley",
        "faction": "Scoia'tael",
        "quote": "The Elder Races have forgotten more than humans can ever hope to know."  
    },
    "Hope_Aen_Seidhe":{
        "name": "Francesca Findabair: Hope of the Aen Seidhe",
        "faction": "Scoia'tael",
        "quote": "Daede sian caente, Aen Seidhe en'allane ael coeden..."  
    },
    "Pureblood_Elf":{
        "name": "Francesca Findabair: Pureblood Elf",
        "faction": "Scoia'tael",
        "quote": "Ash shall fertilize the soil. By spring, the valley shall bloom once more."  
    },
    "Queen_Dol_Blathanna":{
        "name": "Francesca Findabair: Queen of Dol Blathanna",
        "faction": "Scoia'tael",
        "quote": "To live in peace, we first must kill. This is human oppression's cruel finale."  
    },
    "Beutiful":{
        "name": "Francesca Findabair: The Beautiful",
        "faction": "Scoia'tael",
        "quote": "Do not let my beauty distract your aim."  
    }
}