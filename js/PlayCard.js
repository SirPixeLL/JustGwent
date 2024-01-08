let hand = document.getElementsByClassName("cardInHand");
for (let i = 0; i < hand.length; i++) {
    hand[i].addEventListener("click", function(e){
        if (e.target.id.includes("Melee")) {
                document.getElementById("own_melee").appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "cardPlayed"
                document.getElementById(e.target.id).style.margin = "2px";
        };
        if (e.target.id.includes("Ranged")) {
                document.getElementById("own_ranged").appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "cardPlayed"
                document.getElementById(e.target.id).style.margin = "2px";
        };
        if (e.target.id.includes("Siege")) {
                document.getElementById("own_arty").appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "cardPlayed"
                document.getElementById(e.target.id).style.margin = "2px";
        };
        if (e.target.id.includes("Weather")) {
                document.getElementById("weather_cards").appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "weatherCardPlayed"
                document.getElementById(e.target.id).style.margin = "2px";
        };
    });
};