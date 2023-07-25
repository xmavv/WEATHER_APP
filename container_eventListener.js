let search_input = document.querySelector(".search input");
let search_button = document.querySelector(".search button");
let container = document.querySelector(".container");
let blur_text = document.querySelectorAll('.blur_text')[0];
let teeksior = document.querySelectorAll('.teeksior')[0];

blur_text.style.transition = 'display 50s';

container.addEventListener("mouseenter", ()=>{
  blur_text.style.cssText = 'display: block';
  teeksior.style.cssText = 'filter: blur(10px);';
});

container.addEventListener("mouseleave", ()=>{
  blur_text.style.cssText = 'display: none';
  teeksior.style.cssText = 'filter: blur(0);';
});

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