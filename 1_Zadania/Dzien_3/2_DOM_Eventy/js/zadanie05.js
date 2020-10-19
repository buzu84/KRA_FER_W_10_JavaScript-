document.addEventListener("DOMContentLoaded", function () {
  const divs = document.querySelectorAll("div");
  console.log(divs);


  for (let i = 0; i < divs.length; i++) {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    divs[i].addEventListener("click", function(){
      this.style.backgroundColor = randomColor;
      console.log("klikniete");
    })
  }

  // document.querySelector('#box1').backgroundColor = "red";
})
