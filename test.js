const form = document.getElementById("search-form");
const results = document.getElementById("results");
const input = document.getElementById("input");

// the easiest thing to do is to store the movieArr in a global variable
let movieArr = [];

function displayMovies() {
    //   console.log(movieArr);
  
    // var myObj = [{name:"test", time:"Date 2017-02-03T08:38:04.449Z"}];

    
    movieArr.forEach((currentMovie, index) => {
        
        localStorage.setItem(`item${index}`, JSON.stringify(currentMovie));
        // console.log(currentMovie);
        results.innerHTML += `
            <div id="${index}" class="card">
            
            <img  src= "${currentMovie.Poster}" class="card-img-top" class="posters">

            <button class="add-button" onclick="addToList(${index})" >
                
                <h5>Add to watch list</h5>
                
            </button>
            </div>`;
    });
}

function grabMovies(inputString) {
    fetch(`https://www.omdbapi.com/?s=${inputString}&apikey=4e21b89c`)
        .then(
            (response) => response.json(),
            (falseResponse) => alert(falseResponse)
        )
        .then((data) => data.Search)
        .then((movies) => {
            // the easiest thing to do is to store the movieArr in a global variable
            movieArr = movies;
            displayMovies(movieArr)
        });
}

function addToList(index) {
    // get the index and use it to search for the element
    const click = document.getElementById(index);
    const movieID = click.getAttribute('id');
    console.log(movieID);

    let item = localStorage.getItem(`item${index}`);
    item = JSON.parse(item)

    console.log(item);
    
    // use the inspect tool and
    // compare this movieID to the <div id="${index}" class="card">


    // Finish the rest of the code
    // You can't store objects in localStorage


    // I don't think this code will work
    /* 
    console.log(movieID);
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
    */

}

form.addEventListener("submit", (e) => {
    results.innerHTML = ``;
    e.preventDefault();
    let inputString = input.value;

    grabMovies(inputString);

    form.reset();
});