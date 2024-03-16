let id;
let name;
let power;
let type;
let faction;
let ability;
let summons;
let isLegend;
let isSpecial;
var zoomLevel = window.devicePixelRatio;
let margin;
let marginDiff;
let currentHand = document.getElementById("current_cards")
if (zoomLevel > 1) {margin = -18; marginDiff = 4}
else {margin = -20; marginDiff = 8}
let cardsInHand = [];
//console.log(margin + "px")

function marginTrueNeckKeys(value) {
    let handCards = document.getElementsByClassName("cardInHand");
    if (value == true) {
        console.debug("MarginTrue")
        if (handCards.length >= 8 && handCards.length < 17) {
            margin += -1*marginDiff;
        }
        else if (handCards.length >= 17) {
            margin += -0.5*marginDiff;
        }
        for (let i = 0; i < handCards.length; i++) {
            let card = handCards[i];
            if (handCards.length >= 8 && i != 0) {
                card.style.marginLeft = margin + "px";
            }
        }
    }
    else {
        console.debug("MarginFalse");
        if (handCards.length < 17 && margin < 2) {
            margin += marginDiff;
        }
        else if (handCards.length >= 17) {
            margin += 0.5/marginDiff;
        }
        for (let i = 0; i < handCards.length; i++) {
            let card = handCards[i];
            if (i != 0) {
                card.style.marginLeft = margin + "px";
            }
        }
    }
}

function clearBoards(){
    let cardsToClear = document.getElementsByClassName("cardPlayed");
    //console.log(cardsToClear);
    for(let i = 0; i < cardsToClear.length; i++){
        cardsToClear[i--].remove();

    }
}

function clearHand(){
    let cardsToClear = document.getElementsByClassName("cardInHand");
    //console.log(cardsToClear);
    for(let i = 0; i < cardsToClear.length; i++){
        cardsToClear[i--].remove();
        cardsInHand = [];
        marginTrueNeckKeys(true);
    }
}

class Card {
    constructor(id, name, power, type, faction, ability, summons, isLegend){
        this.id = id;
        this.name = name;
        this.basepower = power;
        this.power = power;
        this.debuffed = false;
        this.type = type;
        this.faction = faction;
        this.ability = ability;
        this.summons = summons;
        this.isLegend = isLegend;
        this.isSpecial = power == null ? true : false;
        this.isAgile;

        if(type == "Agile") this.isAgile = true;
        else this.isAgile = false;
    }

    drawTo(whereTo){
        let cardFrame = document.createElement("div");
        cardFrame.className = "cardPlayed";
        cardFrame.id = this.type + this.id;
        if(this.type != "Horn"){
            if (this.power != null) {
                let powerDiv = document.createElement("div");
                powerDiv.className = "powerDiv";
                let power = document.createElement("p");
                power.innerHTML = this.power;
                power.className = "power";
                if (this.isLegend == true) {
                        powerDiv.style.backgroundImage = "url(../images/cardWidgets/legendPowerBack.png";
                }
                else {
                        powerDiv.style.backgroundImage = "url(../images/cardWidgets/powerBack.png";
                        power.style.color = "#000000";
                }
                if(this.power > this.basepower) power.style.color="Green";
                if(this.power < this.basepower) power.style.color="Red";
                powerDiv.appendChild(power);
                cardFrame.appendChild(powerDiv); 
            }
            if (this.type == "Agile" || this.type == "Melee" || this.type == "Ranged" || this.type == "Siege") {
                let typeDiv = document.createElement("div");
                typeDiv.className = "typeDiv";
                let typeSrc = "url(../images/cardWidgets/"+this.type+".png";
                typeDiv.style.backgroundImage = typeSrc;
                typeDiv.style.backgroundSize = "100% 100%";
                cardFrame.appendChild(typeDiv);
            }
            let abilitySrc;
            let abilityDiv = document.createElement("div");
            abilityDiv.className = "abilityDiv";
            if(this.isAgile && this.ability == null) abilitySrc = "url(../images/cardWidgets/AgileAbility.png";
            else abilitySrc = "url(../images/cardWidgets/"+this.ability+".png";
            
            abilityDiv.style.backgroundImage = abilitySrc;
            abilityDiv.style.backgroundSize = "100% 100%";
            cardFrame.appendChild(abilityDiv);
        }
        let pictureSrc = "url(../images/cards/"+this.name+".png)";
        pictureSrc = pictureSrc.replaceAll(" ","_");
        pictureSrc = pictureSrc.replaceAll(/[':]/g, '');
        cardFrame.style.backgroundImage = pictureSrc;
        cardFrame.style.backgroundSize = "100% 100%";
        whereTo.appendChild(cardFrame);
    }   
}

