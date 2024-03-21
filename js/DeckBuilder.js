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
            appendLeader = new Leader(e.id+"A", e.name, e.faction, e.quote);
            p1leaders.push(appendLeader);
        }
        if(e.faction == p2faction){
            appendLeader = new Leader(e.id+"B", e.name, e.faction, e.quote);
            p2leaders.push(appendLeader);
        }
        
    })
}

if(mode == 1){

    balancedSpecial();

    cardArray.forEach(element =>{
        //Player1
        if((element.faction == p1faction || element.faction == "Neutral") && !element.isSpecial){
            appendCard = new Card(element.id+"A", element.name, element.power, element.type, element.faction, element.ability, element.isLegend, element.hasVariations, element.quote);
            p1deck.push(appendCard);
        }
        
        //Player2
        if((element.faction == p2faction || element.faction == "Neutral") && !element.isSpecial){
            appendCard = new Card(element.id+"B", element.name, element.power, element.type, element.faction, element.ability, element.isLegend, element.hasVariations, element.quote);
            p2deck.push(appendCard);
        }
    })
    
    //Specials 
    function balancedSpecial(){
        cardArray.forEach(element =>{
            if(element.isSpecial){
                if(element.id.charAt(element.id.length-1)!=2){ //limituje počet special karet
                    p1deck.push(new Card(element.id+"A", element.name, element.power, element.type, element.faction, element.ability, element.summons, element.isLegend, element.hasVariations, element.quote));
                    p2deck.push(new Card(element.id+"B", element.name, element.power, element.type, element.faction, element.ability, element.summons, element.isLegend, element.hasVariations, element.quote));
                }
            }
        })
    }
    splitLeadersArray();
    let p1Leader = p1leaders[1];
    let p2Leader = p2leaders[2];
    let player1 = new Player(1, p1Leader.name, p1faction, p1Leader , p1deck);
    let player2 = new Player(2, p2Leader.name, p2faction, p2Leader, p2deck);
    players = [player1, player2];
}