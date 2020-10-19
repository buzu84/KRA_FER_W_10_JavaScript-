document.addEventListener("DOMContentLoaded", function (){
  const elementContainers = document.querySelectorAll('.listContainer');
  console.log(elementContainers);

  for (let i = 0; i < elementContainers.length; i++){
    elementContainers[i].addEventListener("mouseover", function(){
      this.firstElementChild.firstElementChild.style.color = "red";
      this.firstElementChild.firstElementChild.nextElementSibling.style.color = "green";
      this.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.style.color = "green";
      this.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "green";
      this.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "blue";

    })
  }
})
// najpierw wszystkim a pozniej nadpisz:)
// document.addEventListener("DOMContentLoaded", function(){
//     const divs = document.querySelectorAll('.listContainer');
//
//     divs.forEach(function(div){
//         div.addEventListener('mouseover', function(){
//             const list = this.firstElementChild;
//             const allListElements = list.children;
//             for(let i=0; i<allListElements.length; i++){
//                 if(i === 0){
//                     allListElements[i].style.background = "red";
//                 }else if(i === allListElements.length - 1){
//                     allListElements[i].style.background = "blue";
//                 }else{
//                     allListElements[i].style.background = "green";
//                 }
//             }
//         })
//     });
// });
