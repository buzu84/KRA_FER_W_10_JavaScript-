document.addEventListener("DOMContentLoaded", function (){
  const prevButton = document.querySelector('#prevPicture');
  const nextButton = document.querySelector('#nextPicture');
  const li = document.querySelectorAll('li');
  const liChildren = [...li];
  // liChildrem = slide images
  let slideIndex = 0;
  liChildren[slideIndex].classList.add("visible");

  prevButton.addEventListener("click", function(){
    console.log("prev button");
    liChildren[slideIndex].classList.remove("visible");
    slideIndex -= 1;
    if (slideIndex < 0){
      slideIndex = liChildren.length -1;
    }
    liChildren[slideIndex].classList.add("visible");
  })

  nextButton.addEventListener("click", function(){
    console.log("next button");
    liChildren[slideIndex].classList.remove("visible");
    slideIndex += 1;
    if (slideIndex >= liChildren.length){
      slideIndex = 0;
    }
    liChildren[slideIndex].classList.add("visible");
  })
})
