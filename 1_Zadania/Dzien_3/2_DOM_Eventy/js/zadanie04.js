document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelectorAll("button");
  console.log(button);
  const span = document.querySelector("span");
  console.log(span);
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(){
      let oldValue = parseInt(span.innerText);
      let newValue = oldValue + 1;
      span.innerText = newValue;
    })
  }



});
