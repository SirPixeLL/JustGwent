let id;
let name;
let power;
let type;
let faction;
let ability;
let summons;
let isLegend;
let isSpecial;
let margin = -18;
let currentHand = document.getElementById("current_cards");
let cardsInHand = [];
//console.log(margin + "px")

function marginTrueNeckKeys(value) {
    if (value == true) {
        //console.log("MarginTrue");
        for (let i = 0; i < cardsInHand.length; i++) {
            let card = cardsInHand[i];
            if (cardsInHand.length >= 9 && i != 0) {
                card.style.marginLeft = margin + "px";
            }
        }
        if (cardsInHand.length >= 9 && cardsInHand.length < 17) {
            margin += -4;
        }
        else if (cardsInHand.length >= 17) {
            margin += -2;
        }
    }
    else {
        console.debug("MarginFalse");
        if (cardsInHand.length < 17 && margin < 2) {
            margin += 4;
        }
        else if (cardsInHand.length >= 17) {
            margin += 2;
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
        //console.log(cardsOnBoard[i][j]);
        cardFrame.id = this.type + this.id;
        if (this.power != null) {
            let powerDiv = document.createElement("div");
            powerDiv.className = "powerDiv";
            let power = document.createElement("p");
            power.innerHTML = this.power;
            power.className = "power";
            powerDiv.appendChild(power);
            if(this.power > this.basepower) power.style.color="Green";
            if(this.power < this.basepower) power.style.color="Red";
            cardFrame.appendChild(powerDiv);   
        }
        let pictureSrc = "url(../images/cards/"+this.name+".png";
        pictureSrc = pictureSrc.replaceAll(" ","_");
        pictureSrc = pictureSrc.replaceAll(/[':]/g, '');
        cardFrame.style.backgroundImage = pictureSrc;
        cardFrame.style.backgroundSize = "100% 100%";
        cardsOnBoard[i][j].appendChild(cardFrame);
    }

    drawHorn(whereTo){
        let cardFrame = document.createElement("div");
        cardFrame.className = "cardPlayed";
        //console.log(cardsOnBoard[i][j]);
        cardFrame.id = this.type + this.id;
        let powerDiv = document.createElement("div");
        powerDiv.className = "powerDiv";
        let power = document.createElement("p");
        power.innerHTML = this.id;
        power.className = "power";
        powerDiv.appendChild(power);
        cardFrame.appendChild(powerDiv);
        let pictureSrc = "url(../images/cards/"+this.name+".png";
        pictureSrc = pictureSrc.replaceAll(" ","_");
        pictureSrc = pictureSrc.replaceAll(/[':]/g, '');
        cardFrame.style.backgroundImage = pictureSrc;
        cardFrame.style.backgroundSize = "100% 100%";
        whereTo.appendChild(cardFrame);
    }   
}

