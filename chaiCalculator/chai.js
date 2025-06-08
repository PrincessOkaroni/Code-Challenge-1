// Chai Bora Calculator
// This program calculates the ingredients needed to make a specified number of cups of Kenyan Chai.
// It prompts the user for the number of cups and outputs the required amounts of water, milk, tea leaves, and sugar.
function calculateChaiIngredients() {
  // Prompt user for the number of cups of Chai Bora they want to make
  let numberOfCups = parseInt(
    prompt("Karibu! How many cups of Chai Bora would you like to make?")
  );

  // Validate the input: ensure it's a number greater than 0
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number of cups (greater than 0).");
    return;
  }

  // Constants for the ingredients per cup of Chai Bora
  const waterPerCup = 200; // ml
  const milkPerCup = 50; // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2; // teaspoons

  // Calculate the total ingredients needed based on the number of cups
  // For each ingredient, multiply the per cup amount by the number of cups
  let totalWater = waterPerCup * numberOfCups;
  let totalMilk = milkPerCup * numberOfCups;
  let totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  let totalSugar = sugarPerCup * numberOfCups;

  // Output the total ingredients needed
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");
}

// Call the function to execute the Chai Bora ingredients calculation
calculateChaiIngredients();
