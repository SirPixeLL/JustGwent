let cardArray = [];

  //vytváří instance třídy Card ze slovníku karet
  //dává instance třídy karet do seznamu
  //přidává ke každé kartě id (id pouze pro jednu stranu = nepřítel může mít kartu se stejným id)

console.log(cardDict);
let i = 0;
for (let key in cardDict) {
  let cardValues = cardDict[key];
  if(cardValues.isSpecial){
    for(let id = 0; id < 3; id++){
      makeCardObject(cardValues, id, i);
    }
  }
  else{
    makeCardObject(cardValues, "", i);
  }
  i++;
}

function makeCardObject(cardValues, id, i){
  let card = new Card(
    Object.keys(cardDict)[i]+id,
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
console.log(cardArray);