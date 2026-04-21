window.addEventListener("load", ()=>{
  AOS.init();
  // goTop
  // footer 상단 위치 픽셀값 파악
  // waypoint 라이브러리 : 스크롤 위치를 감지해서 특정 시점에 이벤트 실행
  let footer = document.querySelector(".footer")
  let footerY = footer.offsetTop
  const gotop = document.querySelector(".gotop")
  gotop.addEventListener("click", ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    })
  })
  // console.log(footerY);
  // 전체 높이의 95% 됐을 때
  let waypoint_footer = new Waypoint({
    element : document.querySelector(".footer"),
    handler : function(direction){
      console.log(direction);
      if(direction === "down"){
        gotop.classList.add("active-footer")
      }else{
        gotop.classList.remove("active-footer")
      }
    },
    offset : "95%",
  })
  // scroll 위치가 서비스 영역에 위치하면 
  let waypoint_service = new Waypoint({
    element : document.querySelector(".service"),
    handler : function(direction){
      if(direction === "down"){
        gotop.classList.add("active")
      }else{
        gotop.classList.remove("active")
      }
    },
    offset : "80%"
  })
})