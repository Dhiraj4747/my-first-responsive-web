
/* to overcome the problem of overlapping navbar and header  */
let navbar = document.querySelector('nav');

window.onscroll = function(){
    if(window.scrollY > 0){
        navbar.style.background = '#eefff9';
    }
    else{
        navbar.style.background = 'transparent';
    }
}


// to perform the menu icon clickable in small screen size

let menulinks = document.getElementById("menu-links");

function toogleMenu(){
    menulinks.classList.toggle('show-menu');
}
