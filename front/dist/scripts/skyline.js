console.log("skyline");const loader=document.querySelector("#loader"),landscape=document.querySelector("#landscape"),surroundings=document.querySelector("#surroundings"),frame=document.querySelector("#frame"),gallery=document.querySelector("#gallery"),modal=document.querySelector("#modal"),closeModal=document.querySelector("#close-btn"),surroundingNav=document.querySelector("#surrounding-nav"),aminities=document.querySelector("#aminities"),closeAminities=document.querySelector("#close-aminities"),closeSurrounding=document.querySelector("#close-surrounding"),image2d=document.querySelector("#image-2d"),aminitiesLinks=document.querySelectorAll("ul li"),gallerySubMenu=document.querySelector(".gallery-submenu"),videoLink=document.querySelector("#video-link"),renderImage=document.querySelector("#render-image"),projectProfile=document.querySelector("#project-profile"),modalVideo=document.querySelector(".modal-video"),renderImageModal=document.querySelector(".render-image"),projectProfileModal=document.querySelector(".project-profile"),prevBtn=document.querySelector(".prev"),nextBtn=document.querySelector(".next"),heyazaProjects=document.querySelector("#heyaza-projects"),home=document.querySelector("#home");let slideIndex=1;function showSlides(e){let l,n=document.getElementsByClassName("mySlides");for(console.log(n),e>n.length&&(slideIndex=1),e<1&&(slideIndex=n.length),l=0;l<n.length;l++)n[l].style.display="none";n[slideIndex-1].style.display="block"}function plusSlides(e){showSlides(slideIndex+=e)}home.addEventListener("click",(function(e){e.preventDefault(),aminities.style.display="none",image2d.style.display="none",gallerySubMenu.style.display="none",gallerySubMenu.classList.remove("active"),frame.src="https://heyazah.viewin360.co/share/5DpPL?logo=-1&info=0&fs=0&vr=1&gyro=0&thumbs=-1&inst=0&keys=0"})),[...aminitiesLinks].map((e=>{console.log(e.getAttribute("data")),e.addEventListener("click",(function(e){e.preventDefault(),console.log(this);let l=this.getAttribute("data");console.log(l),frame.src=l}))})),window.onload=e=>{console.log("page is fully loaded"),setTimeout((()=>{loader.style.display="none"}),500)},landscape.addEventListener("click",(function(e){e.preventDefault(),console.log("land"),image2d.style.display="none",aminities.style.display="block",gallerySubMenu.style.display="none",gallerySubMenu.classList.remove("active"),frame.src="https://heyazah.viewin360.co/share/5DpP7?logo=-1&info=0&fs=0&vr=1&gyro=0&thumbs=-1&inst=0&keys=0"})),closeAminities.addEventListener("click",(function(e){e.preventDefault(),console.log("land"),aminities.style.display="none"})),surroundings.addEventListener("click",(function(e){e.preventDefault(),console.log("surround"),aminities.style.display="none",image2d.style.display="none",gallerySubMenu.style.display="none",gallerySubMenu.classList.remove("active"),frame.src="https://heyazah.viewin360.co/share/5DpPh?logo=-1&info=0&fs=0&vr=1&gyro=0&thumbs=-1&inst=0&keys=0"})),closeSurrounding.addEventListener("click",(function(e){e.preventDefault(),console.log("out surround"),surroundingNav.style.display="none"})),gallery.addEventListener("click",(function(e){e.preventDefault(),image2d.style.display="none",aminities.style.display="none",gallerySubMenu.classList.contains("active")?(gallerySubMenu.style.display="none",gallerySubMenu.classList.remove("active")):(gallerySubMenu.style.display="block",gallerySubMenu.classList.add("active"))})),closeModal.addEventListener("click",(function(e){e.preventDefault(),modal.style.display="none",modalVideo.style.display="none",renderImageModal.style.display="none",projectProfileModal.style.display="none"})),heyazaProjects.addEventListener("click",(function(e){e.preventDefault(),image2d.style.display="block",gallerySubMenu.style.display="none",gallerySubMenu.classList.remove("active")})),videoLink.addEventListener("click",(function(e){e.preventDefault(),image2d.style.display="none",modal.style.display="block",modalVideo.style.display="block"})),renderImage.addEventListener("click",(function(e){e.preventDefault(),image2d.style.display="none",modal.style.display="block",renderImageModal.style.display="flex",showSlides(1)})),prevBtn.addEventListener("click",(function(e){e.preventDefault(),plusSlides(-1)})),nextBtn.addEventListener("click",(function(e){e.preventDefault(),plusSlides(1)})),projectProfile.addEventListener("click",(function(e){e.preventDefault(),modal.style.display="block",projectProfileModal.style.display="flex"}));const wave=document.querySelector("#wave"),lex=document.querySelector("#lex"),skyline=document.querySelector("#skyline"),heyazah=document.querySelector("#heyazah"),businessYard=document.querySelector("#business-yard");wave.addEventListener("click",(function(e){e.preventDefault(),console.log("wdem"),location.pathname=location.pathname.replace("sky-line","sigma")})),lex.addEventListener("click",(function(e){e.preventDefault(),console.log("wdem1"),location.pathname=location.pathname.replace("sky-line","lex")})),skyline.addEventListener("click",(function(e){e.preventDefault(),console.log("wdem2"),location.pathname=location.pathname.replace("sky-line","sky-line")})),heyazah.addEventListener("click",(function(e){e.preventDefault(),console.log("wdem3"),location.pathname=location.pathname.replace("sky-line","heyazah-gate")})),businessYard.addEventListener("click",(function(e){e.preventDefault(),console.log("wdem4"),location.pathname=location.pathname.replace("sky-line","business-yard")}));