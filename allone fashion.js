const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fas fa-chevron-left fa-3x"></i>','<i class="fas fa-chevron-right fa-3x"></i>'],
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            navText:['<i class="fas fa-chevron-left fa-3x"></i>','<i class="fas fa-chevron-right fa-3x"></i>'],
        },
        600:{
            items:3
        },
        1000:{
            items:4,
            navText:['<i class="fas fa-chevron-left fa-3x"></i>','<i class="fas fa-chevron-right fa-3x"></i>'],
        },
        1300: {
            items:5
        }
    }
})