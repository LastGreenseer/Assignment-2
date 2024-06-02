// What I'm trying to do:
//Create a cash machine that dispences cash if the pin is correct
//and your balance is equalt to, or greater than the ammout you're trying to withdraw.

//First draft/ referance

// let accNum = 21436587;
// let amount = 540;

// const cashWithdrawal = (amount, accNum) => {
//   if accNum = 21436587,
//   console.log (amount),
//   else ("incorrect pin. Try again")
// };

// cashWithdrawal(120, 12345678);

//What's the problem?
//I need the function to check the account number is correct and there is enough to withdraw

//Why is that not happening?
//I need to set a variable for the accNum and run an 'if' function if the accNum matches

// Did that help?
//No. I still need to withdraw an amout and the 'if' function did not work.

//Try something else:
//First make a function to withdraw and amount, then add in the pin check

//Final version (all steps applied)
let balance = 5000;
let accNumber = 21436587;
let amount = 600;
const cashWithdrawl = (amount, accNum) => {
  console.log(balance);
  balance = balance - amount;
  console.log(balance);
  console.log(
    `You withfrew ${amount} from account No. ${accNum}; your new balance is ${balance}. Thank you`
  );
};

if (accNumber == 21436587 && balance >= amount) {
  cashWithdrawl(amount, accNumber);
} else {
  console.log("Invalid account number or insufficent funds. Try again?");
}

//What is happening?
//I've successfully run a fuction to withdraw an amount, however it does not check the account number

//What are my options?
//Before the function of withdrawing cash is ran, an 'if' statement needs to be made to check the accNum matches

//How did it go? What did you learn?
//After multiple failed attempts and reviewing the 'if, else' section, the function is working as intended!

// The problem has been solved!

//What's next?
//to check if the available balance is equal too or greater than the amount being withdrew

//What are my options?
// Have the 'if' statement to also only run if the balance is equal too or greater than the amount being withdrawn

//How did it go and what have I learned?
//After reviewing how to properly use the '&' opperator, I successfully made the function run as intended!

//The problem has been solved!
//Task complete!

echo "# Assignment-2" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/LastGreenseer/Assignment-2.git
git push -u origin main