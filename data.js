displayList();
function displayList() {
	const listDisplay = document.getElementById("listDisplay")
	if (!localStorage.watchList) {
		listDisplay.innerHTML += `<h3>Your watch list is empty</h3>`
	}
	else {
		let watchlistJSON = localStorage.getItem('watchList');
		let watchlist = JSON.parse(watchlistJSON);
		watchlist.forEach(element => {
			console.log(element);
			fetch(`https://www.omdbapi.com/?i=${element}&apikey=4e21b89c`)
				.then((response) => response.json())
				.then((data) => {
					listDisplay.innerHTML += `<div class = "movie"><div class = "card"><div><h2>${data.Title}</h2></div><div><image src="${data.Poster}"></div></div><div class = "card"><div><h3>${data.Actors}</h3></div><div><h3>${data.Rated}</h3></div><div><h3>${data.Runtime}</h3></div></div></div>`
				})


		});

	}
};
