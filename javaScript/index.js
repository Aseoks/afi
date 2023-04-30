const buttonThree = document.querySelector(".button-three");
const navMenu = document.getElementById("navigation-menu");

function showHideMenu() {
  const isOpened = buttonThree.getAttribute("aria-expanded");

  if (isOpened === "false") {
    buttonThree.setAttribute("aria-expanded", "true");
    buttonThree.style.setProperty("--button-color", "black");
    navMenu.style.display = "flex";
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
  } else {
    buttonThree.setAttribute("aria-expanded", "false");
    buttonThree.style.setProperty("--button-color", "white");
    navMenu.style.display = "none";
    document.getElementsByTagName('body')[0].style.overflow = "visible";
  }
}

//Show - Hide menu on click menu icon
buttonThree.addEventListener("click", showHideMenu)

//Adding scroll option after scrollong from nav menu
document.getElementById('contact').addEventListener("click",showHideMenu)

document.getElementById('location').addEventListener("click",showHideMenu)


const showFormButton = document.querySelector(".show-book");
const bookingForm = document.querySelector(".form")

showFormButton.addEventListener("click", () => {
  const isOpened = showFormButton.getAttribute("aria-expanded");

  if (isOpened === "false" && innerWidth < 980) {
    showFormButton.setAttribute("aria-expanded", "true");   
    bookingForm.style.display = "flex";
  } else {
    showFormButton.setAttribute("aria-expanded", "false");   
    bookingForm.style.display = "none";
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


// Form 1 date + validation

const arrivalDate = document.getElementById("arrival");
const departureDate = document.getElementById("departure");
const guestsNumber = document.getElementById("guests");
const petsNumber = document.getElementById("pets");
const bookButton = document.getElementById("submit");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const arrivalError = document.getElementById("errorArrival");


//Min dates in date form
let date = new Date();
if (date < 10){
  date = '0' + date;
}
let month = date.getMonth() + 1;
if (month < 10){
  month = '0' + month;
}
let year = date.getFullYear();
let day = date.getDate();
let minDate = (`${year}-${month}-${day}`);
let minDateDeparture = (`${minDate }`);



arrivalDate.setAttribute('min', minDate);
departureDate.setAttribute('min', minDateDeparture);


// Form validation
form.addEventListener('submit', (e) =>{  
  if (arrivalDate.value === '' || arrivalDate.value == null){
    arrivalDate.classList.add('errorInput')
    arrivalError.innerHTML = ('Arrival date is required')
  }
  else{
    arrivalDate.classList.remove('errorInput')
    arrivalError.innerHTML = ('')
    if (arrivalDate.value > departureDate.value){
      arrivalDate.classList.add('errorInput')
      arrivalError.innerHTML = ('Arrival can`t be after departure')
      departureDate.classList.add('errorInput')
      departureDate.nextElementSibling.innerHTML = ('Arrival can`t be after departure')   
    }
    else{
      arrivalDate.classList.remove('errorInput')
      arrivalError.innerHTML = ('')
      departureDate.classList.remove('errorInput')
      departureDate.nextElementSibling.innerHTML = ('')
    }
  }

  if (departureDate.value === '' || departureDate.value == null){
    departureDate.classList.add('errorInput')
    departureDate.nextElementSibling.innerHTML = ('Departure date is required')   
  }
  else{
    departureDate.classList.remove('errorInput')
    departureDate.nextElementSibling.innerHTML = ('')
    if (arrivalDate.value > departureDate.value){
      arrivalDate.classList.add('errorInput')
      arrivalError.innerHTML = ('Arrival can`t be after departure')
      departureDate.classList.add('errorInput')
      departureDate.nextElementSibling.innerHTML = ('Arrival can`t be after departure')   
    }
    else{
      arrivalDate.classList.remove('errorInput')
      arrivalError.innerHTML = ('')
      departureDate.classList.remove('errorInput')
      departureDate.nextElementSibling.innerHTML = ('')
    }
  }




  if (guestsNumber.value === undefined || guestsNumber.value < 1){
    guestsNumber.classList.add('errorInput')
    guestsNumber.nextElementSibling.innerHTML = ('Guests numberr is required')   
  }
  else{
    guestsNumber.classList.remove('errorInput')
    guestsNumber.nextElementSibling.innerHTML = ('')
  } 
  
})
