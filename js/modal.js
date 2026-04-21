window.addEventListener("load", function () {
  // modal창 닫기
  const modalWrap = this.document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector(".modalClose");
  modalClose.addEventListener("click", () => {
    modalWrap.style.display = "none";
  });
});
