
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
    }
}