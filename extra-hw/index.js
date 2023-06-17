const numbers = [];
const pushNumbersToArray = () => {
  let i = -10;

  while (i <= 10) {
    numbers.push(i);
    i = i + 1;
  }
  console.log(numbers);
};

pushNumbersToArray();
