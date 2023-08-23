 /* APP: Tip Calculator */


// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numOfPeoples = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");


// Get number of people from number of people div
let numberOfPeople = Number(numOfPeoples.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const userBill = Number(billInput.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercent = Number(tipInput.value) / 100;

  // get the total tip amount
  const tipAmount = userBill * tipPercent;

  // calculate the total (tip amount + bill)
  const totalAmount = userBill + tipAmount;

  // calculate the per person total (total divided by number of people)
  const amountPerPerson = totalAmount / numberOfPeople;

  // update the perPersonTotal on DOM & show it to user
  perPersonTotal.innerText = `$${amountPerPerson.toFixed(2).toLocaleString("en-US")}`; //toFixed(_) to show only '_' decimal places.
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople++;

  // update the DOM with the new number of people
  numOfPeoples.innerText = numberOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // if amount is 1 or less simply return
  if(numberOfPeople <= 1) {
    // console.log("Number of People must be 1 or greater than 1.");
    throw ("Number of People must be 1 or greater than 1.");
    return;
  }
  
  // decrement the amount of people
  numberOfPeople--;

  // update the DOM with the new number of people
  numOfPeoples.innerText = numberOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
}