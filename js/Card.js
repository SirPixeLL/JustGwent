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
if (zoomLevel > 1) {margin = -18; marginDiff = 4}
else {margin = -20; marginDiff = 8}
let currentHand = document.getElementById("current_cards");
let cardsInHand = [];
//console.log(margin + "px")

function marginTrueNeckKeys(value) {
    if (value == true) {
        //console.log("MarginTrue");
        for (let i = 0; i < cardsInHand.length; i++) {
            let card = cardsInHand[i];
            if (cardsInHand.length >= 8 && i != 0) {
                card.style.marginLeft = margin + "px";
            }
        }
        if (cardsInHand.length >= 8 && cardsInHand.length < 17) {
            margin += -1*marginDiff;
        }
        else if (cardsInHand.length >= 17) {
            margin += -0.5*marginDiff;
        }
    }
    else {
        console.debug("MarginFalse");
        if (cardsInHand.length < 17 && margin < 2) {
            margin += marginDiff;
        }
        else if (cardsInHand.length >= 17) {
            margin += 0.5/marginDiff;
        }
        for (let i = 0; i < cardsInHand.length; i++) {
            let card = cardsInHand[i];
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
    constructor(id, name, power, type, faction, ability, summons, isLegend, isSpecial){
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
        this.isSpecial = isSpecial;
    }

    drawOnBoards(i, j, currentPlayer){
        let cardsOnBoard;
        let enemySiege = document.getElementById("enemy_siege");
        let enemyRanged = document.getElementById("enemy_ranged");
        let enemyMelee = document.getElementById("enemy_melee");
        let ownSiege = document.getElementById("own_siege");
        let ownRanged = document.getElementById("own_ranged");
        let ownMelee = document.getElementById("own_melee");
        
        if(currentPlayer == 0){
            cardsOnBoard = [[ownMelee, ownRanged, ownSiege], [enemyMelee, enemyRanged, enemySiege]];
        } else{
            cardsOnBoard = [[enemyMelee, enemyRanged, enemySiege], [ownMelee, ownRanged, ownSiege]]
        }

        let cardFrame = document.createElement("div");
        cardFrame.className = "cardPlayed";
        cardFrame.id = this.type + this.id;
        if (card.power != null) {
            let powerDiv = document.createElement("div");
            powerDiv.className = "powerDiv";
            let power = document.createElement("p");
            power.innerHTML = card.power;
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
        if (card.type == "Agile" || card.type == "Melee" || card.type == "Ranged" || card.type == "Siege") {
            let typeDiv = document.createElement("div");
            typeDiv.className = "typeDiv";
            let typeSrc = "url(../images/cardWidgets/"+this.type+".png";
            typeDiv.style.backgroundImage = typeSrc;
            typeDiv.style.backgroundSize = "100% 100%";
            cardFrame.appendChild(typeDiv);
        }
        let abilityDiv = document.createElement("div");
        abilityDiv.className = "abilityDiv";
        let abilitySrc = "url(../images/cardWidgets/"+this.ability+".png"
        abilityDiv.style.backgroundImage = abilitySrc;
        abilityDiv.style.backgroundSize = "100% 100%";
        cardFrame.appendChild(abilityDiv);
        let pictureSrc = "url(../images/cards/"+this.name+".png)";
        pictureSrc = pictureSrc.replaceAll(" ","_");
        pictureSrc = pictureSrc.replaceAll(/[':]/g, '');
        cardFrame.style.backgroundImage = pictureSrc;
        cardFrame.style.backgroundSize = "100% 100%";
        cardsOnBoard[i][j].appendChild(cardFrame);
    }

    drawHorn(whereTo){
        let cardFrame = document.createElement("div");
        cardFrame.className = "cardPlayed";
        cardFrame.id = this.type + this.id;
        let pictureSrc = "url(../images/cards/"+this.name+".png)";
        pictureSrc = pictureSrc.replaceAll(" ","_");
        pictureSrc = pictureSrc.replaceAll(/[':]/g, '');
        cardFrame.style.backgroundImage = pictureSrc;
        cardFrame.style.backgroundSize = "100% 100%";
        whereTo.appendChild(cardFrame);
    }   
}

