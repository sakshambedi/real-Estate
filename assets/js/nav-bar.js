// // nav-bar.js
// $(document).ready(function() {
//     // Fetch and inject the navbar into the #navbarContainer
//     $('#navbarContainer').load('./pages/components/nav-bar.html', function() {
//         // Get the current page URL
//         var currentPage = window.location.href;

//         // Loop through each navbar link
//         $('.navbar a').each(function() {
//             // Check if the link's href matches the current page URL
//             if (currentPage.includes($(this).attr('href'))) {
//                 // Add a class to the matching link
//                 $(this).addClass('active');
//             }
//         });
//     });
// });  

function changeTab(element) {
  // Remove the 'active' class from all tabs
  var tabs = document.querySelectorAll('.nav_links li a');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  // Add the 'active' class to the clicked tab
  element.classList.add('active');

  // You can perform additional actions here based on the clicked tab
  // For example, load content dynamically or update other parts of the page
}
