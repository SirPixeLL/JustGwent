localGame();
function localGame(){
    playerFactions = [p1faction, p2faction];
    playerDecks = [p1deck, p2deck];
    playerHands = [[],[]]; 
    playerLeaderUsed = [false, false];
    boards = [[[playerDecks[1][2]],[],[]],
              [[],[],[]]]
    horn = [[false, false, false],[false, false, false]];
    localGameStart();
    let currentPlayer = startingPlayer();
    bitingFrost();
    console.log(boards[0][0]);
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

//Weather effects
function weather(row){ //row = číslo(0 melee, 1 ranged, 2 siege)
    for(let i = 0; i < 2; i++){
        for(let n = 0; n < boards[i][row].length; n++){
            if(boards[i][row][n].isLegend = false){
                boards[i][row][n].debuffed = true;
            }
        }
    }
}
function bond(){
    for(let i = 0; i < boards.length; i++){
        for(let j = 0; j < boards[i].length; j++){
            for(let n = 0; n < boards[i][j].length; n++){
                if(boards[i][j][n].ability=="tightBond"){
                    for(let m = 0; m < boards[i][j].length; m++){
                        if(boards[i][j][m] != boards[i][j][n] && boards[i][j][n].summons == boards[i][j][m].name){
                            boards[i][j][n].power = boards[i][j][n].power*2;
                        }//////////////////////////////////////////////////
                    }//////////////////////////////////////////////////////
                }//////////////////////////////////////////////////////////
            }//////////////////////////////////////////////////////////////
        }//////////////////////////////////////////////////////////////////
    }//////////////////////////////////////////////////////////////////////
}//////////////////////////////////////////////////////////////////////////
//česká vlajka :3

function commanderHorn(){
    for(let i = 0; i < horn.length; i++){
        for(let j = 0; j < horn[i].length; j++){
            if(horn[i][j] == true){
                for(let n = 0; n < boards[i][j].length; n++){
                    if(boards[i][j][n].isLegend = false){
                        boards[i][j][n].power = boards[i][j][n].power*2;
                    }
                }
            }
        }
    }
}

//Schopnosti
function playHorn(row){
    horn[currentPlayer][row] = true;
}
function scorch(){
    let strongest = [];
    let strongestIndex = [];
    let strongestPower = -1;
    for(let i = 0; i < boards.length; i++){
        for(let j = 0; j < boards[i].length; j++){
            for(let n = 0; n < boards[i][j].length; n++){
                if(boards[i][j][n].power==strongestPower){
                    strongest.push(boards[i][j][n]);
                    strongestIndex.push([i,j,n]);
                }
                else if(boards[i][j][n].power>strongestPower){

                }
            }//////////////////////////////////////////////////////////////
        }//////////////////////////////////////////////////////////////////
    }//////////////////////////////////////////////////////////////////////
}
