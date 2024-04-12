document.getElementById("body_div").style.aspectRatio = $(document).width() / $(document).height();;


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
    updateBoards(currentPlayer);
    updateLeaders();
    drawHand(currentPlayer);
    updateLives(currentPlayer);
    updateHorn();
    discardPile();
}

function playerUpdate(currentPlayer){
    //leader, pfp, name, faction
    let enemyHUD =[document.getElementById("enemy_leader"), document.getElementById("enemy_pic"), document.getElementById("enemy_name"), document.getElementById("enemy_faction"), document.getElementById("enemy_remaining_div")];
    let ownHUD =[document.getElementById("own_leader"), document.getElementById("own_pic"), document.getElementById("own_name"), document.getElementById("own_faction"), document.getElementById("own_remaining_div")];
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
        cardBack = players[i].faction;
        cardBack = cardBack.replace(" ", "_");
        cardBack = cardBack.replace("'", "");
        HUD[i][4].style.backgroundImage = "url(./images/cards/cardBacks/"+cardBack+"_Back.jpg)";
    }
}

function spliceSelected(which, from){
    which.forEach( element => {
        if(from.indexOf(element) != -1){ //indexOf vrací '-1' pokud se hledaná hodnota nenachází v seznamu
            from.splice(from.indexOf(element), 1);
        } else{console.log("Element se nenachází v zadaném poli")}})
}

switchScreen = document.getElementById("switch_screen");
switchPlayer = document.getElementById("switch_player");

function hideSwitchScreen(){
    changeButton("pass");

    switchScreen.style.display = "none";
    switchScreen.style.opacity = "0";

    currentPlayer = 1-currentPlayer;
    updateAll(currentPlayer);
    sumPowers(currentPlayer);
    playerUpdate(currentPlayer);
    if(players[currentPlayer].redraw) showMedicUI("redraw");
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
    clearLeaders();
    drawLeaders(currentPlayer);
}

function assingToBoard(card){
    let toSide;
    if(card.ability == "Spy") toSide = 1-currentPlayer;
    else toSide = currentPlayer; 
    switch(card.type){
        case "Melee":
            boards[toSide][0].push(card);
            break;
        case "Ranged":
            boards[toSide][1].push(card);
            break;
        case "Siege":
            boards[toSide][2].push(card);
    }
}

let graphic = document.getElementById("end_round_graphic");
function showEndGraphic(winner, gameEnded){
    let result = document.getElementById("end_round_result");
    let resultText;
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
        hideEndGraphic(gameEnded);
    }, 1500);

}

function hideEndGraphic(gameEnded){
    fadeOut(graphic)
    if(gameEnded){

        document.getElementById("player0_result").innerHTML=players[0].name;
        document.getElementById("player1_result").innerHTML=players[1].name;
        let endGameTitle = document.getElementById("end_game_title");
        if(roundResults[roundResults.length-1][2] == "draw") endGameTitle.innerHTML="DRAW";
        else endGameTitle.innerHTML=roundResults[roundResults.length-1][2].name+" WINS!";

        if(roundResults.length == 3) document.getElementById("round3_results").style.display="inline-block";
        for(let r = 0; r < roundResults.length; r++){
            for(let p = 0; p < 2; p++){
                document.getElementById("p"+p+"_round"+r+"_result").innerHTML=roundResults[r][p];
                if(roundResults[r][2] == players[p]) document.getElementById("p"+p+"_round"+r+"_result").style.color ="yellow";
            }  
        }
        document.getElementById("end_game_results").style.display="inline-block";
    }
    else{
        setTimeout(()=>{
        graphic.style.display="none";
        discardCardsOnRoundEnd();
        players[0].hasPassed = false;
        players[1].hasPassed = false;
        switchFunction();
        }, 1500);
    }
    
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
    if($.isEmptyObject(players[currentPlayer].discardedCards)==false){
        let card = players[currentPlayer].discardedCards[players[currentPlayer].discardedCards.length - 1];
        card.drawTo(document.getElementById("own_discarded"))
    }
    if($.isEmptyObject(players[1-currentPlayer].discardedCards)==false){
        let card = players[1-currentPlayer].discardedCards[players[1-currentPlayer].discardedCards.length - 1];
        card.drawTo(document.getElementById("enemy_discarded"))
    }
 }

function startingGraphic(version, picker = 0){
    let startScreen = document.getElementById("start_screen");
    let startText = document.getElementById("player_to_start");
    let startButton = document.getElementById("start_button");
    let startTitle = document.getElementById("start_text");
    let p1button = document.getElementById("player1_button");
    let p2button =document.getElementById("player2_button");
    p1button.style.display = "none";
    p2button.style.display = "none";
    startScreen.style.display="block";
    if(version == "default"){
        startTitle.innerHTML = "Player to start:";
        startText.style.color="#90979a";
        let i = 0
        startText.innerHTML=players[i].name;
        let intervalSpeed = 10;
        setTimeout(()=>{
                timer = function() {
                    intervalSpeed = intervalSpeed*1.2;
                    startText.innerHTML=players[i].name;
                    i = 1-i;
                    if(intervalSpeed < 600) {
                        setTimeout(timer, intervalSpeed);

                    }
                    else{
                        startText.style.color="#aa9667";
                        startText.innerHTML=players[currentPlayer].name;
                        startButton.addEventListener("click", startH);
                        document.addEventListener("keydown", startButtonFunc);
                    }
                }
                timer();
        },500)
    }
    else{
        p1button.style.display = "inline-block";
        p2button.style.display = "inline-block";
        startTitle.innerHTML=players[picker].name+" picks whos playing first:"
        p1button.innerHTML = players[0].name;
        p2button.innerHTML = players[1].name;
        p1button.addEventListener("click", function(){
            startButton.removeEventListener("click", startH)
            currentPlayer = 0;
            startText.innerHTML = players[currentPlayer].name;
            startButton.addEventListener("click",startH)
            document.addEventListener("keydown", startButtonFunc);
        })
        p2button.addEventListener("click", function(){
            startButton.removeEventListener("click", startH)
            currentPlayer = 1
            startText.innerHTML = players[currentPlayer].name;
            startButton.addEventListener("click", startH)
            document.addEventListener("keydown", startButtonFunc);
        })
    }
 }

function startH(){
    document.getElementById("start_screen").style.display="none";
    localGameStart();
    addCardListener();
    showMedicUI("redraw");
    document.getElementById("start_button").removeEventListener("click", startH)
}

function startButtonFunc(event) {
    if(event.key == " " &&  document.getElementById("start_screen").style.display == "block") {
        document.getElementById("start_screen").style.display="none";
        localGameStart();
        addCardListener();
        showMedicUI("redraw");
        document.removeEventListener("keydown", startButtonFunc)
    }
}