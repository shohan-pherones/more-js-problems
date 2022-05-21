function foobar(numbers) {
  for (let i = 1; i <= numbers; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("foobar");
    } else if (i % 3 == 0) {
      console.log("foo");
    } else if (i % 5 == 0) {
      console.log("bar");
    } else {
      console.log(i);
    }
  }
}

let numbers = 100;
const foobarResult = foobar(numbers);
