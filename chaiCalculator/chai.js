const readline = require("readline");

function calculateChaiIngredients() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Karibu! How many cups of Chai Bora would you like to make? ",
    function (answer) {
      let numberOfCups = parseInt(answer);

      if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid number of cups (greater than 0).");
        rl.close();
        return;
      }

      const waterPerCup = 200; // ml
      const milkPerCup = 50; // ml
      const teaLeavesPerCup = 1; // tablespoon
      const sugarPerCup = 2; // teaspoons

      // Calculate total ingredients based on number of cups
      let totalWater = waterPerCup * numberOfCups;
      let totalMilk = milkPerCup * numberOfCups;
      let totalTeaLeaves = teaLeavesPerCup * numberOfCups;
      let totalSugar = sugarPerCup * numberOfCups;

      console.log(
        `To make ${numberOfCups} cups of Kenyan Chai, you will need:`
      );
      console.log(`Water: ${totalWater} ml`);
      console.log(`Milk: ${totalMilk} ml`);
      console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
      console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
      console.log("\nEnjoy your Chai Bora!");
      rl.close();
    }
  );
}

calculateChaiIngredients();
