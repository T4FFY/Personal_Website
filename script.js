// document.addEventListener('DOMContentLoaded', function () {

//     const links = document.querySelectorAll('.site-nav ul li a');

//     for (const link of links) {
//         link.addEventListener('click', function (event) {
//             event.preventDefault();
//             const targetID = this.getAttribute('href');
//             const targetSection = document.querySelector(targetID);

//             window.scrollTo({
//                 top: targetSection.offsetTop - document.querySelector('.site-header').offsetHeight,
//                 behavior: 'smooth'
//             });
//         });
//     };
// });