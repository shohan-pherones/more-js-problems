const names = [
  "abul",
  "babul",
  "cabul",
  "ebul",
  "babul",
  "mamul",
  "habul",
  "babul",
  "cabul",
  "habul",
];

function removeDuplicate(names) {
  const unique = [];
  //   for (let i = 0; i < names.length; i++) {
  //     const element = names[i];
  //     // console.log(element);
  //   }
  for (const element of names) {
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
