// document.addEventListener("DOMContentLoaded", function (){
//   const buttons = document.querySelectorAll('.button');
//   console.log(buttons);
//
//   for (let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener("click", function(){
//       if (buttons[i].nextElementSibling.style.visibility === "visible"){
//         this.nextElementSibling.style.visibility = "hidden";
//       } else {
//         this.nextElementSibling.style.visibility = "visible";
//       }
//     })
//   }
// })

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            const box = this.nextElementSibling;
            if(box){ // to samo co: box !== null
                console.log(box);
                box.classList.toggle('hidden');
            }
        });
    }
});
