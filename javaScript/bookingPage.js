const buttonThree = document.querySelector(".button-three");
const navMenu = document.getElementById("navigation-menu");

function showHideMenu() {
  const isOpened = buttonThree.getAttribute("aria-expanded");

  if (isOpened === "false") {
    buttonThree.setAttribute("aria-expanded", "true");
    buttonThree.style.setProperty("--button-color", "black");
    navMenu.style.display = "flex";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  } else {
    buttonThree.setAttribute("aria-expanded", "false");
    buttonThree.style.setProperty("--button-color", "white");
    navMenu.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "visible";
  }
}

//Show - Hide menu on click menu icon
buttonThree.addEventListener("click", showHideMenu);

$(".list-item").mouseover(function () {
  $("#selected-item").text($(this).text());
});

$(".scroll-down").click(function () {
  $(window).scrollTop($("body").height());
});

//Form Validation
const arrivalDate = document.getElementById("arrival-date-picker");
const departureDate = document.getElementById("departure-date-picker");

//Min dates in date form
let date = new Date();
if (date < 10) {
  date = "0" + date;
}
let month = date.getMonth() + 1;
if (month < 10) {
  month = "0" + month;
}
let year = date.getFullYear();
let day = date.getDate();
let minDate = `${year}-${month}-${day}`;
let minDateDeparture = `${minDate}`;

arrivalDate.setAttribute("min", minDate);
departureDate.setAttribute("min", minDateDeparture);

const form = document.getElementById("booking-room-form");
const submitFormButton = document.getElementById("form-submit");
var missingInfos = false;

form.addEventListener("submit", (e) => {
  const inputArrival = document.getElementById("arrival-date-picker");
  const inputDeparture = document.getElementById("departure-date-picker");
  const guestsNumber = document.getElementById("guests-picker");
  const petsNumber = document.getElementById("pets-picker").value;
  const inputEmail = document.getElementById("email");
  const inputName = document.getElementById("first-name");
  const inputLastName = document.getElementById("last-name");


  //Checking if Arrival date is valid
  if (inputArrival.value === "" || inputArrival.value == null) {
    inputArrival.classList.add("errorInput");
    inputArrival.nextElementSibling.innerHTML = "Arrival date is required";
    missingInfos = false
  } else {
    inputArrival.classList.remove("errorInput");
    inputArrival.nextElementSibling.innerHTML = "";
    missingInfos = true
    //Arrival can`t be after departure
    if (inputArrival.value > inputDeparture.value) {
      inputArrival.classList.add("errorInput");
      inputArrival.nextElementSibling.innerHTML =
        "Arrival can`t be after departure";
      inputDeparture.classList.add("errorInput");
      inputDeparture.nextElementSibling.innerHTML =
        "Arrival can`t be after departure";
      missingInfos = false
    } else {
      inputArrival.classList.remove("errorInput");
      inputArrival.nextElementSibling.innerHTML = "";
      inputDeparture.classList.remove("errorInput");
      inputDeparture.nextElementSibling.innerHTML = "";
      missingInfos = true
    }
  }

  //Checking if departure date is valid
  if (inputDeparture.value === "" || inputDeparture.value == null) {
    inputDeparture.classList.add("errorInput");
    inputDeparture.nextElementSibling.innerHTML = "Departure date is required";
    missingInfos = false
  } else {
    inputDeparture.classList.remove("errorInput");
    inputDeparture.nextElementSibling.innerHTML = "";
    missingInfos = true

    //Arrival can`t be after departure
    if (inputArrival.value > inputDeparture.value) {
      inputArrival.classList.add("errorInput");
      inputArrival.nextElementSibling.innerHTML =
        "Arrival can`t be after departure";
      inputDeparture.classList.add("errorInput");
      inputDeparture.nextElementSibling.innerHTML =
        "Arrival can`t be after departure";
      missingInfos = false
    } else {
      inputArrival.classList.remove("errorInput");
      inputArrival.nextElementSibling.innerHTML = "";
      inputDeparture.classList.remove("errorInput");
      inputDeparture.nextElementSibling.innerHTML = "";
      missingInfos = true
    } 
    
  }


  //Checking if number of guests is correct
  if (guestsNumber.value === undefined || guestsNumber.value < 1){
    guestsNumber.classList.add('errorInput')
    guestsNumber.nextElementSibling.innerHTML = ('Guests numberr is required')      
    missingInfos = false 
  }
  else{
    guestsNumber.classList.remove('errorInput')
    guestsNumber.nextElementSibling.innerHTML = ('')
    if(missingInfos == false){
      missingInfos = false
    }else{
    missingInfos = true
    }
  } 

  //Checking length of e-mail
  if (inputEmail.value === '' || inputEmail.length < 1){
    inputEmail.classList.add('errorInput')
    inputEmail.nextElementSibling.innerHTML = ('Email is too short')      
    missingInfos = false 
  }
  else{
    inputEmail.classList.remove('errorInput')
    inputEmail.nextElementSibling.innerHTML = ('')
    if(missingInfos == false){
      missingInfos = false
    }else{
    missingInfos = true
    }
  }

  //Checing length of Name
  if (inputName.value === '' || inputName.length < 1){
    inputName.classList.add('errorInput')
    inputName.nextElementSibling.innerHTML = ('Your Name is too short')      
    missingInfos = false 
  }
  else{
    inputName.classList.remove('errorInput')
    inputName.nextElementSibling.innerHTML = ('')
    if(missingInfos == false){
      missingInfos = false
    }else{
    missingInfos = true
    }
  }

  //Checking lenght of Surname
  if (inputLastName.value === '' || inputLastName.length < 1){
    inputLastName.classList.add('errorInput')
    inputLastName.nextElementSibling.innerHTML = ('Your Surname is too short')      
    missingInfos = false 
  }
  else{
    inputLastName.classList.remove('errorInput')
    inputLastName.nextElementSibling.innerHTML = ('')
    if(missingInfos == false){
      missingInfos = false
    }else{
    missingInfos = true
    }
  }
  e.preventDefault();



  
if(missingInfos == true){
 // Adding new row to the table
 tbodyEl.innerHTML += `
 <tr class="data-row">  
 <td class="table-cell data-cell" data-cell="arrival">
   ${inputArrival.value}
 </td>
 <td class="table-cell data-cell" data-cell="departure">
   ${inputDeparture.value}
 </td>
 <td class="table-cell data-cell" data-cell="guests">${guestsNumber.value}</td>
 <td class="table-cell data-cell" data-cell="pets">${petsNumber}</td>
 <td class="table-cell data-cell" data-cell="e-mail">
   ${inputEmail.value}
 </td>
 <td class="table-cell data-cell" data-cell="name">${inputName.value}</td>
 <td class="table-cell data-cell" data-cell="surname">
   ${inputLastName.value}
 </td>
 <td class="table-cell data-cell" data-cell="button"><button class="delete-booking">Delete</button></td>
</tr>
 `;
}else{
  alert('Please insert correct info')
}

 
});

const tbodyEl = document.querySelector(".table-body");
const deleteButton = document.querySelector(".delete-btn");
const table = document.getElementById("main-table");

// Deleting one row from the table
function deleteBooking(e) {
  if (!e.target.classList.contains("delete-booking")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

table.addEventListener("click", deleteBooking);
