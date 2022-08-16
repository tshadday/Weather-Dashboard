var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?lat=";
var geoAPI = "http://api.openweathermap.org/geo/1.0/direct?q="

const APIkey = "855cf2dfdc5596c339351121659d2804";

function getGeo() {

    var geoURL = geoAPI + city + "&limit=1&appid=" + APIkey;
}

function getWeather() {

    var weatherURL = weatherAPI + lat + "&lon=" + lon + "&appid=" + APIkey;
}