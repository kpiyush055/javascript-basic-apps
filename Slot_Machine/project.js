//Deposite money
//Determine number of lines to bet on
//collect the bet amount
//Spin the slot machine
//check if the user won 
//If the user won then reward him with money
//Play again

// 
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A : 2,
    B : 4,
    C : 6,
    D : 8

}
const SYMBOL_VALUES ={
    A : 5,
    B : 4,
    C : 3,
    D : 2
}

const deposit = () => {
    while (true){
        const depositAmount = prompt("Enter a deposite amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <=0) {
            console.log("Please enter a valid deposite amount!");
        }else{
            return numberDepositAmount;
        }
    }
};

const getNumberofLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on: ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Enter Valid line: ");
        }else {
            return numberOfLines;
        }
    }
};
const getBet = (balance, lines) => {
    while (true) {
      const bet = prompt("Enter the bet per line: ");
      const numberBet = parseFloat(bet);
  
      if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
        console.log("Invalid bet, try again.");
      } else {
        return numberBet;
      }
    }
  };

const spin = () =>{
    const symbols = [];
    for (let[symbol, count] of Object.entries(SYMBOLS_COUNT)){
        console.log(symbol, count);
        for (let i = 0; i < count; i++){
            symbols.push(symbol);
        }
        console.log(symbols);
    }
}
spin();

let balance = deposit();
let lines =  getNumberofLines();
console.log(balance);
const bet = getBet(balance,lines);
console.log(bet);




