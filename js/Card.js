let name;
let power;
let type;
let picture;
let ability;
let faction;
let rarity;

function Card(name, power, type, picture, faction, ability, rarity) {
    this.name = name;
    this.power = power;
    this.type = type;
    this.picture = picture;
    this.faction = faction;
    this.ability = ability;
    this.rarity = rarity;

    this.drawCard = function() {
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
}