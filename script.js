function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = (navLinks.style.display === 'block' ? 'none' : 'block');
}



// $(document).ready(function(){
//     var previousScroll = 0;

//     $(window).scroll(function(){
//         var currentScroll = $(this).scrollTop();
        
//         if (currentScroll > previousScroll){
//             // Scrolling down
//             $('.nav-bar').fadeOut();
//         } else {
//             // Scrolling up
//             $('.nav-bar').fadeIn();
//         }
        
//         previousScroll = currentScroll;
//     });
// });
// let lastScrollTop = 0;
// const navbar = document.getElementById('navbar');

// window.addEventListener('scroll', function() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop) {
//         // When scrolling down
//         navbar.style.opacity = '0';
//     } else {
//         // When scrolling up
//         navbar.style.opacity = '1';
//     }
//     lastScrollTop = scrollTop;
// });

