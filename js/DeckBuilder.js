let p1deck = [];
let p1faction =  "Northern Realms";

let p2deck = [];
let p2faction = "Monsters";

//Balanced = 1
//Classic = 2
let mode = 1;

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
    let p1Leader = new Leader("A","Francesca Findabair: The Beautiful", "Nilfgaard");
    let p2Leader = new Leader("B","Foltest: The Siegemaster", "Nilfgaard");
    

    let player1 = new Player(1, p1Leader.name, p1faction, p1Leader , p1deck, "images/profile_pic.jpg");
    let player2 = new Player(2, p2Leader.name, p2faction, p2Leader, p2deck, "images/profile_pic2.jpg");
    players = [player1, player2];
}