//38a97b1
//https://api.themoviedb.org/3/movie/550?api_key=10e5b26f65216e0d907d2c1c45c6ea2c

function openMenu() {
  document.body.classList += " menu--open"
}

function closeMenu() {
  document.body.classList.remove('menu--open')
}

const movieboxContainerEl = document.querySelector(".movieboxs__container");
const headerContainerEl = document.querySelector(".header__container");
const returnhomeEl = document.querySelector(".returnHome");

async function searchInputArea(event) {
  const Id = event.target.value;
  const moviebox = await fetch(
    `https://www.omdbapi.com/?apikey=38a97b17&s=${Id}`
  );
  const movieboxData = await moviebox.json();
  if (!movieboxData.Search) {
    movieboxContainerEl.style.display = "none";
    headerContainerEl.style.display = "block";
    returnhomeEl.style.display = "none";
  } 
  else if (movieboxData.Search) {
    movieboxContainerEl.style.display = "flex";
    headerContainerEl.style.display = "none";
  }
  movieboxContainerEl.innerHTML = movieboxData.Search.slice(0, 9)
    .map((moviebox) => movieboxsHTML(moviebox))
    .join("");

  event.preventDefault();
}

function movieboxsHTML(movie) {
  return `<div class="moviebox--container">
  <div class="moviebox__flag">
  <div class="moviebox__front">
  <img
  src="${movie.Poster}"
  class="movie__front--imgs"/>
  </div>
  <div class="moviebox__info--container">
  <div class="movieboxs__title">${movie.Title}</div>
  <div class="moviebox__year">Year: ${movie.Year}</div>
  </div>
  </div>
  </div>`;
}

function searchActivate() {
  document.querySelector(".search__bar--input").classList.toggle("sActive");
}

function aNotif() {
  alert(
    "These features are for only for display."
  );
}

function returnHome() {
  movieboxContainerEl.style.display = "none";
  headerContainerEl.style.display = "block";
  returnhomeEl.style.display = "none";
}