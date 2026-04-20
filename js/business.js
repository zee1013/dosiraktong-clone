window.addEventListener("load", () => {
  const swBusiness = new Swiper(".sw-business", {
    slidesPerView: 1,
    // spaceBetween: 20,
    breakpoints: {
      // 480 ~ 1023px
      480: {
        slidesPerView: 2,
      },
      // 1024px 이후
      1024: {
        slidesPerView: 3,
      },
    },
  });
  // 모달 창
  const businessModal = document.querySelector(".business-modal")
  businessModal.addEventListener("click", ()=>{
    businessModal.style.display = "none"
  })
});
