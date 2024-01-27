console.log("cloud");
const wave = document.querySelector("#wave");
const lex = document.querySelector("#lex");
const skyline = document.querySelector("#skyline");
const heyazah = document.querySelector("#heyazah");
const businessYard = document.querySelector("#business-yard");

const allProjectsBtn = document.querySelector(".all-projects-btn");
const menuBtn = document.querySelector("#menu-btn");
const projects = document.querySelector(".projects");
const projectsBtn = document.querySelector(".projects-btn");
const closePopUp = document.querySelector("#close-pop-up");

const hamburger = document.querySelector(".hamburger-icon");
const closeTopMenu = document.querySelector(".close-top-menu");

// navigate to prjects pages
wave.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("wdem");
  document.querySelector("#pop-up-card").style.display = "flex";
  document.querySelector(".sigma-pop-up").style.display = "block";
  // location.pathname = location.pathname.concat("sigma");
});

lex.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("wdem1");
  document.querySelector("#pop-up-card").style.display = "flex";
  document.querySelector(".lex-pop-up").style.display = "block";
  // location.pathname = location.pathname.concat("lex");
});

skyline.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("wdem2");
  document.querySelector("#pop-up-card").style.display = "flex";
  document.querySelector(".skyline-pop-up").style.display = "block";
  // location.pathname = location.pathname.concat("sky-line");
});

heyazah.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("wdem3");
  document.querySelector("#pop-up-card").style.display = "flex";
  document.querySelector(".heyazah-pop-up").style.display = "block";
  // location.pathname = location.pathname.concat("heyazah-gate");
});

businessYard.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("wdem4");
  document.querySelector("#pop-up-card").style.display = "flex";
  document.querySelector(".yard-pop-up").style.display = "block";
  // location.pathname = location.pathname.concat("business-yard");
});

// toggle top menu
hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".all-nav-links").style.display = "flex";
  hamburger.style.display = "none";
});
closeTopMenu.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".all-nav-links").style.display = "none";
  hamburger.style.display = "block";
});

// close all pop ups
closePopUp.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#pop-up-card").style.display = "none";

  let allContent = document.querySelectorAll(".pop-up-content");
  [...allContent].map((elem) => {
    elem.style.display = "none";
  });
});
// =========================================

// toggle side menu
menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("menu button");
  allProjectsBtn.style.display = "none";
  projects.style.transform = "translateX(0px)";
  projects.style.opacity = "1";
});

projectsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  projects.style.transform = "translateX(-410px)";
  allProjectsBtn.style.display = "flex";
});
