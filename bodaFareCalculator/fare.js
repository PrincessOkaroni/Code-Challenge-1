// Boda Fare Calculator
// This program calculates the fare for a boda boda ride based on the distance in kilometers.
// It prompts the user for the distance and outputs the fare breakdown.
function calculateBodaFare() {
  // Prompt user for the distance in kilometers they want to travel
  let distanceInKm = parseFloat(
    prompt("Unafika wapi Mkubwa? Kilometer ngapi?")
  );
  // Validate the input: ensure it's a number and not negative
  if (isNaN(distanceInKm) || distanceInKm < 0) {
    console.log("Please enter a valid distance (0 or greater).");
    return;
  }

  // Constants for fare calculation
  // Assuming a base fare of KES 50 and KES 15 per kilometer
  const baseFare = 50; // KES
  const chargePerKm = 15; // KES per kilometer

  // Calculate the total fare based on the distance
  // The total fare is the base fare plus the distance charge (distance * charge per km)
  let distanceCharge = distanceInKm * chargePerKm;
  let totalFare = baseFare + distanceCharge;

  // Output the fare breakdown
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceCharge}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");
}

// Call the function to execute the boda fare calculation
calculateBodaFare();

console.log(calculateBodaFare.toNumber);
