let name;
let power;
let type;
let picture;
let faction;
let ability;
let summons;
let isLegend;
let isSpecial;

class Card {
    constructor(name, power, type, picture, faction, ability, summons, isLegend, isSpecial){
        this.name = name;
        this.power = power;
        this.type = type;
        this.picture = picture;
        this.faction = faction;
        this.ability = ability;
        this.summons = summons;
        this.isLegend = isLegend;
        this.isSpecial = isSpecial;  
    }
    
    drawcard() {
        let cardFrame = document.createElement("div");
        cardFrame.className = "card";
        let powerDiv = document.createElement("div");
        powerDiv.className = "powerDiv";
        let power = document.createElement("p");
        power.innerHTML = this.power;
        power.className = "power"
        let currentHand = document.getElementById("current_cards");
        powerDiv.appendChild(power);
        cardFrame.appendChild(powerDiv);
        currentHand.appendChild(cardFrame);
    }
    play(deck, mySide, theirSide, weathers, discarded){ //vykreslí kartu na správné místo a provede příslušné funkce schopností
        //možná vyřešit inteligentněji jak získat informace ať to nemá tolik vstupů
    }
}