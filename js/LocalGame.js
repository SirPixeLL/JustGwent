localGame();
function localGame(){
    playerFactions = [p1faction, p2faction];
    playerDecks = [p1deck, p2deck];
    playerHands = [[],[]]; 
    localGameStart();
    let currentPlayer = startingPlayer();
    console.log(playerHands[1])
}

function drawNewCard(currentPlayer){
    //přidá hráči do ruky kartu z jeho balíčku
    newCardIndex = getRandomInt(playerDecks[currentPlayer].length);
    playerHands[currentPlayer].push(playerDecks[currentPlayer][newCardIndex]);
    playerDecks[currentPlayer].splice(newCardIndex, 1);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function localGameStart(){
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 10; j++){
            drawNewCard(i);
        }
    }
}
function startingPlayer(){
    //"Coinflip" na začátku hry
    //scoia'tael jede první
    let coinflip;
    if(playerFactions[0] == "Scoia'tael" && playerFactions[1] == "Scoia'tael"){
        coinflip = getRandomInt(2);
    }
    else if(playerFactions[0] == "Scoia'tael"){
        coinflip = 0;
    }
    else if(playerFactions[1] == "Scoia'tael"){
        coinflip = 1;
    }
    else{
        coinflip = getRandomInt(2);
    }
    console.log(coinflip);
    return coinflip;
}
