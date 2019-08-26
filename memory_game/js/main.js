console.log("Up and running!");
alert('Hello, friends.');
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay =[];

var cardOne = "user flipped " + cards[0];
cardsInPlay.push(cardOne);
console.log(cardOne);

var cardTwo = "user flipped " + cards[2];
cardsInPlay.push(cardTwo);
console.log(cardTwo);

if (cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!");

} else if (cardsInPlay[0] !== cardsInPlay[1]){alert("Sorry,Try Again!");

}
