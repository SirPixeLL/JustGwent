

let hand = document.getElementsByClassName("cardInHand");
for (let i = 0; i < hand.length; i++) {
    hand[i].addEventListener("click", function(e){

        currentPlayer = getCurrentPlayer();
        //console.log(currentPlayer);
        for(let synch = 0; synch < playerHands[currentPlayer].length; synch++){
                //console.log(e.target.id, playerHands[currentPlayer][synch].id);
                if(e.target.id.includes(playerHands[currentPlayer][synch].id)){
                        index = synch;
                }
        }
        if (e.target.id.includes("Melee")) {
                document.getElementById("own_melee").appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "cardPlayed"
                document.getElementById(e.target.id).style.margin = "2px";

                //console.log(playerHands[currentPlayer])
                boards[currentPlayer][0].push(playerHands[currentPlayer][index]);
                let playedCard = playerHands[currentPlayer][index];
                play(playedCard, currentPlayer);
                playerHands[currentPlayer].splice(i,1);
                
        };
        if (e.target.id.includes("Ranged")) {
                document.getElementById("own_ranged").appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "cardPlayed"
                document.getElementById(e.target.id).style.margin = "2px";

                boards[currentPlayer][1].push(playerHands[currentPlayer][index]);
                let playedCard = playerHands[currentPlayer][index];
                play(playedCard, currentPlayer);
                playerHands[currentPlayer].splice(i,1);
        };
        if (e.target.id.includes("Siege")) {
                document.getElementById("own_arty").appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "cardPlayed"
                document.getElementById(e.target.id).style.margin = "2px";
                boards[currentPlayer][2].push(playerHands[currentPlayer][index]);
                let playedCard = playerHands[currentPlayer][index];
                play(playedCard, currentPlayer);
                playerHands[currentPlayer].splice(i,1);
        };
        if (e.target.id.includes("Weather")) {
                document.getElementById("weather_cards").appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "weatherCardPlayed"
                document.getElementById(e.target.id).style.margin = "2px";
        };
        //console.log(JSON.parse(JSON.stringify(boards)));
    });
};
