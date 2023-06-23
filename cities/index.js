
const citiesList = document.querySelector('#cities');
const cities = ["Москва", "Санкт-Петербург", "Нью-Йорк", "Токио"];
const temperatures= [];

for (let i = 0; i < cities.length; i++) {
    const tempInput = prompt(`Введите температуру для ${cities[i]}`);
    tempInput.push(Number(tempInput));
    const cityElement = document.createElement('li');
    cityElement.textContent = `Температура в городе ${cities[i]}: ${tempInput} °С`;
    citiesList.append(cityElement);
};

