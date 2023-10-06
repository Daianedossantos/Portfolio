
function ativaLetra(elemento) {
    const arrTexto = elemento.inerrHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.inerrHTML += letra;
        }, 75 * i)
    });
}

const titulo = document.querySelector('.digitando')
ativaLetra(titulo);

/*==================== srcroll sections avtie  Link=====================*/
let sections = document.querySelectorAll('.multiple-text');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });

        };
    });
/*==================== sticry navbar=====================*/
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);
};

/*==================== scroll reveal=====================*/
ScrollReveal({ 
   // reset: true,
    distance: '80px',
    duration:2000,
    delay: 200
 });


ScrollReveal().reveal('.home-content, cabecalho', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});


/*==================== typed js=====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedora Web', 'Frontend', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true 
});
