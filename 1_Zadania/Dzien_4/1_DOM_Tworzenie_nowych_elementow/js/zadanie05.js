document.addEventListener("DOMContentLoaded", function(){
  const buttons = document.getElementsByClassName('moveBtn');
  const list1 = document.getElementById('list1');
  const list2 = document.getElementById('list2');
// buttons.forEach(function(buttons){
//   i tu wszystko(zamiennie z for)
})
  for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function (){
      const li = this.parentElement;
      const listElemId = li.parentElement.id;
      // li.parentElement.removeChild(li);
      // const newLi = document.createElement("li");
      // newLi.innerText = li.innerText;
      // const newLi = li.cloneNode(true);
      // klonowanie tworzy nowy obiekt wiec event nie zadziala dla niego-jest przypisany do li ale nie do jego klona

      if (listElemId === "list1" ) {
        list2.appendChild(li);
      } else {
        list1.appendChild(li);
      }

    })
  }

})

// sposob Wojtka:)
// document.addEventListener("DOMContentLoaded", function(){
//
//     const moveButtons = document.querySelectorAll('.moveBtn');
//     const list2 = document.querySelector("#list2");
//     const list1 = document.querySelector("#list1");
//
//     moveButtons.forEach(function(moveBtn){
//         moveBtn.addEventListener("click", function(){
//             const listElement = this.parentElement; // <li>
//             if(listElement.parentElement.id === "list1"){
//                 list2.appendChild(listElement);
//             }else{
//                 list1.appendChild(listElement);
//             }
//         });
//     });
//
// });
