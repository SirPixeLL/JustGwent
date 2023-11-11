let cardsjson;
let cardArray = [];

  //tahá z JSONu informace o kartách a dělá z nich instance třídy Card
  //dává instance třídy karet do seznamu

function main(){ //sem psát všechno "mimo funkci" kvůli fetchi
    console.log(cardsjson);
    for (let key in cardsjson) {
      let cardValues = cardsjson[key];
      let card = new Card(
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
  }
}


fetch('./cards.json')
  .then(response => response.json())
  .then(data => {
    cardsjson = data;
    main();
  })
  .catch(error => {
    console.error('Chyba při načítání souboru', error);
  });

  
  function getCardArray(){
    return cardArray;
  }