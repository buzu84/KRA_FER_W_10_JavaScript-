// Interval
document.addEventListener("DOMContentLoaded", function (){
let seconds = 10;
const interval = setInterval(function() {
  // Uruchamia daną funkcję co podany przedział czasu (czas podajemy w milisekundach).
    console.log(seconds);
    seconds--;    // seconds = seconds - 1
}, 1000);

const timeout = setTimeout(function(){
  // Wywołuje daną funkcję po podanym czasie (czas podajemy w milisekundach).
    console.log("Przegrałeś");
    clearInterval(interval);
    // clearInterval() czyści interwał nastawiony przy pomocy setInterval()
}, 10000);

//Wyszukanie elementu w HTML
const button = document.querySelector('#finish');
console.log(button);
//Uruchomienie funkcji po kliknięciu w przycisk
button.addEventListener("click", function(){
    console.log("Wygrałeś");
    clearTimeout(timeout);
// clearTimeout() czyści timer nastawiony przez funkcję setTimeout().
});

function countHello(max){
  let counter = 1;
  const interval = setInterval(doStuff, 1000);

  function doStuff(){
    console.log("Hello "+ counter);
    counter++;
    if (counter > max) {
      clearInterval(interval);
    }
  }
}

countHello(5);
});
