displayList();
function displayList() {
  const listDisplay = document.getElementById("listDisplay");
  if (!localStorage.watchList) {
    listDisplay.innerHTML += `<h3>Your watch list is empty</h3>`;
  } else {
    let watchlistJSON = localStorage.getItem("watchList");
    let watchlist = JSON.parse(watchlistJSON);
    watchlist.forEach((element) => {
      console.log(element);

      listDisplay.innerHTML += `<div class = "movie"><div class = "card"><div><h2>${element.Title}</h2></div><div><image src="${element.Poster}"></div></div><div class = "card"><div><h3>${element.Actors}</h3></div><div><h3>${element.Rated}</h3></div><div><h3>${element.Runtime}</h3></div></div></div>`;
    });
  }
}
