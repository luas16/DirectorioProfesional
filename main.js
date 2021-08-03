document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.imgPrincipal');
ScrollReveal().reveal('.servicios', {delay: 500});
ScrollReveal().reveal('.servicios-banner-uno', {delay: 500});
ScrollReveal().reveal('.servicios-banner-dos', {delay: 500});