localGame();
function localGame(){
    playerFactions = [p1faction, p2faction];
    playerDecks = [p1deck, p2deck];
    playerHands = [[],[]]; 
    playerLeaderUsed = [false, false];
    boards = [[[playerDecks[1][3], playerDecks[1][8]],[playerDecks[1][9], playerDecks[1][9]],[playerDecks[1][10]]],
              [[playerDecks[0][2]],[playerDecks[0][4]],[playerDecks[0][10]]]]
    horn = [[false, false, false],[false, false, false]];
    
    localGameStart();
    let currentPlayer = startingPlayer();
    //console.log(JSON.parse(JSON.stringify(boards)));
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
        }}
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
    console.log("Starting player: " + coinflip);
    return coinflip;
}

//Weather effects
function weather(row){ //row = číslo(0 melee, 1 ranged, 2 siege)
    //specifická funkce, nastavuje debuff status na určitý řádek, power se řeší na konci cyklu kola
    for(let i = 0; i < 2; i++){
        for(let n = 0; n < boards[i][row].length; n++){
            if(boards[i][row][n].isLegend = false){
                boards[i][row][n].debuffed = true;
            }
        }
    }
}
function clearWeather(){
    for(let i = 0; i < boards.length; i++){
        for(let j = 0; j < boards[i].length; j++){
            for(let n = 0; n < boards[i][j].length; n++){
                boards[i][j][n].debuffed = false;
            }}}
}
function bond(){ //universal funkce, volá se na konci cyklu kola
    for(let i = 0; i < boards.length; i++){
        for(let j = 0; j < boards[i].length; j++){
            for(let n = 0; n < boards[i][j].length; n++){
                if(boards[i][j][n].ability=="tightBond"){
                    for(let m = 0; m < boards[i][j].length; m++){
                        if(boards[i][j][m] != boards[i][j][n] && boards[i][j][n].summons == boards[i][j][m].name){
                            boards[i][j][n].power = boards[i][j][n].power*2;
                        }}}}}}
}
function muster(currentPlayer, row, card){
    for(let e = 0; e < playerDecks[currentPlayer].length; e++){
        if(playerDecks[currentPlayer][e].name == card.summons){
            boards[currentPlayer][row].push(playerDecks[currentPlayer][e]);
            playerDecks[currentPlayer].splice(e, 1);
            e--;
        }
    }

    for(let e = 0; e < playerHands[currentPlayer].length; e++){
        if(playerHands[currentPlayer][e].name == card.summons){
            boards[currentPlayer][row].push(playerHands[currentPlayer][e]);
            playerHands[currentPlayer].splice(e, 1);
            e--;
        }
    }
}
function commanderHornSet(row){
    //přidat funkci která dává horn na true podle toho kam se to dá
}
function commanderHornBuff(){ //ošklivý ale funkční
    for(let i = 0; i < horn.length; i++){
        for(let j = 0; j < horn[i].length; j++){
            if(horn[i][j] == true){
                for(let n = 0; n < boards[i][j].length; n++){
                    if(boards[i][j][n].isLegend = false){
                        boards[i][j][n].power = boards[i][j][n].power*2;
                    }}}}}
}

function moraleBoost(player, row, boosterIndex){ //do seznamu se musí ukládat informace o tom kdo boostuje, volá se na konci cyklu
    for(let n = 0; n < boards[player][row].length; n++){
        if(n != boosterIndex){
            boards[player][row][n].power += 1;
        }}
}

//Schopnosti
function playHorn(row){
    horn[currentPlayer][row] = true;
}
function scorch(){  //do rozsahu testování plně funkční
    let strongest = {};
    let t = 0;
    for(let i = 0; i < boards.length; i++){
        for(let j = 0; j < boards[i].length; j++){
            for(let n = 0; n < boards[i][j].length; n++){
                element = boards[i][j][n];
                if($.isEmptyObject(strongest)){
                    powerIndex = [element.power, i, j, n, t];
                    strongest[element.name] = powerIndex;
                }
                else if(element.power>powerIndex[0]){
                    strongest = {};
                    t = 0;
                    powerIndex = [element.power, i, j, n, t];
                    strongest[element.name] = powerIndex;
                }
                else if(element.power == powerIndex[0]){
                    if(powerIndex[1] == i && powerIndex[2] == j){
                        t++;
                    }else{
                        t=0;
                    }
                    powerIndex = [element.power, i, j, n, t];
                    strongest[element.id+t] = powerIndex;
                }  
            }
        }
    }
    console.log(strongest);
    for(let key in strongest){
        let i = strongest[key][1];
        let j = strongest[key][2];
        let n = strongest[key][3];
        let t = strongest[key][4];
        boards[i][j].splice(n-t, 1);
    }
}
function scorchMelee(currentPlayer){
    let strongest = {};
    let a;
    let t = 0;
    if(currentPlayer == 1){a = 0}
    else{a = 1}
    for(let n = 0; n < boards[a][0].length; n++){
        let element = boards[a][0][n];
        if($.isEmptyObject(strongest)){
            powerIndex = [element.power, n, t];
            strongest[element.id+t] = powerIndex;
        }
        else if(powerIndex[0] < element.power){
            t = 0;
            powerIndex = [element.power, n, t];
            strongest = {};
            strongest[element.id+t] = powerIndex;
        }
        else if(powerIndex[0] == element.power){
            t++;
            strongestIndex = [element.power, n, t];
            strongest[element.id+t] = strongestIndex;
        }
    }
    for(let key in strongest){
        console.log(strongest);
        n = strongest[key][1];
        t = strongest[key][2];
        boards[a][0].splice(n-t, 1);
    }
}
