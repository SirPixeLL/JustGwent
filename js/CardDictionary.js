//cokoliv co se bude přidávat psát až za 'Specials'
const cardDict = {
    //Specials
    "Biting_Frost": {
        "name": "Biting Frost",
        "power": null,
        "type": "Weather",
        "picture": "url(../images/cards/Biting_Frost.png)",
        "faction": "Neutral",
        "ability": "BitingFrost",
        "summons": null,
        "isLegend": false,
        "isSpecial": true,
        "number": 3
    },
    "Decoy": {
        "name": "Decoy",
        "power": null,
        "type": null,
        "picture": "url(../images/cards/Decoy.png)",
        "faction": "Neutral",
        "ability": "Decoy",
        "summons": null,
        "isLegend": false,
        "isSpecial": true,
        "number": 3
    },
    "Clear_Weather": {
        "name": "Clear Weather",
        "power": null,
        "type": "Weather",
        "picture": "url(../images/cards/Clear_Weather.png)",
        "faction": "Neutral",
        "ability": "ClearWeather",
        "summons": null,
        "isLegend": false,
        "isSpecial": true,
        "number": 3
    },
    "Commanders_Horn": {
        "name": "Commanders Horn",
        "power": null,
        "type": "Horn",
        "picture": "url(../images/cards/Commanders_Horn.png)",
        "faction": "Neutral",
        "ability": "CommandersHorn",
        "summons": null,
        "isLegend": false,
        "isSpecial": true,
        "number": 3
    },
    "Impenetrable_Fog": {
        "name": "Impenetrable Fog",
        "power": null,
        "type": "Weather",
        "picture": "url(../images/cards/Impenetrable_Fog.png)",
        "faction": "Neutral",
        "ability": "ImpenetrableFog",
        "summons": null,
        "isLegend": false,
        "isSpecial": true,
        "number": 3
    },
    "Scorch": {
        "name": "Scorch",
        "power": null,
        "type": null,
        "picture": "url(../images/cards/Scorch.png)",
        "faction": "Neutral",
        "ability": "Scorch",
        "summons": null,
        "isLegend": false,
        "isSpecial": true,
        "number": 3
    },
    "Torrential_Rain": {
        "name": "Torrential Rain",
        "power": null,
        "type": "Weather",
        "picture": "url(../images/cards/Torrential_Rain.png)",
        "faction": "Neutral",
        "ability": "TorrentialRain",
        "summons": null,
        "isLegend": false,
        "isSpecial": true,
        "number": 3
    },
    //Neutral (chybí kráva a defence idk co s nima)
    "Ciri": {
        "name": "Cirilla Fiona Elen Rianon",
        "power": 15,
        "type": "Melee",
        "picture": "url(../images/cards/Ciri.png)",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": true,
        "isSpecial": false,
        "number": 1
    },
    "Dandelion": {
        "name": "Dandelion",
        "power": 2,
        "type": "Melee",
        "picture": "url(../images/cards/Dandelion.png)",
        "faction": "Neutral",
        "ability": "CommandersHorn",
        "summons": null,
        "isLegend": false,
        "isSpecial": false,
        "number": 1
    },
    "Regis": {
        "name": "Emiel Regis Rohellec Terzieff",
        "power": 5,
        "type": "Melee",
        "picture": "url(../images/cards/Regis.png)",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false,
        "number": 1
    },
    "O'Dimm": {
        "name": "Gaunter O'Dimm",
        "power": 3,
        "type": "Siege",
        "picture": "url(../images/cards/god.png)",
        "faction": "Neutral",
        "ability": "Muster",
        "summons": "Gaunter O'Dimm: Darkness",
        "isLegend": false,
        "isSpecial": false,
        "number": 1
    },
    "Darkness": { //3x
        "name": "Gaunter O'Dimm: Darkness",
        "power": 4,
        "type": "Ranged",
        "picture": "url(../images/cards/Darkness.png)",
        "faction": "Neutral",
        "ability": "Muster",
        "summons": "Gaunter O'Dimm: Darkness",
        "isLegend": false,
        "isSpecial": false,
        "number": 3
    },
    "Geralt": {
        "name": "Geralt of Rivia",
        "power": 15,
        "type": "Melee",
        "picture": "url(../images/cards/Geralt.png)",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": true,
        "isSpecial": false,
        "number": 1
    },
    "Mysterious_Elf": {
        "name": "Mysterious Elf",
        "power": 0,
        "type": "Melee",
        "picture": "url(../images/cards/Mysterious_Elf.png)",
        "faction": "Neutral",
        "ability": "Spy",
        "summons": null,
        "isLegend": true,
        "isSpecial": false,
        "number": 1
    },
    "Olgierd": {
        "name": "Olgierd von Everec",
        "power": 6,
        "type": "Agile",
        "picture": "url(../images/cards/Olgierd.png)",
        "faction": "Neutral",
        "ability": "MoraleBoost",
        "summons": null,
        "isLegend": false,
        "isSpecial": false,
        "number": 1
    },
    "Vesemir": {
        "name": "Vesemir",
        "power": 6,
        "type": "Melee",
        "picture": "url(../images/cards/Vesemir.png)",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false,
        "number": 1
    },
    "Villentretenmerth": {
        "name": "Villentretenmerth",
        "power": 7,
        "type": "Melee",
        "picture": "url(../images/cards/Dragon.png)",
        "faction": "Neutral",
        "ability": "Scorch",
        "summons": null,
        "isLegend": false,
        "isSpecial": false,
        "number": 1
    },
    "Yennefer": {
        "name": "Yennefer of Vengerberg",
        "power": 7,
        "type": "Ranged",
        "picture": "url(../images/cards/Yennefer.png)",
        "faction": "Neutral",
        "ability": "Medic",
        "summons": null,
        "isLegend": true,
        "isSpecial": false,
        "number": 1
    },
    "Zoltan": {
        "name": "Zoltan Chivay",
        "power": 5,
        "type": "Melee",
        "picture": "url(../images/cards/Zoltan.png)",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false,
        "number": 1
    },

    //Northern Realms
    "Ballista": {
        "name": "Ballista",
        "power": 6,
        "type": "Siege",
        "picture": "url(../images/cards/Ballista.png)",
        "faction": "Northern Realms",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false,
        "number": 1
    },
    "Kaedweni_Siege": {
        "name": "Kaedweni Siege Expert",
        "power": 1,
        "type": "Siege",
        "picture": "url(../images/cards/Kaedweni_Siege.png)",
        "faction": "Northern Realms",
        "ability": "MoraleBoost",
        "summons": null,
        "isLegend": false,
        "isSpecial": false,
        "number": 3
    },
    "Keira_Metz": {
        "name": "Keira Metz",
        "power": 5,
        "type": "Ranged",
        "picture": "url(../images/cards/Kiera.png)",
        "faction": "Northern Realms",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false,
        "number": 1
    },
    "Stripes_Commando": {
        "name": "Blue Stripes Commando",
        "power": 4,
        "type": "Melee",
        "picture": "url(../images/cards/Stripes_Commando.png)",
        "faction": "Northern Realms",
        "ability": "TightBond",
        "summons": "Blue Stripes Commando",
        "isLegend": false,
        "isSpecial": false,
        "number": 3
    },

    //Nilfgaard
    "Albrich": {
        "name": "Albrich",
        "power": 2,
        "type": "Ranged",
        "picture": "url(../images/cards/Albrich.png)",
        "faction": "Nilfgaard",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false,
        "number": 1
    },
    "Assire_var_Anahid": {
        "name": "Assire var Anahid",
        "power": 6,
        "type": "Ranged",
        "picture": "url(../images/cards/Assire.png)",
        "faction": "Nilfgaard",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false,
        "number": 1
    },
    "Cahir": {
        "name": "Cahir Mawr Dyffryn aep Ceallach",
        "power": 6,
        "type": "Melee",
        "picture": "url(../images/cards/Cahir.png)",
        "faction": "Nilfgaard",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false,
        "number": 1
    },
}