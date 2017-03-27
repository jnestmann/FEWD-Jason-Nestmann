const canvas = document.getElementById("sketcharea");
const ctx = canvas.getContext("2d");

const startMode = 2;
let x = getStartX(startMode);
let y = getStartY(startMode);

const fRefresh = () => window.location.reload();

ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.lineWidth=".5";


document.getElementById("left").addEventListener("mousedown", function() {fMove(-1, 0);});

document.getElementById("right").addEventListener("mousedown", function() {fMove(1,0);});

document.getElementById("up").addEventListener("click", function() {fMove(0,-1);});

document.getElementById("down").addEventListener("click", function() {fMove(0,1);});

document.getElementById("refresh").addEventListener("click", fRefresh);

document.getElementById("apptitle").addEventListener("click", fRefresh);

function fMove(changeX, changeY) {

  x = x + changeX;
   if (x < 0) { x = 0 };
   if (x > 600) { x = 600 };
  y = y + changeY;
   if (y < 0) { y = 0 };
   if (y > 480) { y = 480 };  

  ctx.beginPath();
  ctx.lieCap="round";
  ctx.lineJoin="round";
  ctx.lineWidth=".5";
  ctx.lineTo(x,y);
  ctx.stroke();

}

function getStartX(mode) {
  let fx;

  if (mode == 1) {
      fx = prompt("Please set x coordinate");
      fx = parseInt(fx);
  } else if (mode == 2) {
      fx = Math.random() * 100;
      fx = Math.round(fx);
      if (fx > 600) { fx = 600; }
      if (fx < 0) { fx = 0; }
  } else {
      fx = 0;
  }

  return fx;
}


function getStartY(mode) {
  let fy;

  if (mode == 1) {
      fy = prompt("Please set y coordinate");
      fy = parseInt(fy);
  } else if (mode == 2) {
      fy = Math.random() * 100;
      fy = Math.round(fy);
      if (fy > 600) { fy = 600; }
      if (fy < 0) { fy = 0; }
  } else {
      fy = 0;
  }

  return fy;
}