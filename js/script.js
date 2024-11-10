const swiper = new Swiper('.reviews-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: { slidesPerView: 2 }, // Saat layar > 768px, tampilkan 2 slide
        992: { slidesPerView: 3 }, // Saat layar > 992px, tampilkan 3 slide
    },
});
