const hamburguer = document.querySelector ('.header .nav_bar .nav_list .hamburguer');
const mobile_menu = document.querySelector ('.header .nav_bar .nav_list ul');
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