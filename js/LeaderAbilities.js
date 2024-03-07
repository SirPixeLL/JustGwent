//leaderů funkčních: 10/20

function playLeader(leader){
    switch(leader.name){
        //monsters
        case "Eredin Bréacc Glas: The Trecherous":
            //všechny spy power*2
            break;
        case "Eredin: Bringer of Death":
            //medic do ruky
            break;
        case "Eredin: Commander of the Red Riders": //bez chyb
            //horn na melee
            commanderHornSet(new Card("","",0,"melee","","","","","",""), currentPlayer);
            endTurn();
            break;
        case "Eredin: Destroyer of Worlds":
            //vybere 2 karty z ruky, vyhodí je a vezme si z balíčku libovolnou kartu
            break;
        case "Eredin: King of the Wild Hunt":
            //z balíčku si vybere weather kartu
            break;


        //Nilfgaard
        case "Emhyr var Emreis: Emperor of Nilfgaard":
            //podívá se na 3 náhodné karty z nepřítelovi ruky
            break;
        case "Emhyr var Emreis: His Imperial Majesty": //bez chyb
            //zahraje torrential rain z balíčku
            leaderWeather("TorrentialRain");
            //bez endTurn
            break;
        case "Emhyr var Emreis: Invader of the North": //bez chyb
            //medici oživujou random
            medicsRandom = true;
            break;
        case "Emhyr var Emreis: The Relentless":
            //vezme si do ruky kartu z nepřítelaova discarded
            break;
        case "Emhyr var Emreis: The White Flame": //bez chyb - musí se přidat podmíka na playable někde mimo
            //zakáže hraní leaderů
            players[1-currentPlayer].leader.playable = false;
            endTurn();
            break;
        
        //Northern Realms
        case "Foltest: King of Temeria": //bez chyb
            //zahraje z decku fog
            leaderWeather("ImpenetrableFog");
            break;
        case "Foltest: Lord Commander of the North": //teoreticky funkční
            //zahraje clearWeather
            clearWeather();
            changeButton("switch");
            endTurn();
            break;
        case "Foltest: Son of Medell":
            //Scorchne nepřátelskou ranged
            break;
        case "Foltest: The Siegemaster": //bez chyb
            //commanderHorn na siege
            commanderHornSet(new Card("","",0,"siege","","","","","",""), currentPlayer);
            endTurn();
            break;
        case "Foltest: The Steel-Forged":
            //Scorchne nepřátelskou siege
            break;
        
        //Scoia'tael
        case "Francesca Findabair: Daisy of the Valley": //bez chyb
            //na začátku hry si vezme o kartu navíc
            //oštřeno v Player.js
            break;
        case "Francesca Findabair: Hope of Aen Seidhe":
            //posune agile jednotky na nejvýhodnější místo
            break;
        case "Francesca Findabair: Pureblood Elf": //bez chyb
            //zahraje z balíčku frost
            leaderWeather("BitingFrost");
            //bez endturn
            break;
        case "Francesca Findabair: Queen of Dol Blathanna": //bez chyb
            //Scorchne nepřátelskou melee
            scorchMelee();
            updateBoards(currentPlayer);
            break;
        case "Francesca Findabair: The Beautiful": //bez chyb
            //commanderHorn na ranged
            commanderHornSet(new Card("","",0,"Ranged","","","","","",""), currentPlayer);
            endTurn();
    }
}

function leaderWeather(effect){
    players[currentPlayer].deck.every(element => {
        if(element.ability==effect){
            console.log(element);
            play(element,currentPlayer);
            spliceSelected([element],players[currentPlayer].deck);
            return false;
        }
        return true;
    });
}