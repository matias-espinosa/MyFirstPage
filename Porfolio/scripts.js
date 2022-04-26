/*================= HAMBURGUER =================*/

const hamburguer = document.querySelector ('.header .nav_bar .nav_list .hamburguer');
const mobile_menu = document.querySelector ('.header .nav_bar .nav_list ul');
const menu_item = document.querySelectorAll ('.header .nav_bar .nav_list ul li a');
const header = document.querySelector ('.header.container');

hamburguer.addEventListener('click',()=>{
    hamburguer.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = '#000000'
    } else {
        header.style.backgroundColor = 'transparent'
    }
})

menu_item.forEach((item) => {
    item.addEventListener('click',()=> {
        hamburguer.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
    
})

/*================= CAROUSEL =================*/

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right') ;
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

//GETTING THE SLIDES NEXT TO EACH OTHER
//first option
//const slideSize = slide [0].getBoundingClientRect();
//const slideWidth = slideSize.width;

//Optimized option, the width at the end strings it.
const slideWidth = slides [0].getBoundingClientRect().width;

/*
slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth * 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px';

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
})
*/

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition)

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
// when I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide)
})
// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide)
})






//when I click nav indicators, move to that slide