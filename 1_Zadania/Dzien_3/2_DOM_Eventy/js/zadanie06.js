document.addEventListener("DOMContentLoaded", function () {
const div = document.getElementById("box");
// console.log(div);
let localX = document.getElementById("localX");
let localY = document.getElementById("localY");
let globalX = document.getElementById("globalX");
let globalY = document.getElementById("globalY");

div.addEventListener('mousemove', logKey);

function logKey(e) {
  localX.innerText = e.clientX;
  localY.innerText = e.clientY;
  globalX.innerText = e.screenX;
  globalY.innerText = e.screenY;
}

});


// let screenLog = document.querySelector('#screen-log');
// document.addEventListener('mousemove', logKey);
//
// function logKey(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// }
