/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener("DOMContentLoaded", function (){
  const images = [...document.querySelectorAll('li')];
  const fullSize = document.querySelector('body');

  for (let i = 0; i < images.length; i++){
    images[i].addEventListener("click", function(){
      // console.log(this.children);
      console.log(this.firstElementChild.getAttribute('src'));
      const fullScreen = document.createElement('div');
      fullScreen.classList.add("fullScreen");
      const fullImage = document.createElement('img');
      const button = document.createElement('button');
      button.classList.add("close");
      fullSize.appendChild(fullScreen);
      fullScreen.appendChild(fullImage);
      fullScreen.appendChild(button);
      button.innerText = "Close";
      fullImage.setAttribute("src", this.firstElementChild.getAttribute('src'));
      button.addEventListener("click", function(){
        fullScreen.parentElement.removeChild(fullScreen);
      })
    })
  }

})
