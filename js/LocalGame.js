localGame();
function localGame(){
    playerFactions = [p1faction, p2faction];
    playerDecks = [p1deck, p2deck];
    playerHands = [[],[]]; 
    playerLeaderUsed = [false, false];
    playerDiscarded = [[],[]];
    boards = [[[playerDecks[0][1]],[],[]],[[playerDecks[1][1], playerDecks[1][2], playerDecks[1][3]],[],[]]]
    horn = [[false, false, false],[false, false, false]];

    playersTotalPower = [0, 0];
    
    console.log(JSON.parse(JSON.stringify(boards)));
    
    localGameStart();
    currentPlayer = startingPlayer();
    console.log(playerHands[currentPlayer]);
    playerHands[currentPlayer].forEach(element => {
        element.drawcard();
    });


    for(let i = 0; i < 2; i++){
        for(let j = 0; j < boards[i].length; j++){
            boards[i][j].forEach(element => {
                element.drawOnBoard(i, j, currentPlayer);
            });
        }
    }
    console.log(JSON.parse(JSON.stringify(boards)));
}

function getCurrentPlayer(){
    try{
        return currentPlayer;
    }
    catch{}
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

//zahraje kartu
function play(card, currentPlayer){
    switch(card.ability){
        case "BitingFrost":
            weather(0);
            break;
        case "ImpenetrableFog":
            weather(1);
            break;
        case "TorrentialRain":
            weather(2);
            break;
        case "ClearWeather":
            clearWeather;
            break;
        case "Muster":
            muster(currentPlayer, card);
            break;
        case "CommandersHorn":
            commanderHornSet(card, currentPlayer);
            break;
        case "Scorch":
            if(card.name == "Villentretenmerth"){ //ještě francesca má stejnou abilitu
                scorchMelee(currentPlayer);
            }else{
                scorch();
            }
            break;
        case "Medic":
            medic(currentPlayer);
            break;
    }
    
    end_turn(currentPlayer);
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
function bond(i, j, n){ //volá se na konci cyklu kola
    if(boards[i][j][n].ability=="TightBond"){
        boards[i][j][n].power = boards[i][j][n].basepower;
        for(let m = 0; m < boards[i][j].length; m++){
            if(boards[i][j][m] != boards[i][j][n] && boards[i][j][n].summons == boards[i][j][m].name){
                boards[i][j][n].power = boards[i][j][n].power+boards[i][j][n].basepower;
            }}}
}
function muster(currentPlayer, card){
    for(let e = 0; e < playerDecks[currentPlayer].length; e++){
        if(playerDecks[currentPlayer][e].name == card.summons){
            switch(playerDecks[currentPlayer][e].type){
                case "Melee":
                    row = 0;
                    break;
                case "Ranged":
                    row = 1;
                    break;
                case "Siege":
                    row = 2;
                    break;
            }
            boards[currentPlayer][row].push(playerDecks[currentPlayer][e]);
            playerDecks[currentPlayer].splice(e, 1);
            e--;
        }
    }

    /*for(let e = 0; e < playerHands[currentPlayer].length; e++){
        if(playerHands[currentPlayer][e].name == card.summons){
            boards[currentPlayer][row].push(playerHands[currentPlayer][e]);
            playerHands[currentPlayer].splice(e, 1);
            e--;
        }
    }*/
}
function commanderHornSet(card, currentPlayer){
    if(card.type = "Melee"){
        horn[currentPlayer][0] = true;
    }
    //přidat funkci která dává horn na true podle toho kam se to dá
}
function commanderHornBuff(i, j){ //ošklivý ale funkční
    if(horn[i][j] == true){
        for(let n = 0; n < boards[i][j].length; n++){
            if(boards[i][j][n].isLegend == false){
                boards[i][j][n].power = boards[i][j][n].power*2;
            }}}
}

function moraleBoost(player, row, boosterIndex){ //do seznamu se musí ukládat informace o tom kdo boostuje, volá se na konci cyklu
    for(let n = 0; n < boards[player][row].length; n++){
        if(n != boosterIndex){
            boards[player][row][n].power += 1;
        }}
}

//Schopnosti
function scorch(){  //do rozsahu testování plně funkční
    let strongest = {};
    let t = 0;
    for(let i = 0; i < boards.length; i++){
        for(let j = 0; j < boards[i].length; j++){
            for(let n = 0; n < boards[i][j].length; n++){
                element = boards[i][j][n];
                if(element.isLegend == false){
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
        if(element.isLegend == false){
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
        
    }
    for(let key in strongest){
        //console.log(strongest);
        n = strongest[key][1];
        t = strongest[key][2];
        boards[a][0].splice(n-t, 1);
    }
}

function medic(currentPlayer){

}

function SUMpowers(currentPlayer){
    UI = [[],[]];
    enemySiege = document.getElementById("enemy_arty_value");
    enemyRanged = document.getElementById("enemy_ranged_value");
    enemyMelee = document.getElementById("enemy_melee_value");
    ownSiege = document.getElementById("own_arty_value");
    ownRanged = document.getElementById("own_ranged_value");
    ownMelee = document.getElementById("own_melee_value");
    enemyTotal = document.getElementById("enemy_total_value");
    ownTotal = document.getElementById("own_total_value");
    
    switch (currentPlayer) {
        case 0:
            
            UI = [[ownMelee, ownRanged, ownSiege],[enemyMelee, enemyRanged, enemySiege]];
            Total = [ownTotal, enemyTotal];
            break;
        case 1:
            UI = [[enemyMelee, enemyRanged, enemySiege],[ownMelee, ownRanged, ownSiege]];
            Total = [enemyTotal, ownTotal];
            break;
    }

    playersTotalPower = [0, 0];
    for(let half = 0; half < 2; half++){
        for(let row = 0; row < 3; row++){
            rowPower = 0;
            for(item = 0; item < boards[half][row].length; item++){
                //console.log(boards[half][row][item]);
                rowPower += boards[half][row][item].power;
            }
            //console.log(rowPower);
            //console.log(UI[half]);
            UI[half][row].innerHTML = rowPower;
            playersTotalPower[half] += rowPower
        }
        console.log(playersTotalPower);
        Total[half].innerHTML = playersTotalPower[half];
    }

    console.log(boards);
}

function end_turn(currentPlayer){
    for(let i = 0; i < boards.length; i++){
        for(let j = 0; j < boards[i].length; j++){
            for(let n = 0; n < boards[i][j].length; n++){
                if(boards[i][j][n].debuffed){boards[i][j][n].power = 1} //weather debuff
                bond(i, j, n) //bond

            }
        commanderHornBuff(i,j);
        }}
    SUMpowers(currentPlayer);
}