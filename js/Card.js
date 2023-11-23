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
let cardsInHand = 0; //zatím jen aby měli všechny karty unique id, nic se s tím nepočítá
const currentHand = document.getElementById("current_cards");



class Card {
    constructor(id, name, power, type, picture, faction, ability, summons, isLegend, isSpecial){
        this.id = id;
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
        cardsInHand++;
        let cardFrame = document.createElement("div");
        cardFrame.className = "cardInHand";
        cardFrame.id = "card" + cardsInHand.toString();
        cardFrame.setAttribute('onclick', 'play()');
        let powerDiv = document.createElement("div");
        powerDiv.className = "powerDiv";
        let power = document.createElement("p");
        power.innerHTML = this.power;
        power.className = "power"
        powerDiv.appendChild(power);
        cardFrame.appendChild(powerDiv);
        currentHand.appendChild(cardFrame);
    }

    play(){
        //musím zjisti jak funguje to získávání ID podle kurzoru, jsem clueless
    }
}
let card = new Card("geralt", "15", "Melee", "JPEG", "any", "none", "none", true, false);
for (let index = 0; index < 8; index++) {
    card.drawcard();    
}
