var searchFormEl = document.getElementById("widget")
var searchButtonEl = document.getElementById("search-button")
var cityEl = document.getElementById("city")

var weatherCard = document.getElementById("weather-card")
var APIKey = "2d2d2544f1c9ad441e1cf2f84814182e"
var citySearchHistory = document.querySelector("#city-search-history")
var cityStorage = ["1"]

//search form requiring user input
function handleSearch(event) {
    event.preventDefault();

    var city = document.querySelector("#search-input").value;
    cityStorage.push(city);
    console.log(cityStorage);
    if (!city) {
        console.error("You need a city input value!");
        return;
    }
    // var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + APIKey
    console.log(city);
    // getApi(queryURL);

    localStorage.setItem("city", JSON.stringify(cityStorage))
    console.log(cityStorage.length)
    renderButtons();
}

function loadDataFromLocalStorage() {
    var localStorageData = JSON.parse(localStorage.getItem("city"));

    cityStorage = localStorageData;

    renderButtons();
}
loadDataFromLocalStorage();

function renderButtons() {
        citySearchHistory.innerHTML = "";
    for (var i = 0; i < cityStorage.length; i++) {
        var searchHistory = document.createElement("button")
        citySearchHistory.appendChild(searchHistory);
        searchHistory.textContent = cityStorage[i];
    }
}
searchButtonEl.addEventListener("click", handleSearch);

// function getApi(queryURL) {

//     fetch(queryURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             for (var i = 0; i < data.length; i++) {
//                 var cityList = document.createElement("btn")
//                 cityList.textContent = data[i].name//searched variable
//                     console.log(cityList);
//                 citySearchHistory.appendChild(cityList);

//             }
//             console.log(data);
//         })
// }
