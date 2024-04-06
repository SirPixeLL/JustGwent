
//instance se vytváří po vytvoření decku
class Player{
    constructor(id, name, faction, leader, deck){
        this.id = id;
        this.name = name;
        this.faction = faction;
        this.leader = leader;
        this.deck = deck;
        
        this.hasPassed = false;
        this.lives = 2;
        this.discardedCards = [];
        this.leaderUses = false;
        this.hand = [];
        this.totalPower = 0;
        
        this.bard = false;
        this.redraw = true;

        let pictureSrc = "./images/"+this.faction+".png";
        pictureSrc = pictureSrc.replaceAll(" ","_");
        pictureSrc = pictureSrc.replaceAll(/[':]/g, '');
        this.factionCOA = pictureSrc;

        this.entireDeck = copyDeck(deck);
    }

    drawNewCard(){
        let newCardIndex = getRandomInt(this.deck.length);
        this.hand.push(this.deck[newCardIndex]);
        this.deck.splice(newCardIndex, 1);
    }

    populateHand(){
        for(let i = 0; i < 10; i++){
            this.drawNewCard();
        }
        
        //Daisy of the Valley ability:
        if(this.leader.name == "Francesca Findabair: Daisy of the Valley"){
            this.drawNewCard();
            this.leader.playable = false;
        }
    }

    rollback(){
        this.leader.playable = true;
        this.deck = copyDeck(this.entireDeck);
        
        this.hasPassed = false;
        this.lives = 2;
        this.discardedCards = [];
        this.leaderUses = false;
        this.hand = [];
        this.totalPower = 0;
        
        this.bard = false;
        this.redraw = true;
    }
}

function copyDeck(arr) {
    let copy = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            copy[i] = deepCopy(arr[i]);
        } else {
            copy[i] = arr[i];
        }
    }
    return copy;
}