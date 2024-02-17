function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function spliceSelected(which, from){
    which.forEach( element => {
        if(from.indexOf(element) != -1){ //indexOf vrací '-1' pokud se hledaná hodnota nenachází v seznamu
            from.splice(from.indexOf(element), 1);
        } else{console.log("Element se nenachází v zadaném poli")}})
}

switchScreen = document.getElementById("switch_screen");
function hideSwitchSreen(){
    switchScreen.style.display = "none";
    switchScreen.style.opacity = "0";

    currentPlayer = 1-currentPlayer;
    //console.log(currentPlayer)
    updateAll(currentPlayer);
    sumPowers(currentPlayer);
    //console.log(JSON.parse(JSON.stringify(boards)));
}
//////////////////////////////////////////////////////////////

localGame();
function localGame(){
    playersTotalPower = [0, 0];
    
    //console.log(JSON.parse(JSON.stringify(boards)));
    
    currentPlayer = startingPlayer();
    localGameStart();
}

function drawNewCard(currentPlayer){
    //přidá hráči do ruky kartu z jeho balíčku
    newCardIndex = getRandomInt(playerDecks[currentPlayer].length);
    playerHands[currentPlayer].push(playerDecks[currentPlayer][newCardIndex]);
    playerDecks[currentPlayer].splice(newCardIndex, 1);
}

function localGameStart(){
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 10; j++){
            drawNewCard(i);
        }}
    
    drawHand(currentPlayer);
    sumPowers(currentPlayer);
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
    endTurn();
}

//Weather effects
function weather(row){ //row = číslo(0 melee, 1 ranged, 2 siege)
    //specifická funkce, nastavuje debuff status na určitý řádek, power se řeší na konci cyklu kola
    for(let i = 0; i < 2; i++){
        for(let n = 0; n < boards[i][row].length; n++){
            if(boards[i][row][n].isLegend == false){
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


//Schopnosti
function bond(i, j, n){ //volá se na konci cyklu kola
    if(boards[i][j][n].ability=="TightBond"){
        boards[i][j][n].power = boards[i][j][n].basepower;
        for(let m = 0; m < boards[i][j].length; m++){
            if(boards[i][j][m] != boards[i][j][n] && boards[i][j][n].summons == boards[i][j][m].name){
                boards[i][j][n].power = boards[i][j][n].power+boards[i][j][n].basepower;
            }}}
}
function muster(currentPlayer, card){
    let toRemove = [];

    //z balíčku
    playerDecks[currentPlayer].forEach(element=>{
        let i = playerDecks[currentPlayer].indexOf(element); 
        if(element.name === card.summons){
            
            switch(element.type){
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
            boards[currentPlayer][row].push(element);
            toRemove.push(element);
        }
    })
    spliceSelected(toRemove, playerDecks[currentPlayer]);
    //z ruky
    toRemove = [];
    playerHands[currentPlayer].forEach(element=>{
        let i = playerHands[currentPlayer].indexOf(element); 
        if(element.name === card.summons && element.id != card.id){
            
            switch(element.type){
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
            boards[currentPlayer][row].push(element);
            toRemove.push(element);
        }
    })
    spliceSelected(toRemove, playerHands[currentPlayer]);
}

function moraleBoost(i, j, lastBooster){
    lastBooster = {};
    boards[i][j].forEach(element =>{
        if(element.ability == "MoraleBoost" && element != lastBooster){
            boards[i][j].forEach( e =>{
                if(e == element){
                    lastBooster = element;
                }
                else{
                    e.power++;
                }
            })
            console.log(lastBooster);
        }
    })
}


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
                    }}}}
    }
    //console.log(strongest);
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

function sumPowers(currentPlayer){
    UI = [[],[]];
    enemySiege = document.getElementById("enemy_siege_value");
    enemyRanged = document.getElementById("enemy_ranged_value");
    enemyMelee = document.getElementById("enemy_melee_value");
    ownSiege = document.getElementById("own_siege_value");
    ownRanged = document.getElementById("own_ranged_value");
    ownMelee = document.getElementById("own_melee_value");
    enemyTotal = document.getElementById("enemy_total_value_p");
    ownTotal = document.getElementById("own_total_value_p");
    
    cardsLeft = [[],[]];
    enemyDeckNum = document.getElementById("enemy_remaining");
    enemyHandNum = document.getElementById("enemy_card_num");
    ownDeckNum = document.getElementById("own_remaining");
    ownHandNum = document.getElementById("own_card_num");
    switch (currentPlayer) {
        case 0:
            UI = [[ownMelee, ownRanged, ownSiege],[enemyMelee, enemyRanged, enemySiege]];
            Total = [ownTotal, enemyTotal];
            cardsLeft = [[ownDeckNum, ownHandNum],[enemyDeckNum, enemyHandNum]];
            break;
        case 1:
            UI = [[enemyMelee, enemyRanged, enemySiege],[ownMelee, ownRanged, ownSiege]];
            Total = [enemyTotal, ownTotal];
            cardsLeft = [[enemyDeckNum, enemyHandNum],[ownDeckNum, ownHandNum]];
            break;
    }

    playersTotalPower = [0, 0];
    for(let half = 0; half < 2; half++){
        cardsLeft[half][0].innerHTML = playerDecks[half].length;
        cardsLeft[half][1].innerHTML = playerHands[half].length;
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
        //console.log(playersTotalPower);
        Total[half].innerHTML = playersTotalPower[half];
    }
    ///console.log(boards[currentPlayer]);
}

function endTurn(){
    for(let i = 0; i < boards.length; i++){
        for(let j = 0; j < boards[i].length; j++){
            for(let n = 0; n < boards[i][j].length; n++){
                boards[i][j][n].power = boards[i][j][n].basepower;
                if(boards[i][j][n].debuffed){boards[i][j][n].power = 1; console.log(boards[i][j][n])} //weather debuff
                bond(i, j, n); //bond
            }
        moraleBoost(i, j);    
        commanderHornBuff(i,j);
        }}
    sumPowers(currentPlayer);
    updateAll(currentPlayer);
    //konec tahu --------------sem přijde switchScreen
    if(hasPassed[1-currentPlayer] && hasPassed[currentPlayer] == false){
        //hraje dál
    }
    else{
        removeCardListener();
        if(hasPassed[currentPlayer] && hasPassed[1-currentPlayer]){
            endRound();
        }
        switchScreen.style.display = "inline-block";
        setTimeout(()=>{
            switchScreen.style.opacity = "1";
        }, 0);
        document.addEventListener("keydown", (event) => {
            if(event.code == "Space" && switchScreen.style.display == "inline-block") {
                hideSwitchSreen();
            }
        })
    }
}

function drawHand(currentPlayer){
    //console.log(playerHands, playerHands[currentPlayer]);
    playerHands[currentPlayer].forEach(element => {
        drawCard(element);
    });
    addCardListener();
}

function updateBoards(currentPlayer){
    clearBoards();
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 3; j++){
            boards[i][j].forEach(element => {
                element.drawOnBoards(i, j, currentPlayer);
            });
           
        }
    }
}

function updateLives(currentPlayer){
    enemyLives = [document.getElementById("enemy_heart1"), document.getElementById("enemy_heart2")];
    ownLives = [document.getElementById("own_heart1"), document.getElementById("own_heart2")];
    livesUI = [];

    if(currentPlayer == 0){
        livesUI = [ownLives, enemyLives];
    }else{
        livesUI = [enemyLives, ownLives];
    }

    for(let i=0; i < 2; i++){
        livesUI[i].forEach(element =>{
            element.style.display="none";
        })
        for(let j = 0; j < lives[i]; j++){
            livesUI[i][j].style.display="inline-block";
        }
    }
}

function updateAll(currentPlayer){
    setTimeout(()=>{
        clearHand();
        marginTrueNeckKeys(true);
        updateBoards(currentPlayer);
        drawHand(currentPlayer);
        updateLives(currentPlayer);
    }, 1); //kvůli musteru idk
}

function passButton(){
    hasPassed[currentPlayer] = true;
    endTurn();
    marginTrueNeckKeys(false);
}



function endRound(){
    //přidat funkci pro případ že by nilfgaard remizoval
    if(playersTotalPower[currentPlayer] > playersTotalPower[1-currentPlayer]){
        enemyLives[lives[1-currentPlayer]-1].style.display="none";
        lives[1-currentPlayer]--;

    }
    else if(playersTotalPower[currentPlayer] < playersTotalPower[1-currentPlayer]){
        ownLives[lives[currentPlayer]-1].style.display="none";
        lives[currentPlayer]--;

    }
    else{
        ownLives[lives[currentPlayer]-1].style.display="none";
        enemyLives[lives[1-currentPlayer]-1].style.display="none";

        lives[0]--;
        lives[1]--;
    }
    hasPassed = [false, false];
    currentPlayer = 1 - currentPlayer;
    updateAll(currentPlayer);
    addCardListener();
}