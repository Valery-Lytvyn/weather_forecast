"use strict";

let citiesArr = [
   "Kyiv",
   "Lviv",
   "Odesa",
   "Dnipro",
   "Lutsk",
   "Simferopol",
   "Mariupol",
   "Ternopil",
   "Zaporizhzhia",
   "Poltava",
   "Ivano-Frankivsk",
];

let button = document.querySelector(".buttonUpdate");
button.onclick = () => getDataWeather(citiesArr);

function getDataWeather() {
   citiesArr.forEach((item, index) => {
      fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${item}&units=metric&appid=300ee175286ded52ffac455c4a1947b0`
      )
         .then((response) => response.json())
         .then((data) => addDataWeatherTopage(index, data));
   });
}

function addDataWeatherTopage(index, arr) {

   let itemName = arr.name;
   let itemIcon = arr.weather[0].icon;
   let itemTemp = Math.round(arr.main.temp);

   let cityName = document.getElementById(`cityName${index}`);
   cityName.textContent = itemName;

   let cityTemperature = document.getElementById(`temperature${index}`);
   cityTemperature.textContent = `${itemTemp}°C`;

   let cityWeatherIcon = document.getElementById(`weatherIcon${index}`);
   cityWeatherIcon.src = `http://openweathermap.org/img/wn/${itemIcon}@2x.png`;
}
getDataWeather(citiesArr);


