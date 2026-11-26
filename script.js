"use strict";

// 실제 가게로 바꿀 때는 예시 번호와 함께 이 데모 안내 동작을 수정하세요.
const demoDialog = document.querySelector("#demo-dialog");
document.querySelectorAll("[data-phone]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (demoDialog && typeof demoDialog.showModal === "function") {
      demoDialog.showModal();
    } else {
      window.alert("강의용 가상 가게입니다. 02-000-0000은 예시 번호로, 실제 전화 연결은 제공하지 않습니다.");
    }
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
