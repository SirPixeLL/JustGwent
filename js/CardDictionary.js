//cokoliv co se bude přidávat psát až za 'Specials'
const cardDict = {
    //Specials
    "Biting_Frost": {
        "name": "Biting Frost",
        "power": null,
        "type": "Weather",
        "faction": "Neutral",
        "ability": "BitingFrost",
        "summons": null,
        "isLegend": false,
        "number": 3
    },
    "Decoy": {
        "name": "Decoy",
        "power": null,
        "type": null,
        "faction": "Neutral",
        "ability": "Decoy",
        "summons": null,
        "isLegend": false,
        "number": 3
    },
    "Clear_Weather": {
        "name": "Clear Weather",
        "power": null,
        "type": "Weather",
        "faction": "Neutral",
        "ability": "ClearWeather",
        "summons": null,
        "isLegend": false,
        "number": 3
    },
    "Commanders_Horn": {
        "name": "Commander's Horn",
        "power": null,
        "type": "Horn",
        "faction": "Neutral",
        "ability": "CommandersHorn",
        "summons": null,
        "isLegend": false,
        "number": 3
    },
    "Impenetrable_Fog": {
        "name": "Impenetrable Fog",
        "power": null,
        "type": "Weather",
        "faction": "Neutral",
        "ability": "ImpenetrableFog",
        "summons": null,
        "isLegend": false,
        "number": 3
    },
    "Scorch": {
        "name": "Scorch",
        "power": null,
        "type": null,
        "faction": "Neutral",
        "ability": "Scorch",
        "summons": null,
        "isLegend": false,
        "number": 3
    },
    "Torrential_Rain": {
        "name": "Torrential Rain",
        "power": null,
        "type": "Weather",
        "faction": "Neutral",
        "ability": "TorrentialRain",
        "summons": null,
        "isLegend": false,
        "number": 3
    },
    //Neutral (chybí kráva a defence idk co s nima)
    "Ciri": {
        "name": "Cirilla Fiona Elen Rianon",
        "power": 15,
        "type": "Melee",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": true,
        "number": 1
    },
    "Dandelion": {
        "name": "Dandelion",
        "power": 2,
        "type": "Melee",
        "faction": "Neutral",
        "ability": "CommandersHorn",
        "summons": null,
        "isLegend": false,
        "number": 1
    },
    "Regis": {
        "name": "Emiel Regis Rohellec Terzieff",
        "power": 5,
        "type": "Melee",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "number": 1
    },
    "O'Dimm": {
        "name": "Gaunter O'Dimm",
        "power": 3,
        "type": "Siege",
        "faction": "Neutral",
        "ability": "Muster",
        "summons": "Gaunter O'Dimm: Darkness",
        "isLegend": false,
        "number": 1
    },
    "Darkness": { //3x
        "name": "Gaunter O'Dimm: Darkness",
        "power": 4,
        "type": "Ranged",
        "faction": "Neutral",
        "ability": "Muster",
        "summons": "Gaunter O'Dimm: Darkness",
        "isLegend": false,
        "number": 3
    },
    "Geralt": {
        "name": "Geralt of Rivia",
        "power": 15,
        "type": "Melee",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": true,
        "number": 1
    },
    "Mysterious_Elf": {
        "name": "Mysterious Elf",
        "power": 0,
        "type": "Melee",
        "faction": "Neutral",
        "ability": "Spy",
        "summons": null,
        "isLegend": true,
        "number": 1
    },
    "Olgierd": {
        "name": "Olgierd von Everec",
        "power": 6,
        "type": "Agile",
        "faction": "Neutral",
        "ability": "MoraleBoost",
        "summons": null,
        "isLegend": false,
        "number": 1
    },
    "Vesemir": {
        "name": "Vesemir",
        "power": 6,
        "type": "Melee",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "number": 1
    },
    "Villentretenmerth": {
        "name": "Villentretenmerth",
        "power": 7,
        "type": "Melee",
        "faction": "Neutral",
        "ability": "Scorch",
        "summons": null,
        "isLegend": false,
        "number": 1
    },
    "Yennefer": {
        "name": "Yennefer of Vengerberg",
        "power": 7,
        "type": "Ranged",
        "faction": "Neutral",
        "ability": "Medic",
        "summons": null,
        "isLegend": true,
        "number": 1
    },
    "Zoltan": {
        "name": "Zoltan Chivay",
        "power": 5,
        "type": "Melee",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "number": 1
    },

    //Northern Realms
    "Ballista": {
        "name": "Ballista",
        "power": 6,
        "type": "Siege",
        "faction": "Northern Realms",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "number": 1
    },
    "Kaedweni_Siege": {
        "name": "Kaedweni Siege Expert",
        "power": 1,
        "type": "Siege",
        "faction": "Northern Realms",
        "ability": "MoraleBoost",
        "summons": null,
        "isLegend": false,
        "number": 3
    },
    "Keira_Metz": {
        "name": "Keira Metz",
        "power": 5,
        "type": "Ranged",
        "faction": "Northern Realms",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "number": 1
    },
    "Stripes_Commando": {
        "name": "Blue Stripes Commando",
        "power": 4,
        "type": "Melee",
        "faction": "Northern Realms",
        "ability": "TightBond",
        "summons": "Blue Stripes Commando",
        "isLegend": false,
        "number": 3
    },

    //Nilfgaard
    "Albrich": {
        "name": "Albrich",
        "power": 2,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "A fireball? Of course. Whatever your Imperial Majesty wishes",
        "number": 1
    },
    "Assire_var_Anahid": {
        "name": "Assire var Anahid",
        "power": 6,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "Nilfgaardian mage do ahve a choice: servile submission, or the gallows.",
        "number": 1
    },
    "Black_Infantry_Archer": {
        "name": "Black Infantry Archer",
        "power": 10,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "summons": null,
        "isLegend": false,
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
        "summons": null,
        "isLegend": false,
        "quote": "His eyes flashed under his winged helmet. Fire gleamed from his sword's blade",
        "number": 1
    },
    "Cynthia": {
        "name": "Cynthia",
        "power": 4,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "Cynthia's talents can be deadly. She needs a tight leash.",
        "number": 1
    },
    "Etolian_Axiliary_Archers": {
        "name": "Etolian Auxiliary Archers",
        "power": 1,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": "Medic",
        "summons": null,
        "isLegend": false,
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
        "summons": null,
        "isLegend": false,
        "quote": "Magic is the highest good. It transcends all borders and divisions.",
        "number": 1
    },
    "Heavy_Scorpion": {
        "name": "Heavy Zerrikanian Fire Scorpion",
        "power": 10,
        "type": "Siege",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "Not the best for taking cities, but great for razing them to the ground.",
        "number": 1
    },
    "Brigade_Guard": {
        "name": "Impera Brigade Guard",
        "power": 3,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": "TightBond",
        "summons": null,
        "isLegend": false,
        "quote": "The Impera Brigade neber surrenders. Ever.",
        "number": 4,
        "hasVariations": true
    },
    "Letho": {
        "name": "Letho of Gulet",
        "power": 10,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "summons": null,
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
        "summons": null,
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
        "summons": null,
        "isLegend": false,
        "quote": "No Nordling pikemen or dwarven spearbearers can hope to best trained cavalry.",
        "number": 1
    },
    "Morvran_Voorhis": {
        "name": "Morvran Voorhis",
        "power": 10,
        "type": "Siege",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "summons": null,
        "isLegend": true,
        "quote": "Summer sun reflecting in the quite waters of the Alba - that's the Nilfgaard to me.",
        "number": 1
    },
    "Nausicaa_Cav": {
        "name": "Nausicaa Cavalry Rider",
        "power": 2,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": "TightBond",
        "summons": null,
        "isLegend": false,
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
        "summons": null,
        "isLegend": false,
        "quote": "Learned a lot at Braibant Military Academy. How to scrub potatoes, for instance",
        "number": 1
    },
    "Rainfarn": {
        "name": "Rainfarn",
        "power": 4,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "You'll die as painfully as that pathetic traitor Windhalm did.",
        "number": 1
    },
    "Matsen": {
        "name": "Renuald aep Matsen",
        "power": 5,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "They say the Impera fear nothing. Untrue. Renuald scares them Vergilless.",
        "number": 1
    },
    "Rotten_Mangonel": {
        "name": "Rotten Mangonel",
        "power": 3,
        "type": "Siege",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "The rotten smell brings back childhood memories",
        "number": 1
    },
    "Shilard": {
        "name": "Shilard Fitz-Oesterlen",
        "power": 7,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": "Spy",
        "summons": null,
        "isLegend": false,
        "quote": "Warfare is mere sound and fury - diplomacy is what truly shapes history.",
        "number": 1
    },
    "Siege_Engineer": {
        "name": "Siege Engineer",
        "power": 6,
        "type": "Siege",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "Wielded correctly, a protractor can be a deadly weapon.",
        "number": 1
    },
    "Siege_Technician": {
        "name": "Siege Technician",
        "power": 0,
        "type": "Siege",
        "faction": "Nilfgaardian Empire",
        "ability": "Medic",
        "summons": null,
        "isLegend": false,
        "quote": "I never miss twice.",
        "number": 1
    },
    "Skellen": {
        "name": "Stefan Skellen",
        "power": 9,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": "Spy",
        "summons": null,
        "isLegend": false,
        "quote": "My mark scars the face of our future empress. That is my proudest achievement.",
        "number": 1
    },
    "Sweers": {
        "name": "Sweers",
        "power": 2,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "And hands off the girl! Whatever we may be, we're not savages.",
        "number": 1
    },
    "Eggebracht": {
        "name": "Tibor Eggebracht",
        "power": 10,
        "type": "Ranged",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "summons": null,
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
        "summons": null,
        "isLegend": false,
        "quote": "For a fire mage, he's not very... flamboyant.",
        "number": 1
    },
    "Rideaux": {
        "name": "Vattier de Rideaux",
        "power": 4,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": "Spy",
        "summons": null,
        "isLegend": false,
        "quote": "There's never been a problem a well-planned assassinaton couldn't solve.",
        "number": 1
    },
    "Vreende": {
        "name": "Vreemde",
        "power": 2,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "Discipline is the Empire's deadliest weapon.",
        "number": 1
    },
    "Young_Emisarry": {
        "name": "Young Emissary",
        "power": 5,
        "type": "Melee",
        "faction": "Nilfgaardian Empire",
        "ability": "TightBond",
        "summons": null,
        "isLegend": false,
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
        "summons": null,
        "isLegend": false,
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
        "summons": null,
        "isLegend": false,
        "quote": "Our mead smells like Vergil, do it? Easy to fix - I'll break your Vergilin' nose!",
        "number": 1
    },
    "Ciaran": {
        "name": "Ciaran aep Easnillien",
        "power": 3,
        "type": "Agile",
        "faction": "Scoia'tael",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "The path to freedom is paved in blood, not ink.",
        "number": 1
    },
    "Cranmer": {
        "name": "Dennis Cranmer",
        "power": 6,
        "type": "Melee",
        "faction": "Scoia'tael",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "I know how to carry out orders, so you can shove your advice up your coal chute.",
        "number": 1
    },
    "Dol_Blathanna_Archer": {
        "name": "Dol Blathanna Archer",
        "power": 4,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "Take another step, dh'oine. You'd look better with an arrow between your eyes.",
        "number": 1
    },
    "Dol_Blathanna_Scout": {
        "name": "Dol Blathanna Scout",
        "power": 6,
        "type": "Agile",
        "faction": "Scoia'tael",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "They track like hounds, run like deer and kill like cold-hearted Vergils.",
        "number": 3,
        "hasVariations": true
    },
    "Dwarven_Skirmisher": {
        "name": "Dwarven Skirmisher",
        "power": 3,
        "type": "Melee",
        "faction": "Scoia'tael",
        "ability": "Muster",
        "summons": "Dwarven Skirmisher",
        "isLegend": false,
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
        "summons": null,
        "isLegend": true,
        "quote": "The dryad queen has eyes of molten silver, and a heart of cold-forged steel.",
        "number": 1
    },
    "Elven_Skirmisher": {
        "name": "Elven Skirmisher",
        "power": 2,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": "Muster",
        "summons": "Elven Skirmisher",
        "isLegend": false,
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
        "summons": null,
        "isLegend": false,
        "quote": "Though we are now few and scattered, our hearts burn brighter than ever.",
        "number": 1
    },
    "Havekar_Healer": {
        "name": "Havekar Healer",
        "power": 0,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": "Medic",
        "summons": null,
        "isLegend": false,
        "quote": "Sure, I'll patch you up. Gonna cost you, though.",
        "number": 3,
        "hasVariations": true
    },
    "Havekar_Smuggler": {
        "name": "Havekar Smuggler",
        "power": 5,
        "type": "Melee",
        "faction": "Scoia'tael",
        "ability": "Muster",
        "summons": "Havekar Smuggler",
        "isLegend": false,
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
        "summons": null,
        "isLegend": false,
        "quote": "I am a Sage. My power lies in possessing knowledge. Not sharing it.",
        "number": 1
    },
    "Iorveth": {
        "name": "Iorveth",
        "power": 10,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": null,
        "summons": null,
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
        "summons": null,
        "isLegend": true,
        "quote": "It dawns on them once they notice my scar: a realization of imminent death.",
        "number": 1
    },
    "Mahakaman_Defender": {
        "name": "Mahakaman Defender",
        "power": 5,
        "type": "Melee",
        "faction": "Scoia'tael",
        "ability": null,
        "summons": null,
        "isLegend": false,
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
        "summons": null,
        "isLegend": false,
        "quote": "With each arrow I loose, I think of my da. He'd be proud. I think.",
        "number": 1
    },
    "Riordain": {
        "name": "Riordain",
        "power": 1,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "Stare into their eyes, feast on their terror. Then go in for the kill.",
        "number": 1
    },
    "Saesenthessis": {
        "name": "Saesenthessis",
        "power": 10,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": null,
        "summons": null,
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
        "summons": null,
        "isLegend": false,
        "quote": "Time to look death in the face.",
        "number": 1
    },
    "Toruviel": {
        "name": "Toruviel",
        "power": 2,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "I'd gladly kill you from up close, stare in your eyes... But you reek, human.",
        "number": 1
    },
    "Vrihedd_Brigade_Recruit": {
        "name": "Vrihedd Brigade Recruit",
        "power": 4,
        "type": "Ranged",
        "faction": "Scoia'tael",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "quote": "Hatred burns brighter than any fire, and cuts deeper than any blade.",
        "number": 1
    },
    "Vrihedd_Brigade_Veteran": {
        "name": "Vrihedd Brigade Veteran",
        "power": 5,
        "type": "Agile",
        "faction": "Scoia'tael",
        "ability": null,
        "summons": null,
        "isLegend": false,
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
        "summons": null,
        "isLegend": false,
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