var swiper = null;

function updateSwiper() {
    var windowWidth = window.innerWidth;

    if (windowWidth >= 1000) {
        swiper.params.slidesPerView = 6;
    } else if (windowWidth < 1000 && windowWidth >= 750) {
        swiper.params.slidesPerView = 5;
    } else if (windowWidth <= 750 && windowWidth >= 500) {
        swiper.params.slidesPerView = 4;
    } else if (windowWidth < 500){
        swiper.params.slidesPerView = 3;
    }

    swiper.update();
}

// Inicialização do Swiper
swiper = new Swiper(".card_slider", {
    slidesPerView: 6,
    spaceBetween: 0,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#next-button",
        prevEl: "#prev-button",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

window.addEventListener("resize", function () {
    updateSwiper();
});

updateSwiper();