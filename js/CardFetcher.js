let cardArray = [];

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

function makeCardObject(cardValues, idn, i){
  let card = new Card(
    Object.keys(cardDict)[i]+idn,
    cardValues.name,
    cardValues.power,
    cardValues.type,
    cardValues.picture,
    cardValues.faction,
    cardValues.ability,
    cardValues.summons,
    cardValues.isLegend,
    cardValues.isSpecial
  );
  cardArray.push(card); 
};