let shownCardSlot = [];

function PlayCard(cardType, e) {
        let buttonYes = document.getElementById("shownButtonYes");
        let buttonNo = document.getElementById("shownButtonNo");
        let targetCard = document.getElementById(e.target.id);
        if (shownCardSlot.length > 0) {
                document.getElementById("current_cards").appendChild(shownCardSlot[0]);
                shownCardSlot[0].className = "cardInHand";
                shownCardSlot[0].style.marginLeft = margin + "px";
                shownCardSlot.splice(0, 1);
                buttonYes.style.display = "inline-block";
                buttonNo.style.display = "inline-block";
                document.getElementById("shown_card").appendChild(targetCard);
                shownCardSlot.push(targetCard);
                targetCard.className = "cardShown";
                targetCard.margin = "2px";
                MarginTrueNeckKeys(false);

                buttonYes.onclick = function() {
                        document.getElementById(cardType).appendChild(targetCard);
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "cardPlayed";
                        targetCard.style.margin = "2px";
                        cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);

                        if (cardType == "own_melee") boards[currentPlayer][0].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_ranged") boards[currentPlayer][1].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_arty") boards[currentPlayer][2].push(playerHands[currentPlayer][index]);
                        let playedCard = playerHands[currentPlayer][index];
                        play(playedCard, currentPlayer);
                        playerHands[currentPlayer].splice(i,1);
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
                        MarginTrueNeckKeys(true);
                };
        }
        else if (cardType == "weather_cards") {
                buttonYes.style.display = "inline-block";
                buttonNo.style.display = "inline-block";
                document.getElementById("shown_card").appendChild(targetCard);
                shownCardSlot.push(targetCard);
                targetCard.className = "cardShown";
                targetCard.margin = "2px";
                MarginTrueNeckKeys(false)
                buttonYes.onclick = function() {
                        document.getElementById(cardType).appendChild(targetCard);
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "weatherCardPlayed";
                        targetCard.style.margin = "2px";
                        cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
        
                        if (cardType == "own_melee") boards[currentPlayer][0].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_ranged") boards[currentPlayer][1].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_arty") boards[currentPlayer][2].push(playerHands[currentPlayer][index]);
                        let playedCard = playerHands[currentPlayer][index];
                        play(playedCard, currentPlayer);
                        playerHands[currentPlayer].splice(i,1);
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
                        MarginTrueNeckKeys(true);
                };
        }
        else {
                buttonYes.style.display = "inline-block";
                buttonNo.style.display = "inline-block";
                document.getElementById("shown_card").appendChild(targetCard);
                shownCardSlot.push(targetCard);
                targetCard.className = "cardShown";
                targetCard.margin = "2px";
                MarginTrueNeckKeys(false);
                buttonYes.onclick = function() {
                        document.getElementById(cardType).appendChild(targetCard);
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "cardPlayed";
                        targetCard.style.margin = "2px";
                        cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
        
                        if (cardType == "own_melee") boards[currentPlayer][0].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_ranged") boards[currentPlayer][1].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_arty") boards[currentPlayer][2].push(playerHands[currentPlayer][index]);
                        let playedCard = playerHands[currentPlayer][index];
                        play(playedCard, currentPlayer);
                        playerHands[currentPlayer].splice(i,1);
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
                        MarginTrueNeckKeys(true);
                }; 
        };
};

for (let i = 0; i < cardsInHand.length; i++) {
    cardsInHand[i].addEventListener("click", function(e){

        currentPlayer = getCurrentPlayer();
        //console.log(currentPlayer);
        for(let synch = 0; synch < playerHands[currentPlayer].length; synch++){
                //console.log(e.target.id, playerHands[currentPlayer][synch].id);
                if(e.target.id.includes(playerHands[currentPlayer][synch].id)){
                        index = synch;
                };
        };
        if (e.target.id.includes("Melee")) {
                PlayCard("own_melee", e);
        };
        if (e.target.id.includes("Ranged")) {
                PlayCard("own_ranged", e);
        };
        if (e.target.id.includes("Siege")) {
                PlayCard("own_arty", e);
        };
        //Přidal jsem do té funkce i weather karty, ale ty ještě neřešíš v local game atd., takže je to furt potřeba propojit.
        if (e.target.id.includes("Weather")) {
                PlayCard("weather_cards", e);
        };
        //console.log(JSON.parse(JSON.stringify(boards)));
    });

};
