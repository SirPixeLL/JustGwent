//leaderů funkčních: 16/20

function playLeader(leader){
    switch(leader.name){
        //monsters
        case "Eredin Bréacc Glas: The Trecherous": //bez chyb
            //všechny spy power*2
            spyDouble = true;
            endTurn();
            break;
        case "Eredin: Bringer of Death":
            //medic do ruky
            showMedicUI("takeEnemysDiscarded")
            break;
        case "Eredin: Commander of the Red Riders": //bez chyb
            //horn na melee
            commanderHornSet(new Card("","",0,"Melee","","","","","",""), currentPlayer);
            endTurn();
            break;
        case "Eredin: Destroyer of Worlds":
            //vybere 2 karty z ruky, vyhodí je a vezme si z balíčku libovolnou kartu
            break;
        case "Eredin: King of the Wild Hunt": //bez chyb
            //z balíčku si vybere weather kartu
            showMedicUI("leaderWeather")
            break;


        //Nilfgaard
        case "Emhyr var Emreis: Emperor of Nilfgaard": //bez chyb
            //podívá se na 3 náhodné karty z nepřítelovi ruky
            showMedicUI("lookAtEnemy");
            endTurn();
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
        case "Foltest: Lord Commander of the North": //bez chyb
            //zahraje clearWeather
            clearWeather();
            changeButton("switch");
            endTurn();
            break;
        case "Foltest: Son of Medell": //bez chyb
            //Scorchne nepřátelskou ranged
            scorchRow(1);
            updateBoards(currentPlayer);
            break;
        case "Foltest: The Siegemaster": //bez chyb
            //commanderHorn na siege
            commanderHornSet(new Card("","",0,"Siege","","","","","",""), currentPlayer);
            endTurn();
            break;
        case "Foltest: The Steel-Forged": //bez chyb
            //Scorchne nepřátelskou siege
            scorchRow(2);
            updateBoards(currentPlayer);
            break;
        
        //Scoia'tael
        case "Francesca Findabair: Daisy of the Valley": //bez chyb
            //na začátku hry si vezme o kartu navíc
            //oštřeno v Player.j
            break;
        case "Francesca Findabair: Hope of the Aen Seidhe": //hrozně se mi to nechce testovat
            //posune agile jednotky na nejvýhodnější místo
            for(let j = 0; j < 2; j++){
                for(let n =  boards[currentPlayer][j].length - 1; n>=0; n--){
                    if(boards[currentPlayer][j][n].isAgile){
                        let virtualPower = boards[currentPlayer][j][n].basepower;
                        if(weather[1-j]) virtualPower = 1;
                        if(1-j == 0 && players[currentPlayer].bard) virtualPower = virtualPower*2;
                        if(horn[currentPlayer][1-j]) virtualPower = virtualPower*2;
                        boards[currentPlayer][1-j].forEach(element => {
                            if(element.ability=="moraleBoost") virtualPower++;
                        });
                        if(virtualPower>boards[currentPlayer][j][n].power){
                            if(1-j == 0) row = "Melee";
                            else row = "Ranged";
                            boards[currentPlayer][j][n].type = row;
                            boards[currentPlayer][1-j].push(boards[currentPlayer][j][n]);
                            boards[currentPlayer][j].splice(n, 1);
                        }
                    }
                }
            }
            endTurn();
            updateHorn();
            updateBoards(currentPlayer);
            break;
        case "Francesca Findabair: Pureblood Elf": //bez chyb
            //zahraje z balíčku frost
            leaderWeather("BitingFrost");
            //bez endturn
            break;
        case "Francesca Findabair: Queen of Dol Blathanna": //bez chyb
            //Scorchne nepřátelskou melee
            scorchRow(0);
            updateBoards(currentPlayer);
            break;
        case "Francesca Findabair: The Beautiful": //bez chyb
            //commanderHorn na ranged
            commanderHornSet(new Card("","Commander's Horn",0,"Ranged","","","","","",""), currentPlayer);
            endTurn();
    updateLeaders();
    }
}

function leaderWeather(effect){
    players[currentPlayer].deck.every(element => {
        if(element.ability==effect){
            console.log(element);
            play(element,currentPlayer);
            let cardElement = createCardElement(element);
            cardElement.className = "weatherCardPlayed";
            console.log(cardElement);
            document.getElementById("weather_cards").append(cardElement);
            spliceSelected([element],players[currentPlayer].deck);
            return false;
        }
        return true;
    });
    endTurn();
}