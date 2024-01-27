console.log("wave");
// alert(window.innerWidth);ss
// alert(` width : ${window.innerWidth} , height : ${window.innerHeight}`);
const loader = document.querySelector("#loader");
const landscape = document.querySelector("#landscape");
const surroundings = document.querySelector("#surroundings");
const frame = document.querySelector("#frame");
const gallery = document.querySelector("#gallery");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-btn");
const surroundingNav = document.querySelector("#surrounding-nav");
const aminities = document.querySelector("#aminities");
const closeAminities = document.querySelector("#close-aminities");
const closeSurrounding = document.querySelector("#close-surrounding");
const image2d = document.querySelector("#image-2d");
const aminitiesLinks = document.querySelectorAll("ul li");
const gallerySubMenu = document.querySelector(".gallery-submenu");
const videoLink = document.querySelector("#video-link");
const renderImage = document.querySelector("#render-image");
const projectProfile = document.querySelector("#project-profile");
const modalVideo = document.querySelector(".modal-video");
const renderImageModal = document.querySelector(".render-image");
const projectProfileModal = document.querySelector(".project-profile");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const heyazaProjects = document.querySelector("#heyaza-projects");
const home = document.querySelector("#home");
const allProjectsBtn = document.querySelector(".all-projects-btn");
const menuBtn = document.querySelector("#menu-btn");
const projects = document.querySelector(".projects");
const projectsBtn = document.querySelector(".projects-btn");
const hamburger = document.querySelector(".hamburger-icon");
const closeTopMenu = document.querySelector(".close-top-menu");
const closePopUp = document.querySelector("#close-pop-up");
// console.log(aminitiesLinks);
let slideIndex = 1;

home.addEventListener("click", function (e) {
  e.preventDefault();
  aminities.style.display = "none";
  image2d.style.display = "none";
  gallerySubMenu.style.display = "none";
  gallerySubMenu.classList.remove("active");
  frame.src =
    "https://heyazah.viewin360.co/share/5Dmdj?logo=-1&info=0&fs=0&vr=1&gyro=0&thumbs=-1&inst=0&keys=0";
});

[...aminitiesLinks].map((link) => {
  console.log(link.getAttribute("data"));
  link.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(this);
    let frameLink = this.getAttribute("data");
    console.log(frameLink);
    frame.src = frameLink;
  });
});

// console.log(document.querySelector(".mm").getAttribute("data"));

// console.log("first");
window.onload = (event) => {
  console.log("page is fully loaded");

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
};

landscape.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("land");
  image2d.style.display = "none";
  aminities.style.display = "block";
  gallerySubMenu.style.display = "none";
  gallerySubMenu.classList.remove("active");
  frame.src =
    "https://heyazah.viewin360.co/share/5Dmds?logo=-1&info=0&fs=0&vr=1&gyro=0&thumbs=-1&inst=0&keys=0";
});

closeAminities.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("land");
  aminities.style.display = "none";
});

surroundings.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("surround");
  aminities.style.display = "none";
  image2d.style.display = "none";
  gallerySubMenu.style.display = "none";
  gallerySubMenu.classList.remove("active");
  frame.src =
    "https://heyazah.viewin360.co/share/5Dmnh?logo=-1&info=0&fs=0&vr=1&gyro=0&thumbs=-1&inst=0&keys=0";
});

closeSurrounding.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("out surround");
  surroundingNav.style.display = "none";
});

gallery.addEventListener("click", function (e) {
  e.preventDefault();
  image2d.style.display = "none";
  aminities.style.display = "none";
  if (gallerySubMenu.classList.contains("active")) {
    gallerySubMenu.style.display = "none";
    gallerySubMenu.classList.remove("active");
  } else {
    gallerySubMenu.style.display = "block";
    gallerySubMenu.classList.add("active");
  }
  // modal.style.display = "block";
  // modal.style.display = "block";
});

closeModal.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "none";
  modalVideo.style.display = "none";
  renderImageModal.style.display = "none";
  projectProfileModal.style.display = "none";
});

heyazaProjects.addEventListener("click", function (e) {
  e.preventDefault();
  image2d.style.display = "block";
  gallerySubMenu.style.display = "none";
  gallerySubMenu.classList.remove("active");
});

videoLink.addEventListener("click", function (e) {
  e.preventDefault();
  image2d.style.display = "none";
  modal.style.display = "block";
  modalVideo.style.display = "block";
});
renderImage.addEventListener("click", function (e) {
  e.preventDefault();
  image2d.style.display = "none";
  modal.style.display = "block";
  renderImageModal.style.display = "flex";

  showSlides(1);
});
prevBtn.addEventListener("click", function (e) {
  e.preventDefault();
  plusSlides(-1);
});
nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  plusSlides(1);
});
projectProfile.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
  projectProfileModal.style.display = "flex";
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slides);

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
const wave = document.querySelector("#wave");
const lex = document.querySelector("#lex");
const skyline = document.querySelector("#skyline");
const heyazah = document.querySelector("#heyazah");
const businessYard = document.querySelector("#business-yard");

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
// toggle side menu
menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("menu button");
  allProjectsBtn.style.display = "none";
  projects.style.transform = "translateX(0px)";
  projects.style.opacity = "1";
  document.querySelector(".left-logo").style.opacity = "0";
});

projectsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  projects.style.transform = "translateX(-410px)";
  allProjectsBtn.style.display = "flex";
  document.querySelector(".left-logo").style.opacity = "1";
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
