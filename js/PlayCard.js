function PlayCard(cardType, e) {
        let buttonYes = document.getElementById("shownButtonYes");
        let buttonNo = document.getElementById("shownButtonNo");
        buttonYes.style.display = "inline-block";
        buttonNo.style.display = "inline-block";
        document.getElementById("shown_card").appendChild(document.getElementById(e.target.id));
        document.getElementById(e.target.id).className = "cardShown";
        buttonYes.onclick = function() {
                document.getElementById(cardType).appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "cardPlayed";
                document.getElementById(e.target.id).style.margin = "2px";

                 //console.log(playerHands[currentPlayer])
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
                document.getElementById("current_cards").appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "cardInHand";
                buttonYes.style.display = "none";
                buttonNo.style.display = "none";
        }; 
}

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
        if (e.target.id.includes("Weather")) {
                document.getElementById("weather_cards").appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "weatherCardPlayed"
                document.getElementById(e.target.id).style.margin = "2px";
        };
        //console.log(JSON.parse(JSON.stringify(boards)));
    });

};
