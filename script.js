const canvas = document.getElementById("diamond");
let context = document.querySelector("canvas").getContext("2d");
context.scale(1, 1);

const width = 500;
const height = 300;

initialize();

function initialize() {
  var oct = 3.1415 * (1 / 4);
  var c1 = [];
  var c2 = [];
  for (var i = 0; i < 8; i++) {
    c1[i] = i * oct;
    c2[i] = i * oct + oct / 2;
  }
  dmnd.c1 = c1;
  dmnd.c2 = c2;
  dmnd.total = 2 * 3.1415;
  dmnd.degree = 2 * 3.1415 / 360;
  dmnd.degreeX = dmnd.degree;
  dmnd.degreeY = dmnd.degree;
  dmnd.centerX = width / 2;
  dmnd.centerY = height / 2;
  dmnd.r1 = 60;
  dmnd.r2 = 90;
  dmnd.r3 = 160;
  dmnd.cap = 40;
  dmnd.tip = 80;
  dmnd.tipX = dmnd.centerX;
  dmnd.tipY = dmnd.centerY + dmnd.tip;
  dmnd.coords1X = [];
  dmnd.coords2X = [];
  dmnd();
}

function dmnd() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < 8; i++) {
    dmnd.coords1X[i] = getX(dmnd.degreeX + dmnd.c1[i], dmnd.r1);
  }
  for (var j = 0; j < 8; j++) {
    dmnd.coords2X[j] = getX(dmnd.degreeX + dmnd.c2[j], dmnd.r2);
  }
  if (dmnd.degreeX > dmnd.total || dmnd.degreeX < -dmnd.total) {
    dmnd.degreeX = dmnd.degree;
  }
  for (var k = 0; k < 8; k++) {
    context.beginPath();
    context.strokeStyle = "#4C0";
    context.lineWidth = 2;
    context.moveTo(dmnd.coords2X[k] + dmnd.centerX, dmnd.centerY);
    context.lineTo(dmnd.coords1X[k] + dmnd.centerX, dmnd.centerY - dmnd.cap);
    context.lineTo(dmnd.coords1X[k+1] + dmnd.centerX, dmnd.centerY - dmnd.cap);
    context.lineTo(dmnd.coords2X[k] + dmnd.centerX, dmnd.centerY);
    context.lineTo(dmnd.coords2X[k+1] + dmnd.centerX, dmnd.centerY);
    context.stroke();
  }
  for (var l = 0; l < 8; l++) {
    context.moveTo(dmnd.coords2X[l] + dmnd.centerX, dmnd.centerY);
    context.lineTo(dmnd.tipX, dmnd.tipY);
    context.stroke();
  }
  context.moveTo(dmnd.coords2X[7] + dmnd.centerX, dmnd.centerY);
  context.lineTo(dmnd.coords1X[7] + dmnd.centerX, dmnd.centerY - dmnd.cap);
  context.lineTo(dmnd.coords1X[0] + dmnd.centerX, dmnd.centerY - dmnd.cap);
  context.lineTo(dmnd.coords2X[7] + dmnd.centerX, dmnd.centerY);
  context.lineTo(dmnd.coords2X[0] + dmnd.centerX, dmnd.centerY);
  context.stroke();
  dmnd.degreeX += dmnd.degree;
  draw();
}

function getX(value, r) {
  var x = Math.cos(value);
  return x * r;
}
function getY(value, r) {
  var y = Math.sin(value);
  return y * r;
}

function draw() {
  setTimeout(() => {
    window.requestAnimationFrame(dmnd);
  }, 50);
}
