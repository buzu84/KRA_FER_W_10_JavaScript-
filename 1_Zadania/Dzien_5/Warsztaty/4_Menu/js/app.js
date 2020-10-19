document.addEventListener("DOMContentLoaded", function (){
  const outerList = [...document.querySelectorAll('.nav>ul>li')];
  console.log(outerList);
  for (let i = 0; i < outerList.length; i++){
    outerList[i].addEventListener("mouseover", function(){
      // console.log('mouseover working!');
      const innerList = this.querySelectorAll('ul');
      if (innerList.length > 0){
        for(let i = 0; i < innerList.length; i++){
          innerList[i].style.display = "block";
        }
      }
    })
    outerList[i].addEventListener("mouseout", function(){
      // console.log('mouseout working!');
      const innerList = this.querySelectorAll('ul');
      if (innerList.length > 0){
        for(let i = 0; i < innerList.length; i++){
          innerList[i].style.display = "none";
        }
      }
    })
  }
})
