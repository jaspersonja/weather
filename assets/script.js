var searchFormEl = document.getElementById("widget")
var searchButtonEl = document.getElementById("search-button")
var cityEl = document.getElementById("city")
var searchQuery = document.querySelector("#search-query")
var weatherCard = document.getElementById("weather-card")
var APIKey = "2d2d2544f1c9ad441e1cf2f84814182e"
var citySearchHistory = document.querySelector("ul")

//search form requiring user input
function handleSearch(event) {
    event.preventDefault();

    var city = document.querySelector("#search-query").value;

    if (!city) {
        console.error("You need a city input value!");
        return;
    }
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + APIKey

location.assign(queryString);
}

searchButtonEl.addEventListener("submit", handleSearch);

function getApi() {
       
    fetch(queryURL)
        .then(function(response) {
        return response.json();
         })
         .then(function(data) {
        for (var i = 0; i < data.length; i++) {
            var cityList = document.createElement("btn")
            cityList.textContent = data[i].//searched variable
            citySearchHistory.appendChild(cityList);

        }
            console.log(data);
         })
}
