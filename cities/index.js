
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

const maxTemp = document.createElement('p');
maxTemp.textContent = `Максимальная температура: ${max}°С`;
citiesList.after(maxTemp);
const minTemp = document.createElement('p');
minTemp.textContent = `Минимальная температура: ${min}°С`;
citiesList.after(minTemp);
