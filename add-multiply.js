/*
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood =50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  // wood calculation
  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

const firstOption = woodCalculator(0, 0, 1);
console.log(firstOption);
