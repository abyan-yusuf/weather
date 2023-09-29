const button = document.getElementById("btn");
const myApiKey = "e9f09b861953953012f1e84693f11e7f";
const cityName = document.getElementById("cityName");
const countryName = document.getElementById("countryName");
const tempH1 = document.getElementById("temp");
const feelsLikeP = document.getElementById("feels");
const humudityh4 = document.getElementById("humidity");
const windh4 = document.getElementById("wind");
const weatherh3 = document.getElementById("weather");
const img = document.getElementById("img");

// Getting and Telling user the Temperature when click on the search button
button.addEventListener("click", async function () {
  const userInput = document.getElementById("input").value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${myApiKey}&units=imperial`
  );
  const json = await response.json();
  const country = await json.sys.country;
  const temp = await json.main.temp;
  const feelsLike = await json.main.feels_like;
  const humidity = await json.main.humidity;
  const wind = await json.wind.speed;
  const weather = await json.weather[0].main;

  if (weather == "Clouds") {
    img.src = "./gif/ezgif-2-10229592f1.gif";
  } else if (weather == "Haze") {
    img.src = "./gif/ezgif-3-99491ae20f.gif";
  } else if (weather == "Clear") {
    img.src = "./gif/ezgif-1-f074de1fb0.gif";
  } else if (weather == "Snow") {
    img.src = "./gif/ezgif-1-2ea4155969.gif";
  } else if (weather == 'Drizzle') { 
    img.src = "./gif/ezgif-1-d317035970.gif"
  } else if (weather == "Thunderstorm") {
    img.src = "./gif/ezgif-2-4b6d29430d.gif";
  } else if (weather == "Rain") {
    img.src = "./gif/ezgif-1-91cfd95817.gif";
  } else {
    img.src = "";
  }

  cityName.innerText = "";
  countryName.innerText = "";
  tempH1.innerText = "";
  feelsLikeP.innerText = "Feels Like:";
  humudityh4.innerText = "Humidity:";
  windh4.innerText = "Wind:";
  weatherh3.innerText = "";

  cityName.innerText = json.name + ", ";
  countryName.innerText = country;
  tempH1.innerText = Math.floor(((temp - 32) * 5) / 9) + "°";
  feelsLikeP.innerText =
    feelsLikeP.innerText + " " + Math.floor(((feelsLike - 32) * 5) / 9) + "°";
  humudityh4.innerText = humudityh4.innerText + " " + humidity + "%";
  windh4.innerText = windh4.innerText + " " + wind + " " + "km/h";
  weatherh3.innerText = weather;
  console.log(json);
});
