window.addEventListener("load", () => {
    // 1. 슬라이드 개수 만큼 li 생성하기
    const swSlideCount = document.querySelectorAll(".sw-visual .swiper-slide").length
    console.log(swSlideCount); // 4
    // 2. li 태그 출력 장소(ul) 저장
    const swSlideUl = document.querySelector(".sw-visual-pg-list")
    // 3. li에 html로 작성할 글자 생성
    let swVisualHtml = ``
    for(let i = 0; i < swSlideCount; i++){
        swVisualHtml = swVisualHtml + `<li>${i+1}</li>`
    }
    // console.log(swVisualHtml);
    // 4. swVisualHtml을 ul에 추가
    swSlideUl.innerHTML = swVisualHtml
    // 5. 페이지네이션 관련(코딩으로 생성한 li태그를 저장)
    const swVisualPgLi = document.querySelectorAll(".sw-visual-pg-list li")
    // console.log(swVisualPgLi);

    

  const swVisual = new Swiper(".sw-visual", {
    effect: "fade",
    loop: true,
    // 슬라이드의 모션 속도를 transition 맞춘다.
    speed: 1500,
    autoplay: {
      delay: 2500,
      // 사용자가 마우스 클릭 드래그로 이동하면
      // 아래 구문이 없으면 autoplya 가 해제되므로
      // 이것을 방지해 주기위한 처리
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
});
// 1. li의 흰색 라인이 늘어나는 모션
swVisualPgLi[0].classList.add("active")
// 2. 스와이퍼가 바뀔 때 마다 실행
// 슬라이더가 바뀌는 상태를 찾아서 우리가 적용 하고자 하는 처리 하기
swVisual.on("slideChange", ()=>{
    swVisualPgLi.forEach((item, index)=>{
        // console.log(item, index);
        // console.log(swVisual.realIndex);
        if(swVisual.realIndex === index){
            item.classList.add("active")
        }else{
            item.classList.remove("active")
        }
        
    })
})
// li 태그에 클릭을 하면 슬라이드 기능
swVisualPgLi.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        // slideToLoop()를 이용하면 원하는 페이지로 보낼 수 있음
        // slideToLoop(해당 번호, 속도, runCallbacks)
        swVisual.slideToLoop(index, 500, false)
    })
})
});
