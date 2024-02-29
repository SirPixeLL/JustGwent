boards = [[[],[],[]],[[],[],[]]]
horn = [[false, false, false],[false, false, false]];
hornUI = [[[],[],[]],[[],[],[]]]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function drawHand(currentPlayer){
    players[currentPlayer].hand.forEach(element =>{
        drawCard(element);
    })
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
        for(let j = 0; j < players[i].lives; j++){
            livesUI[i][j].style.display="inline-block";
        }
    }
}

function updateAll(currentPlayer){
    clearHand();
    marginTrueNeckKeys(false);
    updateBoards(currentPlayer);
    drawHand(currentPlayer);
    updateLives(currentPlayer);
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
        HUD[i][0].src=players[i].leaderPic;
        HUD[i][1].src=players[i].leaderPic;
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
function hideSwitchSreen(){
    changeButton("pass")

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