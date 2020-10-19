// Na stronie znajduje się select i trzy obrazki
document.addEventListener("DOMContentLoaded", function (){
  const imgApple = document.querySelector('img[alt="Apple"]');
  const imgUbuntu = document.querySelector('img[alt="Ubuntu"]');
  const imgWindows = document.querySelector('img[alt="Windows"]');
  const select = document.querySelector('.form-control');
  // console.log(select);
  imgApple.style.display = "none";
  imgUbuntu.style.display = "none";

  select.addEventListener("change", function(){
    if (select.value === "Windows"){
      imgApple.style.display = "none";
      imgUbuntu.style.display = "none";
      imgWindows.style.display = "block";
    } else if (select.value ==="Ubuntu"){
        imgApple.style.display = "none";
        imgWindows.style.display = "none";
        imgUbuntu.style.display = "block";
    } else if (select.value ==="Os X") {
        imgUbuntu.style.display = "none";
        imgWindows.style.display = "none";
        imgApple.style.display = "block";

    }
  })


})
