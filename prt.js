var typed= new Typed(".text", {
    strings:["Student", "Frontend Devoloper", "Web Developer"],
    typespeed: 100,
    backspeed: 100,
    backsDelay: 1000,
    loop: true
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let section = document.quarySelectorAll('section');
let navLinks = document.quarrySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('id');

        if (top>= offset && top < offset + height ) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.quarrySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,

});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'button'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'Left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});
