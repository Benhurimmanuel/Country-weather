// Creating basic container and row bootstrap
let container = document.createElement("div");
container.setAttribute("id", "");
container.setAttribute("class", "container");

let row = document.createElement("div");
row.setAttribute("id", "");
row.setAttribute("class", "row ");

container.append(row);
document.body.append(container);

// Getting Country data from Api
var data = fetch("https://restcountries.eu/rest/v2/all");
data
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    for (i in response) {
      //Creating card of data from APi
      let card = document.createElement("div");
      card.setAttribute(
        "class",
        "card col-lg-4 col-sm-12 m-3 align-items-center"
      );
      card.style.width = "15rem";
      let cardimg = document.createElement("img");
      cardimg.setAttribute("class", "card-header card-img-top");
      cardimg.setAttribute("src", response[i].flag);
      cardimg.style.minHeight = "10em";

      let cardbody = document.createElement("div");
      cardbody.setAttribute("class", "card-body");

      let name = document.createElement("h5");
      name.innerHTML = response[i].name;

      let region = document.createElement("p");
      region.innerHTML = "Region: " + response[i].region;

      let population = document.createElement("p");
      population.innerHTML = "Population: " + +response[i].population;

      let countryCode = document.createElement("p");
      countryCode.innerHTML = "Country-Code: " + response[i].alpha3Code;

      let btn = document.createElement("button");
      btn.setAttribute("class", "btn btn-primary");
      btn.setAttribute("id", response[i].capital);
      btn.setAttribute("onClick", "btnclick(this.id)");
      btn.innerHTML = "Click for weather";

      cardbody.append(name);
      cardbody.append(region);
      cardbody.append(population);
      cardbody.append(countryCode);
      card.append(cardimg);
      card.append(cardbody);
      row.append(card);
      cardbody.append(btn);
    }
  });
// On click function to get weather of capital city
function btnclick(clicked) {
  // Getting wetaher from Api
  let weatherdata = fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      clicked +
      "&appid=57543d24c60e5811ba0c96d195e7de85"
  );
  weatherdata
    .then(function (clicked) {
      return clicked.json();
    })
    .then(function (clicked) {
      // creating alert for current weather in capital city
      alert("It is " + clicked.weather[0].description + " in " + clicked.name);
    });
}
