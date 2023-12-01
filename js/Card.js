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
const currentHand = document.getElementById("current_cards");

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
    
    }
    
    drawcard() {
        cardsId++;
        let cardFrame = document.createElement("div");
        cardFrame.className = "cardInHand";
        cardFrame.id = "card" + cardsId.toString();
        let cardType = this.type
        cardFrame.addEventListener("click", function(e){
            switch (cardType) {
                case "Melee":
                    document.getElementById("own_melee").appendChild(document.getElementById(e.target.id));
                    break;
                case "Ranged":
                    document.getElementById("own_ranged").appendChild(document.getElementById(e.target.id));
                    break;
                case "Siege":
                    document.getElementById("own_arty").appendChild(document.getElementById(e.target.id));
                    break;
                case "Weather":
                    document.getElementById("weather_cards").appendChild(document.getElementById(e.target.id));
                    document.getElementById(e.target.id).className = "playedWeatherCard";
                    break;
            };
        });
        let powerDiv = document.createElement("div");
        powerDiv.className = "powerDiv";
        let power = document.createElement("p");
        power.innerHTML = this.type;
        power.className = "power";
        powerDiv.appendChild(power);
        cardFrame.appendChild(powerDiv);
        currentHand.appendChild(cardFrame);
    }

    effect(){
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

let card = new Card("1", "kokot", "10", "Melee", "JPEG", "Milfguard", null, null, false, false);
let card1 = new Card("2", "kokot", "10", "Ranged", "JPEG", "Milfguard", null, null, false, false);
for (let index = 0; index < 3; index++) {
    card.drawcard();
    card1.drawcard();    
}
let card2 = new Card("2", "kokot", "10", "Weather", "JPEG", "Milfguard", null, null, false, false);
card2.drawcard();
