import { checkGeoLocalization } from "./functions.js";
import { hover_information } from "./functions.js";

let search_input = document.querySelector(".search input");
let search_button = document.querySelector(".search button");

hover_information(0);
hover_information(1);
hover_information(2);
hover_information(3);
hover_information(4);
hover_information(5);
hover_information(6);

// TUTAJ JAK BEDZIESZ CHCIAL NA CLICKU ZEBY KAZDY SIE POKAZYWAL HOVER I WOWCZAS ANIMACJA WSZEDZIE

// container.forEach(cont => cont.addEventListener('mouseenter', () => {
//   blur_text.forEach(text => {
//     text.style.cssText = 'display: block;'
//   })
//   teeksior.forEach(text => {
//     text.style.cssText = 'filter: blur(10px);';
//   })
// }));

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