// An instance of our SimpleMap, created below when the window loads.
let map;

// Update the map to show markers for the set of observations
function updateMap(observations, map) {
  // Clear the current markers on the map (if any)
  map.clear();

  // Use the observations to draw a map
  observations.forEach((observation) => map.addObservation(observation));
}

// Update the cards to show cards for each observation
function updateCards(observations) {
  // Remove any current cards
  clearAllCards();

  // Populate the page with new cards for all observation data we want to show
  observations.forEach((observation) => {
    const observationCard = buildCardForObservation(observation);
    addCard(observationCard);
  });
}

// Generic function to show a set of observations with the given title
function showObservations(observations, title) {
  updateMap(observations, map);
  updateCards(observations);
  updateTitle(`${title} (${observations.length})`);
}

// Show all species
function showAll() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  showObservations(observations, 'All Species');
}

// Show native species
function showOnlyNative() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't native species
  const native = filterOnlyNative(observations);

  showObservations(native, 'Only Native Species');
}

// Show introduced species
function showOnlyIntroduced() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't introduced species
  const introduced = filterOnlyIntroduced(observations);

  showObservations(introduced, 'Only Introduced Species');
}

function start() {

  map = new SimpleMap("map-container", 43.7955, -79.3496);

  const btnShowAll = document.querySelector("#show-all");
  btnShowAll.onclick = showAll;

  const btnOnlyNative = document.querySelector("#show-native");
  btnOnlyNative.addEventListener("click", function () {
    showOnlyNative();
  });

  const btnOnlyIntroduced = document.querySelector("#show-introduced");
  btnOnlyIntroduced.onclick = () => showOnlyIntroduced();

  const searchForm = document.querySelector("form");
  searchForm.onsubmit = function (event) {
    event.preventDefault();

    const searchValue = document.querySelector('input[name="q"]').value;
    search(searchValue);
  };

  showAll();
}

window.onload = start;
