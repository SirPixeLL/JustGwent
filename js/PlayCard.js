let playedWeatherCards = [null];

let shownCardSlot = [];

let currentIndex = 0;

function decoy(decoyCard) {
        cycleBoard(function(i, j, n) {
                let object = boards[i][j][n];
                if (object != null) {
                        let element;
                        if (j == 0) element = document.getElementById("Melee"+object.id);
                        else if (j == 1) element = document.getElementById("Ranged"+object.id);
                        else if (j == 2) element = document.getElementById("Siege"+object.id);
                        if (i == currentPlayer && object.isLegend == false) {
                                element.style.border = "2px yellow solid";
                                element.addEventListener("click", function getCardBack() {
                                        players[currentPlayer].hand.push(object);
                                        boards[i][j].splice(n, 1, decoyCard);
                                        
                                        updateAll(currentPlayer);
                                        changeButton("switch");
                                        endTurn();
                                        })   
                        }
                }
        })
}

function showMedicUI(version, random = 0) {
        let ui = document.getElementById("medic_ui");
        let text = document.getElementById("medic_text");
        let previous2 = document.getElementById("previous_card2");
        let previous1 = document.getElementById("previous_card1");
        let selected = document.getElementById("selected_card");
        let next1 = document.getElementById("next_card1");
        let next2 = document.getElementById("next_card2");
        let lookButton = document.getElementById("look_button")
        let discarded = [];
        if (version == "default") discarded = players[currentPlayer].discardedCards;
        else if (version == "leaderWeather") {
                text.innerHTML = "Pick any weather card from your deck";
                let weatherCardDeck = players[currentPlayer].deck.filter(function (Card) {
                        return Card.type == "Weather";
                });
                discarded = weatherCardDeck.filter(function (Card, index, self) {
                        return self.findIndex(v => v.name === Card.name) === index;
                });
        }
        else if (version == "lookAtEnemy") {
                text.innerHTML = "3 cards from the enemy's hand";
                ui.style.display = "block";
                lookButton.style.display = "block";
                let enemyDeck = players[1-currentPlayer].hand;
                if (random == 0) {
                        random = generateRandomUniqueInt(0, enemyDeck.length, 3)
                        for (let i = 0; i < 3; i++) {
                                discarded[i] = (enemyDeck[random[i]]);
                                
                        } 
                }
                else {
                        for (let i = 0; i < 3; i++) {
                                discarded[i] = (enemyDeck[random[i]]);         
                        } 
                }
                lookButton.addEventListener("click", function look() {
                        lookButton.style.display = "none";
                        ui.style.display = "none";
                })
        }
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
        if (discarded.length >= 1) {
                let selectedCard = createCardElement(discarded[currentIndex]);
                selectedCard.className = "cardInMedicUI";
                ui.style.display = "block";
                selected.appendChild(selectedCard);
                if (version != "lookAtEnemy") selectedCard.addEventListener("click", function medicHelper() {
                        if (selectedCard.id.includes("Melee")) {
                                checkForSpy(currentIndex, 0, "discarded");
                                play(discarded[currentIndex], currentPlayer);
                                players[currentPlayer].discardedCards.splice(players[currentPlayer].discardedCards.indexOf(discarded[currentIndex]), 1);
                                discarded.splice(currentIndex, 1);
                                ui.style.display = "none";
                                currentIndex = 0;
                                selectedCard.removeEventListener("click", medicHelper, false);
                        }
                        else if (selectedCard.id.includes("Ranged")) {
                                checkForSpy(currentIndex, 1, "discarded");
                                play(discarded[currentIndex], currentPlayer);
                                players[currentPlayer].discardedCards.splice(players[currentPlayer].discardedCards.indexOf(discarded[currentIndex]), 1);
                                discarded.splice(currentIndex, 1);
                                ui.style.display = "none";
                                currentIndex = 0;
                                selectedCard.removeEventListener("click", medicHelper, false);
                        }
                        else if (selectedCard.id.includes("Siege")) {
                                checkForSpy(currentIndex, 2, "discarded");
                                play(discarded[currentIndex], currentPlayer);
                                players[currentPlayer].discardedCards.splice(players[currentPlayer].discardedCards.indexOf(discarded[currentIndex]), 1);
                                discarded.splice(currentIndex, 1);
                                ui.style.display = "none";
                                currentIndex = 0;
                                selectedCard.removeEventListener("click", medicHelper, false);
                        }
                        else if (discarded[currentIndex].type == "Weather") {
                                play(discarded[currentIndex, currentPlayer]);
                                players[currentPlayer].deck.splice(players[currentPlayer].deck.indexOf(discarded[currentIndex]), 1);
                                discarded.splice(currentIndex, 1);
                                let t = 0;
                                playedWeatherCards.forEach(element => {
                                        if(discarded[currentIndex].name != element) t++;
                                });
                                if(t == playedWeatherCards.length){
                                        playedWeatherCards.push(discarded[currentIndex].name);
                                        discarded
                                        document.getElementById("weather_cards").appendChild(selectedCard);
                                        selectedCard.className = "weatherCardPlayed";
                                        selectedCard.style.margin = "2px";
                                        selectedCard.style.marginTop = "10px"
                                        ui.style.display = "none";
                                        currentIndex = 0;
                                        selectedCard.removeEventListener("click", medicHelper, false);
                                }
                                else{
                                        ui.style.display = "none";
                                        currentIndex = 0;
                                        selectedCard.removeEventListener("click", medicHelper, false);
                                }
                        }
                        
                        sumPowers(currentPlayer);
                })
                try {
                        let next1Card = createCardElement(discarded[currentIndex+1]);
                        next1.appendChild(next1Card);
                        next1Card.className = "cardInMedicUI";
                        next1Card.addEventListener("click", function next1() {
                                selectedCard.remove();
                                currentIndex++;
                                if (version != "lookAtEnemy") showMedicUI(version);
                                else showMedicUI(version, random)
                        })         
                }
                catch {}
                try {
                        let next2Card = createCardElement(discarded[currentIndex+2]);
                        next2.appendChild(next2Card);
                        next2Card.className = "cardInMedicUI";
                        next2Card.addEventListener("click", function next2() {
                                selectedCard.remove();
                                currentIndex++;
                                if (version != "lookAtEnemy") showMedicUI(version);
                                else showMedicUI(version, random)
                        })         
                }
                catch {}
                try {
                        let previous1Card = createCardElement(discarded[currentIndex-1]);
                        previous1.appendChild(previous1Card);
                        previous1Card.className = "cardInMedicUI";
                        previous1Card.addEventListener("click", function previous1() {
                                selectedCard.remove();
                                currentIndex--;
                                if (version != "lookAtEnemy") showMedicUI(version);
                                else showMedicUI(version, random)
                        })                  
                }
                catch {}
                try {
                        let previous2Card = createCardElement(discarded[currentIndex-2]);
                        previous2.appendChild(previous2Card);
                        previous2Card.className = "cardInMedicUI";
                        previous2Card.addEventListener("click", function previous2() {
                                selectedCard.remove();
                                currentIndex--;
                                if (version != "lookAtEnemy") showMedicUI(version);
                                else showMedicUI(version, random)
                        })           
                }
                catch {}
        }
        
}

function checkForSpy(index, row, handOrDiscarded){
        let toPush;
        switch(handOrDiscarded){
                case "hand":
                        toPush = players[currentPlayer].hand[index]
                        break;
                case "discarded":
                        toPush = players[currentPlayer].discardedCards[index]
        }
        if(toPush.ability == "Spy"){
                boards[1 - currentPlayer][row].push(toPush);
        }
        else{
                boards[currentPlayer][row].push(toPush);
        }
        updateBoards(currentPlayer);
}

function playCard(cardType, e) {
        let buttonMelee = document.getElementById("shownButtonMelee");
        let buttonRanged = document.getElementById("shownButtonRanged");
        let buttonSiege = document.getElementById("shownButtonSiege");
        let buttonYes = document.getElementById("shownButtonYes");
        let buttonNo = document.getElementById("shownButtonNo");
        let targetCard = document.getElementById(e.target.id);
        if (shownCardSlot.length > 0) {
                if ((shownCardSlot[0].id.includes("Agile") || shownCardSlot[0].id.includes("Horn")) && (cardType != "agile" || cardType != "horn")) {
                        buttonMelee.style.display = "none";
                        buttonRanged.style.display = "none";
                        buttonSiege.style.display = "none";
                }
                if (shownCardSlot[0].id.includes("Horn") && cardType == "agile") {
                        buttonSiege.style.display = "none";
                }
                if (shownCardSlot[0].id.includes("Leader")) {
                        shownCardSlot[0].className = "cardLeader";
                        document.getElementById("own_leader_div").appendChild(shownCardSlot[0]);
                }
                else {
                        shownCardSlot[0].className = "cardInHand";
                        shownCardSlot[0].style.marginLeft = margin + "px";
                        document.getElementById("current_cards").appendChild(shownCardSlot[0]);
                }
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
                if (cardType != "leader")marginTrueNeckKeys(false);
        }
        if (cardType == "agile" || cardType == "horn") {
                buttonMelee.style.display = "inline-block";
                buttonRanged.style.display = "inline-block";
                if (cardType == "horn") buttonSiege.style.display = "inline-block";
                buttonYes.style.display = "none";
                buttonMelee.onclick = function() {
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "cardPlayed";
                        targetCard.style.margin = "2px";
                        targetCard.removeEventListener("click", cardListenerHelper, false);
                        cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);

                        if (cardType == "agile" || cardType == "horn") players[currentPlayer].hand[index].type = "Melee";
                        if (cardType == "agile") boards[currentPlayer][0].push(players[currentPlayer].hand[index]);
                        let playedCard = players[currentPlayer].hand[index];
                        players[currentPlayer].hand.splice(index,1);
                        play(playedCard, currentPlayer);
                        buttonMelee.style.display = "none";
                        buttonRanged.style.display = "none";
                        buttonSiege.style.display = "none";
                        buttonNo.style.display = "none";
                }
                buttonRanged.onclick = function() {
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "cardPlayed";
                        targetCard.style.margin = "2px";
                        targetCard.removeEventListener("click", cardListenerHelper, false);
                        cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);

                        if (cardType == "agile" ||cardType == "horn") players[currentPlayer].hand[index].type = "Ranged";
                        if (cardType == "agile") boards[currentPlayer][1].push(players[currentPlayer].hand[index]);
                        let playedCard = players[currentPlayer].hand[index];
                        players[currentPlayer].hand.splice(index,1);
                        play(playedCard, currentPlayer);
                        buttonMelee.style.display = "none";
                        buttonRanged.style.display = "none";
                        buttonSiege.style.display = "none";
                        buttonNo.style.display = "none";
                }
                if (cardType == "horn") {
                        buttonSiege.onclick = function() {
                                shownCardSlot.splice(0, 1);
                                targetCard.className = "cardPlayed";
                                targetCard.style.margin = "2px";
                                targetCard.removeEventListener("click", cardListenerHelper, false);
                                cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);

                                let playedCard = players[currentPlayer].hand[index];
                                players[currentPlayer].hand.splice(index,1);
                                playedCard.type = "Siege";
                                play(playedCard, currentPlayer);
                                buttonMelee.style.display = "none";
                                buttonRanged.style.display = "none";
                                buttonSiege.style.display = "none";
                                buttonNo.style.display = "none";
                        }
                }
        }
        else {
                buttonYes.onclick = function() {
                        if (cardType == "scorch") {
                                let playedCard = players[currentPlayer].hand[index];
                                players[currentPlayer].hand.splice(index,1);
                                play(playedCard, currentPlayer);
                                cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
                                document.getElementById(e.target.id).remove();
                                shownCardSlot.splice(0, 1);
                        }
                        else if (cardType == "decoy") {
                                let playedCard = players[currentPlayer].hand[index];
                                players[currentPlayer].hand.splice(index,1);
                                decoy(playedCard);
                                cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
                                document.getElementById(e.target.id).remove();
                                shownCardSlot.splice(0, 1);
                        }
                        else if (cardType == "leader") {
                                targetCard.className = "cardLeader";
                                document.getElementById("own_leader_div").appendChild(targetCard);
                                playLeader(players[currentPlayer].leader);
                                players[currentPlayer].leader.playable = false;
                                shownCardSlot.splice(0, 1);
                                document.getElementById("own_leader_div").firstElementChild.removeEventListener("click", cardListenerHelper, false);
                        }
                        else {
                                shownCardSlot.splice(0, 1);
                                targetCard.className = "cardPlayed";
                                targetCard.style.margin = "2px";
                                targetCard.removeEventListener("click", cardListenerHelper, false);
                                cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
                                
                                if (cardType == "own_melee") checkForSpy(index, 0, "hand");
                                else if (cardType == "own_ranged") checkForSpy(index, 1, "hand");
                                else if (cardType == "own_siege") checkForSpy(index, 2, "hand");
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
                                                targetCard.style.marginTop = "10px"
                                        }
                                        else{
                                                shownCardSlot.splice(0, 1);
                                                document.getElementById("shown_card").removeChild(targetCard);
                                        }
                                }  
                        }
                        buttonYes.style.display = "none";
                        buttonNo.style.display = "none"; 
                };
        }              
        buttonNo.onclick = function() {
                if (cardType != "leader") {
                        document.getElementById("current_cards").appendChild(targetCard);
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "cardInHand";
                        targetCard.style.marginLeft = margin + "px";
                        buttonYes.style.display = "none";
                        buttonNo.style.display = "none";
                        if (cardType == "agile" || cardType == "horn") {
                                buttonMelee.style.display = "none";
                                buttonRanged.style.display = "none";
                                buttonSiege.style.display = "none";
                        }
                        marginTrueNeckKeys(true);        
                }
                else {
                        document.getElementById("own_leader_div").appendChild(targetCard);
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "cardLeader";
                        buttonYes.style.display = "none";
                        buttonNo.style.display = "none";
                }
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
        else if (e.target.id.includes("Scorch")) {
                playCard("scorch", e);
        }
        else if (e.target.id.includes("Commanders_Horn")) {
                playCard("horn", e);
        }
        else if (e.target.id.includes("Decoy")) {
                playCard("decoy", e);
        }
        else if (e.target.id.includes("Leader")) {
                playCard("leader", e)
        }
    }

function addCardListener() {
        for (let i = 0; i < cardsInHand.length; i++) {
                cardsInHand[i].addEventListener("click", cardListenerHelper);
        }
}

function addCardListenerToElement(element) {
        for (let i = 0; i < cardsInHand.length; i++) {
                element.addEventListener("click", cardListenerHelper, false);
        }
}

function removeCardListener() {
        for (let i = 0; i < cardsInHand.length; i++) {
                cardsInHand[i].removeEventListener("click", cardListenerHelper);
        }
}

function addLeaderListener() {
        document.getElementById("own_leader_div").firstElementChild.addEventListener("click", cardListenerHelper);
}

function createCardElement(card){
        let cardFrame = document.createElement("div");
        cardFrame.className = "cardInHand";
        cardFrame.id = card.type + card.id;
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
        let abilityDiv = document.createElement("div");
        abilityDiv.className = "abilityDiv";
        let abilitySrc = "url(../images/cardWidgets/"+card.ability+".png"
        abilityDiv.style.backgroundImage = abilitySrc;
        abilityDiv.style.backgroundSize = "100% 100%";
        let pictureSrc = "url(../images/cards/"+card.name+".png";
        pictureSrc = pictureSrc.replaceAll(" ","_");
        pictureSrc = pictureSrc.replaceAll(/[':]/g, '');
        cardFrame.style.backgroundImage = pictureSrc;
        cardFrame.style.backgroundSize = "100% 100%";
        return cardFrame;
}

function drawCard(card){
        let cardFrame = document.createElement("div");
        cardFrame.className = "cardInHand";
        cardFrame.id = card.type + card.id;
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
        }
        let pictureSrc = "url(../images/cards/"+card.name+".png";
        pictureSrc = pictureSrc.replaceAll(" ","_");
        pictureSrc = pictureSrc.replaceAll(/[':]/g, '');
        cardFrame.style.backgroundImage = pictureSrc;
        cardFrame.style.backgroundSize = "100% 100%";
        currentHand.appendChild(cardFrame);
        cardsInHand.push(document.getElementById(cardFrame.id));
        marginTrueNeckKeys(true);
}

addCardListener();