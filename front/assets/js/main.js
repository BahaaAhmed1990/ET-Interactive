console.log("cloud");
const img2d = document.querySelector("#image-2d");
const wave = document.querySelector("#SIGMA");
const lex = document.querySelector("#LEX");
const skyline = document.querySelector("#SKY_LINE");
const heyazah = document.querySelector("#heyazah_gate");
const businessYard = document.querySelector("#business_yard");

const allProjectsBtn = document.querySelector(".all-projects-btn");
const menuBtn = document.querySelector(".all-projects-btn");
const projects = document.querySelector(".projects");
const projectsBtn = document.querySelector(".projects-btn");
const closePopUp = document.querySelector("#close-pop-up");

const hamburger = document.querySelector(".hamburger-icon");
const closeTopMenu = document.querySelector(".close-top-menu");

const mail = document.querySelector(".mail");
const closeForm = document.querySelector(".close-form");

const controls = document.querySelector(".contacts-control");
const socialMenu = document.querySelector(".social-menu");

const cardItemButton = document.querySelectorAll(".card-item-btn");

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

const popUpBtn = document.querySelectorAll(".btn-pop-up");
const vidFrame = document.querySelector("#vid-frame");
const pdfFrame = document.querySelector(".publuuflip");
const modelContentVideo = document.querySelector(".modal-content-video");
const modelContentPdf = document.querySelector(".modal-content-pdf");

const whatsappIcon = document.querySelector("#whatsapp-row");

console.log(popUpBtn);

// loading full document logic
window.onload = function () {
  console.log("load");
  console.log(img2d.scrollWidth, img2d.scrollHeight);
  console.log(img2d.clientWidth, img2d.clientHeight);
  if (window.innerWidth <= 575) {
    var scrollX = (img2d.scrollWidth - img2d.clientWidth) / 3;
    var scrollY = (img2d.scrollHeight - img2d.clientHeight) / 2;
    img2d.scrollTo(scrollX + 180, scrollY + 170);
  }
};
// navigate to prjects pages
wave.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("wdem");
  closeAllContent();
  document.querySelector("#pop-up-card").style.display = "flex";
  document.querySelector(".sigma-pop-up").style.display = "block";
  // location.pathname = location.pathname.concat("sigma");
});

lex.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("wdem1");
  closeAllContent();
  document.querySelector("#pop-up-card").style.display = "flex";
  document.querySelector(".lex-pop-up").style.display = "block";
});

skyline.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("wdem2");
  closeAllContent();
  document.querySelector("#pop-up-card").style.display = "flex";
  document.querySelector(".skyline-pop-up").style.display = "block";
  // location.pathname = location.pathname.concat("sky-line");
});

heyazah.addEventListener("click", function (e) {
  e.preventDefault();
  closeAllContent();
  console.log("wdem3");
  document.querySelector("#pop-up-card").style.display = "flex";
  document.querySelector(".heyazah-pop-up").style.display = "block";
  // location.pathname = location.pathname.concat("heyazah-gate");
});

businessYard.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("wdem4");
  closeAllContent();
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
  hamburger.style.display = "flex";
});

// close all pop ups
closePopUp.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#pop-up-card").style.display = "none";
  closeAllContent();
});

function closeAllContent() {
  let allContent = document.querySelectorAll(".pop-up-content");
  [...allContent].map((elem) => {
    elem.style.display = "none";
  });
}

// open pop up from side menu
[...cardItemButton].map((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    closeAllContent();
    const popUpTarget = btn.getAttribute("data-link");
    document.querySelector("#pop-up-card").style.display = "flex";
    document.querySelector(`.${popUpTarget}`).style.display = "block";
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
  document.querySelector(".form").style.display = "none";
  socialMenu.style.display = "none";
  // document.querySelector(".all-nav-links").style.display = "none";
});

projectsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  projects.style.transform = "translateX(-410px)";
  allProjectsBtn.style.display = "flex";
});

// ==============================================
// open form
mail.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".form").style.display = "flex";
  controls.style.display = "none";
  document.querySelector(".top-menu").style.display = "none";
  document.getElementById("pop-up-card").style.display = "none";
  document.getElementById("menu").style.display = "none";

  // document.querySelector(".form-content").classList.add("animate__animated");
  // document
  //   .querySelector(".form-content")
  //   .classList.remove("animate__backOutDown");
  // document.querySelector(".form-content").classList.add("animate__backInDown");
});

// close form
closeForm.addEventListener("click", function (e) {
  e.preventDefault();

  // document
  // .querySelector(".form-content")
  // .classList.remove("animate__backInDown");

  // document.querySelector(".form-content").classList.add("animate__backOutDown");
  document.querySelector(".top-menu").style.display = "flex";
  // document.getElementById("pop-up-card").style.display = "flex";
  document.getElementById("menu").style.display = "flex";

  document.querySelector(".form").style.display = "none";
  controls.style.display = "flex";
});
// ==========================================
// open social menu
controls.addEventListener("click", function (e) {
  console.log("first");
  e.preventDefault();
  socialMenu.classList = "social-menu";
  controls.classList.toggle("active");
  if (controls.classList.contains("active")) {
    // socialMenu.classList.add("animate__animated");
    // socialMenu.classList.add("animate__backInDown");
    socialMenu.style.display = "block";
    mail.style.display = "none";
  } else {
    // socialMenu.classList.add("animate__animated");
    // socialMenu.classList.add("animate__backOutDown");
    mail.style.display = "flex";
    socialMenu.style.display = "none";
  }
});
//h=========================================
// open & close modal
closeModal.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "none";
  modelContentVideo.style.display = "none";
  modelContentPdf.style.display = "none";
  vidFrame.setAttribute("src", "");
  pdfFrame.setAttribute("src", "");
});

[...popUpBtn].map((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (btn.classList.contains("pop-up-btn-video")) {
      modal.style.display = "flex";
      modelContentVideo.style.display = "block";
      let iframePath = btn.getAttribute("data-link");
      vidFrame.setAttribute("src", iframePath);

      console.log("vid");
      console.log(iframePath);
    }
    if (btn.classList.contains("pop-up-btn-pdf")) {
      console.log("psdf");
      modal.style.display = "flex";
      modelContentPdf.style.display = "block";
      let iframePath = btn.getAttribute("data-link");
      pdfFrame.setAttribute("src", iframePath);
    }
    if (btn.classList.contains("pop-up-btn-redirect")) {
      let pagePath = btn.getAttribute("data-link");
      location.pathname = location.pathname.concat(pagePath);
    }
  });
});

//===============================

// go to whatsapp page contact

whatsappIcon.addEventListener("click", function (e) {
  e.preventDefault();
  window.open("https://api.whatsapp.com/send/?phone=966920019711");
});
