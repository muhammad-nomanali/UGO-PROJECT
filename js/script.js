var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4, 
  spaceBetween: 30, 
  loop: true, 
  autoplay: {
    delay: 1000, 
    disableOnInteraction: false, 
  },
  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev", 
  },
  breakpoints: { 
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    576: { 
      slidesPerView: 3,
      spaceBetween: 20
    },
    0:{
      slidesPerView: 1,
      spaceBetween: 20
    }
  },

});

function openNav() {
  document.getElementById("myNav").classList.toggle("menu_width");
  document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}

