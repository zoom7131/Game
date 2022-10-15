var compScore = 0;
var playerScore = 0;
var rounds = 1;

var compare = function(choice1, choice2){
    if (choice1 == choice2){
        return("The result is a tie!");
    }
    if(choice1 == "rock"){
        if(choice2 == "scissors"){
            playerScore++;
            return("rock wins");
        }
        else{
            compScore++;
            return("paper wins");
        }
    }
    if(choice1 == "paper"){
        if(choice2 == "rock"){
            playerScore++;
            return ("paper wins");
        }
        else {
            compScore++;
            return ("scissors wins");
        }
    }
    if(choice1 == "scissors"){
        if(choice2 == "rock"){
            compScore++;
            return ("rock wins");
        }
        else {
            playerScore++;
            return ("scissors wins");
        }
    }
};

while(playerScore < 5 && compScore < 5 && rounds < 10){

    console.log("** ROUND" + " " + rounds + " **\n");

    var userChoice = prompt("Do you choose rock, paper or scissors?");

    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors"){
        console.log("You did not chose rock, paper or scissors!");
    }
    else {
        console.log("You chose" + " " + userChoice);

        var computerChoice = Math.random();

        if (computerChoice <= 0.33){
            computerChoice="rock";
            console.log("The computer chose" + " " + computerChoice);
        }
        else if (computerChoice >= 0.67) {
            computerChoice="scissors";
            console.log("The computer chose" + " " + computerChoice);
        }
        else {
            computerChoice="paper";
            console.log("The computer chose" + " " + computerChoice);
            }

        console.log("\n" + compare(userChoice, computerChoice));
    }
    console.log("\nThe score is" + " " + playerScore + " "+ "Player," + " " + compScore + " " + "Computer\n" );
    rounds++;
}

if (playerScore > compScore){
    console.log("*******************\nYou win!\n*******************");
}
else if (playerScore < compScore){
    console.log("*******************\nComputer wins!\n*******************");
}
else {
    console.log("*******************\nIt's a gremlin tie!\n*******************");
}