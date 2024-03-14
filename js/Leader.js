class Leader{
    constructor(id, name, faction){
        this.id = id;
        this.name = name;
        this.faction = faction;
        this.playable = true;
    }
}

function drawLeader(leader) {
    let cardFrame = document.createElement("div");
        cardFrame.className = "cardLeader";
        cardFrame.id = "Leader" + leader.id;
        /*
        let pictureSrc = "url(../images/cards/"+leader.name+".png";
        pictureSrc = pictureSrc.replaceAll(" ","_");
        pictureSrc = pictureSrc.replaceAll(/[':]/g, '');
        cardFrame.style.backgroundImage = pictureSrc;
        cardFrame.style.backgroundSize = "100% 100%";
        */
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
    addLeaderListener();
}

function clearLeaders() {
    let ownLeaderDiv = document.getElementById("own_leader_div");
    let enemyLeaderDiv = document.getElementById("enemy_leader_div");
    ownLeaderDiv.removeChild(ownLeaderDiv.firstElementChild);
    enemyLeaderDiv.removeChild(enemyLeaderDiv.firstElementChild);
    console.trace()
}