var amount = prompt("How much money will be taxed?"); // Gets the money that will be taxed
var TAX_RATE = prompt("What is the tax percentage? Provide percentage in decimals.") // Gets the tax percentage in decimal form.

var taxed_money_amount = TAX_RATE * amount // Multiplys the variables together to get the taxed money amount.
var taxed_money_amount = amount + taxed_money_amount // Adds taxed amount to original amount to add percent to amount.

alert("The taxed money amount will be shown now.") // I didn't do it all in one alert because I didn't know how to put a variable into an alert with a string.
alert (taxed_money_amount) // Shows the taxed money amount.