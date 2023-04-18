console.log("hello world");

const buttonThree = document.querySelector(".button-three");
const navMenu = document.getElementById("navigation-menu");

buttonThree.addEventListener("click", () => {
  const isOpened = buttonThree.getAttribute("aria-expanded");

  if (isOpened === "false") {
    buttonThree.setAttribute("aria-expanded", "true");
    buttonThree.style.setProperty("--button-color", "black");
    navMenu.style.display = "block";
  } else {
    buttonThree.setAttribute("aria-expanded", "false");
    buttonThree.style.setProperty("--button-color", "white");
    navMenu.style.display = "none";
  }
});

$(".list-item").mouseover(function () {
  $("#selected-item").text($(this).text());
});

$(".scroll-down").click(function () {
  $(window).scrollTop($("body").height());
});

let weather = {
  apiKey: "cf608d877811f21a9017c72939080a39",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);

    document.querySelector(".temperature").innerHTML = `${Math.ceil(
      temp
    )} &deg;C `;
    document.querySelector(
      ".weather-icon"
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".weather-description").innerHTML = `${description}`;
    document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;
    document.querySelector(".wind-speed").innerHTML = `Wind speed: ${speed}km/h`;
    
   
  },  
};

window.onload = weather.fetchWeather("Innsbruck")
