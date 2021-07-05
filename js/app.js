// toggle menu

const toggle = document.querySelector(".toggle__menu--link");
const bar = document.querySelector(".bar");
const resNavbar = document.querySelector(".navbar__menu--res");
const close = document.querySelector(".close-icon");

const signUpBtn = document.querySelectorAll(".sign-up");

const modal = document.querySelector(".modal");

toggle.addEventListener("click", function () {
  this.classList.toggle("is-active");
  resNavbar.classList.toggle("active");
});

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector("header").style.backgroundColor = "#fff";
    document.querySelector("header").style.borderBottom =
      "border-bottom: 1px solid rgba(255, 255, 255, 0.1);";
  } else {
    document.querySelector("header").style.backgroundColor =
      "rgb(241, 241, 252)";
  }
};

for (let i = 0; i < signUpBtn.length; i++) {
  signUpBtn[i].addEventListener("click", function () {
    modal.classList.add("show-modal");
  });
}

close.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

window.addEventListener("click", (e) => {
  e.target == modal ? modal.classList.remove("show-modal") : false;
});
