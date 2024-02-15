let p1deck = [];
let p1faction =  "NorthernRealms";

let p2deck = [];
let p2faction = "Nilfgaard";

//Balanced = 1
//Classic = 2
let mode = 1;

if(mode == 1){
    //balancedSpecial();
    cardArray.forEach(element =>{
        //Player1
        if((element.faction == p1faction || element.faction == "Neutral") && !element.isSpecial){
            appendCard = new Card(element.id+"A", element.name, element.power, element.type, element.picture, element.faction, element.ability, element.summons, element.isLegend, element.isSpecial);
            p1deck.push(appendCard);
        }
        
        //Player2
        if((element.faction == p2faction || element.faction == "Neutral") && !element.isSpecial){
            appendCard = new Card(element.id+"B", element.name, element.power, element.type, element.picture, element.faction, element.ability, element.summons, element.isLegend, element.isSpecial);
            p2deck.push(appendCard);
        }
    })
    
    //Specials 
    function balancedSpecial(){
        let timesAdded = 0;
        cardArray.forEach(element =>{
            if(element.isSpecial){
                if(element.id.charAt(element.id.length-1)!=2){
                    p1deck.push(new Card(element.id+"A", element.name, element.power, element.type, element.picture, element.faction, element.ability, element.summons, element.isLegend, element.isSpecial));
                    p2deck.push(new Card(element.id+"B", element.name, element.power, element.type, element.picture, element.faction, element.ability, element.summons, element.isLegend, element.isSpecial));
                }
            }
        })
    }
}