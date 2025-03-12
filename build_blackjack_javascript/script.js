// let cardsList = [firstCard, secondCard];
let cardsList = [];

// let sum = firstCard + secondCard;
let sum = 0;

//Boolean variable for state value finder
let hasBlackJack = false;

//Boolean variable for out of the game
let isAlive = false;

//declare the var message and assign the val as empty string
let message = "";

let messageEl = document.getElementById("message-el");
//instead of the getElementById we can use querySelector
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); //called particular Id
// let sumEl = document.querySelector(".sum-el") --> called particular className
let cardEl = document.getElementById("card-el");

// console.log(sum);

//create a player object. Give it 2 keys name, tips
let player = {
    name: "Thulasi",
    tips: 145
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.tips;

//Make this function return a random number - 1 to 13
function getRandomCard() {

    //if 1      ---> return 11
    //if 1 - 13 ---> return 10

    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }

}


//Onclick function declared,
//create a new function called startGame() that calls renderGame()
// function startGame() {
function renderGame() {

    sumEl.textContent = "Sum: " + sum;
    //insteadof using individual we using list - "Array" 
    //cardEl.textContent = "Cards: " + firstCard + " - " + secondCard;
    // cardEl.textContent = "Cards: " + cardsList[0] + " - " + cardsList[1];

    // using array
    cardEl.textContent = "Cards: ";
    // iterate the loop
    for (let i = 0; i < cardsList.length; i++) {
        cardEl.textContent += cardsList[i] + " ";
    }

    //applied the message var to change the values
    if (sum < 21) {
        // console.log("Do you want to draw a new card?");
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        // console.log("Wohoo!! You have got BlackJack!!!");
        message = "Wohoo!! You have got BlackJack!!!";
        hasBlackJack = true;
    } else {
        // console.log("You are out of the Game...");    
        message = "You are out of the Game...";
        isAlive = false;
    }
    //log it out
    // console.log(message);

    //display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message;
}

function startGame() {
    isAlive = true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cardsList = [firstCard, secondCard];

    sum = firstCard + secondCard;

    renderGame();
}


//newCard function declare
function newCard() {

    if (isAlive === true && hasBlackJack === false) {

        // console.log("NewCard.....")
        let card = getRandomCard();

        //using array add the value
        cardsList.push(card);
        console.log(cardsList);

        sum += card;

        // startGame();
        renderGame();
    }

}






//Cash Out!
//JScript don't no state so we create a boolean variable and given into the statement
//sum === 21 statement is true then won that game go for the cashout
// console.log(hasBlackJack);

//Log it out to chk that you're doing it right
//we create a boolean variable to find the statement is in game or not
// console.log(isAlive);










