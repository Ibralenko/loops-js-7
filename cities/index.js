
const citiesList = document.querySelector('#cities-list');
const cities = ["Москва", "Санкт-Петербург", "Нью-Йорк", "Токио"];
const temperatures= [];

for (let i = 0; i < cities.length; i++) {
    const tempInput = prompt(`Введите температуру для ${cities[i]}`);
    temperatures.push(Number(tempInput));
    const cityElement = document.createElement('li');
    cityElement.textContent = `Температура в городе ${cities[i]}: ${tempInput} °С`;
    citiesList.append(cityElement);
};

const min = Math.min.apply(null, temperatures);
const max =  Math.max.apply(null, temperatures);

const maxTemp = document.createElement('h2');
maxTemp.textContent = `Максимальная температура: ${max}°С`;
maxTemp.classList.add('title-temp');
citiesList.after(maxTemp);

const minTemp = document.createElement('h2');
minTemp.textContent = `Минимальная температура: ${min}°С`;
minTemp.classList='title-temp';
citiesList.after(minTemp);
