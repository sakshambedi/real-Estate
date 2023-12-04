// nav-bar.js
// $(document).ready(function () {
//   // Fetch and inject the navbar into the #navbarContainer
//   $('#navbarContainer').load('./pages/modular/nav-bar.html', function () {
//     // Get the current page URL
//     var currentPage = window.location.href;

//     // Loop through each navbar link
//     $('.navbar a').each(function () {
//       // Check if the link's href matches the current page URL
//       if (currentPage.includes($(this).attr('href'))) {
//         // Add a class to the matching link
//         $(this).addClass('active');
//       }
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  // Get the current page URL
  var currentPage = window.location.href;

  // Select all navigation links
  var navLinks = document.querySelectorAll('.nav_links a');

  // Loop through each link and compare the href attribute with the current page URL
  navLinks.forEach(function (link) {
    if (link.href === currentPage) {
      // Add the 'active' class to the link if it matches the current page
      link.classList.add('active');
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const userIcon = document.getElementById('userIcon');
  const settingsOption = document.getElementById('settings-dropdown');
  const signInOption = document.getElementById('signin-dropdown');
  const logoutOption = document.getElementById('logout-dropdown');


  // Check sessionStorage variable
  const isLoggedIn = sessionStorage.getItem('userLoggedIn') === 'true';
  console.log(isLoggedIn)

  if (isLoggedIn) {
    // User is logged in, show "Settings" and "Logout"
    settingsOption.style.display = 'block';
    logoutOption.style.display = 'block';
    signInOption.style.display = 'none';
  } else {
    // User is not logged in, show "Sign In" and hide "Settings" and "Logout"
    settingsOption.style.display = 'none';
    logoutOption.style.display = 'none';
    signInOption.style.display = 'block';
  }
});
