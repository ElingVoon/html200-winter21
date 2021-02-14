function bankApp() {
   prompt('What would you like to do? \n\nEnter W to Withdraw\nEnter D to Deposit\nEnter B for Balance\nEnter Q to Quit');
 }

const bankOption = 'withdraw';

switch (bankOption) {
  case 'withdraw':
    alert('this.Amount to whthdraw?');

  case 'deposit':
    alert('Amount to deposit?');

  case 'balance':
    alert('Balance amount is $100');

  default:
    console.log('Quit?');
    break;
}



//swith
//You can put function inside an object
// const fourOption
//
// switch(bankOption) {
//   case withdraw:
//     event.key == (w || W)
//     break;
//   case deposit:
//     // code block
//     break;
//   case balance:
//       // code block
//     break;
//   default:
//     // code block
// }




// user has 4 options to choose from

// enter w to withdraw
    //enter how much to withdraw
      //after withdraw enter another option
// enter d to deposit
    //enter how much to deposit
      //after deposit enter another option
// enter b to Balance
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
