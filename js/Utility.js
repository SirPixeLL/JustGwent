boards = [[[],[],[]],[[],[],[]]]
horn = [[false, false, false],[false, false, false]];
hornUI = [[[],[],[]],[[],[],[]]];
weather = [false, false, false];
medicsRandom = false;
spyDouble = false;
bard = [false, false];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomUniqueInt(min, max, num) {
    if (max - min + 1 < num) {
        return [];
    }
    let result = [];
    while (result.length < num) {
        let randomNum = Math.floor(Math.random() * (max - min)) + min;
        if (!result.includes(randomNum)) {
            result.push(randomNum);
        }
    }
    return result;
}

function drawHand(currentPlayer){
    players[currentPlayer].hand.forEach(element =>{
        drawCard(element);
    })
    addCardListener();
}

function updateBoards(currentPlayer){
    let enemySiege = document.getElementById("enemy_siege");
    let enemyRanged = document.getElementById("enemy_ranged");
    let enemyMelee = document.getElementById("enemy_melee");
    let ownSiege = document.getElementById("own_siege");
    let ownRanged = document.getElementById("own_ranged");
    let ownMelee = document.getElementById("own_melee");
    
    let cardsOnBoard = currentPlayer == 0 ? [[ownMelee, ownRanged, ownSiege], [enemyMelee, enemyRanged, enemySiege]] : [[enemyMelee, enemyRanged, enemySiege], [ownMelee, ownRanged, ownSiege]]

    clearBoards();
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 3; j++){
            boards[i][j].forEach(element => {
                element.drawTo(cardsOnBoard[i][j]);
            });
        }
    }
    sumPowers(currentPlayer);
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
        for(let j = 0; j < players[i].lives; j++){
            livesUI[i][j].style.display="inline-block";
        }
    }
}

function updateAll(currentPlayer){
    clearHand();
    clearLeaders();
    margin = -18;
    updateBoards(currentPlayer);
    updateLeaders();
    drawHand(currentPlayer);
    updateLives(currentPlayer);
    updateHorn();
    discardPile();
}

function playerUpdate(currentPlayer){
    //leader, pfp, name, faction
    let enemyHUD =[document.getElementById("enemy_leader"), document.getElementById("enemy_pic"), document.getElementById("enemy_name"), document.getElementById("enemy_faction")];
    let ownHUD =[document.getElementById("own_leader"), document.getElementById("own_pic"), document.getElementById("own_name"), document.getElementById("own_faction")];
    let HUD =[];
    if(currentPlayer == 0){
        HUD = [ownHUD, enemyHUD];
    }else{
        HUD = [enemyHUD, ownHUD];
    }
    for(let i = 0; i < 2; i++){
        HUD[i][1].src=players[i].factionCOA;
        HUD[i][2].innerHTML=players[i].name;
        HUD[i][3].innerHTML=players[i].faction;
    }
}

function spliceSelected(which, from){
    which.forEach( element => {
        if(from.indexOf(element) != -1){ //indexOf vrací '-1' pokud se hledaná hodnota nenachází v seznamu
            from.splice(from.indexOf(element), 1);
        } else{console.log("Element se nenachází v zadaném poli")}})
}

switchScreen = document.getElementById("switch_screen");

function hideSwitchScreen(){
    changeButton("pass");

    switchScreen.style.display = "none";
    switchScreen.style.opacity = "0";

    currentPlayer = 1-currentPlayer;
    updateAll(currentPlayer);
    sumPowers(currentPlayer);
    playerUpdate(currentPlayer);
}

function cycleBoard(func){
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 3; j++){
            for(let n = 0; n < boards[i][j].length; n++){
                func(i,j,n);
            }
        }
    }
}

function updateHorn(){
    let enemyHorn = [document.getElementById("enemy_melee_boost"),document.getElementById("enemy_ranged_boost"),document.getElementById("enemy_siege_boost"),];
    let ownHorn = [document.getElementById("own_melee_boost"),document.getElementById("own_ranged_boost"),document.getElementById("own_siege_boost"),];
    let hornHUD = [];

    if(currentPlayer == 0) hornHUD = [ownHorn, enemyHorn];
    else hornHUD = [enemyHorn, ownHorn];

    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 3; j++){
            if($.isEmptyObject(hornUI[i][j]));
            else hornUI[i][j][0].drawTo(hornHUD[i][j]);
        }
    }
}
function updateLeaders(){
    drawLeaders(currentPlayer);
}

function assingToBoard(card){
    switch(card.type){
        case "Melee":
            boards[currentPlayer][0].push(card);
            break;
        case "Ranged":
            boards[currentPlayer][1].push(card);
            break;
        case "Siege":
            boards[currentPlayer][2].push(card);
    }
}
let graphic = document.getElementById("end_round_graphic");
function showEndGraphic(winner, gameEnded){
    let result = document.getElementById("end_round_result");
    let resultText;
    
    if(gameEnded){
        document.getElementById("switch_text").innerHTML = "Return to menu";
        document.getElementById("switch_button").setAttribute("onclick", "returnToMenu()");
    }
    if(winner == "draw"&&gameEnded) resultText = "Game ended in a draw!"; 
    else if(winner == "draw") resultText = "Round ended in a draw!";
    else if(gameEnded) resultText = winner.name + " won the game!";
    else resultText = winner.name + " won the round!";
    result.innerHTML = resultText;
    graphic.style.display="inline-block";
    graphic.className ="endVisible";
    setTimeout(()=>{
        graphic.style.opacity = "0.75";
    }, 0);
    setTimeout(()=>{
        hideEndGraphic();
    }, 1500);

}
function hideEndGraphic(){
    fadeOut(graphic)
    setTimeout(()=>{
        graphic.style.display="none";
        discardCardsOnRoundEnd();
        players[0].hasPassed = false;
        players[1].hasPassed = false;
        switchFunction();
    }, 1500);
}
function gameEnded(){
    for(let i = 0; i < 2; i++){
        if(players[i].lives == 0) return true;
    }
}
function fadeOut(element) {
    let interval = setInterval(function() {
       let opacity = element.style.opacity;
       if (opacity > 0) {
          opacity -= 0.1;
          element.style.opacity = opacity;
       }
       else{
        clearInterval(interval);
       }
    }, 50);
    setTimeout(() => {
        element.style.opacity="0";
    }, 50);
 }
 
 function discardPile(){
    console.log(players[currentPlayer].discardedCards);
    if($.isEmptyObject(players[currentPlayer].discardedCards)==false){
        let card = players[currentPlayer].discardedCards[players[currentPlayer].discardedCards.length - 1];
        console.log(card);
        card.drawTo(document.getElementById("own_discarded"))
    }
 }