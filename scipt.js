const city = document.getElementById('cityinput')
const typedcity = city.value
const citybtn = document.getElementById('citysubmit')
const apikey = "3f0aa8533877eb317a4dac0b065b71a7"
const results = document.getElementsByClassName('info')

const cityname1 = document.getElementById('cityname')
const date1 = document.getElementById('date1')
const cityweather1 = document.getElementById('cityweather1')
const citytemp1 = document.getElementById('citytemp1')
const cityhumidity1 = document.getElementById('cityhumidity1')
const citywindspeed1 = document.getElementById('citywindspeed1')

const date2 = document.getElementById('date2')
const cityweather2 = document.getElementById('cityweather2')
const citytemp2 = document.getElementById('citytemp2')
const cityhumidity2 = document.getElementById('cityhumidity2')
const citywindspeed2 = document.getElementById('citywindspeed2')

const date3 = document.getElementById('date3')
const cityweather3 = document.getElementById('cityweather3')
const citytemp3 = document.getElementById('citytemp3')
const cityhumidity3 = document.getElementById('cityhumidity3')
const citywindspeed3 = document.getElementById('citywindspeed3')

const date4 = document.getElementById('date4')
const cityweather4 = document.getElementById('cityweather4')
const citytemp4 = document.getElementById('citytemp4')
const cityhumidity4 = document.getElementById('cityhumidity4')
const citywindspeed4 = document.getElementById('citywindspeed4')

const date5 = document.getElementById('date5')
const cityweather5 = document.getElementById('cityweather5')
const citytemp5 = document.getElementById('citytemp5')
const cityhumidity5 = document.getElementById('cityhumidity5')
const citywindspeed5 = document.getElementById('citywindspeed5')
const history = document.getElementById('history')






function getinfo () {
    const cityrequest = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value},us&appid=3f0aa8533877eb317a4dac0b065b71a7&units=imperial`
  fetch(cityrequest)
  .then(function  (response) {
      return response.json();
    })
    .then(function (data) {
      citybtn.style.display = "inline";

    cityname1.textContent = ('City Name: ' + data.city.name);
    date1.textContent = ('Date: ' + data.list[6].dt_txt);
    cityweather1.textContent = ('Weather: ' + data.list[6].weather[0].description);
    citytemp1.textContent = ('Max tempature: ' + data.list[6].main.temp_max);
    cityhumidity1.textContent = ('Humidty: ' + data.list[6].main.humidity);
    citywindspeed1.textContent = ('Wind Speed: ' + data.list[0].wind.speed);

    date2.textContent = ('Date: ' + data.list[14].dt_txt);
    cityweather2.textContent = ('Weather: ' + data.list[14].weather[0].description);
    citytemp2.textContent = ('Max tempature: ' + data.list[14].main.temp_max);
    cityhumidity2.textContent = ('Humidty: ' + data.list[14].main.humidity);
    citywindspeed2.textContent = ('Wind Speed: ' + data.list[14].wind.speed);

    date3.textContent = ('Date: ' + data.list[22].dt_txt);
    cityweather3.textContent = ('Weather: ' + data.list[22].weather[0].description);
    citytemp3.textContent = ('Max tempature: ' + data.list[22].main.temp_max);
    cityhumidity3.textContent = ('Humidty: ' + data.list[22].main.humidity);
    citywindspeed3.textContent = ('Wind Speed: ' + data.list[22].wind.speed);

    date4.textContent = ('Date: ' + data.list[30].dt_txt);
    cityweather4.textContent = ('Weather: ' + data.list[30].weather[0].description);
    citytemp4.textContent = ('Max tempature: ' + data.list[30].main.temp_max);
    cityhumidity4.textContent = ('Humidty: ' + data.list[30].main.humidity);
    citywindspeed4.textContent = ('Wind Speed: ' + data.list[30].wind.speed);

    date5.textContent = ('Date: ' + data.list[38].dt_txt);
    cityweather5.textContent = ('Weather: ' + data.list[38].weather[0].description);
    citytemp5.textContent = ('Max tempature: ' + data.list[38].main.temp_max);
    cityhumidity5.textContent = ('Humidty: ' + data.list[38].main.humidity);
    citywindspeed5.textContent = ('Wind Speed: ' + data.list[38].wind.speed);
    
    });
  }


citybtn.addEventListener('click', (event) => {
    event.preventDefault

    citybtn.style.display = "none";

    localStorage.setItem('city', city.value)

    historyitem = document.createElement('button')
    historyitem.textContent = city.value
    history.appendChild(historyitem)

    getinfo ();

  // I could not make this wqork. I might have time to revisit!
    historyitem.addEventListener('click', (event) => {
      event.preventDefault
      const cityrequest = `https://api.openweathermap.org/data/2.5/forecast?q=${historyitem.textContent},us&appid=3f0aa8533877eb317a4dac0b065b71a7&units=imperial`
  fetch(cityrequest)
  .then(function  (response) {
      return response.json();
    })
    .then(function (data) {
      citybtn.style.display = "inline";
  console.log(data)
    cityname1.textContent = ('City Name: ' + data.city.name);
    date1.textContent = ('Date: ' + data.list[6].dt_txt);
    cityweather1.textContent = ('Weather: ' + data.list[6].weather[0].description);
    citytemp1.textContent = ('Max tempature: ' + data.list[6].main.temp_max);
    cityhumidity1.textContent = ('Humidty: ' + data.list[6].main.humidity);
    citywindspeed1.textContent = ('Wind Speed: ' + data.list[0].wind.speed);

    date2.textContent = ('Date: ' + data.list[14].dt_txt);
    cityweather2.textContent = ('Weather: ' + data.list[14].weather[0].description);
    citytemp2.textContent = ('Max tempature: ' + data.list[14].main.temp_max);
    cityhumidity2.textContent = ('Humidty: ' + data.list[14].main.humidity);
    citywindspeed2.textContent = ('Wind Speed: ' + data.list[14].wind.speed);

    date3.textContent = ('Date: ' + data.list[22].dt_txt);
    cityweather3.textContent = ('Weather: ' + data.list[22].weather[0].description);
    citytemp3.textContent = ('Max tempature: ' + data.list[22].main.temp_max);
    cityhumidity3.textContent = ('Humidty: ' + data.list[22].main.humidity);
    citywindspeed3.textContent = ('Wind Speed: ' + data.list[22].wind.speed);

    date4.textContent = ('Date: ' + data.list[30].dt_txt);
    cityweather4.textContent = ('Weather: ' + data.list[30].weather[0].description);
    citytemp4.textContent = ('Max tempature: ' + data.list[30].main.temp_max);
    cityhumidity4.textContent = ('Humidty: ' + data.list[30].main.humidity);
    citywindspeed4.textContent = ('Wind Speed: ' + data.list[30].wind.speed);

    date5.textContent = ('Date: ' + data.list[38].dt_txt);
    cityweather5.textContent = ('Weather: ' + data.list[38].weather[0].description);
    citytemp5.textContent = ('Max tempature: ' + data.list[38].main.temp_max);
    cityhumidity5.textContent = ('Humidty: ' + data.list[38].main.humidity);
    citywindspeed5.textContent = ('Wind Speed: ' + data.list[38].wind.speed);
    
    });
   })})
  

