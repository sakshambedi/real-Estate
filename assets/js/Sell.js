function submitForm() {
    var propertyImages = document.getElementById('propertyImages').files;
    var bedrooms = document.getElementById('bedrooms').value;
    var bathrooms = document.getElementById('bathrooms').value;
    var garage = document.getElementById('garage').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;

    // Simple validation: Check if any of the fields is empty
    if (!propertyImages || !bedrooms || !bathrooms || !garage || !address || !city || !country) {
        alert('Please fill in all fields before submitting.');
        return; // Stop the function if any field is empty
    }

    // Construct the destination URL based on the data, you can customize this
    var destinationURL = './../pages/Suggested_Realtors.html';

    // Redirect to the destination URL
    window.location.href = destinationURL;
}
