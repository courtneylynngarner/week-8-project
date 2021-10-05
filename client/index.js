const menu = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar-div");
const submitBtn = document.querySelector("button");
const newsletterForm = document.querySelector("form");
const emailInput = document.querySelector("input");

menu.addEventListener("click", () => {
  sidebar.classList.toggle("show-menu");
});

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(emailInput.value);
});
