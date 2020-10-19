document.addEventListener("DOMContentLoaded", function(){
  const elementsList = document.querySelector('.list');
  const button = document.getElementById('remove');
  const childElements = [...elementsList.children];
  // spread-tworzy tablice na podstawie pseudotablicy

  // const arr = [1,2,3,4];
  // const arr2 = [...arr];
  // ta sama tablica tylko pod inna nazwa-po to operator rozproszenia(spread)
  // tu uzyte spread-tworzy nowa tablice na podstawie tamtych danych(ominie referencyjne:)

  button.addEventListener ("click", function(){
    // console.log(childElements.length);
    childElements.forEach(function(el){
      console.log(el);
      // el to bedzie li, czyli (ponizej) li.rodzic.remove(li)
      el.parentElement.removeChild(el);
    })
  })

})
// Wojtek
// document.addEventListener("DOMContentLoaded", function(){
//
//     const removeButton = document.querySelector('#remove');
//     // Rozwiązanie za pomocą "spread operator"
//     const listElements = [...document.querySelector('.list').children];
//     //const listElements = document.querySelectorAll('.list li');
//
//     removeButton.addEventListener("click", function(){
//         for(let i=0; i<listElements.length; i++){
//             listElements[i].parentElement.removeChild(listElements[i]);
//         }
//     });
//
// });
