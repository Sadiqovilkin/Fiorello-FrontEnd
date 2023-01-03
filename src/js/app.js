const bi_search = document.querySelector('.bi-search')
const search = document.querySelector('.search')

if (bi_search) {
  bi_search.addEventListener('click', e => {
    search.classList.toggle('active')
  })
}
var swiper = new Swiper(".secswiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });