$(document).ready(function () {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".netflix-navbar").css("background", "#0C0C0C");
        }

        else {
            $(".netflix-navbar").css("background", "transparent");
        }
    });

})


function position(id) {
    let card = document.getElementsByClassName('card')[id];
    console.log(id)
}


const myCarouselElement = document.querySelectorAll('.myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 1000,
    touch: false
})