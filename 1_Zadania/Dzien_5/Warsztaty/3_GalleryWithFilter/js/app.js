document.addEventListener("DOMContentLoaded", function (){
  const images = [...document.querySelector('#gallery').children];
  const hideBtn = document.querySelector('#hideButton');
  const showBtn = document.querySelector('#showButton');
  const tag = document.querySelector('#tagInput');

  hideBtn.addEventListener("click", function(){
    let text = tag.value;
    // console.log("wpisany tekst");
    console.log(text);
    tag.value = "";
    for (let i = 0; i < images.length; i++){
      // console.log('teraz wypisuje wszystkie tagi');
      // console.log(images[i].dataset.tag);
      // console.log(images[i].dataset.tag.indexOf(tag.value));
      // console.log(tag.value);
      if (images[i].dataset.tag.indexOf(text) !== -1){
        // console.log("tj jesli spelniony warunek if");
        console.log(images[i].dataset.tag);
        if (images[i].classList.contains('invisible') === false){
          images[i].classList.add('invisible');
        }
      }
    }


  })
  showBtn.addEventListener("click", function(){
    let text = tag.value;
    console.log(text);
    tag.value = "";
    for (let i = 0; i < images.length; i++){
      if (images[i].dataset.tag.indexOf(text) !== -1){
        // console.log(images[i].dataset.tag);
        if (images[i].classList.contains('invisible') === true){
          images[i].classList.remove('invisible');
        }
      }
    }

  })
})
