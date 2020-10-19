document.addEventListener("DOMContentLoaded", function (){
  const links = document.querySelectorAll('a');
  const text = document.getElementsByClassName('content');

  links[0].addEventListener("click", function(){
    // text[0].style.display = "block";
    if(text[0].style.display === "none"){
      text[0].style.display = "block";
    } else {
      text[0].style.display = "none";
    }

  })
  // links[0].addEventListener("blur", function(){
  //   text[0].style.display = "none";
  // })


  links[1].addEventListener("mouseover", function(){
    // text[1].style.display = "block";
    if(text[1].style.display === "none"){
      text[1].style.display = "block";
    } else {
      text[1].style.display = "none";
    }
  })
  // links[1].addEventListener("mouseout", function(){
  //   text[1].style.display = "none";
  // })



})
