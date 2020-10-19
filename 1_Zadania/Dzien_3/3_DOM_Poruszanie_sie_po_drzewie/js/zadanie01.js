document.addEventListener("DOMContentLoaded", function (){
  const buttons1 = document.querySelectorAll('.button');
  console.log(buttons1);
  for (let i = 0; i < buttons1.length; i++){
    buttons1[i].addEventListener("click", function(){
      const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      this.parentElement.style.background = randomColor;
    })
  }
})
