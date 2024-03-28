const billAmount = document.getElementById("bill");
const numberOfPeople = document.getElementById("people");
const customTipPercentage = document.getElementById("custom");
const billTipAmount = document.getElementById("tip-amount");
const billTotalPerPerson = document.getElementById("total");
const resetButton = document.getElementById("reset-btn");
const buttons = document.querySelectorAll(".tip-choice");


const setSuccess = (element) => {
  const input = element.parentElement;

  input.classList.remove('error-color');
  input.classList.add('success-color');
}

const setSuccessPeople = (element) => {
  const input = element.parentElement;
  const errorDisplay = input.querySelector('.error');

  errorDisplay.classList.add('no-error');
  input.classList.remove('error-color');
  input.classList.add('success-color');
}

const setError = (element, message) => {
  const input = element.parentElement;
  const errorDisplay = input.querySelector('.error');

  errorDisplay.innerText = message;
  input.classList.remove('success-color');
  errorDisplay.classList.remove('no-error');
  input.classList.add('error-color');
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    button.classList.toggle("selected");
    let tipvalue = e.target.innerText;
    tipvalue = tipvalue.substr(0, tipvalue.length - 1);

    if (billAmount.value !== "") {
      setSuccess(billAmount);
      if (numberOfPeople.value === "" || numberOfPeople.value === "0") {
        setError(numberOfPeople, "Can't be zero");
      }
      else {
        setSuccessPeople(numberOfPeople);
              calculateTip(
        parseFloat(billAmount.value),
        parseInt(tipvalue),
        parseInt(numberOfPeople.value)
      );
      }
    }
  });
});


customTipPercentage.addEventListener("blur", (e) => {
  if (billAmount.value === "") {
    resetEverything();
    return;
  }
  if (numberOfPeople.value === "" || numberOfPeople.value === "0") {
    setError(numberOfPeople, "Can't be zero");
  }

  calculateTip(
    parseFloat(billAmount.value),
    parseFloat(e.target.value),
    parseInt(numberOfPeople.value)
  );
});


function calculateTip(billAmount, tipPercentage, numberOfPeople) {
  let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);

  let totalAmount = (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
  totalAmount = totalAmount.toFixed(2);

  billTipAmount.innerHTML = `$${tip}`;
  billTotalPerPerson.innerHTML = `$${totalAmount}`;
}


resetButton.addEventListener("click", (e) => {
  resetButton.classList.add('submit');
  resetEverything();
});
function resetEverything() {
  billTipAmount.innerHTML = "$0.00";
  billTotalPerPerson.innerHTML = "$0.00";
  billAmount.value = "";
  numberOfPeople.value = "";
  customTipPercentage.value = "";
}