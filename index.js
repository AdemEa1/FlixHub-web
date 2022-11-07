//38a97b17
//https://api.themoviedb.org/3/movie/550?api_key=10e5b26f65216e0d907d2c1c45c6ea2c

function openMenu() {
    document.body.classList += " menu--open"
  }
  
  function closeMenu() {
    document.body.classList.remove('menu--open')
  }
const movieboxsContainerEl = document.querySelector(".movieboxs__container");
const headerContainerEl = document.querySelector(".header__container");
const backTextEl = document.querySelector(".back__text");

async function searchInput(event) {
  const inputValue = event.target.value;
  const media = await fetch(
    `https://api.themoviedb.org/3/movie/550?api_key=10e5b26f65216e0d907d2c1c45c6ea2c`
  );
  const mediaData = await media.json();
  if (!mediaData.search) {
    movieboxsContainerEl.style.display = "none";
    headerContainerEl.style.display = "block";
    backTextEl.style.display = "none";
  }
  else if (mediaData.search) {
    movieboxsContainerEl.style.display = "flex";
    headerContainerEl.style.display = "none";
    backTextEl.style.display = "flex";
  }
  movieboxsContainerEl.innerHTML = mediaData.search.slice(0, 9)
  .map((media) => mediaHTML(media))
  .join("");

  event.default();
}
  
function mediaData(movie) {
  return ` <div class="moviebox--container">
  <div class="moviebox__flag">
  <div class="moviebox__front">
  <img src="${moviebox.Front}" class="moviebox__front--img"/>
  </div>
  <div class="moviebox__info--container">
  <div class="moviebox__title">${moviebox.Title}</div>
  <div class="moviebox__year">Year: ${moviebox.Year}</div>
  </div>
  </div>
  </div>`;
}

function searchActive() {
  document.querySelector(".search__input").classList.toggle("sActive");
}

function naAlert() {
  alert (
    "hello"
  );
}

function backText() {
  movieboxsContainerEl.style.display = "none";
    headerContainerEl.style.display = "block";
    backTextEl.style.display = "none";
}