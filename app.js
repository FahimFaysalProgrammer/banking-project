// Check JavaScript file link:
// alert("Hello World!");

// Deposit Section:
function handleDeposit() {
  // console.log("Hello World!");
  var inputValue = document.getElementById("deposit-input").value;
  //console.log(inputValue);
  var convertedInputValue = convertStringToNumber(inputValue);

  var depositAmount = document.getElementById("deposit-amount").innerText;
  // console.log(depositAmount);
  var convertedDepositAmount = convertStringToNumber(depositAmount);

  // console.log(typeof convertedInputValue, typeof convertedDepositAmount);

  var sum = convertedInputValue + convertedDepositAmount;
  // console.log(sum);
  document.getElementById("deposit-amount").innerText = sum;
  document.getElementById("deposit-input").value = "";
}

function convertStringToNumber(value) {
  return parseFloat(value);
}
