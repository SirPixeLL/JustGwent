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
                marginTrueNeckKeys(false);

                buttonYes.onclick = function() {
                        document.getElementById(cardType).appendChild(targetCard);
                        shownCardSlot.splice(0, 1);
                        targetCard.className = "cardPlayed";
                        targetCard.style.margin = "2px";
                        cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);

                        if (cardType == "own_melee") boards[currentPlayer][0].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_ranged") boards[currentPlayer][1].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_siege") boards[currentPlayer][2].push(playerHands[currentPlayer][index]);
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
                        cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
        
                        if (cardType == "own_melee") boards[currentPlayer][0].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_ranged") boards[currentPlayer][1].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_siege") boards[currentPlayer][2].push(playerHands[currentPlayer][index]);
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
                        cardsInHand.splice(cardsInHand.indexOf(targetCard), 1);
        
                        if (cardType == "own_melee") boards[currentPlayer][0].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_ranged") boards[currentPlayer][1].push(playerHands[currentPlayer][index]);
                        else if (cardType == "own_siege") boards[currentPlayer][2].push(playerHands[currentPlayer][index]);
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
                        marginTrueNeckKeys(true);
                }; 
        };
};

function addCardListener() {
        for (let i = 0; i < cardsInHand.length; i++) {
                cardsInHand[i].addEventListener("click", function(e){
            
                    //currentPlayer = getCurrentPlayer();
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
                });
            
            };
            
}
addCardListener();
/* for (let i = 0; i < cardsInHand.length; i++) {
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
                playCard("own_melee", e);
        };
        if (e.target.id.includes("Ranged")) {
                playCard("own_ranged", e);
        };
        if (e.target.id.includes("Siege")) {
                playCard("own_siege", e);
        };
        //Přidal jsem do té funkce i weather ksiege, ale ty ještě neřešíš v local game atd., takže je to furt potřeba propojit.
        if (e.target.id.includes("Weather")) {
                playCard("weather_cards", e);
        };
        //console.log(JSON.parse(JSON.stringify(boards)));
    });

};
*/
