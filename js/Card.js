let id;
let name;
let power;
let type;
let picture;
let faction;
let ability;
let summons;
let isLegend;
let isSpecial;
let cardsId = 0; //zatím jen aby měli všechny karty unique id, nic se s tím nepočítá
let margin = -15;
let currentHand = document.getElementById("current_cards");
let cardsInHand = [];

class Card {
    constructor(id, name, power, type, picture, faction, ability, summons, isLegend, isSpecial){
        this.id = id;
        this.name = name;
        this.basepower = power;
        this.power = power;
        this.debuffed = false;
        this.type = type;
        this.picture = picture;
        this.faction = faction;
        this.ability = ability;
        this.summons = summons;
        this.isLegend = isLegend;
        this.isSpecial = isSpecial;
        this.cardsInHand = cardsInHand;  
    
    }
    
    drawcard() {
        cardsId++;
        let cardFrame = document.createElement("div");
        cardFrame.className = "cardInHand";
        cardFrame.id = this.type + this.id;
        let powerDiv = document.createElement("div");
        powerDiv.className = "powerDiv";
        let power = document.createElement("p");
        power.innerHTML = this.power + this.id;
        power.className = "power";
        powerDiv.appendChild(power);
        cardFrame.appendChild(powerDiv);
        currentHand.appendChild(cardFrame);
        cardsInHand.push(document.getElementById(cardFrame.id));
        for (let i = 0; i < cardsInHand.length; i++) {
            let card = cardsInHand[i];
            if (cardsInHand.length >= 10 && i != 0) {
                card.style.marginLeft = margin + "px";
            }
        }
        if (cardsInHand.length >= 10) {
            margin += -3;
        }
        else if (cardsInHand.length >= 17) {
            margin += -1;
        }
    }

    effect() {
        switch(ability){
            case "bitingFrost":
                weather(0);
                break;
            case "ImpenetrableFog":
                weather(1);
                break;
            case "TorrentialRain":
                weather(2);
                break;
        }
    }
}

