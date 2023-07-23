import { checkGeoLocalization } from './functions.js';

let city='Wroclaw';
let search_input = document.querySelector(".search input");
let search_button = document.querySelector(".search button");

//////////TO JEST TUTAJ TAK JAKOS DZIWNIE ZROBIONE, ZROBILEM BO TAK DZIALA, ALE MOZE MOZNA TO ROZDZIELIC TAK JAK BYLO NA 2 FUNKCJE I UZYC JAKIEGOS GETTERA?

//geolocalization from https://openweathermap.org/api/geocoding-api
checkGeoLocalization(city);


//BUTTON
search_button.addEventListener("click", ()=>{
  checkGeoLocalization(search_input.value);
});

//ENTER
search_input.addEventListener("keyup", ({key}) => {
  if (key === "Enter"){
    checkGeoLocalization(search_input.value);
  }
});

// let container = document.querySelectorAll(".container");
// container[0].addEventListener("click", ()=>{
//   window.open("PAGE_current_card/index.html")
// });

// CONTAINER
// let container = document.querySelectorAll(".container");
// container.forEach(container => {
//   container.addEventListener("click", ()=>{
//     window.open("PAGE_current_card/index.html")
    
//     for(let i=0; i<7; i++){
//       // container = document.querySelectorAll('.container')[i]
//       if(i == 1){
//         console.log("siema");
//       }
//     }
//   })
// })

// let container = document.querySelectorAll(".container");
// container[0].addEventListener("click", ()=>{
//   // console.log("siemano");
//   description = data2.daily.weathercode[0];
//   container_style(description, 0);
// })

//DATE DISPLAY --> PART OF CALENDAR

let i=0;
let k=0 //k is the number of the starting day, from today(k=0), that u want display temperature of

for(k; k<7+k; k++){
  let date = new Date();
  date.setDate(date.getDate()+k);
  let day_day = String(date).slice(0,3);
  let day_month = String(date).slice(4,7);
  let day_number = String(date).slice(8,10);

  switch(day_day){
    case 'Mon': day_day = 'Monday';
      break;
    case 'Tue': day_day = 'Tuesday';
      break;
    case 'Wed': day_day = 'Wednesday';
      break;
    case 'Thu': day_day = 'Thursday';
      break;
    case 'Fri': day_day = 'Friday';
      break;
    case 'Sat': day_day = 'Saturday';
      break;
    case 'Sun': day_day = 'Sunday';
      break;
    default: day_day = 'Monday';
  }

  switch(day_month){
    case 'Jan': day_month = 'January';
      break;
    case 'Feb': day_month = 'February';
      break;
    case 'Mar': day_month = 'March';
      break;
    case 'Apr': day_month = 'April';
      break;
    case 'May': day_month = 'May';
      break;
    case 'Jun': day_month = 'June';
      break;
    case 'Jul': day_month = 'July';
      break;
    case 'Aug': day_month = 'August';
      break;
    case 'Sep': day_month = 'September';
      break;
    case 'Oct': day_month = 'October';
      break;
    case 'Nov': day_month = 'November';
      break;
    case 'Dec': day_month = 'December';
      break;
    default: day_month = 'January';
  }
  document.querySelectorAll(".day")[i].innerHTML = '<i>' + day_day + '</i>';
  document.querySelectorAll(".date")[i].innerHTML = '<b>' + day_month + '<br>' + day_number + '</br>' + '</b>';
  i++;
}