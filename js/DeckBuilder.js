let playerToBuild = 0;

let p1deck = [];
let p1testDeck = [];
let p1available = [];
let p1faction =  "Northern Realms";
let p1leader = 0;
let p1name = "Player 1";

let p2deck = [];
let p2testDeck = [];
let p2available = [];
let p2faction = "Northern Realms";
let p2leader = 0;
let p2name = "Player 2";

//Balanced = 1
//Classic = 2
let mode;

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

function updateName() {
    let nameElement = document.getElementById("player_title");
    if (playerToBuild == 0) nameElement.innerHTML = "Player 1";
    else if (playerToBuild == 1) nameElement.innerHTML = "Player 2";
    if (playerToBuild == 0 && p1name != "") nameElement.innerText = p1name;
    else if (playerToBuild == 1 && p2name != "") nameElement.innerText = p2name;
}

function getPlayerName() {
    nameInput = document.getElementById("name_input").value;
    document.getElementById("name_input").value = "";
    if (playerToBuild == 0) p1name = nameInput;
    else p2name = nameInput;
    updateName();
}

function updateFaction(playerSwitch = false) {
    let factionPerks = [
        "Draw a card from your deck whenever you win a round.",
        "Win whenever there is a draw.",
        "One randomly-chosen Monsters Unit Card stays on the battlefield after each round.",
        "You go first at the start of a battle."  //mělo by být You decide who goes first at the start of a battle. ale to nemáme implementovaný kvůli grafice upps
    ]
    let factionTitle = document.getElementById("faction_title");
    if (playerToBuild == 0) {
        document.getElementById("faction_ability").innerHTML = factionPerks[document.getElementById("faction_select").selectedIndex]
        factionTitle.innerHTML = p1faction;
        let factionPNG = p1faction.replaceAll(" ","_").replaceAll("'", "");
        document.getElementById("deck_customizer").style.backgroundImage = "url(../images/" + factionPNG + ".png)";
        if (playerSwitch == false) {
            if (mode == 2) {
                p1testDeck = [];
                p1available = [];
                cardArray.forEach(element =>{
                    if(element.faction == p1faction || element.faction == "Neutral"){
                        appendCard = new Card(element.id+"A", element.name, element.power, element.type, element.faction, element.ability, element.isLegend, element.hasVariations, element.quote, element.number);
                        p1available.push(appendCard);
                    }
                })
                }
            else if (mode == 1) {
                p2deck = []
                cardArray.forEach(element => {
                    if((element.faction == p2faction || element.faction == "Neutral") && !element.isSpecial){
                        appendCard = new Card(element.id+"B", element.name, element.power, element.type, element.faction, element.ability, element.isLegend, element.hasVariations, element.quote, element.number);
                        p2deck.push(appendCard);
                    }
                })
            }
        }
        updateCards();
    }
    else if (playerToBuild == 1) {
        factionTitle.innerHTML = p2faction;
        let factionPNG = p2faction.replaceAll(" ","_").replaceAll("'", "");
        document.getElementById("deck_customizer").style.backgroundImage = "url(../images/" + factionPNG + ".png)";
        if (playerSwitch == false) {
            if (mode == 2) {
                p2testDeck = [];
                p2available = [];
                cardArray.forEach(element =>{
                    if(element.faction == p2faction || element.faction == "Neutral"){
                        appendCard = new Card(element.id+"A", element.name, element.power, element.type, element.faction, element.ability, element.isLegend, element.hasVariations, element.quote, element.number);
                        p2available.push(appendCard);
                    }
                })
            }
            else if (mode == 1) {
                p2deck = []
                cardArray.forEach(element => {
                    if((element.faction == p2faction || element.faction == "Neutral") && !element.isSpecial){
                        appendCard = new Card(element.id+"A", element.name, element.power, element.type, element.faction, element.ability, element.isLegend, element.hasVariations, element.quote, element.number);
                        p2deck.push(appendCard);
                    }
                })
            }
        }
        updateCards();
    }
    splitLeadersArray();
    drawCustomizerLeader();
}

document.getElementById("faction_select").addEventListener("change", function factionChange() {
    let chosenFaction = document.getElementById("faction_select").value;
    if (playerToBuild == 0) p1faction = chosenFaction;
    else if (playerToBuild == 1) p2faction = chosenFaction;
    updateFaction();
})

document.getElementById("switch_players_button").addEventListener("click", function switchPlayer() {
    if (playerToBuild == 0) playerToBuild = 1;
    else if (playerToBuild == 1) playerToBuild = 0;
    updateName();
    drawCustomizerLeader();
    updateFaction(true);
})

document.getElementById("goto_game_button").addEventListener("click",function startGameButton(){
    if (mode == 2) {
        enemyDeck = playerToBuild == 0 ? p2testDeck : p1testDeck;
        enemyUnitCount = 0;
        enemyDeck.forEach(e =>{
            if(e.basepower != null) enemyUnitCount++;
        })
        console.log(document.getElementById("unit_num").innerHTML.split("≥")[0]);
        if(document.getElementById("unit_num").innerHTML.split("≥")[0] > 21 && enemyUnitCount > 21){
            document.getElementById("available_cards").innerHTML = "";
            document.getElementById("cards_in_deck").innerHTML = "";
            document.getElementById("leader_div").innerHTML = "";
            document.getElementById("deck_customizer").style.display="none";
            let player1 = new Player(0, p1name, p1faction, p1leaders[p1leader] , p1testDeck);
            let player2 = new Player(1, p2name, p2faction, p2leaders[p2leader], p2testDeck);
            players = [player1, player2];
            localGame()
        }
        else{
            alert("Someone has an illegal amount of cards!")
        }
    }
    else if (mode == 1) {
        document.getElementById("available_cards").innerHTML = "";
        document.getElementById("cards_in_deck").innerHTML = "";
        document.getElementById("leader_div").innerHTML = "";
        document.getElementById("deck_customizer").style.display="none";
        let player1 = new Player(0, p1name, p1faction, p1leaders[p1leader] , p1deck);
        let player2 = new Player(1, p2name, p2faction, p2leaders[p2leader], p2deck);
        players = [player1, player2];
        localGame()
    }
    document.getElementById("left_board").style.display = "inline-block";
    document.getElementById("center_board").style.display = "inline-block";
    document.getElementById("right_board").style.display = "inline-block";
})

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
    cardNum.innerHTML = "x"+1;
    let cardsAvailable = document.getElementsByClassName("wholeCard");
    let cardsInWhereTo = [];
    let appended = false;
    for(let e of cardsAvailable){
        if(document.getElementById(whereTo).contains(e)){
            cardsInWhereTo.push(e);
        }
    }
    for(let e of cardsInWhereTo){
        let nameFromId = e.id.split(/(?=[A-Z, 0-9])/);
        if(nameFromId.includes(card.id.slice(0, -2))){
            let cardEditNum = e.childNodes[1];
            cardEditNum = cardEditNum.childNodes[1];
            let currentNum = cardEditNum.innerHTML;
            cardEditNum.innerHTML="x"+(Number(currentNum[1])+1)
            appended = true;
        }
    }
    if(appended == false){
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
            if(card.isSpecial && specials == 10){
                //sem alert že má moc specials
            }
            else{
                if(Number(cardNum.innerHTML[1])>1){
                    let cardToMove;
                    let lastId = card.id.replace(card.id[card.id.length-2],Number(cardNum.innerHTML[1]-1))
                    if(whereTo == "available_cards"){
                        if(currentPlayer == 0){
                            cardToMove = p1available.findIndex(x => x.id === lastId);
                            p1testDeck.push(p1available[cardToMove]);
                            p1available.splice(cardToMove, 1);
                        }
                        else{
                            cardToMove = p2available.findIndex(x => x.id === lastId);
                            p2testDeck.push(p2available[cardToMove]);
                            p2available.splice(cardToMove, 1);
                        }
                    }
                    else{
                        if(currentPlayer == 0){
                            cardToMove = p1testDeck.findIndex(x => x.id === lastId);
                            p1available.push(p1testDeck[cardToMove]);
                            p1testDeck.splice(cardToMove, 1);
                        }
                        else{
                            cardToMove = p2testDeck.findIndex(x => x.id === lastId);
                            p2available.push(p2testDeck[cardToMove]);
                            p2testDeck.splice(cardToMove, 1);
                        }
                    }
                    updateCards();
                }
                else{
                    if (whereTo == "available_cards") {
                        if (currentPlayer == 0) {
                            p1available.splice(p1available.indexOf(card), 1);
                            p1testDeck.push(card);
                        }
                        else if (currentPlayer == 1) {
                            p2available.splice(p2available.indexOf(card), 1);
                            p2testDeck.push(card);
                        }
                        updateCards();
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
                        updateCards();
                    }
                }
            }
            
             
        })
    }
}

function drawCustomizerLeader() {
    document.getElementById("leader_div").innerHTML = "";
    if (playerToBuild == 0) {
        let leaderElement = drawLeader(p1leaders[p1leader]);
        leaderElement.addEventListener("click", function leaderEventListener() {
            showMedicUI("deckBuilder");
            leaderElement.removeEventListener("click", leaderEventListener, false);
        });
        document.getElementById("leader_div").appendChild(leaderElement);
    }
    else if (playerToBuild == 1) {
        let leaderElement = drawLeader(p2leaders[p2leader]);
        leaderElement.addEventListener("click", function leaderEventListener() {
            showMedicUI("deckBuilder");
            leaderElement.removeEventListener("click", leaderEventListener, false);
        });
        document.getElementById("leader_div").appendChild(leaderElement);
    }
}

function updateCards() {
    document.getElementById("available_cards").innerHTML = "";
    document.getElementById("cards_in_deck").innerHTML = "";
    if (playerToBuild == 0) {
        console.log(p1available);
        p1available.forEach(card => {
            drawCustomizerCard(card, playerToBuild, "available_cards")
        })
        console.log(p1testDeck);
        p1testDeck.forEach(card => {
            drawCustomizerCard(card, playerToBuild, "cards_in_deck")
        })
    }
    else if (playerToBuild == 1) {
        p2available.forEach(card => {
            drawCustomizerCard(card, playerToBuild, "available_cards")
        })
        p2testDeck.forEach(card => {
            drawCustomizerCard(card, playerToBuild, "cards_in_deck")
        })
    }
    deckBuilderCounters();
}

function deckBuilderCounters(){
    let heroes = 0;
    specials = 0;
    let combinedPower = 0;

    let deckToCount = playerToBuild == 0 ? p1testDeck : p2testDeck

    deckToCount.forEach(element =>{
        if (element.isLegend) heroes++;
        if (element.isSpecial) specials++;        
        if (element.basepower != null) combinedPower += element.basepower; 
    })

    document.getElementById("total_num").innerHTML=deckToCount.length;
    document.getElementById("unit_num").innerHTML=deckToCount.length-specials+"≥22";
    if(deckToCount.length-specials < 22) document.getElementById("unit_num").style.color="#d65454";
    else document.getElementById("unit_num").style.color="#aa9667";
    document.getElementById("special_num").innerHTML=specials+"/10";
    document.getElementById("strength_num").innerHTML=combinedPower;
    document.getElementById("hero_num").innerHTML=heroes;
}

function gameStart() {
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
        drawCustomizerLeader();
    }
    
    else if(mode == 2) {
        cardArray.forEach(element =>{
            //Player1
            if(element.faction == p1faction || element.faction == "Neutral"){
                appendCard = new Card(element.id+"A", element.name, element.power, element.type, element.faction, element.ability, element.isLegend, element.hasVariations, element.quote, element.number);
                p1available.push(appendCard);
            }
            
            //Player2
            if(element.faction == p2faction || element.faction == "Neutral"){
                appendCard = new Card(element.id+"B", element.name, element.power, element.type, element.faction, element.ability, element.isLegend, element.hasVariations, element.quote, element.number);
                p2available.push(appendCard);
            }
        })
        splitLeadersArray();
        drawCustomizerLeader();
        updateCards();
    }
}

