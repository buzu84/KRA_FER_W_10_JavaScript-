
document.addEventListener("DOMContentLoaded", function(){
  const btn = document.querySelectorAll('.deleteBtn');
  console.log(btn);
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function(){
      const toDelete = this.parentElement.parentElement;
      toDelete.parentElement.removeChild(toDelete);
    })
  }
})

// document.addEventListener("DOMContentLoaded", function(){
//     const deleteButtons = document.querySelectorAll('.deleteBtn');
//
//     deleteButtons.forEach(function(deleteButton){
//         deleteButton.addEventListener("click", function(){
//             const toDelete = this.parentElement.parentElement;
//             toDelete.parentElement.removeChild(toDelete);
//         });
//     });
//
// });
