boards = [[[],[],[]],[[],[],[]]]
horn = [[false, false, false],[false, false, false]];

let playedWeatherCards = [null];

let shownCardSlot = [];

let currentIndex = 0;

function showMedicUI() {
        let ui = $("medic_ui");
        let text = $("medic_text");
        let previous2 = $("previous_card2");
        let previous1 = $("previous_card1");
        let selected = $("selected_card");
        let next1 = $("next_card1");
        let next2 = $("next_card2");
        let discared = players[currentPlayer].discardedCards;
        let selectedCard = createCardElement(discared[currentIndex]);
        ui.style.display = "block";
        selected.appendChild(selectedCard); //musí se dodělat onlick pro selected kartu, currentIndex resetovat na nulu
        if (currentIndex == 0) {
                next1.setAttribute("onclick", () => {
                        currentIndex++;
                        showMedicUI();
                })
                next1.appendChild(createCardElement(discared[currentIndex+1]));
                next2.setAttribute("onclick", () => {
                        currentIndex++;
                        showMedicUI();
                });
                next2.appendChild(createCardElement(discared[currentIndex+2]));
        }
        else if (currentIndex == 1) {
                previous1.setAttribute("onclick", () => {
                        currentIndex--;
                        showMedicUI();
                })
                previous1.appendChild(createCardElement(discared[currentIndex-1]));
                next1.setAttribute("onclick", () => {
                        currentIndex++;
                        showMedicUI();
                })
                next1.appendChild(createCardElement(discared[currentIndex+1]));
                next2.setAttribute("onclick", () => {
                        currentIndex++;
                        showMedicUI();
                });
                next2.appendChild(createCardElement(discared[currentIndex+2]));
        }
        else if (currentIndex > 1 && currentIndex < discared.length-1) {
                previous1.setAttribute("onclick", () => {
                        currentIndex--;
                        showMedicUI();
                })
                previous1.appendChild(createCardElement(discared[currentIndex-1]));
                previous2.setAttribute("onclick", () => {
                        currentIndex--;
                        showMedicUI();
                })
                previous2.appendChild(createCardElement(discared[currentIndex-2]));
                next1.setAttribute("onclick", () => {
                        currentIndex++;
                        showMedicUI();
                })
                next1.appendChild(createCardElement(discared[currentIndex+1]));
                next2.setAttribute("onclick", () => {
                        currentIndex++;
                        showMedicUI();
                });
                next2.appendChild(createCardElement(discared[currentIndex+2]));
        }
        else if (currentIndex == discared.length-2) {
                previous1.setAttribute("onclick", () => {
                        currentIndex--;
                        showMedicUI();
                })
                previous1.appendChild(createCardElement(discared[currentIndex-1]));
                previous2.setAttribute("onclick", () => {
                        currentIndex--;
                        showMedicUI();
                })
                previous2.appendChild(createCardElement(discared[currentIndex-2]));
                next1.setAttribute("onclick", () => {
                        currentIndex++;
                        showMedicUI();
                })
                next1.appendChild(createCardElement(discared[currentIndex+1]));
        }
        else if (currentIndex == discared.length-1) {
                previous1.setAttribute("onclick", () => {
                        currentIndex--;
                        showMedicUI();
                })
                previous1.appendChild(createCardElement(discared[currentIndex-1]));
                previous2.setAttribute("onclick", () => {
                        currentIndex--;
                        showMedicUI();
                })
                previous2.appendChild(createCardElement(discared[currentIndex-2]));
        }
}

function checkForSpy(index, row){
        if(players[currentPlayer].hand[index].ability == "Spy"){
                boards[1 - currentPlayer][row].push(players[currentPlayer].hand[index]);
        }
        else{
                boards[currentPlayer][row].push(players[currentPlayer].hand[index])
                console.log(players[currentPlayer].hand[index]);
        }
}

function playCard(cardType, e) {
        let buttonMelee = document.getElementById("shownButtonMelee");
        let buttonRanged = document.getElementById("shownButtonRanged");
        let buttonYes = document.getElementById("shownButtonYes");
        let buttonNo = document.getElementById("shownButtonNo");
        let targetCard = document.getElementById(e.target.id);
        if (shownCardSlot.length > 0) {
                if (shownCardSlot[0].id.includes("Agile") && cardType != "agile") {
                        buttonMelee.style.display = "none";
                        buttonRanged.style.display = "none";
                }
                shownCardSlot[0].className = "cardInHand";
                shownCardSlot[0].style.marginLeft = margin + "px";
                document.getElementById("current_cards").appendChild(shownCardSlot[0]);
                shownCardSlot.splice(0, 1);
                buttonYes.style.display = "inline-block";
                buttonNo.style.display = "inline-block";
                document.getElementById("shown_card").appendChild(targetCard);
                shownCardSlot.push(targetCard);
                targetCard.className = "cardShown";
        }
        else {
                buttonYes.style.display = "inline-block";
                buttonNo.style.display = "inline-block";
                document.getElementById("shown_card").appendChild(targetCard);
                shownCardSlot.splice(0, 1);
                shownCardSlot.push(targetCard);
                targetCard.className = "cardShown";
                marginTrueNeckKeys(false);
        }
        if (cardType == "agile") {
                buttonMelee.style.display = "inline-block";
                buttonRanged.style.display = "inline-block";
                buttonYes.style.display = "none";
                buttonMelee.onclick = function() {
                        document.getElementById("own_melee").appendChild(targetCard);
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "cardPlayed";
                        targetCard.style.margin = "2px";
                        targetCard.removeEventListener("click", cardListenerHelper, false);
                        cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);

                        boards[currentPlayer][0].push(players[currentPlayer].hand[index]);
                        let playedCard = players[currentPlayer].hand[index];
                        players[currentPlayer].hand.splice(index,1);
                        play(playedCard, currentPlayer);
                        buttonMelee.style.display = "none";
                        buttonRanged.style.display = "none";
                        buttonNo.style.display = "none";
                        //removeCardListener();
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
                        players[currentPlayer].hand.splice(index,1);
                        play(playedCard, currentPlayer);
                        buttonMelee.style.display = "none";
                        buttonRanged.style.display = "none";
                        buttonNo.style.display = "none";
                        //removeCardListener();
                }
        }
        else {
                buttonYes.onclick = function() {
                        document.getElementById(cardType).appendChild(targetCard);
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "cardPlayed";
                        targetCard.style.margin = "2px";
                        targetCard.removeEventListener("click", cardListenerHelper, false);
                        cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
                        
                        if (cardType == "own_melee") checkForSpy(index, 0);
                        else if (cardType == "own_ranged") checkForSpy(index, 1);
                        else if (cardType == "own_siege") checkForSpy(index, 2);
                        let playedCard = players[currentPlayer].hand[index];
                        players[currentPlayer].hand.splice(index,1);
                        play(playedCard, currentPlayer);
                        if (cardType == "weather_cards") {
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
                        }
                        buttonYes.style.display = "none";
                        buttonNo.style.display = "none";
                        //removeCardListener();  
                };
        }              
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

function createCardElement(card){
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
        return cardFrame;
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