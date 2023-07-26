let apiKey = "appid=bf528bd11953b371771641159216f05b"
let lat;
let lon;

export async function checkGeoLocalization(city){
    const api = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&${apiKey}`
    const response1 = await fetch(api);
    var data1 = await response1.json();
    
    //jezeli jest blad to i tak nie wyskakuje, bo jest obslugiwany, idzie dalej program i dochodzi sobie potem do ifa
  
    try{
      lat = data1[0].lat;
      lon = data1[0].lon;
    }
    catch{}
  
    if(data1.length == 0){
      document.querySelector('.error').style.display = 'block';
    }
    else{
      let api2 = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&hourly=temperature_2m&hourly=relativehumidity_2m&hourly=windspeed_10m&hourly=precipitation_probability&hourly=pressure_msl&daily=temperature_2m_max&daily=temperature_2m_min&daily=weathercode&timezone=Europe%2FBerlin";
  
      async function checkWeather(){
        const response2 = await fetch(api2);
        var data2 = await response2.json();
  
        for(let i=0; i<7;i++){
  
          let date = new Date();
          let hour = date.getHours();
          let max = data2.daily.temperature_2m_max[i];
          let min = data2.daily.temperature_2m_min[i];
          let description = data2.daily.weathercode[i];
          let rain_probability = data2.hourly.precipitation_probability[hour-1 + 24*i];
          let air_pressure = data2.hourly.pressure_msl[hour-1 + 24*i];
          let humidity = data2.hourly.relativehumidity_2m[hour-1 + 24*i];
          let current_temperature = data2.hourly.temperature_2m[hour-1 + 24*i];
          let wind_speed = data2.hourly.windspeed_10m[hour-1 + 24*i];
  
          //JESCZE CHCESZ ZROBIC ZE JAK TEMPERATURA JEST WIEKSZA OD POWIEDZMY 18 STOPNI, TO JEST ZOLTE TLO --> if((min>18 || max>25) && description = 0 || description = 1 || description = 2 || description = 3){tlo jest zolte}
  
          //description from https://open-meteo.com/en/docs#latitude=50.86&longitude=17.46&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon WMO WEATHER INTERPRETATION CODES
          container_style(description, i);
  
          document.querySelectorAll(".current_temperature")[i].innerHTML = Math.round(current_temperature);
          document.querySelectorAll(".rain_probability")[i].innerHTML = Math.round(rain_probability);
          document.querySelectorAll(".wind_speed")[i].innerHTML = Math.round(wind_speed);
          document.querySelectorAll(".humidity")[i].innerHTML = Math.round(humidity);
          document.querySelectorAll(".air_pressure")[i].innerHTML = Math.round(air_pressure);
          document.querySelectorAll(".temperature_high")[i].innerHTML = 'Highest: <br>' + '<b>' + Math.round(max) + '</b>°C';
          document.querySelectorAll(".temperature_low")[i].innerHTML = 'Lowest: <br>' + '<b>' + Math.round(min) + '</b> °C';
  
          document.querySelector('.error').style.display = 'none';
          }
        }
      checkWeather();
    }
  }

  function styles(style, i){
    let container = document.querySelectorAll('.container')[i]
    let weather_icon = document.querySelectorAll(".image")[i];
    let circle = document.querySelectorAll(".circle")[i];
  
    const bg_clear = 'background: linear-gradient(330deg, rgba(255,85,0,1) 0%, rgba(255,179,0,1) 50%, rgba(249,255,0,1) 100%); box-shadow: -5px 5px 2px rgba(104, 66, 8, 0.8);';
    const bg_fog = 'background: linear-gradient(330deg, rgba(51,51,51,1) 0%, rgba(179,179,179,1) 50%, rgba(242,242,242,1) 100%); box-shadow: -5px 5px 2px rgba(37, 38, 40, 0.8);';
    const bg_light_rain = 'background: linear-gradient(330deg, rgba(0,99,255,1) 0%, rgba(49,140,243,1) 50%, rgba(0,250,235,1) 100%); box-shadow: -5px 5px 2px rgba(17, 65, 99, 0.8);';
    const bg_freezing_rain = 'background: linear-gradient(330deg, rgba(0,151,255,1) 0%, rgba(0,202,255,1) 50%, rgba(0,255,201,1) 100%); box-shadow: -5px 5px 2px rgba(17, 65, 99, 0.8);';
    const bg_snow = 'background: linear-gradient(330deg, rgba(0,112,255,1) 0%, rgba(28,156,238,1) 50%, rgba(255,255,255,1) 100%); box-shadow: -5px 5px 2px rgba(9, 2, 90, 0.8);';
    const bg_thunderstorm = 'background: linear-gradient(330deg, rgba(91,23,100,1) 0%, rgba(179,0,255,1) 50%, rgba(255,0,224,1) 100%); box-shadow: -5px 5px 2px rgba(52, 12, 85, 0.8);';
  
    if(style == 'bg_clear'){
      container.style.cssText = bg_clear;
      weather_icon.src = "images/sun-02.png";
      circle.style.backgroundColor = "#eb8d19";
    }
    else if(style == 'bg_fog'){
      container.style.cssText = bg_fog;
      weather_icon.src = "images/cloudy_sky-02.png";
      circle.style.backgroundColor = "#2f2f2f";
    }
    else if(style == 'bg_light_rain'){
      container.style.cssText = bg_light_rain;
      weather_icon.src = "images/water_drop-02.png";
      circle.style.backgroundColor = "#0063ff";
    }
    else if(style == 'bg_freezing_rain'){
      container.style.cssText = bg_freezing_rain;
      weather_icon.src = "images/water_drop-02.png";
      circle.style.backgroundColor = "#0063ff";
    }
    else if(style == 'bg_snow'){
      container.style.cssText = bg_snow;
      weather_icon.src = "images/snow-05.png";
      circle.style.backgroundColor = "#031331";
    }
    else{
      container.style.cssText = bg_thunderstorm;
      weather_icon.src = "images/thunder-05.png";
      circle.style.backgroundColor = "#5b1764";
    }
  }

  export function container_style(description, i){
    switch(description){
      case 0 : description = 'Clear sky';
      styles('bg_clear', i);
        break;
      case 1 : description = 'Mainly clear';
      styles('bg_clear', i);
        break;
      case 2 : description = 'Partly cloudy';
      styles('bg_clear', i);
        break;
      case 3 : description = 'Overcast';
      styles('bg_clear', i);
        break;
      case 45 : description = 'Fog';
      styles('bg_fog', i);
        break;
      case 48 : description = 'Rime fog';
      styles('bg_fog', i);
        break;
      case 51 : description = 'Light drizzle';
      styles('bg_light_rain', i);
        break;
      case 53 : description = 'Moderate drizzle';
      styles('bg_light_rain', i);
        break;
      case 55 : description = 'Dense intensity drizzle';
      styles('bg_light_rain', i);
        break;
      case 56 : description = 'Light freezing drizzle';
      styles('bg_light_rain', i);
        break;
      case 57 : description = 'Dense intensity freezing drizzle';
      styles('bg_light_rain', i);
        break;
      case 61 : description = 'Slight rain';
      styles('bg_light_rain', i);
        break;
      case 63 : description = 'Moderate rain';
      styles('bg_light_rain', i);
        break;
      case 65 : description = 'Heavy intensity rain';
      styles('bg_light_rain', i);
        break;
      case 66 : description = 'Light freezing rain';
      styles('bg_light_rain', i);
        break;
      case 67 : description = 'Heavy intensity freezing rain';
      styles('bg_light_rain', i);
        break;
      case 71 : description = 'Slight snow fall';
      styles('bg_snow', i);
        break;
      case 73 : description = 'Moderate snow fall';
      styles('bg_snow', i);
        break;
      case 75 : description = 'Heavy intensity snow fall';
      styles('bg_snow', i);
        break;
      case 77 : description = 'Snow grains';
      styles('bg_snow', i);
        break;
      case 80 : description = 'Slight rain showers';
      styles('bg_light_rain', i);
        break;
      case 81 : description = 'Moderate rain showers';
      styles('bg_light_rain', i);
        break;
      case 82 : description = 'Violent rain showers';
      styles('bg_light_rain', i);
        break;
      case 85 : description = 'Snow showers';
      styles('bg_snow', i);
        break;
      case 86 : description = 'Heavy snow showers';
      styles('bg_snow', i);
        break;
      case 95 : description = 'Slight thunderstorm';
      styles('bg_thunderstorm', i);
        break;
      case 96 : description = 'Slight hail thunderstorm';
      styles('bg_thunderstorm', i);
        break;
      case 99 : description = 'Heavy hail Thunderstorm';
      styles('bg_thunderstorm', i);
        break;
    }
  
    document.querySelectorAll(".addnotation")[i].innerHTML = description;
  }

export function hover_information (i) {
  let container = document.querySelectorAll(".container");
  let blur_text = document.querySelectorAll('.blur_text');
  let teeksior = document.querySelectorAll('.teeksior');

  container[i].addEventListener("mouseenter", ()=>{
    blur_text[i].style.cssText = 'display: block';
    teeksior[i].style.cssText = 'filter: blur(10px);';
  });
  
  container[i].addEventListener("mouseleave", ()=>{
    blur_text[i].style.cssText = 'display: none';
    teeksior[i].style.cssText = 'filter: blur(0);';
  });
}