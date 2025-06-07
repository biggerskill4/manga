let swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true, // isse user drag bhi kar sakta hai
    },
    breakpoints: {
        100: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
    },
});