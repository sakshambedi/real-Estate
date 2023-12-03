function searchRealEstate() {
  event.preventDefault()
  var searchInput = document.getElementById('searchInput').value;
  console.log(searchInput)
  // Check if the search input is not empty
  if (searchInput.trim() !== '') {
    // Redirect to the map page for a valid search
    window.location.href = './pages/map.html';
  } else {
    alert("Please enter an address or property type");
  }
  // If the search input is empty, nothing happens
}