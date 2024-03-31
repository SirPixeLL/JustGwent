let p1deck = [];
let p1testDeck = [];
let p1available = [];
let p1faction =  "Monsters";

let p2deck = [];
let p2testDeck = [];
let p2available = [];
let p2faction = "Northern Realms";

//Balanced = 1
//Classic = 2
let mode = 2;

function splitLeadersArray(){
    p1leaders = [];
    p2leaders = [];
    leaderArray.forEach(e =>{
        if(e.faction == p1faction){
            appendLeader = new Leader(e.id+"A", e.name, e.faction, e.quote);
            p1leaders.push(appendLeader);
        }
        if(e.faction == p2faction){
            appendLeader = new Leader(e.id+"B", e.name, e.faction, e.quote);
            p2leaders.push(appendLeader);
        }
        
    })
}

function drawCustomizerCard(card, currentPlayer, whereTo) {
    let cardElement = document.createElement("div");
    let cardFrame = document.createElement("div");
    let cardInfo = document.createElement("div");
    let cardName = document.createElement("div");
    let cardNum = document.createElement("div");
    cardNum.className = "cardNum";
    cardName.className = "cardName";
    cardInfo.className = "cardInfo";
    cardFrame.className = "cardInCustomizer";
    cardElement.className = "wholeCard";
    cardElement.id = card.type + card.id;
    cardName.innerHTML = card.name;
    cardNum.innerHTML = "x" + card.number;
    if (card.power != null) {
            let powerDiv = document.createElement("div");
            powerDiv.className = "powerDiv";
            let power = document.createElement("p");
            power.innerHTML = card.power;
            power.className = "power";
            if (card.isLegend == true) {
                    powerDiv.style.backgroundImage = "url(../images/cardWidgets/legendPowerBack.png";
            }
            else {
                    powerDiv.style.backgroundImage = "url(../images/cardWidgets/powerBack.png";
                    power.style.color = "#000000";
            }
            powerDiv.appendChild(power);
            cardFrame.appendChild(powerDiv);   
    }
    if (card.type == "Agile" || card.type == "Melee" || card.type == "Ranged" || card.type == "Siege") {
            let typeDiv = document.createElement("div");
            typeDiv.className = "typeDiv";
            let typeSrc = "url(../images/cardWidgets/"+card.type+".png";
            typeDiv.style.backgroundImage = typeSrc;
            typeDiv.style.backgroundSize = "100% 100%";
            cardFrame.appendChild(typeDiv);
    }
    if (card.ability != null) {
            let abilityDiv = document.createElement("div");
            abilityDiv.className = "abilityDiv";
            let abilitySrc = "url(../images/cardWidgets/"+card.ability+".png";
            abilityDiv.style.backgroundImage = abilitySrc;
            abilityDiv.style.backgroundSize = "100% 100%";
            cardFrame.appendChild(abilityDiv);
    } else if(card.isAgile){
            let abilityDiv = document.createElement("div");
            abilityDiv.className = "abilityDiv";
            let abilitySrc = "url(../images/cardWidgets/AgileAbility.png";
            abilityDiv.style.backgroundImage = abilitySrc;
            abilityDiv.style.backgroundSize = "100% 100%";
            cardFrame.appendChild(abilityDiv);
    }
    let pictureNum = "";
    if(card.id[card.id.length-2]>=0 && card.id[card.id.length-2]<=9 && card.hasVariations){
        pictureNum = card.id[card.id.length-2]
        
    }
    let pictureSrc = "url(../images/cards/"+card.name+pictureNum+".png";
    pictureSrc = pictureSrc.replaceAll(" ","_");
    pictureSrc = pictureSrc.replaceAll(/[':]/g, '');
    cardFrame.style.backgroundImage = pictureSrc;
    cardFrame.style.backgroundSize = "100% 100%";
    cardInfo.appendChild(cardName);
    cardInfo.appendChild(cardNum);
    cardElement.appendChild(cardFrame);
    cardElement.appendChild(cardInfo);
    document.getElementById(whereTo).appendChild(cardElement);
    cardElement.addEventListener("click", function moveCard() {
        if (whereTo == "available_cards") {
            if (currentPlayer == 0) {
                p1available.splice(p1available.indexOf(card), 1);
                p1testDeck.push(card);
            }
            else if (currentPlayer == 1) {
                p2available.splice(p2available.indexOf(card), 1);
                p2testDeck.push(card);
            }
            updateCards(currentPlayer);
        }
        else {
            if (currentPlayer == 0) {
                p1testDeck.splice(p1testDeck.indexOf(card), 1);
                p1available.push(card);
            }
            else if (currentPlayer == 1) {
                p2testDeck.splice(p2testDeck.indexOf(card), 1);
                p2available.push(card);
            }
            updateCards(currentPlayer);
        }
    })
}

function updateCards(currentPlayer) {
    document.getElementById("available_cards").innerHTML = "";
    document.getElementById("cards_in_deck").innerHTML = "";
    if (currentPlayer == 0) {
        console.log(p1available);
        p1available.forEach(card => {
            drawCustomizerCard(card, currentPlayer, "available_cards")
        })
        console.log(p1testDeck);
        p1testDeck.forEach(card => {
            drawCustomizerCard(card, currentPlayer, "cards_in_deck")
        })
    }
    else if (currentPlayer == 1) {
        p2available.forEach(card => {
            drawCustomizerCard(card, currentPlayer, "available_cards")
        })
        p2testDeck.forEach(card => {
            drawCustomizerCard(card, currentPlayer, "cards_in_deck")
        })
    }
    

}

if(mode == 1){

    balancedSpecial();

    cardArray.forEach(element =>{
        //Player1
        if((element.faction == p1faction || element.faction == "Neutral") && !element.isSpecial){
            appendCard = new Card(element.id+"A", element.name, element.power, element.type, element.faction, element.ability, element.isLegend, element.hasVariations, element.quote, element.number);
            p1deck.push(appendCard);
        }
        
        //Player2
        if((element.faction == p2faction || element.faction == "Neutral") && !element.isSpecial){
            appendCard = new Card(element.id+"B", element.name, element.power, element.type, element.faction, element.ability, element.isLegend, element.hasVariations, element.quote, element.number);
            p2deck.push(appendCard);
        }
    })
    
    //Specials 
    function balancedSpecial(){
        cardArray.forEach(element =>{
            if(element.isSpecial){
                if(element.id.charAt(element.id.length-1)!=2){ //limituje počet special karet
                    p1deck.push(new Card(element.id+"A", element.name, element.power, element.type, element.faction, element.ability, element.summons, element.isLegend, element.hasVariations, element.quote, element.number));
                    p2deck.push(new Card(element.id+"B", element.name, element.power, element.type, element.faction, element.ability, element.summons, element.isLegend, element.hasVariations, element.quote, element.number));
                }
            }
        })
    }
    splitLeadersArray();
    let p1Leader = p1leaders[1];
    let p2Leader = p2leaders[2];
    let player1 = new Player(0, "Martin", p1faction, p1Leader , p1deck);
    let player2 = new Player(1, "Trunečkis", p2faction, p2Leader, p2deck);
    players = [player1, player2];
}

else if(mode == 2) {
    cardArray.forEach(element =>{
        //Player1
        if(element.faction == p1faction || element.faction == "Neutral"){
            appendCard = new Card(element.id+"A", element.name, element.power, element.type, element.faction, element.ability, element.isLegend, element.hasVariations, element.quote, element.number);
            p1deck.push(appendCard);
            p1available.push(appendCard);
        }
        
        //Player2
        if(element.faction == p2faction || element.faction == "Neutral"){
            appendCard = new Card(element.id+"B", element.name, element.power, element.type, element.faction, element.ability, element.isLegend, element.hasVariations, element.quote, element.number);
            p2deck.push(appendCard);
            p2available.push(appendCard);
        }
    })
    splitLeadersArray();
    let p1Leader = p1leaders[1];
    let p2Leader = p2leaders[2];
    let player1 = new Player(0, "Martin", p1faction, p1Leader , p1deck);
    let player2 = new Player(1, "Trunečkis", p2faction, p2Leader, p2deck);
    players = [player1, player2];
    updateCards(0);
}