const menu = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar-div");
const submitBtn = document.querySelector("button");
const newsletterForm = document.querySelector(".newsletter");
const emailInput = document.getElementById("email-address");
const newsletterResponse = document.querySelector(".newsletter-response");
const formControl = document.querySelector(".form-control");
const participate = document.getElementById("participate");
const newsletterEmail = document.getElementById("newsletter-email");
const userEmail = document.getElementById("user-email");
console.log(userEmail);
console.log(newsletterResponse);
menu.addEventListener("click", () => {
  sidebar.classList.toggle("show-menu");
});

participate.addEventListener("click", () => {
  formControl.classList.toggle("show-message");
});

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("I'm here");
  console.log(newsletterEmail.value);
  const newsletterEmailSubmission = newsletterEmail.value;
  console.log(newsletterEmailSubmission);
  axios
    .post(`http://localhost:4000/api/newsletter-sign-up`, {
      newsletterEmailSubmission,
    })
    .then((res) => {
      console.log(res.data);
      const resArray = res.data.split(" ");
      console.log(resArray);
      userEmail.textContent = `${resArray[0]}`;

      newsletterResponse.style.visibility = "unset";
    });
});
