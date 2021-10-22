
var winners = [];
var luckyBall = Math.floor(Math.random() * 18) + 1;

var guessString;
var guesses = [];
var getLucky; // user guess

var numMatches;
var gotLucky; //bool
var grandTotal;


function main(){
// assign winning numbers
for (n = 0; n < 5; n++){
	winners[n] = Math.floor(Math.random() * 48) + 1;
}
winners.sort(function(a,b){return a - b});

// source: https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers
guessString = prompt("Enter your 5 numbers (between 1-48), separated by space. Ex: 1 2 3 4 5", "1 1 1 1 1");
guesses = guessString.split(" ").map(Number);

getLucky = parseInt(prompt("Enter your lucky ball number (between 1-18)", "1"));
gotLucky = (getLucky == luckyBall);

//count matches
for (i = 0; i < guesses.length; i++) {
	guesses[i]
}

// Display the following on the page:
// Your pick - the 5 numbers must be sorted and displayed
document.writeln("Your Pick: " + guessString + " lucky " + getLucky);
document.writeln("Sorted Pick: " + guesses + " lucky " + getLucky);
// The winning numbers and lucky ball number
document.writeln("Winning Numbers: " + winners + " lucky " + luckyBall);
// How many of the first 5 numbers matched
document.writeln("# of Matches: " + numMatches);
// Whether the lucky ball matched
if(gotLucky) {document.writeln("Lucky Ball is a match!")};
if(!gotLucky) {document.writeln("Lucky Ball does not match")};
// What the payout would be for your pick
document.writeln("Your winnings: $" + grandTotal);
return;
}
