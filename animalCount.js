function animalCount(miles) {
  const animalPer10 = 10;
  const animalPer20 = 50;
  const animalOver20 = 100;

  if (miles <= 10) {
    const totalAnimal = miles * animalPer10;
    return totalAnimal;
  } else if (miles <= 20) {
    const remainingMiles = miles - 10;
    const totalAnimalFor10 = 10 * animalPer10;
    const remainingAnimal = remainingMiles * animalPer20;
    const totalAnimal = totalAnimalFor10 + remainingAnimal;
    return totalAnimal;
  } else if (miles > 20) {
    const remainingMiles = miles - 20;
    const totalAnimalFor10 = 10 * animalPer10;
    const totalAnimalFor20 = 10 * animalPer10;
    const totalAnimalOver20 = remainingMiles * animalOver20;
    const totalAnimal = totalAnimalFor10 + totalAnimalFor20 + totalAnimalOver20;
    return totalAnimal;
  }
}

let distanceTravelled = 482;
const totalAnimals = animalCount(distanceTravelled);
console.log(totalAnimals);
