function container_style(description, i){
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
      weather_icon.src = "../images/sun-02.png";
      circle.style.backgroundColor = "#eb8d19";
    }
    else if(style == 'bg_fog'){
      container.style.cssText = bg_fog;
      weather_icon.src = "../images/cloudy_sky-02.png";
      circle.style.backgroundColor = "#2f2f2f";
    }
    else if(style == 'bg_light_rain'){
      container.style.cssText = bg_light_rain;
      weather_icon.src = "../images/water_drop-02.png";
      circle.style.backgroundColor = "#0063ff";
    }
    else if(style == 'bg_freezing_rain'){
      container.style.cssText = bg_freezing_rain;
      weather_icon.src = "../images/water_drop-02.png";
      circle.style.backgroundColor = "#0063ff";
    }
    else if(style == 'bg_snow'){
      container.style.cssText = bg_snow;
      weather_icon.src = "../images/snow-05.png";
      circle.style.backgroundColor = "#031331";
    }
    else{
      container.style.cssText = bg_thunderstorm;
      weather_icon.src = "../images/thunder-05.png";
      circle.style.backgroundColor = "#5b1764";
    }
  }

container_style(45, 0);