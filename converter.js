// const input = require("sync-input");

let currencies = [
  { rate: 1, symbol: "USD" },
  { rate: 113.5, symbol: "JPY" },
  { rate: 0.89, symbol: "EUR" },
  { rate: 74.36, symbol: "RUB" },
  { rate: 0.75, symbol: "GBP" },
];

console.log("Welcome to Currency Converter!");

currencies.forEach(function (currency) {
  console.log(`1 USD equals  ${currency.rate} ${currency.symbol}`);
});
let action;
do {
  console.log("What do you want to do?");
  action = 1;
  // input("1-Convert currencies 2-Exit program\n");
  if (isNaN(action) || action > 2) {
    console.log("Unknown input");
  } else if (action == 2) {
    console.log("Have a nice day!");
    break;
  } else if (action == 1) {
    console.log("What do you want to convert?");
    let baseCurrency = "eur";
    // input("From: ");
    let baseCurrencyToUSD = currencies.filter(
      (elem) => elem["symbol"] === baseCurrency.toUpperCase()
    );
    if (baseCurrencyToUSD.length >= 1) {
      let targetCurrency = "jpy";
      // input("To: ");
      let fromUSDToTargetCurrency = currencies.filter(
        (elem) => elem["symbol"] === targetCurrency.toUpperCase()
      );
      if (fromUSDToTargetCurrency.length >= 1) {
        let dollarAmount = 3;
        // input("Amount: ");
        if (isNaN(dollarAmount)) {
          console.log("The amount has to be a number");
        } else if (dollarAmount < 1) {
          console.log("The amount can not be less than 1");
        } else {
          let baseToUSD = dollarAmount / baseCurrencyToUSD[0].rate;
          let fromUSDToTarget = baseToUSD * fromUSDToTargetCurrency[0].rate;
          console.log(
            `Result: ${dollarAmount} ${
              baseCurrencyToUSD[0].symbol
            } equals ${fromUSDToTarget.toFixed(4)} ${
              fromUSDToTargetCurrency[0].symbol
            }`
          );
        }
      } else {
        console.log("Unknown currency");
      }
    } else {
      console.log("Unknown currency");
    }
  }
} while (action != 2);
