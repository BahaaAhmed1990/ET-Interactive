console.log("cloud");
const wave = document.querySelector("#wave");
const lex = document.querySelector("#lex");
const skyline = document.querySelector("#skyline");
const heyazah = document.querySelector("#heyazah");
const businessYard = document.querySelector("#business-yard");

wave.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("wdem");
  location.pathname = location.pathname.concat("sigma");
});

lex.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("wdem1");
  location.pathname = location.pathname.concat("lex");
});

skyline.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("wdem2");
  location.pathname = location.pathname.concat("sky-line");
});

heyazah.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("wdem3");
  location.pathname = location.pathname.concat("heyazah-gate");
});

businessYard.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("wdem4");
  location.pathname = location.pathname.concat("business-yard");
});
function draw() {
  console.log("drw");
  const ctx = document.getElementById("canvas").getContext("2d");
  const img = new Image();
  img.onload = () => {
    console.log("first");
    ctx.drawImage(img, 0, 0, 10, 100);
    ctx.drawImage(img, 5, 0, 10, 100);
    ctx.drawImage(img, 0, 10, 10, 100);
    console.log(img);
  };
  img.src = "/assets/images/clouds.png";

  ctx.translate(5);

  window.requestAnimationFrame(draw);
}
draw();
