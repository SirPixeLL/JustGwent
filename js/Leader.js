class Leader{
    constructor(idn , name, faction){
        this.id = name+idn;
        this.name = name;
        this.faction = faction;
        this.playable = true;
    }
}

function drawLeader(leader) {
    let cardFrame = document.createElement("div");
        cardFrame.className = "cardLeader";
        cardFrame.id = leader.id;
        let pictureSrc = "url(../images/cards/"+leader.name+".png";
        pictureSrc = pictureSrc.replaceAll(" ","_");
        pictureSrc = pictureSrc.replaceAll(/[':]/g, '');
        cardFrame.style.backgroundImage = pictureSrc;
        cardFrame.style.backgroundSize = "100% 100%";
        if (leader.playable == false) {
            cardFrame.style.backgroundBlendMode = "multiply";
            cardFrame.style.pointerEvents = "none";
        }
        return cardFrame;
}

function drawLeaders(currentPlayer) {
    let ownLeaderDiv = document.getElementById("own_leader_div");
    let enemyLeaderDiv = document.getElementById("enemy_leader_div");
    ownLeaderDiv.appendChild(drawLeader(currentPlayer.leader));
    enemyLeaderDiv.appendChild(drawLeader(1-currentPlayer.leader));
}

function clearLeaders() {
    let ownLeaderDiv = document.getElementById("own_leader_div");
    let enemyLeaderDiv = document.getElementById("enemy_leader_div");
    ownLeaderDiv.removeChild(ownLeaderDiv.firstChild);
    enemyLeaderDiv.removeChild(enemyLeaderDiv.firstChild);
}