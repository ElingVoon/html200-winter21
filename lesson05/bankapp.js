
let x = Number("1000")
let balance = 500;
let lowBalance = 300;
let bankApp = true;
// let bankBalance = ('bankDeposit - bankWithdraw')

while (bankApp) {
  const bankOption = prompt('Enter \nW to Withdraw \nD to Deposit \nB for Balance \nQ to Quit');

  switch (bankOption) {
    case 'W':
    const withdrawAmount = prompt('Enter a amount you want to withdraw');

    if (withdrawAmount >= balance) {
      alert('You do not have sufficient fund in your account');

    } else if (withdrawAmount < balance) {
      alert('You want to withdraw $' + withdrawAmount);
      balance = balance - Number(withdrawAmount)
  }
    break;

    case 'D':
      const depositAmount = prompt('Enter a deposit amount');

      if (depositAmount >= 50001) {
        alert('There is a deposit cap of $50000');
      } else if (depositAmount < 50000) {
        alert('You want to deposit $' + depositAmount);
        balance = balance + Number(depositAmount)
        alert('Your new balance is $' + balance);
      }
      break;

    case 'B':
      alert('Your balance is $' + balance);
      break;

    case 'Q':
      alert('Quit');
      bankApp = false;
      break;
    }
  }




  // prompt('Please enter a amount you want to withdraw')
  // alert('You want to withdraw $' + withdrawAmount)
  // balance = balance - Number(withdrawAmount)
  // alert('Your balance is $' + balance);
  // alert('You want to withdraw $' + withdrawAmount);
  // alert('Your balance is $' + balance);
// } else (withdrawAmount >= lowBalance) {
//   alert('Your balance is $' + balance);
// }

// user has 4 options to choose from

// enter w to withdraw
    //enter how much to withdraw
      //after withdraw enter another option
// enter d to deposit
    //enter how much to deposit
      //after deposit enter another option
// enter b for Balance
    //after checking balance, user should have access to other option
// enter q to quit


// •	The user should see a prompt so they can type which action to perform.
// •	The user will have a list of 4 actions to choose from.
// o	Enter Q to quit (immediately quits the program).
// o	Enter W to withdraw.
// The user will be prompted again to enter an amount to withdraw. After withdrawing money, they should be able to type another option.
// o	Enter D to deposit.
// The user will be prompted again to enter an amount to deposit. After depositing money, they should be able to type another option.
// o	Enter B to view balance.
// The user will see their balance. Afterwards, they should be able to type another option.
// •	The program will loop asking for input until the user enters Q.
