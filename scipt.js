const city = document.getElementById('cityinput')
const typedcity = city.value
const citybtn = document.getElementById('citysubmit')
const apikey = "3f0aa8533877eb317a4dac0b065b71a7"
const results = document.getElementsByClassName('info')



citybtn.addEventListener('click', (event) => {
  const cityrequest = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value},us&appid=3f0aa8533877eb317a4dac0b065b71a7`
    event.preventDefault

    fetch(cityrequest)
    .then(function  (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.city.name)
        console.log(data.list[0].main)
      });
   })

   // I need city name, date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
   //THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
   //WHEN I click on a city in the search history
  //THEN I am again presented with current and future conditions for that city