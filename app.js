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

  // Total Balance
  var balanceAmount = document.getElementById("balance-amount").innerText;
  var convertedBalanceAmount = convertStringToNumber(balanceAmount);
  var balanceSum = convertedInputValue + convertedBalanceAmount;
  document.getElementById("balance-amount").innerText = balanceSum;
}


// Common function:
function convertStringToNumber(value) {
  return parseFloat(value);
}

// Withdrew Section:
function handleWithdraw() {
  // console.log("Hello World");
  var inputWithdrawValue = document.getElementById("withdraw-input").value;
  // console.log(inputWithdrawValue);
  var convertedInputWithdrawValue = convertStringToNumber(inputWithdrawValue);
  // console.log(convertedInputWithdrawValue);

  var withdrawAmount = document.getElementById("withdraw-amount").innerText;
  var convertedWithdrawAmount = convertStringToNumber(withdrawAmount);

  var sumWithdraw = convertedInputWithdrawValue + convertedWithdrawAmount;
  // console.log(sumWithdraw);
  document.getElementById("withdraw-amount").innerText = sumWithdraw;
  document.getElementById("withdraw-input").value = "";

  // Total Balance
  var balanceAmount = document.getElementById("balance-amount").innerText;
  var convertedBalanceAmount = convertStringToNumber(balanceAmount);
  var balanceSum = convertedBalanceAmount - convertedInputWithdrawValue;
  document.getElementById("balance-amount").innerText = balanceSum;
}

// Total Balance Section:
