document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelectorAll("button");
  console.log(button);
  const spans = document.querySelectorAll("span");
  console.log(spans);
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(){
      let oldValue = parseInt(spans[i].innerText);
      // spans.innerText zwroci string o ktorym wiem ze to jest liczba w stringu
      let newValue = oldValue + 1;
      spans[i].innerText = newValue;
    })
  }



});
