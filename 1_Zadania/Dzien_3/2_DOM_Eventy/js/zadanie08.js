  document.addEventListener("DOMContentLoaded", function (){
    console.log(window);
    const windowWidth = document.querySelector('#windowWidth');
    const windoHeight = document.querySelector('#windowHeight');
    // console.log(windowHeight);
    // console.log(windowWidth);
    window.addEventListener("click", function(){
      const x = window.innerWidth;
      windowWidth.innerText = x;
      const y = window.innerHeight;
      windowHeight.innerText = y;
    })
  })
