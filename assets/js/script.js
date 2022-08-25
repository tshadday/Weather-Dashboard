var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?lat=";
var geoAPI = "https://api.openweathermap.org/geo/1.0/direct?q="
const APIkey = "855cf2dfdc5596c339351121659d2804";

// defining today's forecast elements
var searchButton = document.getElementById("searchButton")
var cityElement = document.getElementById("city");
var dateElement = document.getElementById("date");
var tempElement = document.getElementById("temp");
var windElement = document.getElementById("wind");
var humidityElement = document.getElementById("humidity");
var UVElement = document.getElementById("UV");

var geoURL = "";
var weatherURL = "";

// Get city from search bar and create URL for geo API
function getGeoURL() {
    var city = document.getElementById("searchInput").value;
    cityElement.textContent = city
    var geoURL = geoAPI + city + "&appid=" + APIkey;
    getGeoData(geoURL);
}

// Take geo API call and extract longitude and latitude for the weather API
function getGeoData(geoURL) {
    console.log(geoURL)
    fetch(geoURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(location) {
        
        console.log(location)

        // based off geoCoding API documentation
        var latitude = location[0].lat;
        var longitude = location[0].lon;

        var weatherURL = weatherAPI + latitude + "&lon=" + longitude + "&appid=" + APIkey;
        getWeather(weatherURL);

        console.log(weatherURL)
    })
}

function getWeather(weatherURL) {
    // previous function never makes it here
    console.log('hello again')

    fetch(weatherURL).then(function(response) {
        return response.json();
    }).then(function(weather) {
        console.log(weather);

        // pull data from weather API call for temp, wind, humidity, and UV

        displayWeather();
    })
}

function displayWeather() {
    var today = moment().format("l");
    dateElement.textContent = today;

    // tempElement.textContent = temp;
    // windElement.textContent = wind;
    // humidityElement.textContent = humidity;
    // UVElement.textContent = UV;
}