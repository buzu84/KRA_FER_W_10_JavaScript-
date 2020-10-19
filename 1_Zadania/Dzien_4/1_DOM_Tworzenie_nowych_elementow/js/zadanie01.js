document.addEventListener("DOMContentLoaded", function(){
const list = document.querySelector('.menu');
const btn = document.getElementById('add');
// counter = 0;
btn.addEventListener("click", function(){
  const newLi = document.createElement("li");
  const listLength = list.querySelectorAll("li").length;
  newLi.innerText = "Liczba elementow w liscie: " + listLength;
  // newLi.innerText = "Liczba elementow w liscie: " + counter;
  // counter = counter + 1;
  list.appendChild(newLi);
})


})
// Dodatkowy kod od Wojtka, z mykami:)
// document.addEventListener("DOMContentLoaded", function(){
//     const deleteButtons = document.querySelectorAll('.deleteBtn');
//
//     deleteButtons.forEach(function(deleteButton){
//         deleteButton.addEventListener("click", function(){
//             const tBody = this.parentElement.parentElement.parentElement;
//             const newRow = this.parentElement.parentElement.cloneNode(true);
//
//             newRow.children[0].innerText = tBody.querySelectorAll('tr').length;
//             newRow.children[1].innerText = "Obudowa";
//             newRow.children[2].innerText = "1";
//
//             tBody.appendChild(newRow);
//         });
//     });
//
// });
