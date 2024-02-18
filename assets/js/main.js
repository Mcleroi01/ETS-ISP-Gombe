window.onscroll = function () {
    scroll()

}


let nav = document.getElementById('navbar')
let stick = nav.offsetTop


function scroll() {
    if (window.pageYOffset >= stick) {
        nav.classList.add('stick')
    }
    else {
        nav.classList.remove('stick')
    }
}


function change(x) {
    x.classList.toggle("change")
    document.querySelector('.menu').classList.toggle('menu-mobile');
    window.onclick = function (e) {
        if (e.target.matches('pro')) {
            let drop = document.querySelector('.nav_menu');
            if (drop.classList.contains('menu-mobile')) {
                drop.classList.remove('show')
            }
        }


    }

}


window.addEventListener('scroll', reveal)
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top
        let revealpoint = 150;


        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');

        } else {
            reveals[i].classList.remove('active');
        }

    }
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,


    autoplay: {
        delay: 5000,
    },
});


var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
}