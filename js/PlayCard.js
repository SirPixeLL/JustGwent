boards = [[[],[],[]],[[],[],[]]]
horn = [[false, false, false],[false, false, false]];

let playedWeatherCards = [null];

let shownCardSlot = [];

function showMedicUI() {
        
}

function playCardType(cardType, slotStatus) {
        if (slotStatus == 0) {

        }
        else if (slotStatus == 1) {
                
        }
}

function playCard(cardType, e) {
        let buttonMelee = document.getElementById("shownButtonMelee");
        let buttonRanged = document.getElementById("shownButtonRanged");
        let buttonYes = document.getElementById("shownButtonYes");
        let buttonNo = document.getElementById("shownButtonNo");
        let targetCard = document.getElementById(e.target.id);
        if (shownCardSlot.length > 0) {
                if (shownCardSlot[0].id.includes("Agile")) {
                        buttonMelee.style.display = "none";
                        buttonRanged.style.display = "none";
                }
                if (cardType == "weather_cards") {
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
                                targetCard.removeEventListener("click", cardListenerHelper, false);
                                cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
                                let playedCard = players[currentPlayer].hand[index];
                                play(playedCard, currentPlayer);
                                players[currentPlayer].hand.splice(index,1);
                                let t = 0;
                                playedWeatherCards.forEach(element => {
                                        if(playedCard.name != element) t++;
                                });
                                if(t == playedWeatherCards.length){
                                        playedWeatherCards.push(playedCard.name);
                                        document.getElementById(cardType).appendChild(targetCard);
                                        shownCardSlot.splice(0, 1);
                                        targetCard.className = "weatherCardPlayed";
                                        targetCard.style.margin = "2px";
                                }
                                else{
                                        shownCardSlot.splice(0, 1);
                                        document.getElementById("shown_card").removeChild(targetCard);
                                }
                                buttonYes.style.display = "none";
                                buttonNo.style.display = "none";
                                removeCardListener();   
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
                else if(cardType == "agile") {
                        shownCardSlot[0].className = "cardInHand";
                        shownCardSlot[0].style.marginLeft = margin + "px";
                        document.getElementById("current_cards").appendChild(shownCardSlot[0]);
                        shownCardSlot.splice(0, 1);
                        buttonYes.style.display = "none";
                        buttonMelee.style.display = "inline-block";
                        buttonRanged.style.display = "inline-block";
                        buttonNo.style.display = "inline-block";
                        document.getElementById("shown_card").appendChild(targetCard);
                        shownCardSlot.push(targetCard);
                        targetCard.className = "cardShown";
                        targetCard.margin = "2px";
                        buttonMelee.onclick = function() {
                                document.getElementById("own_melee").appendChild(targetCard);
                                shownCardSlot.splice(0, 1);
                                targetCard.className = "cardPlayed";
                                targetCard.style.margin = "2px";
                                targetCard.removeEventListener("click", cardListenerHelper, false);
                                cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
        
                                boards[currentPlayer][0].push(players[currentPlayer].hand[index]);
                                let playedCard = players[currentPlayer].hand[index];
                                play(playedCard, currentPlayer);
                                players[currentPlayer].hand.splice(index,1);
                                buttonMelee.style.display = "none";
                                buttonRanged.style.display = "none";
                                buttonNo.style.display = "none";
                                removeCardListener();
                        }
                        buttonRanged.onclick = function() {
                                document.getElementById("own_ranged").appendChild(targetCard);
                                shownCardSlot.splice(0, 1);
                                targetCard.className = "cardPlayed";
                                targetCard.style.margin = "2px";
                                targetCard.removeEventListener("click", cardListenerHelper, false);
                                cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
        
                                boards[currentPlayer][1].push(players[currentPlayer].hand[index]);
                                let playedCard = players[currentPlayer].hand[index];
                                play(playedCard, currentPlayer);
                                players[currentPlayer].hand.splice(index,1);
                                buttonMelee.style.display = "none";
                                buttonRanged.style.display = "none";
                                buttonNo.style.display = "none";
                                removeCardListener();
                        }
                        buttonNo.onclick = function() {
                                document.getElementById("current_cards").appendChild(targetCard);
                                shownCardSlot.splice(0, 1);
                                targetCard.className = "cardInHand";
                                targetCard.style.marginLeft = margin + "px";
                                buttonMelee.style.display = "none";
                                buttonRanged.style.display = "none";
                                buttonNo.style.display = "none";
                                marginTrueNeckKeys(true);  
                        }
                }
                else {
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

                                if (cardType == "own_melee") boards[currentPlayer][0].push(players[currentPlayer].hand[index]);
                                else if (cardType == "own_ranged") boards[currentPlayer][1].push(players[currentPlayer].hand[index]);
                                else if (cardType == "own_siege") boards[currentPlayer][2].push(players[currentPlayer].hand[index]);
                                let playedCard = players[currentPlayer].hand[index];
                                play(playedCard, currentPlayer);
                                players[currentPlayer].hand.splice(index,1);
                                buttonYes.style.display = "none";
                                buttonNo.style.display = "none";
                                removeCardListener();
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
        }
        else {
                if (cardType == "weather_cards") {
                        buttonYes.style.display = "inline-block";
                        buttonNo.style.display = "inline-block";
                        document.getElementById("shown_card").appendChild(targetCard);
                        shownCardSlot.push(targetCard);
                        targetCard.className = "cardShown";
                        targetCard.margin = "2px";
                        marginTrueNeckKeys(false);
                        buttonYes.onclick = function() {
                                targetCard.removeEventListener("click", cardListenerHelper, false);
                                cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
                                let playedCard = players[currentPlayer].hand[index];
                                play(playedCard, currentPlayer);
                                players[currentPlayer].hand.splice(index,1);
                                let t = 0;
                                playedWeatherCards.forEach(element => {
                                        if(playedCard.name != element) t++;
                                });
                                if(t == playedWeatherCards.length){
                                        playedWeatherCards.push(playedCard.name);
                                        document.getElementById(cardType).appendChild(targetCard);
                                        shownCardSlot.splice(0, 1);
                                        targetCard.className = "weatherCardPlayed";
                                        targetCard.style.margin = "2px";
                                }
                                else{
                                        shownCardSlot.splice(0, 1);
                                        document.getElementById("shown_card").removeChild(targetCard);
                                }
                                buttonYes.style.display = "none";
                                buttonNo.style.display = "none";
                                removeCardListener();
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
                else if(cardType == "agile") {
                        buttonMelee.style.display = "inline-block";
                        buttonRanged.style.display = "inline-block";
                        buttonNo.style.display = "inline-block";
                        buttonNo.style.display = "inline-block";
                        document.getElementById("shown_card").appendChild(targetCard);
                        shownCardSlot.push(targetCard);
                        targetCard.className = "cardShown";
                        targetCard.margin = "2px";
                        marginTrueNeckKeys(false);
                        buttonMelee.onclick = function() {
                                document.getElementById("own_melee").appendChild(targetCard);
                                shownCardSlot.splice(0, 1);
                                targetCard.className = "cardPlayed";
                                targetCard.style.margin = "2px";
                                targetCard.removeEventListener("click", cardListenerHelper, false);
                                cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
        
                                boards[currentPlayer][0].push(players[currentPlayer].hand[index]);
                                let playedCard = players[currentPlayer].hand[index];
                                play(playedCard, currentPlayer);
                                players[currentPlayer].hand.splice(index,1);
                                buttonMelee.style.display = "none";
                                buttonRanged.style.display = "none";
                                buttonNo.style.display = "none";
                                removeCardListener(); 
                        }
                        buttonRanged.onclick = function() {
                                document.getElementById("own_ranged").appendChild(targetCard);
                                shownCardSlot.splice(0, 1);
                                targetCard.className = "cardPlayed";
                                targetCard.style.margin = "2px";
                                targetCard.removeEventListener("click", cardListenerHelper, false);
                                cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
        
                                boards[currentPlayer][1].push(players[currentPlayer].hand[index]);
                                let playedCard = players[currentPlayer].hand[index];
                                play(playedCard, currentPlayer);
                                players[currentPlayer].hand.splice(index,1);
                                buttonMelee.style.display = "none";
                                buttonRanged.style.display = "none";
                                buttonNo.style.display = "none";
                                removeCardListener();
                        }
                        buttonNo.onclick = function() {
                                document.getElementById("current_cards").appendChild(targetCard);
                                shownCardSlot.splice(0, 1);
                                targetCard.className = "cardInHand";
                                targetCard.style.marginLeft = margin + "px";
                                buttonMelee.style.display = "none";
                                buttonRanged.style.display = "none";
                                buttonNo.style.display = "none";
                                marginTrueNeckKeys(true);  
                        }
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
                
                                if (cardType == "own_melee") boards[currentPlayer][0].push(players[currentPlayer].hand[index]);
                                else if (cardType == "own_ranged") boards[currentPlayer][1].push(players[currentPlayer].hand[index]);
                                else if (cardType == "own_siege") boards[currentPlayer][2].push(players[currentPlayer].hand[index]);
                                let playedCard = players[currentPlayer].hand[index];
                                play(playedCard, currentPlayer);
                                players[currentPlayer].hand.splice(index,1);
                                buttonYes.style.display = "none";
                                buttonNo.style.display = "none";
                                removeCardListener();  
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
};

function cardListenerHelper(e){ //existuje aby se dalo pouzit removeEventListener na karty
        for(let synch = 0; synch < players[currentPlayer].hand.length; synch++){
                if(e.target.id.includes(players[currentPlayer].hand[synch].id)){
                        index = synch;
                };
        };
        if (e.target.id.includes("Melee")) {
                playCard("own_melee", e);
        }
        else if (e.target.id.includes("Ranged")) {
                playCard("own_ranged", e);
        }
        else if (e.target.id.includes("Siege")) {
                playCard("own_siege", e);
        }
        else if (e.target.id.includes("Weather")) {
                playCard("weather_cards", e);
        }
        else if (e.target.id.includes("Agile")) {
                playCard("agile", e);
        }
    }

function addCardListener() {
        for (let i = 0; i < cardsInHand.length; i++) {
                cardsInHand[i].addEventListener("click", cardListenerHelper);
        }
}

function removeCardListener() {
        for (let i = 0; i < cardsInHand.length; i++) {
                cardsInHand[i].removeEventListener("click", cardListenerHelper);
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