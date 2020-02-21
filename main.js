const textTop = document.querySelector(".head-top");
const colorSwitch = document.querySelector(".button");

colorSwitch.addEventListener("click", function() {
  textTop.classList.add("change");
});