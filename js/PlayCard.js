let playedWeatherCards = [null];

let shownCardSlot = [];

let currentIndex = 0;

function showMedicUI() {
        let ui = document.getElementById("medic_ui");
        let text = document.getElementById("medic_text");
        let previous2 = document.getElementById("previous_card2");
        let previous1 = document.getElementById("previous_card1");
        let selected = document.getElementById("selected_card");
        let next1 = document.getElementById("next_card1");
        let next2 = document.getElementById("next_card2");
        let discared = players[currentPlayer].discardedCards;
        if(previous2.firstChild) {
                previous2.removeChild(previous2.firstChild);
        }
        if(previous1.firstChild) {
                previous1.removeChild(previous1.firstChild);
        }
        if(next1.firstChild) {
                next1.removeChild(next1.firstChild);
        }
        if(next2.firstChild) {
                next2.removeChild(next2.firstChild);
        }
        if (discared.length >= 1) {
                let selectedCard = createCardElement(discared[currentIndex]);
                selectedCard.className = "cardInMedicUI";
                ui.style.display = "block";
                selected.appendChild(selectedCard);
                selectedCard.addEventListener("click", function medicHelper() {
                        if (selectedCard.id.includes("Melee")) {
                                playCardDirect("own_melee", selectedCard.id);
                                discared.splice(currentIndex, 1);
                                ui.style.display = "none";
                                currentIndex = 0;
                                selectedCard.removeEventListener("click", medicHelper, false);
                        }
                        else if (selectedCard.id.includes("Ranged")) {
                                playCardDirect("own_ranged", selectedCard.id);
                                discared.splice(currentIndex, 1);
                                ui.style.display = "none";
                                currentIndex = 0;
                                selectedCard.removeEventListener("click", medicHelper, false);
                        }
                        else if (selectedCard.id.includes("Siege")) {
                                playCardDirect("own_siege", selectedCard.id);
                                discared.splice(currentIndex, 1);
                                ui.style.display = "none";
                                currentIndex = 0;
                                selectedCard.removeEventListener("click", medicHelper, false);
                        }
                        else if (selectedCard.id.includes("Weather")) {
                                playCardDirect("weather_cards", selectedCard.id);
                                discared.splice(currentIndex, 1);
                                ui.style.display = "none";
                                currentIndex = 0;
                                selectedCard.removeEventListener("click", medicHelper, false);
                        }
                })
                try {
                        let next1Card = createCardElement(discared[currentIndex+1]);
                        next1.appendChild(next1Card);
                        next1Card.className = "cardInMedicUI";
                        next1Card.addEventListener("click", function next1() {
                                selectedCard.remove();
                                currentIndex++;
                                showMedicUI();
                        })         
                }
                catch {}
                try {
                        let next2Card = createCardElement(discared[currentIndex+2]);
                        next2.appendChild(next2Card);
                        next2Card.className = "cardInMedicUI";
                        next2Card.addEventListener("click", function next2() {
                                selectedCard.remove();
                                currentIndex++;
                                showMedicUI();
                        })         
                }
                catch {}
                try {
                        let previous1Card = createCardElement(discared[currentIndex-1]);
                        previous1.appendChild(previous1Card);
                        previous1Card.className = "cardInMedicUI";
                        previous1Card.addEventListener("click", function previous1() {
                                selectedCard.remove();
                                currentIndex--;

                                showMedicUI();
                        })                  
                }
                catch {}
                try {
                        let previous2Card = createCardElement(discared[currentIndex-2]);
                        previous2.appendChild(previous2Card);
                        previous2Card.className = "cardInMedicUI";
                        previous2Card.addEventListener("click", function previous2() {
                                selectedCard.remove();
                                currentIndex--;
                                showMedicUI();
                        })           
                }
                catch {}
        }
}

        /*if (currentIndex == 0) {
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
        }*/

function checkForSpy(index, row){
        if(players[currentPlayer].hand[index].ability == "Spy"){
                boards[1 - currentPlayer][row].push(players[currentPlayer].hand[index]);
        }
        else{
                boards[currentPlayer][row].push(players[currentPlayer].hand[index])
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

function playCardDirect(cardType, id) {
        let targetCard = document.getElementById(id);
        console.log(targetCard);
        console.log(cardType);
        if (cardType != "weather") document.getElementById(cardType).appendChild(targetCard);
        targetCard.className = "cardPlayed";
        targetCard.style.margin = "2px";
        if (cardType == "weather_cards") {
                let t = 0;
                playedWeatherCards.forEach(element => {
                        if(playedCard.name != element) t++;
                })
                if(t == playedWeatherCards.length){
                        playedWeatherCards.push(playedCard.name);
                        document.getElementById(cardType).appendChild(targetCard);
                        targetCard.className = "weatherCardPlayed";
                        targetCard.style.margin = "2px";
                }
                else{
                        targetCard.style.display = "none";
                }
        }
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

function addCardListenerToElement(element) {
        for (let i = 0; i < cardsInHand.length; i++) {
                element.addEventListener("click", cardListenerHelper);
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