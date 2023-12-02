const userData = {
    userID: 1,
    user_name: "user_good",
    first_name: "Patrick",
    last_name: "Dubious",
    user_email: "pd@ILOVEHCI.ca",
    user_password: "pa$$word",
    phone_number: "204-123-1233",
    profile_picture: "http://hci.cs.umanitoba.ca/assets/images/people/_bio/New_Jersey_Patrick.jpg",
    prefrences: {
        Bedroom: 4,
        Bathroom: 2
    }
};
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Remove 'active' class from all buttons
    document.querySelectorAll('.each-button').forEach(button => {
        button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    var activeButton = document.querySelector(`.each-button[data-section="${sectionId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

/* 
* Execute prefillForm when the DOM is ready
*/
document.addEventListener('DOMContentLoaded', function () {
    prefillForm();
});

/**
 * Function for prefilling the information for the user in the form and they can change it
 * @param None
 * @returns None
 */
function prefillForm() {
    // const userData = {
    //     userID: 1,
    //     user_name: "user_good",
    //     first_name: "Patrick",
    //     last_name: "Dubious",
    //     user_email: "pd@ILOVEHCI.ca",
    //     user_password: "pa$$word",
    //     phone_number: "204-123-1233",
    //     profile_picture: "http://hci.cs.umanitoba.ca/assets/images/people/_bio/New_Jersey_Patrick.jpg",
    //     prefrences: {
    //         Bedroom: 4,
    //         Bathroom: 2
    //     }
    // };


    document.getElementById('first_name').value = userData.first_name || '';
    document.getElementById('last_name').value = userData.last_name || '';
    document.getElementById('username').value = userData.user_name || '';
    document.getElementById('email').value = userData.user_email || '';
    document.getElementById('phone').value = userData.phone_number || '';
    document.getElementById('password').value = userData.user_password || '';
}



function openImageSelector() {
    const input = document.getElementById('profilePicture');

    input.click();

    input.addEventListener('change', (event) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            const reader = new FileReader();

            reader.onload = (e) => {
                // Update the image source on the page
                document.getElementById('profileImage').src = e.target.result;
            };

            reader.readAsDataURL(files[0]);
        }
    });
}

function showConfirmation() {
    var username = "user_good"; // Replace with the actual username
    document.getElementById("username-placeholder").innerText = username;
    document.getElementById("confirmation-modal").style.display = "flex";
}

function hideConfirmation() {
    document.getElementById("confirmation-modal").style.display = "none";
}

function deleteAccount() {
    var confirmationInput = document.getElementById("confirmation-input").value;
    var username = userData.user_name // Replace with the actual username

    if (confirmationInput === username) {
        alert("Account deleted successfully!");
        // Add your delete account logic here
    } else {
        alert("Confirmation failed. Please enter the correct username.");
    }

    hideConfirmation();
}


document.addEventListener('DOMContentLoaded', function () {
    let lastClickedButton = null;

    const sidebarButtons = document.querySelectorAll('.side-bar-button');

    sidebarButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove 'active' class and reset color of the last clicked button
            if (lastClickedButton) {
                lastClickedButton.classList.remove('active');
                lastClickedButton.style.backgroundColor = '#f8f9fa'; // Reset to default color
                lastClickedButton.style.color = ''; // Reset text color
            }

            // Add 'active' class and change color of the clicked button
            this.classList.add('active');
            this.style.backgroundColor = '#28a745'; // Change to your desired green color
            this.style.color = '#fff'; // Change text color to white

            // Set the current button as the last clicked button
            lastClickedButton = this;
        });
    });
});
