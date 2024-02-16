// this file contains

// 1. calling elements form the dom
// 2. loading full document logic
// 3. open pop up when click projects from image
// 4. toggle top menu
// 5. close all pop ups
// 6. open pop up from side menu
// 7. toggle side menu
// 8. toggle register interest form
// 9. open social menu
// 10. open & close modal for (pdf and video)
// 11. go to whatsapp page contact
// 12. hide over lay (all info on map)
// 13. full screen mode

//helper functions (clear all pop ups)

console.log("main.js");

// 1 . calling elements form the dom
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

const overLay = document.querySelector(".over-lay");
const hideOverLay = document.querySelector("#hide-overlay");

const fullScreen = document.querySelector("#full-screen");

//================================================================

//2. loading full document logic
window.onload = function () {
  console.log("load");

  // adjust scroll bar on extra small devices
  if (window.innerWidth <= 575) {
    var scrollX = (img2d.scrollWidth - img2d.clientWidth) / 3;
    var scrollY = (img2d.scrollHeight - img2d.clientHeight) / 2;
    img2d.scrollTo(scrollX + 180, scrollY + 170);
  }
};
//======================================================================

// 3. open pop up when click projects from image
wave.addEventListener("click", function (e) {
  e.preventDefault();
  closeAllContent();
  document.querySelector("#pop-up-card").style.display = "flex";
  document.querySelector(".sigma-pop-up").style.display = "block";
});

lex.addEventListener("click", function (e) {
  e.preventDefault();
  closeAllContent();
  document.querySelector("#pop-up-card").style.display = "flex";
  document.querySelector(".lex-pop-up").style.display = "block";
});

skyline.addEventListener("click", function (e) {
  e.preventDefault();
  closeAllContent();
  document.querySelector("#pop-up-card").style.display = "flex";
  document.querySelector(".skyline-pop-up").style.display = "block";
});

heyazah.addEventListener("click", function (e) {
  e.preventDefault();
  closeAllContent();
  document.querySelector("#pop-up-card").style.display = "flex";
  document.querySelector(".heyazah-pop-up").style.display = "block";
});

businessYard.addEventListener("click", function (e) {
  e.preventDefault();
  closeAllContent();
  document.querySelector("#pop-up-card").style.display = "flex";
  document.querySelector(".yard-pop-up").style.display = "block";
});
// =======================================================================

//4. toggle top menu
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
//===============================================================================

// 5. close all pop ups
closePopUp.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#pop-up-card").style.display = "none";
  closeAllContent();
});
//=====================================================================================

// 6. open pop up from side menu
[...cardItemButton].map((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    closeAllContent();
    const popUpTarget = btn.getAttribute("data-link");
    document.querySelector("#pop-up-card").style.display = "flex";
    document.querySelector(`.${popUpTarget}`).style.display = "block";
  });
});
// =======================================================================================

// 7.toggle side menu

// open all projects
menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("menu button");
  allProjectsBtn.style.display = "none";
  projects.style.transform = "translateX(0px)";
  projects.style.opacity = "1";
  document.querySelector(".form").style.display = "none";
  socialMenu.style.display = "none";
});

// close all projects
projectsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  projects.style.transform = "translateX(-410px)";
  allProjectsBtn.style.display = "flex";
});

// =======================================================================

// 8. toggle register interest form

// open form
mail.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".form").style.display = "flex";
  controls.style.display = "none";
  document.querySelector(".top-menu").style.display = "none";
  document.getElementById("pop-up-card").style.display = "none";
  document.getElementById("menu").style.display = "none";
});

// close form
closeForm.addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector(".top-menu").style.display = "flex";

  document.getElementById("menu").style.display = "flex";

  document.querySelector(".form").style.display = "none";
  controls.style.display = "flex";
});
// ==============================================================

// 9.open social menu
controls.addEventListener("click", function (e) {
  console.log("first");
  e.preventDefault();
  socialMenu.classList = "social-menu";
  controls.classList.toggle("active");
  if (controls.classList.contains("active")) {
    socialMenu.style.display = "block";
    mail.style.display = "none";
  } else {
    mail.style.display = "flex";
    socialMenu.style.display = "none";
  }
});

//====================================================================
// 10.open & close modal for (pdf and video)

// close modal and reset iframes
closeModal.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "none";
  modelContentVideo.style.display = "none";
  modelContentPdf.style.display = "none";
  vidFrame.setAttribute("src", "");
  pdfFrame.setAttribute("src", "");
});
// open iframe
[...popUpBtn].map((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    //  chech what typeof button for
    // /video type
    if (btn.classList.contains("pop-up-btn-video")) {
      modal.style.display = "flex";
      modelContentVideo.style.display = "block";
      let iframePath = btn.getAttribute("data-link");
      vidFrame.setAttribute("src", iframePath);
    }
    // / pdf type
    if (btn.classList.contains("pop-up-btn-pdf")) {
      modal.style.display = "flex";
      modelContentPdf.style.display = "block";
      let iframePath = btn.getAttribute("data-link");
      pdfFrame.setAttribute("src", iframePath);
    }
    // / redirct type
    if (btn.classList.contains("pop-up-btn-redirect")) {
      let pagePath = btn.getAttribute("data-link");
      location.pathname = location.pathname.concat(pagePath);
    }
  });
});

//======================================================================

// 11. go to whatsapp page contact

whatsappIcon.addEventListener("click", function (e) {
  e.preventDefault();
  window.open("https://api.whatsapp.com/send/?phone=966920019711");
});

//========================================================================

// 12. hide over lay (all info on map)
hideOverLay.addEventListener("click", function (e) {
  e.preventDefault();
  overLay.classList.toggle("hide");
});

//=========================================================================

// 13. full screen mode
let isFullscreen = false;

// Function to toggle fullscreen mode
function toggleFullscreen() {
  if (!isFullscreen) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
    isFullscreen = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen();
    }
    isFullscreen = false;
  }
}

// Button click event listener
fullScreen.addEventListener("click", toggleFullscreen);
//==============================================================================

// helper functions

// remove all popups
function closeAllContent() {
  let allContent = document.querySelectorAll(".pop-up-content");
  [...allContent].map((elem) => {
    elem.style.display = "none";
  });
}
