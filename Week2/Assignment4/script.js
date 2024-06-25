const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
const welcome = document.getElementById("welcome");
const welcomeText = document.getElementById("welcomeText");
const hideContainer = document.getElementById("hideContainer");
const ctaButton = document.getElementById("cta");

//漢堡菜單
menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

//變更歡迎文字
welcome.addEventListener("click", () => {
  if (welcomeText.textContent === "Welcome Message") {
    welcomeText.textContent = "Have a Good Time!";
  } else {
    welcomeText.textContent = "Welcome Message";
  }
});

//click取得更多內容
ctaButton.addEventListener("click", () => {
  var hideContainer = document.getElementById("hideContainer");
  if (
    hideContainer.style.display === "none" ||
    hideContainer.style.display === ""
  ) {
    hideContainer.style.display = "grid";
  } else {
    hideContainer.style.display = "none";
  }
});
