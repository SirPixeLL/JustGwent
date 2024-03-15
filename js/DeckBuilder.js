let p1deck = [];
let p1faction =  "Nilfgaardian Empire";

let p2deck = [];
let p2faction = "Monsters";

//Balanced = 1
//Classic = 2
let mode = 1;

function splitLeadersArray(){
    p1leaders = [];
    p2leaders = [];
    leaderArray.forEach(e =>{
        if(e.faction == p1faction){
            appendLeader = new Leader(e.id+"A", e.name, e.faction);
            p1leaders.push(appendLeader);
        }
        if(e.faction == p2faction){
            appendLeader = new Leader(e.id+"B", e.name, e.faction);
            p2leaders.push(appendLeader);
        }
        
    })
}

if(mode == 1){

    balancedSpecial();

    cardArray.forEach(element =>{
        //Player1
        if((element.faction == p1faction || element.faction == "Neutral") && !element.isSpecial){
            appendCard = new Card(element.id+"A", element.name, element.power, element.type, element.faction, element.ability, element.summons, element.isLegend, element.isSpecial);
            p1deck.push(appendCard);
        }
        
        //Player2
        if((element.faction == p2faction || element.faction == "Neutral") && !element.isSpecial){
            appendCard = new Card(element.id+"B", element.name, element.power, element.type, element.faction, element.ability, element.summons, element.isLegend, element.isSpecial);
            p2deck.push(appendCard);
        }
    })
    
    //Specials 
    function balancedSpecial(){
        let timesAdded = 0;
        cardArray.forEach(element =>{
            if(element.isSpecial){
                if(element.id.charAt(element.id.length-1)!=2){
                    p1deck.push(new Card(element.id+"A", element.name, element.power, element.type, element.faction, element.ability, element.summons, element.isLegend, element.isSpecial));
                    p2deck.push(new Card(element.id+"B", element.name, element.power, element.type, element.faction, element.ability, element.summons, element.isLegend, element.isSpecial));
                }
            }
        })
    }
    splitLeadersArray();
    let p1Leader = p1leaders[4];
    let p2Leader = p2leaders[4];
    
    let picture1Src = "../images/"+p1faction+".png";
    picture1Src = picture1Src.replaceAll(" ","_");
    picture1Src = picture1Src.replaceAll(/[':]/g, '');
    let picture2Src = "../images/"+p2faction+".png";
    picture2Src = picture2Src.replaceAll(" ","_");
    picture2Src = picture2Src.replaceAll(/[':]/g, '');
    let player1 = new Player(1, p1Leader.name, p1faction, p1Leader , p1deck, picture1Src);
    let player2 = new Player(2, p2Leader.name, p2faction, p2Leader, p2deck, picture2Src);
    players = [player1, player2];
}