const apikey = '95f98cf4b5d04feda1e124802241607';


const cityinput = document.getElementById('cityInput');
const searchbtn = document.getElementById('searchBtn');
const cityname = document.getElementById('city-name');
const contryname = document.getElementById('countryName');
const temp = document.getElementById('temp');
const windspeed = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const party = document.getElementById('party');

let currenttime = new Date();

searchbtn.addEventListener('click' ,async (event)=>{
    event.preventDefault();
    const cityvalue = cityinput.value;
    // console.log(cityvalue)
    let apiurl = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityvalue}&aqi=yes`;
    let response = await fetch(apiurl);
    let data =  await response.json();
    cityname.innerHTML = `${data.location.name} , ${data.location.region}`;
    contryname.style.backgroundColor = "#6e8fb1";
    contryname.innerHTML = data.location.country;
    temp.innerHTML = `${data.current.temp_c}\u00B0C`;
    windspeed.innerHTML = "Wind Speed : "+data.current.wind_kph +"km/h";
    humidity.innerHTML = "Humidity : "+data.current.humidity + "%";
    party.innerHTML = data.current.condition.text;

})