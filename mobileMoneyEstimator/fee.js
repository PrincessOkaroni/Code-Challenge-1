// fee.js
// Function to estimate mobile money transaction fee
function estimateTransactionFee() {
  let amountToSend = parseFloat(prompt("Unatuma Ngapi? (KES)"));

  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Please enter a valid amount (greater than 0).");
    return;
  }

  const feePercentage = 0.015; // 1.5%
  const minFee = 10; // KES
  const maxFee = 70; // KES

  let calculatedFee = amountToSend * feePercentage;

  let finalFee = Math.max(minFee, Math.min(maxFee, calculatedFee));

  let totalDebit = amountToSend + finalFee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${finalFee}`);
  console.log(`Total amount to be debited: KES ${totalDebit}`);
  console.log("\nSend Money Securely!");
}

estimateTransactionFee();
