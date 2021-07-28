const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=263eeb246a0c04778be8543d7bc70709&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=263eeb246a0c04778be8543d7bc70709&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.nodeValue;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL);
  }
});
