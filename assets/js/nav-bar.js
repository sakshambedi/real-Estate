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

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});