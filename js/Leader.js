class Leader{
    constructor(id, name, faction, quote){
        this.id = id;
        this.name = name;
        this.faction = faction;
        this.playable = true;
        this.quote = quote;
    }
}

function drawLeader(leader) {
    let cardFrame = document.createElement("div");
        cardFrame.className = "cardLeader";
        cardFrame.id = "Leader" + leader.id;
        let pictureSrc = "url(../images/cards/leaders/"+leader.name+".png";
        pictureSrc = pictureSrc.replaceAll(" ","_");
        pictureSrc = pictureSrc.replaceAll(/[':]/g, '');
        cardFrame.style.backgroundImage = pictureSrc;
        if (leader.playable == false) {
            cardFrame.style.backgroundBlendMode = "multiply";
            cardFrame.style.pointerEvents = "none";
        }
        return cardFrame;
}

function drawLeaders(currentPlayer) {
    let ownLeaderDiv = document.getElementById("own_leader_div");
    let enemyLeaderDiv = document.getElementById("enemy_leader_div");
    ownLeaderDiv.appendChild(drawLeader(players[currentPlayer].leader));
    enemyLeaderDiv.appendChild(drawLeader(players[1-currentPlayer].leader));
    if(players[currentPlayer].leader.playable == true) addLeaderListener();
}

function clearLeaders() {
    let ownLeaderDiv = document.getElementById("own_leader_div");
    let enemyLeaderDiv = document.getElementById("enemy_leader_div");
    if (ownLeaderDiv.firstChild) ownLeaderDiv.removeChild(ownLeaderDiv.firstChild);
    if (enemyLeaderDiv.firstChild) enemyLeaderDiv.removeChild(enemyLeaderDiv.firstChild);
}