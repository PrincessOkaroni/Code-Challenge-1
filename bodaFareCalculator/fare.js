function calculateBodaFare() {
  let distanceInKm = parseFloat(
    prompt("Unafika wapi Mkubwa? Kilometer ngapi?")
  );

  if (isNaN(distanceInKm) || distanceInKm < 0) {
    console.log("Please enter a valid distance (0 or greater).");
    return;
  }

  const baseFare = 50; // KES
  const chargePerKm = 15; // KES per kilometer

  let distanceCharge = distanceInKm * chargePerKm;
  let totalFare = baseFare + distanceCharge;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceCharge}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");
}

calculateBodaFare();

console.log(calculateBodaFare.toNumber);
