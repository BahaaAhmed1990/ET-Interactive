console.log("cloud");
const canvas = document.getElementById("canvas");
// cloud img
const img = new Image();
img.src = "./assets/images/clouds.png";
// canvas dimensions
let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvas context
const ctx = canvas.getContext("2d");

// cloud object
function Cloud(x, y, dx, width, height, num) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.width = width;
  this.height = height;
  this.num = num;

  // draw
  this.draw = function () {
    for (let i = 0; i <= this.num; i++) {
      ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }
  };

  // moving
  this.move = function () {
    if (this.x > window.innerWidth) {
      this.x = -400;
    }
    this.x += this.dx;
    // this.y += this.dy;
    this.draw();
  };
}

// cloud instaces
const cloud1 = new Cloud(0, 0, 1, 350, 200, cloudNum());
const cloud1_1 = new Cloud(150, 10, 1, 350, 200, cloudNum());

const cloud2 = new Cloud(innerWidth / 2, 0, 1, 350, 150, cloudNum());
const cloud2_1 = new Cloud(innerWidth / 2 + 150, 0, 1, 350, 200, cloudNum());

const cloud3 = new Cloud((3 * innerWidth) / 4, 0, 1, 350, 175, cloudNum());

// animation func
function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  cloud1.move();
  cloud1_1.move();
  cloud2.move();
  cloud2_1.move();
  cloud3.move();
}
// img.onload = () => {
//
// };
img.onload = () => {
  // cloud1.draw();
  // cloud1_1.draw();
  // cloud2.draw();
  // cloud2_1.draw();
  // cloud3.draw();
  animate();
};

//helper funcs
function cloudPosition() {
  return Math.floor(Math.random() * innerWidth);
}

function cloudDimension() {
  return Math.floor(Math.random() * 201) + 200;
}

function cloudNum() {
  return Math.random().toFixed(0) * 1;
}
