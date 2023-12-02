const searchInput = document.getElementById("searchInput");
const searchButton = document.querySelector(".search-box-button");

// Add an event listener for the "Enter" key
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchRealEstate();
  }
});

searchButton.addEventListener("click", function () {
  searchRealEstate();
});

function searchRealEstate() {
  const query = searchInput.value.trim();

  if (isValidInput(query)) {
    // Redirect to the map page with the search query as a parameter
    window.location.href = `./pages/map.html`;
  } else {
    showInvalidInputPopup();
  }
}

function isValidInput(query) {
  // Check if the input is not empty or just whitespace
  return query !== "";
}

function showInvalidInputPopup() {
  // Display a pop-up or alert for invalid input
  alert("Please try again! Enter a valid search.");
}
