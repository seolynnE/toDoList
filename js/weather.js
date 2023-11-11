const API_KEY = "adcc16ec6bcfad5423232f0302d3f366";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherCont = document.querySelector(".weather-wrap i");
      const cityCont = document.querySelector(".weather-wrap p");
      const name = data.name;
      const weather = data.weather[0].main;
      cityCont.innerText = name;
      if (weather === "Clouds") {
        weatherCont.classList.add("fa-solid", "fa-cloud");
      } else if (weather === "Clear") {
        weatherCont.classList.add("fa-solid", "fa-sun");
      } else if (weather === "Thunderstorm") {
        weatherCont.classList.add("fa-solid", "fa-bolt-lightning");
      } else if (weather === "Drizzle") {
        weatherCont.classList.add("fa-solid", "fa-cloud-rain");
      } else if (weather === "Rain") {
        weatherCont.classList.add("fa-solid", "fa-cloud-showers-heavy");
      } else if (weather === "Snow") {
        weatherCont.classList.add("fa-regular", "fa-snowflake");
      } else if (weather === "Atmosphere") {
        weatherCont.classList.add("fa-solid", "fa-smog");
      } else {
        weatherCont.classList.add("fa-solid", "fa-question");
      }
    });
}
function onGeoError() {
  alert(
    "도비는 위치를 못찾겠어요..😔 주인님을 위해 날씨를 보여줄 수 없어요. 나쁜 도비!!😫😫"
  );
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
