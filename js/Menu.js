let inclick = 0;

button1 = document.getElementById("menu_button1");
button2 = document.getElementById("menu_button2");
button3 = document.getElementById("menu_button3");

menu_title = document.getElementById("menu_title");
button_text1 = document.querySelectorAll("#menu_button_text")[0];
button_text2 = document.querySelectorAll("#menu_button_text")[1];

deck_builder1 = document.getElementById("deck1");
deck_builder2 = document.getElementById("deck2");

player1_name = document.getElementById("player_name1");
player2_name = document.getElementById("player_name2");

function localMenu(){
    inclick++;
    menu_title.innerHTML = "LOCAL";
    button1.setAttribute("onclick","localClasic()");
    button2.setAttribute("onclick","localBalanced()");
    button3.style.display = "block";
    button_text1.innerHTML = "CLASIC";
    button_text2.innerHTML = "BALANCED";
}

function multiplayerMenu(){
    //inclick++;
}

function localClasic(){
    inclick++;
    menu_title.innerHTML = "CLASIC";
    button1.setAttribute("onclick", "localPlay()");
    button_text1.innerHTML = "PLAY";
    button2.style.display = "none";

    displayLocalDeckbuilders();

    deck_builder2.setAttribute("onclick","clasicDeckbuild(player2)");
    deck_builder1.setAttribute("onclick","clasicDeckbuild(player1)");
}

function localBalanced(){
    inclick++;
    menu_title.innerHTML = "BALANCED";
    button1.setAttribute("onclick", "localPlay()");
    button_text1.innerHTML = "PLAY";
    button2.style.display = "none";

    displayLocalDeckbuilders();

    deck_builder2.setAttribute("onclick","balancedDeckbuild(player2)");
    deck_builder1.setAttribute("onclick","balancedDeckbuild(player1)");
}

function menuBack(){
    console.log(inclick);
    if (inclick == 1){
        button1.setAttribute("onclick","localMenu()");
        button2.setAttribute("onclick","multiplayerMenu()");
        button3.style.display = "none";
        button_text1.innerHTML = "LOCAL";
        button_text2.innerHTML = "MULTIPLAYER";
        menu_title.innerHTML = "GWENT ONLINE";

        inclick--;
    } else if (inclick == 2){
        localMenu();
        button2.style.display = "block";
        hideLocalDeckbuilders();
        inclick -= 2;
    }
}
function displayLocalDeckbuilders(){
    deck_builder1.style.display = "block";
    deck_builder2.style.display = "block";
    player1_name.style.display = "block";
    player2_name.style.display = "block";
}
function hideLocalDeckbuilders(){
    deck_builder1.style.display = "none";
    deck_builder2.style.display = "none";
    player1_name.style.display = "none";
    player2_name.style.display = "none";
}

function returnToMenu(){
    document.getElementById("switch_screen").style.display="none";
    document.getElementById("switch_button").setAttribute("onclick", "hideSwitchScreen()");
    document.getElementById("switch_text").innerHTML = "To switch players press";

    document.getElementById("main_menu").style.display = "inline-block";
}