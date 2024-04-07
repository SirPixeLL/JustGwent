let menu = document.getElementById("main_menu");
let customizer = document.getElementById("deck_customizer");
let rightTitle = document.getElementById("right_side_title");
let leftTitle = document.getElementById("left_side_title");
let availableCards = document.getElementById("available_cards");
let cardsInDeck = document.getElementById("cards_in_deck");
let numberDivs = document.getElementsByClassName("number_card_div");
let menu_button = document.getElementById("back_to_menu");

function localClassic(){
    mode = 2;
    menu.style.display = "none";
    customizer.style.display = "block";
    menu_button.style.display = "inline-block";
    gameStart();
}

function localBalanced(){
    mode = 1;
    menu.style.display = "none";
    customizer.style.display = "block";
    menu_button.style.display = "inline-block";
    rightTitle.style.display = "none";
    leftTitle.style.display = "none";
    availableCards.style.display = "none";
    cardsInDeck.style.display = "none";
    for (let i = 0; i < numberDivs.length; i++) {
        numberDivs[i].style.display = "none";
        
    }
    gameStart();
}
