//cokoliv co se bude přidávat psát až za 'Specials'
const cardDict = {
    //Specials
    "Biting_Frost": {
        "name": "Biting Frost",
        "power": null,
        "type": "Weather",
        "picture": "Biting_Frost.webp",
        "faction": "Neutral",
        "ability": "bitingFrost",
        "summons": null,
        "isLegend": false,
        "isSpecial": true
    },
    "Decoy": {
        "name": "Decoy",
        "power": null,
        "type": null,
        "picture": "Decoy.webp",
        "faction": "Neutral",
        "ability": "Decoy",
        "summons": null,
        "isLegend": false,
        "isSpecial": true
    },
    "Clear_Weather": {
        "name": "Clear Weather",
        "power": null,
        "type": "Weather",
        "picture": "Clear_Weather.webp",
        "faction": "Neutral",
        "ability": "ClearWeather",
        "summons": null,
        "isLegend": false,
        "isSpecial": true
    },
    "Commanders_Horn": {
        "name": "Commanders Horn",
        "power": null,
        "type": "Horn",
        "picture": "Commanders_Horn.webp",
        "faction": "Neutral",
        "ability": "Horn",
        "summons": null,
        "isLegend": false,
        "isSpecial": true
    },
    "Impenetrable_Fog": {
        "name": "Impenetrable Fog",
        "power": null,
        "type": "Weather",
        "picture": "Impenetrable_Fog.webp",
        "faction": "Neutral",
        "ability": "ImpenetrableFog",
        "summons": null,
        "isLegend": false,
        "isSpecial": true
    },
    "Scorch": {
        "name": "Scorch",
        "power": null,
        "type": null,
        "picture": "Scorch.webp",
        "faction": "Neutral",
        "ability": "Scorch",
        "summons": null,
        "isLegend": false,
        "isSpecial": true
    },
    "Torrential_Rain": {
        "name": "Torrential Rain",
        "power": null,
        "type": "Weather",
        "picture": "Torrential_Rain.webp",
        "faction": "Neutral",
        "ability": "TorrentialRain",
        "summons": null,
        "isLegend": false,
        "isSpecial": true
    },
    //Neutral (chybí kráva a defence idk co s nima)
    "Ciri": {
        "name": "Cirilla Fiona Elen Rianon",
        "power": 15,
        "type": "Melee",
        "picture": "Ciri.webp",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": true,
        "isSpecial": false
    },
    "Dandelion": {
        "name": "Dandelion",
        "power": 2,
        "type": "Melee",
        "picture": "Dandelion.webp",
        "faction": "Neutral",
        "ability": "Horn",
        "summons": null,
        "isLegend": false,
        "isSpecial": false
    },
    "Regis": {
        "name": "Emiel Regis Rohellec Terzieff",
        "power": 5,
        "type": "Melee",
        "picture": "Regis.webp",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false
    },
    "O'Dimm": {
        "name": "Gaunter O'Dimm",
        "power": 3,
        "type": "Siege",
        "picture": "O'Dimm.webp",
        "faction": "Neutral",
        "ability": "Muster",
        "summons": "Gaunter O'Dimm: Darkness",
        "isLegend": false,
        "isSpecial": false
    },
    "Darkness": { //3x
        "name": "Gaunter O'Dimm: Darkness",
        "power": 4,
        "type": "Ranged",
        "picture": "Darkness.webp",
        "faction": "Neutral",
        "ability": "Muster",
        "summons": "Gaunter O'Dimm: Darkness",
        "isLegend": false,
        "isSpecial": false
    },
    "Geralt": {
        "name": "Geralt of Rivia",
        "power": 15,
        "type": "Melee",
        "picture": "Geralt.webp",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": true,
        "isSpecial": false
    },
    "Mysterious_Elf": {
        "name": "Mysterious Elf",
        "power": 0,
        "type": "Melee",
        "picture": "Mysterious_Elf.webp",
        "faction": "Neutral",
        "ability": "Spy",
        "summons": null,
        "isLegend": true,
        "isSpecial": false
    },
    "Olgierd": {
        "name": "Olgierd von Everec",
        "power": 6,
        "type": "Agile",
        "picture": "Olgierd.webp",
        "faction": "Neutral",
        "ability": "MoraleBoost",
        "summons": null,
        "isLegend": false,
        "isSpecial": false
    },
    "Vesemir": {
        "name": "Vesemir",
        "power": 6,
        "type": "Melee",
        "picture": "Vesemir.webp",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false
    },
    "Villentretenmerth": {
        "name": "Villentretenmerth",
        "power": 7,
        "type": "Melee",
        "picture": "Dragon.webp",
        "faction": "Neutral",
        "ability": "ScorchMelee",
        "summons": null,
        "isLegend": false,
        "isSpecial": false
    },
    "Yennefer": {
        "name": "Yennefer of Vengerberg",
        "power": 7,
        "type": "Ranged",
        "picture": "Yennefer.webp",
        "faction": "Neutral",
        "ability": "Medic",
        "summons": null,
        "isLegend": true,
        "isSpecial": false
    },
    "Zoltan": {
        "name": "Zoltan Chivay",
        "power": 5,
        "type": "Melee",
        "picture": "Zoltan.webp",
        "faction": "Neutral",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false
    },

    //Northern Realms
    "Ballista": {
        "name": "Ballista",
        "power": 6,
        "type": "Siege",
        "picture": "Ballista.webp",
        "faction": "NorthernRealms",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false
    },
    "Keira_Metz": {
        "name": "Keira Metz",
        "power": 5,
        "type": "Ranged",
        "picture": "Keira.webp",
        "faction": "NorthernRealms",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false
    },

    //Nilfgaard
    "Albrich": {
        "name": "Albrich",
        "power": 2,
        "type": "Ranged",
        "picture": "Albrich.webp",
        "faction": "Nilfgaard",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false
    },
    "Assire_var_Anahid": {
        "name": "Assire var Anahid",
        "power": 6,
        "type": "Ranged",
        "picture": "Anahid.webp",
        "faction": "Nilfgaard",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false
    },
    "Cahir": {
        "name": "Cahir Mawr Dyffryn aep Ceallach",
        "power": 6,
        "type": "Melee",
        "picture": "Cahir.webp",
        "faction": "Nilfgaard",
        "ability": null,
        "summons": null,
        "isLegend": false,
        "isSpecial": false
    },
}