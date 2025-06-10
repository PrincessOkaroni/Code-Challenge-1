var prompt = require("prompt-sync")(); // Importing prompt-sync for user input in Node.js
// fee.js
// Function to estimate mobile money transaction fee
function estimateTransactionFee() {
  // Prompt user for the amount they want to send
  let amountToSend = parseFloat(prompt("Unatuma Ngapi? (KES)"));

  // Validate the input: ensure it's a number greater than 0
  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Please enter a valid amount (greater than 0).");
    return;
  }

  // Constants for transaction fee calculation
  // Assuming a fee structure of 1.5% with a minimum of KES 10 and a maximum of KES 70.
  const feePercentage = 0.015; // 1.5%
  const minFee = 10; // KES
  const maxFee = 70; // KES

  // Calculate the transaction fee based on the amount
  // The fee is calculated as a percentage of the amount, but it must be within the min and max limits.
  let calculatedFee = amountToSend * feePercentage;

  let finalFee = Math.max(minFee, Math.min(maxFee, calculatedFee));

  let totalDebit = amountToSend + finalFee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${finalFee}`);
  console.log(`Total amount to be debited: KES ${totalDebit}`);
  console.log("\nSend Money Securely!");
}

// Call the function to execute the fee estimation
estimateTransactionFee();
