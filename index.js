const form = document.getElementById("search-form");
const results = document.getElementById("results");
const input = document.getElementById("input");
// let watchList = [];
// localStorage.setItem("watchList", watchList);
// localStorage.watchList = [];

form.addEventListener("submit", (e) => {
    results.innerHTML = ``;
    e.preventDefault();
    let inputString = input.value;
    fetch(`https://www.omdbapi.com/?s=${inputString}&apikey=4e21b89c`)
      .then((response) => response.json(), (falseResponse) => alert(falseResponse))
      .then((data) =>
        data.Search.forEach((element) => {
          let imdb = element.imdbID;
          console.log(imdb);
          results.innerHTML += `<div id=><button id="${imdb}" class="add-button" data-imdbID="${imdb}" onclick="addToList(${imdb})"><h5>Add to watch list</h5></button> <img src= "${element.Poster}" class="posters"></div>`;
        })
      );
  
    form.reset();
});
  
function addToList(movieID) {
  // let watchListJson = localStorage.getItem("watchList")
  // console.log(watchListJson);
  // let watchList = JSON.parse("watchListJson");
  // if (watchList == null) {
    // watchList = [];
  // }
  if (!localStorage.watchList) {
    console.log("if");
    watchList = [];
    localStorage.watchList = JSON.stringify(watchList)
    let watchlistJSON = localStorage.getItem('watchList');
    let watchlist = JSON.parse(watchlistJSON);
    watchlist.push(movieID.id);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.watchList = watchlistJSON;
  }
  else {
    console.log("else");
    // watchList = [];
    // localStorage.watchList = JSON.stringify(watchList);
    let watchlistJSON = localStorage.getItem('watchList');
    let watchlist = JSON.parse(watchlistJSON);
    watchlist.push(movieID.id);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.watchList = watchlistJSON;
  }

}