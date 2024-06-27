const city = document.getElementById('cityinput')
const typedcity = city.value
const citybtn = document.getElementById('citysubmit')
const apikey = "3f0aa8533877eb317a4dac0b065b71a7"
const cityrequest = `https://api.openweathermap.org/data/2.5/forecast?q=Charlotte,us&appid=3f0aa8533877eb317a4dac0b065b71a7`
const results = document.getElementsByClassName('info')



citybtn.addEventListener('click', (event) => {
 
    event.preventDefault
    console.log(city.value);

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
