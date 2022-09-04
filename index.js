const form = document.getElementById("search-form");
const results = document.getElementById("results");
const input = document.getElementById("input");




function displayMovies(movieArr){
    console.log(JSON.stringify(movieArr, null, 2))
  console.log(movieArr);
    movieArr.forEach((currentMovie) => {
      let movieID = currentMovie.imdbID;
      console.log(movieID);
      results.innerHTML += `
        <div class="card">
        
          <img src= "${currentMovie.Poster}" class="card-img-top" class="posters">

          <button id="${movieID}" class="add-button" onclick="addToList(${movieID})">
            
            <h5>Add to watch list</h5>

          </button>
        </div>`;
    })
  
}

function grabMovies(inputString) {
  fetch(`https://www.omdbapi.com/?s=${inputString}&apikey=4e21b89c`)
  .then((response) => response.json(), (falseResponse) => alert(falseResponse))
    .then((data) => (data.Search))
  .then((movieArr) => displayMovies(movieArr))
}

function addToList(movieArr, movieID) {

  console.log(movie);
  let movie = movieArr.find((currentMovie) => {
    return currentMovie.imdbID == movieID
  });

  if (!localStorage.watchList) {
    let watchList = [];
    localStorage.watchList = JSON.stringify(watchList)
    let watchlistJSON = localStorage.getItem('watchList');
    let watchlist = JSON.parse(watchlistJSON);
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.watchList = watchlistJSON;
  }
  else {
    console.log("else");
    let watchlistJSON = localStorage.getItem('watchList');
    let watchlist = JSON.parse(watchlistJSON);
    watchlist.push(movieID.id);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.watchList = watchlistJSON;
  }

}

form.addEventListener("submit", (e) => {
    results.innerHTML = ``;
    e.preventDefault();
  let inputString = input.value;

    grabMovies(inputString)
  
    form.reset();
});
  



