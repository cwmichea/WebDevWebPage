console.log('hello wolrd');
document.querySelector('.menubtn').addEventListener('click', 
() => {console.log('click');
   document.querySelector('.nav-menu').classList.toggle('show');     
} );
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{ delay:500} );
ScrollReveal().reveal('.cards-banner-one',{ delay:500} );
ScrollReveal().reveal('.cards-banner-two',{ delay:500} );
