const numbers = [];
let i = -10;

while (i <= 10) {
  numbers.push(i);
  i++;
};


for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    numbers.splice(i, 1);
    i--;
  } else {
    numbers[i] = numbers[i] ** 2;
  }
};

numbers.sort((a, b) => b - a);

const makeUniq = (arr) => {
  const uniqSet = new Set(arr);
  return [...uniqSet];
}
makeUniq(numbers);

console.log(numbers);