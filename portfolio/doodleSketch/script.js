
  var canvas = document.getElementById("sketcharea");
  var ctx = canvas.getContext("2d");
  var x, y, startMode;

   startMode = 2;
   x = getStartX(startMode);
   y = getStartY(startMode);

  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineCap="round";
  ctx.lineJoin="round";
  ctx.lineWidth=".5";


document.getElementById("left").addEventListener("mousedown", function() {fMove(-1, 0);});

document.getElementById("right").addEventListener("mousedown", function() {fMove(1,0);});

document.getElementById("up").addEventListener("click", function() {fMove(0,-1);});

document.getElementById("down").addEventListener("click", function() {fMove(0,1);});

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
  var fx;

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
  var fy;

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

function fMove2() {
  
}

function fRefresh() {
  //want to refresh the screen and be able to start over
}