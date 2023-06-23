//Задание 1
// Выведите числа от 1 до 10 в консоль
let c = 1;
while (c < 11) {
  console.log(c);
  c++;
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log("второе задание", i);
  }
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i > 0; i--) {
  console.log("третье задание", i);
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let i = 1; i <= 10; i++) {
  const number = i * 5;
  console.log("четвертое задание", number);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
  console.log("пятое задание", sum);
}

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 1; i <= array.length; i++) {
  console.log("шестое задание", i);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum2 += numbers[i];
  console.log("седьмое задание", sum2);
}

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];

for (let i = 0; i < animals.length; i++) {
  const animalsPretty = animals[i] + "- прекрасное животное";
  animals[i] = animalsPretty;
}
console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
const str = "Hello";

for (let letter of str) {
  console.log(letter);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
const array2 = [1, 2, 3, 4, 5];

for (let element of array2) {
  console.log(element);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ["Hello, world!", "How are you?"];
for (let word of sentences) {
  let arrays = word.split(" ");
  arrays.forEach((item) => {
    console.log(item);
  });
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
const numbers2 = [1, 2, 3, 4, 5];
let sum3 = 0;
for (let number of numbers2) {
  sum3 += number;
  console.log(sum3);
}

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ["apple", "banana", "cherry"];
for (let element of list) {
  console.log("13 задание", element.length);
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний
const words4 = ["Hello", "world", "string"];
for (let element of words4) {
  const bigLetters = element.toUpperCase();
  console.log("14 задание", bigLetters);
}

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = "Hello, world!";

let vowelCount = 0;
const vowels = ["a", "e", "i", "o", "u"];
function getVowels(str) {
  for (let element of str.toLowerCase()) {
    if (vowels.includes(element)) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}
console.log("15 задание", getVowels(greeting));

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ["Hello", "world", "!"];
const string = words.join(" ");
console.log("16 задание", string);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let j = 1;

while (j <= 10) {
  console.log("17 задание", j);
  j++;
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let i = 10;
while (i >= 1) {
  console.log("18 задание", i);
  i--;
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;

function isPositive(arr) {
  let count = 0;
  while (count < arr.length - 1) {
    if (arr[count] < 0) {
      allPositive = false;
      console.log(arr[count]);
      break;
    }
    count++;
  }
}
isPositive(allNumbers);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
getPositiveElements = () => {
  let i = 0;
  do {
    console.log("20 задание", random[i]);
    i++;
  } while (random[i] >= 0);
};
getPositiveElements();

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let count = 1;
do {
  if (count % 3 !== 0) console.log(count);
  count++;
} while (count <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let res = 0;

while (res <= 100) {
  let newResult = prompt("Введите число");

  if (isNaN(+newResult)) {
    newResult = prompt("Введите только число");
  }
  res = res + +newResult;
}

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
const titles = document.querySelectorAll("h4");
console.log(titles);
for (let title of titles) {
  title.style.backgroundColor = "#2ca8e6";
}

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";
let maxLenght = 6;

do {
  let randomIndex = Math.floor(Math.random() * alphabet.length);
  randomString += alphabet[randomIndex];
} while (randomString.length < maxLenght);
console.log(randomString);
