let hand = document.getElementsByClassName("cardInHand");
console.log(hand);
for (let i = 0; i < hand.length; i++) {
    hand[i].addEventListener("click", function(e){
        console.log("clicked");
        switch (Card.type) {
            case "Melee":
                document.getElementById("own_melee").appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "cardPlayed"
                document.getElementById(e.target.id).style.margin = "2px";
                break;
            case "Ranged":
                document.getElementById("own_ranged").appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "cardPlayed"
                document.getElementById(e.target.id).style.margin = "2px";
                break;
            case "Siege":
                document.getElementById("own_arty").appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "cardPlayed"
                document.getElementById(e.target.id).style.margin = "2px";
                break;
            case "Weather":
                document.getElementById("weather_cards").appendChild(document.getElementById(e.target.id));
                document.getElementById(e.target.id).className = "weatherCardPlayed";
                document.getElementById(e.target.id).style.margin = "2px";
                break;
        };
    });
}