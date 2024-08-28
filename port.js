
/* toggle icon navbar*/


/*Scroll section active link*/
let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =  sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* stick nav bar*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

/* scroll reaval*/


ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading, .add1, .add', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-box, .portfolio-box, form', { origin: 'bottom' });


ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

/* type.js for multiple text read */
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Devloper.','Web Desiging.'],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
});