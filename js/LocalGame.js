localGame();
function localGame(){    
    //console.log(JSON.parse(JSON.stringify(boards)));
    
    currentPlayer = startingPlayer();
    localGameStart();
    console.log(players[currentPlayer].leader);
}
function localGameStart(){
    playerUpdate(currentPlayer);
        for(let i = 0; i < 2; i++){
            players[i].populateHand();
        }
    drawHand(currentPlayer);
    updateLeaders(currentPlayer);
    sumPowers(currentPlayer);
}
function startingPlayer(){
    //"Coinflip" na začátku hry
    //scoia'tael jede první
    let coinflip;
    if(players[0].faction == "Scoia'tael" && players[1].faction == "Scoia'tael"){
        coinflip = getRandomInt(2);
    }
    else if(players[0].faction == "Scoia'tael"){
        coinflip = 0;
    }
    else if(players[1].faction == "Scoia'tael"){
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
            weather[0] = true;
            break;
        case "ImpenetrableFog":
            weather[1] = true;
            break;
        case "TorrentialRain":
            weather[2] = true;
            break;
        case "ClearWeather":
            clearWeather();
            break;
        case "Muster":
            muster(currentPlayer, card);
            break;
        case "CommandersHorn":
            if(card.name != "Dandelion") commanderHornSet(card, currentPlayer);
            else players[currentPlayer].bard = true;
            break;
        case "Scorch":
            if(card.name == "Villentretenmerth") scorchRow(0);
            else if(card.name == "Toad") scorchRow(1);
            else if(card.name == "Schirrú") scorchRow(2);
            else scorch();
            break;
        case "Medic":
            medic(card);
            break;
        case "Spy":
            spy();
            break;
    }
    changeButton("switch");
    endTurn();
}

//Weather effects
function setWeatherDebuff(){ //row = číslo(0 melee, 1 ranged, 2 siege)
    //specifická funkce, nastavuje debuff status na určitý řádek, power se řeší na konci cyklu kola
    cycleBoard((i,j,n)=>{
        if(weather[j] == true && boards[i][j][n].isLegend == false) boards[i][j][n].debuffed = true;
        else boards[i][j][n].debuffed = false;
    })
}
function clearWeather(){
    let weatherSlot = document.getElementById("weather_cards");
    let weatherCards = document.getElementById("weather_cards").children;
    console.debug(weatherCards);
    if (weatherCards.length > 0) {
        for (let i = 0; weatherCards.length+1 > i; i++) {
            console.debug(weatherCards[i]);
            weatherSlot.removeChild(weatherCards[i]);
        }
    }
    weather[0] = false;
    weather[1] = false;
    weather[2] = false;
    cycleBoard((i,j,n)=>{
        boards[i][j][n].debuffed = false;
    })
}

let uHorn = 0;
function commanderHornSet(card, currentPlayer){
    if(card.type == "Melee"){
        row = 0;        
    }
    else if(card.type == "Ranged"){
        row = 1;
    }
    else row = 2;
    horn[currentPlayer][row] = true;
    hornUI[currentPlayer][row].push(new Card("Commanders_Horn"+uHorn+"U", "Commanders Horn",null,"Horn","Neutral", "CommandersHorn", false, false));
    uHorn++;
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
            if(boards[i][j][m] != boards[i][j][n] && boards[i][j][n].name == boards[i][j][m].name){
                boards[i][j][n].power = boards[i][j][n].power+boards[i][j][n].basepower;
            }}}
}
function muster(currentPlayer, card){
    let toRemove = [];
    let cardGroup = card.name.split(" ");

    //z balíčku
    players[currentPlayer].deck.forEach(element=>{
        let elementGroup = element.name.split(" "); 
        if(elementGroup[0] === cardGroup[0] && element.name != "Gaunter O'Dimm"){
            if(element.name == "Gaunter O'Dimm" || element.name == "Arachas Behemoth");
            else{
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
        }
    })
    spliceSelected(toRemove, players[currentPlayer].deck);

    //z ruky
    toRemove = [];
    players[currentPlayer].hand.forEach(element=>{ 
        let elementGroup = element.name.split(" "); 
        if(elementGroup[0] === cardGroup[0]){
            if(element.name == "Gaunter O'Dimm" || element.name == "Arachas Behemoth");
            else {
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
        }
    })
    spliceSelected(toRemove, players[currentPlayer].hand);
}

function moraleBoost(i, j){
    lastBooster = {};
    boards[i][j].forEach(element =>{
        if(element.ability == "MoraleBoost" && element != lastBooster){
            boards[i][j].forEach( e =>{
                if(e == element){
                    lastBooster = element;
                }
                else{
                    if(e.isLegend == false){
                       e.power++;
                        e.isBoosted = true; 
                    }
                }
            })
        }
    })
}

function scorch(){  //do rozsahu testování plně funkční
    let strongest = {};
    let t = 0;
    cycleBoard(function(i,j,n){
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
                }}
    })   
    for(let key in strongest){
        let i = strongest[key][1];
        let j = strongest[key][2];
        let n = strongest[key][3];
        let t = strongest[key][4];
        players[i].discardedCards.push(boards[i][j][n-t]);
        boards[i][j].splice(n-t, 1);
    }
}
function scorchRow(row){
    let strongest = {};
    let a = 1-currentPlayer;
    let t = 0;
    for(let n = 0; n < boards[a][row].length; n++){
        let element = boards[a][row][n];
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
        n = strongest[key][1];
        t = strongest[key][2];
        players[a].discardedCards.push(boards[a][row][n-t]);
        boards[a][row].splice(n-t, 1);
    }
}

function medic(card){
    if(medicsRandom && card.isLegend == false){
        ressurectedIndex = getRandomInt(players[currentPlayer].discardedCards.length);
        ressurectedCard = players[currentPlayer].discardedCards[ressurectedIndex];
        assingToBoard(ressurectedCard);
        play(ressurectedCard, currentPlayer);
        players[currentPlayer].discardedCards.splice(ressurectedIndex, 1);
    }
    else showMedicUI("default");
}

function spy(){
    for(let i = 0; i < 2; i++){
        players[currentPlayer].drawNewCard();
    }
}

function dandelion(i,j){
    if(players[i].bard && j == 0) {
        console.log("je tam");
        for(let e = 0; e < boards[i][0].length; e++){
            if(boards[i][0][e].name != "Dandelion" && boards[i][0][e].isLegend == false) boards[i][0][e].power = boards[i][0][e].power*2;
        }
    }
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

    for(let half = 0; half < 2; half++){
        players[half].totalPower = 0;
        cardsLeft[half][0].innerHTML = players[half].deck.length;
        cardsLeft[half][1].innerHTML = players[half].hand.length;
        for(let row = 0; row < 3; row++){
            rowPower = 0;
            for(item = 0; item < boards[half][row].length; item++){
                rowPower += boards[half][row][item].power;
            }
            UI[half][row].innerHTML = rowPower;
            players[half].totalPower += rowPower
        }
        Total[half].innerHTML = players[half].totalPower;
    }
}

function endTurn(){
    setWeatherDebuff();
    for(let i = 0; i < boards.length; i++){
        for(let j = 0; j < boards[i].length; j++){
            for(let n = 0; n < boards[i][j].length; n++){
                boards[i][j][n].power = boards[i][j][n].basepower;
                if(boards[i][j][n].debuffed) boards[i][j][n].power = 1; //weather debuff
                if(boards[i][j][n].ability=="Spy" && spyDouble) boards[i][j][n].power = boards[i][j][n].power*2;
                bond(i, j, n); //bond
            }
        dandelion(i,j);
        commanderHornBuff(i,j);
        moraleBoost(i, j); 
        }}
    sumPowers(currentPlayer);
    updateAll(currentPlayer);

    if(players[1-currentPlayer].hasPassed && players[currentPlayer].hasPassed == false){
        //hraje dál
        changeButton("pass");
    }
    else{
        removeCardListener();
        if(players[currentPlayer].hasPassed && players[1-currentPlayer].hasPassed){
            endRound();
        }        
    }
}

function passFunction(){
    changeButton("remove");
    players[currentPlayer].hasPassed = true;
    if(players[currentPlayer].hasPassed && players[1-currentPlayer].hasPassed);
    else switchFunction();
    endTurn();

}
function switchFunction(){
    document.activeElement.blur();
    switchScreen.style.display = "inline-block";
    setTimeout(()=>{
        switchScreen.style.opacity = "1";
    }, 0);
    document.addEventListener("keydown", (event) => {
        if(event.key == " " && switchScreen.style.display == "inline-block") {
            hideSwitchScreen();
        }
    })
}

function changeButton(action){
    passButton = document.getElementById("pass_button");
    switch(action){
        case "pass":
            passButton.innerHTML="PASS";
            passButton.setAttribute("onclick", "passFunction()");
            break;
        case "switch":
            passButton.innerHTML="SWITCH";
            passButton.setAttribute("onclick", "switchFunction()");
            break;
        case "remove":
            passButton.setAttribute("onclick", "");
            break;
    }
}

function endRound(){
    clearHand(currentPlayer);
    let winner;
    
    if(players[currentPlayer].totalPower > players[1-currentPlayer].totalPower){
        enemyLives[players[1-currentPlayer].lives-1].style.display="none";
        players[1-currentPlayer].lives--;
        winner = players[currentPlayer];
        if(players[currentPlayer].faction == "Northern Realms"){
            players[currentPlayer].drawNewCard();
        }
    }
    else if(players[currentPlayer].totalPower < players[1-currentPlayer].totalPower){
        ownLives[players[currentPlayer].lives-1].style.display="none";
        players[currentPlayer].lives--;
        winner = players[1-currentPlayer];
        if(players[1-currentPlayer].faction == "Northern Realms"){
            players[1-currentPlayer].drawNewCard();
        }
    }
    else{
        //remízy - nilfgaard
        if(players[0].faction == players[1].faction){
            ownLives[players[currentPlayer].lives-1].style.display="none";
            enemyLives[players[1-currentPlayer].lives-1].style.display="none";

            players[currentPlayer].lives--;
            players[1-currentPlayer].lives--;
            winner = "draw"; 
        }
        else if(players[currentPlayer].faction=="Nilfgaardian Empire"){
            enemyLives[players[1-currentPlayer].lives-1].style.display="none";
            players[1-currentPlayer].lives--;
            winner = players[currentPlayer];
        }
        else if(players[1-currentPlayer].faction=="Nilfgaardian Empire"){
            ownLives[players[currentPlayer].lives-1].style.display="none";
            players[currentPlayer].lives--;
            winner = players[1-currentPlayer];
        }
        else{
            //opakování fuuuj
            ownLives[players[currentPlayer].lives-1].style.display="none";
            enemyLives[players[1-currentPlayer].lives-1].style.display="none";

            players[currentPlayer].lives--;
            players[1-currentPlayer].lives--;
            winner = "draw"; 
        }
    }
    showEndGraphic(winner, gameEnded());
}

function discardCardsOnRoundEnd(){
    console.trace()
    let preserve = [];
    for(let i = 0; i < 2; i++){
        if(players[i].faction == "Monsters"){
            let r = [];
            for(let j = 0; j < 3; j++){
                
                if(boards[i][j].length > 0){
                    console.log(j, boards[i][j].length);
                    r.push(j);
                }
            }
            if($.isEmptyObject(r) == false){
                let j = r[Math.floor((Math.random()*r.length))];
                let n = getRandomInt(boards[i][j].length);
                preserve.push([i,j, boards[i][j][n]]);   
            }
        }
    }
    cycleBoard(function(i,j,n){
        if($.isEmptyObject(preserve) || preserve.length == 1 && preserve[0][0] != i){
            players[i].discardedCards.push(boards[i][j][n])
        }
        else{
            for(let p = 0; p < preserve.length; p++){
                if(i == preserve[p][0] && boards[i][j][n] != preserve[p][2] && boards[i][j][n].isLegend == false){
                    players[i].discardedCards.push(boards[i][j][n]);
                } 
            }
        }
    })
    boards = [[[],[],[]],[[],[],[]]];
    if($.isEmptyObject(preserve) == false){
       for(let a = 0; a < preserve.length; a++){
            console.log(preserve[a]);
            boards[preserve[a][0]][preserve[a][1]].push(preserve[a][2]);
        } 
    }
    horn = [[false, false, false],[false, false, false]];
    hornUI = [[[],[],[]],[[],[],[]]];
}