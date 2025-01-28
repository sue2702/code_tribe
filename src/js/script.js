const swiper = new Swiper(".swiper", {

    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },

    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicbullets: true,
    //   },

      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      mousewheel:{
        sensitivity:1,
      }
      
});