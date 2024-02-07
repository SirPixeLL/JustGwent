playerFactions = [p1faction, p2faction];
playerDecks = [p1deck, p2deck];
playerHands = [[],[]]; 
playerLeaderUsed = [false, false];
playerDiscarded = [[],[]];
boards = [[[],[],[]],[[],[],[]]]
horn = [[false, false, false],[false, false, false]];

let shownCardSlot = [];

function medicCheck() {}
//bude se nějak muset čekovat abilitka těch karet a zatím není jak, zkusit předělat drawCard()

function playCard(cardType, e) {
        let buttonYes = document.getElementById("shownButtonYes");
        let buttonNo = document.getElementById("shownButtonNo");
        let targetCard = document.getElementById(e.target.id);
        if (shownCardSlot.length > 0) {
                shownCardSlot[0].className = "cardInHand";
                shownCardSlot[0].style.marginLeft = margin + "px";
                document.getElementById("current_cards").appendChild(shownCardSlot[0]);
                shownCardSlot.splice(0, 1);
                buttonYes.style.display = "inline-block";
                buttonNo.style.display = "inline-block";
                document.getElementById("shown_card").appendChild(targetCard);
                shownCardSlot.push(targetCard);
                targetCard.className = "cardShown";
                targetCard.margin = "2px";
                buttonYes.onclick = function() {
                        document.getElementById(cardType).appendChild(targetCard);
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "cardPlayed";
                        targetCard.style.margin = "2px";
                        targetCard.removeEventListener("click", cardListenerHelper, false);
                        cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);

                        if (cardType == "own_melee") boards[currentPlayer][0].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_ranged") boards[currentPlayer][1].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_siege") boards[currentPlayer][2].push(playerHands[currentPlayer][index]);
                        let playedCard = playerHands[currentPlayer][index];
                        play(playedCard, currentPlayer);
                        playerHands[currentPlayer].splice(index,1);
                        buttonYes.style.display = "none";
                        buttonNo.style.display = "none";
                };
                buttonNo.onclick = function() {
                        document.getElementById("current_cards").appendChild(targetCard);
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "cardInHand";
                        targetCard.style.marginLeft = margin + "px";
                        buttonYes.style.display = "none";
                        buttonNo.style.display = "none";
                        marginTrueNeckKeys(true);
                };
        }
        else if (cardType == "weather_cards") {
                buttonYes.style.display = "inline-block";
                buttonNo.style.display = "inline-block";
                document.getElementById("shown_card").appendChild(targetCard);
                shownCardSlot.push(targetCard);
                targetCard.className = "cardShown";
                targetCard.margin = "2px";
                marginTrueNeckKeys(false)
                buttonYes.onclick = function() {
                        document.getElementById(cardType).appendChild(targetCard);
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "weatherCardPlayed";
                        targetCard.style.margin = "2px";
                        targetCard.removeEventListener("click", cardListenerHelper, false);
                        cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
        
                        if (cardType == "own_melee") boards[currentPlayer][0].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_ranged") boards[currentPlayer][1].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_siege") boards[currentPlayer][2].push(playerHands[currentPlayer][index]);
                        let playedCard = playerHands[currentPlayer][index];
                        play(playedCard, currentPlayer);
                        playerHands[currentPlayer].splice(index,1);
                        buttonYes.style.display = "none";
                        buttonNo.style.display = "none";    
                };
                buttonNo.onclick = function() {
                        document.getElementById("current_cards").appendChild(targetCard);
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "cardInHand";
                        targetCard.style.marginLeft = margin + "px";
                        buttonYes.style.display = "none";
                        buttonNo.style.display = "none";
                        marginTrueNeckKeys(true);
                };
        }
        else {
                buttonYes.style.display = "inline-block";
                buttonNo.style.display = "inline-block";
                document.getElementById("shown_card").appendChild(targetCard);
                shownCardSlot.push(targetCard);
                targetCard.className = "cardShown";
                targetCard.margin = "2px";
                marginTrueNeckKeys(false);
                buttonYes.onclick = function() {
                        document.getElementById(cardType).appendChild(targetCard);
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "cardPlayed";
                        targetCard.style.margin = "2px";
                        targetCard.removeEventListener("click", cardListenerHelper, false);
                        cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
        
                        if (cardType == "own_melee") boards[currentPlayer][0].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_ranged") boards[currentPlayer][1].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_siege") boards[currentPlayer][2].push(playerHands[currentPlayer][index]);
                        let playedCard = playerHands[currentPlayer][index];
                        play(playedCard, currentPlayer);
                        playerHands[currentPlayer].splice(index,1);
                        buttonYes.style.display = "none";
                        buttonNo.style.display = "none";    
                };
                buttonNo.onclick = function() {
                        document.getElementById("current_cards").appendChild(targetCard);
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "cardInHand";
                        targetCard.style.marginLeft = margin + "px";
                        buttonYes.style.display = "none";
                        buttonNo.style.display = "none";
                        marginTrueNeckKeys(true);
                };
        };
};

function cardListenerHelper(e){ //existuje aby se dalo pouzit removeEventListener na karty
        for(let synch = 0; synch < playerHands[currentPlayer].length; synch++){
                if(e.target.id.includes(playerHands[currentPlayer][synch].id)){
                        index = synch;
                };
        };
        if (e.target.id.includes("Melee")) {
                playCard("own_melee", e);
        };
        if (e.target.id.includes("Ranged")) {
                playCard("own_ranged", e);
        };
        if (e.target.id.includes("Siege")) {
                playCard("own_siege", e);
        };
        if (e.target.id.includes("Weather")) {
                playCard("weather_cards", e);
        };
    }

function addCardListener() {
        for (let i = 0; i < cardsInHand.length; i++) {
                cardsInHand[i].addEventListener("click", cardListenerHelper);
        }
}

function drawCard(card){
        let cardFrame = document.createElement("div");
        cardFrame.className = "cardInHand";
        cardFrame.id = card.type + card.id;
        let powerDiv = document.createElement("div");
        powerDiv.className = "powerDiv";
        let power = document.createElement("p");
        power.innerHTML = card.power + card.id;
        power.className = "power";
        powerDiv.appendChild(power);
        cardFrame.appendChild(powerDiv);
        currentHand.appendChild(cardFrame);
        cardsInHand.push(document.getElementById(cardFrame.id));
        marginTrueNeckKeys(true);
}

addCardListener();