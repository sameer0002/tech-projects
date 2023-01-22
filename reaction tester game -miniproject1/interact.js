var start = new Date().getTime();
// function getRandomColor() {
//     var letters = "0123456789ABCDEF";
//     var color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random()*16)];

//     }
//     return color;
// }

function move() {
  var left;
  var right;
  var wh;
  left = Math.random() * 300;
  right = Math.random() * 300;
  wh = Math.random() * 400 + 100;

  document.getElementById("sq").style.left = left;
  document.getElementById("sq").style.top = right;
  document.getElementById("sq").style.width = wh;
  document.getElementById("sq").style.height = wh;
  document.getElementById("sq").style.display = "block";
  start = new Date().getTime();
}

move();

document.getElementById("sq").onclick = function () {
  document.getElementById("sq").style.display = "none";
  // document.getElementById("sq").style.padding = move();

  var end = new Date().getTime();
  var timetaken = (end - start) / 1000;
  alert(timetaken);
  move();
};
