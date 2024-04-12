class Casino { //step 1 to create a casino class    
   constructor (name, fakeCoin) { //constructor added 
    this.name = name; 
    this.timesPlayed = 0; //"this" keyword is used to reference fields added by step 3 with value at 0 
    this.winnings = 0; 
    this.fakeCoin = fakeCoin; 
   }

   playGame (betAmount) { //method created that checks if Math.random () is <= 0.5 
    this.timesPlayed += 1; 
    if (Math.random () > 0.5 && this.fakeCoin == false) { //if false, console.log that the player won
        console.log("You won " + betAmount *
        (this.timesPlayed) + "dollars from "
        + this.name + "!");
        this.winnings += this.timesPlayed * betAmount;
        console.log("Current Winnings: " + this.winnings);
    } else {
        console.log(this.name + " wins!");
        this.timesPlayed = 0; 
        this.winnings = 0;
    }
   }

   rolldice(sides) {
    console.log(Math.floor(Math.random() * sides) + 1);
   }
};

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
