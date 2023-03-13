/// Create an array
var computerChoices = ["r", "p", "s"];

var wins = 0;
var losses = 0;
var draws = 0;

for(var i = 0; i < 5;i++){
    
    var index = Math.floor(Math.random() * computerChoices.length);
    
    var userChoice = prompt("Choose 'r', 'p' , 's' to Play");
    // userChoice = userChoice.toLocaleLowerCase();
    var computerGuess = computerChoices[index]
    console.log(computerGuess)

    // Main Conditionals
    if(userChoice === "r" || userChoice === "p" || userChoice === "s"){

    alert("Computer Chose: "+ computerGuess);

    // Win or lose or Draw conditionals
    if((userChoice === "r" && computerGuess === "r")
    || (userChoice === "r" && computerGuess === "r")
    || (userChoice === "r" && computerGuess === "r")){
        ++draws
        alert("You've drawn: "+ draws + "time(s)!");
    } else if ((userChoice === "r" && computerGuess === "s")
    || (userChoice === "p" && computerGuess === "r")
    || (userChoice === "s" && computerGuess === "p")){
        ++wins
        alert("You've won: "+ wins + "time(s)!");
    } else {
        ++losses
        alert("You've lost: "+ losses + "time(s)!");
    }
}
   
    // console.log("User Choice: ",userChoice)
    // console.log("Computer Choice: ",computerChoices[index])
}  

alert("In Total You have: "+wins+" Wins! " + draws+ " :Draws! and "+losses +" :Losses! ");