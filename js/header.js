window.addEventListener("load", () => {
  // 스크롤 될 때
  const header = document.querySelector(".header");
  let scy = 0; // 스크롤 y값

  // 2. class 적용 여부 결정
  // if(scy > 0){
  //     header.classList.add("active")
  // }
  // 스크롤 시
  window.addEventListener("scroll", () => {
    // 1. 스크롤 바의 픽셀 위치 값을 파악해서
    scy = window.document.documentElement.scrollTop;
    if (scy > 0) {
      header.classList.add("active");
    }else{
        header.classList.remove("active")
    }
  });
});
