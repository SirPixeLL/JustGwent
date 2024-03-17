cardArray = [];
leaderArray = [];
  //vytváří instance třídy Card ze slovníku karet
  //dává instance třídy karet do seznamu
  //přidává ke každé kartě id (id pouze pro jednu stranu = nepřítel může mít kartu se stejným id(ošetřeno v deckBuilderu))

let i = 0;
for (let key in cardDict) {
  let cardValues = cardDict[key];
  if(cardValues.number > 1){
    for(let id = 0; id < cardValues.number; id++){
      makeCardObject(cardValues, id, i);
    }
  }
  else{
    makeCardObject(cardValues, "", i);
  }
  i++;
}
i = 0
for (let key in leaderDict){
  let leaderValues = leaderDict[key];
  makeLeaderObject(leaderValues, i++);
}
function makeLeaderObject(leaderValues, i){
  let leader = new Leader(
    Object.keys(leaderDict)[i],
    leaderValues.name,
    leaderValues.faction,
    leaderValues.quote
  )
  leaderArray.push(leader);
}

function makeCardObject(cardValues, idn, i){
  let card = new Card(
    Object.keys(cardDict)[i]+idn,
    cardValues.name,
    cardValues.power,
    cardValues.type,
    cardValues.faction,
    cardValues.ability,
    cardValues.summons,
    cardValues.isLegend,
    cardValues.hasVariations
  );
  cardArray.push(card); 
};