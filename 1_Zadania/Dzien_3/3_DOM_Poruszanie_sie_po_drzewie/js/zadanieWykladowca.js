// document.addEventListener("DOMContentLoaded", function (){
//   const firstElem = document.querySelector('.first');
//   console.log(firstElem);
//   const firstChildElem = firstElem.firstElementChild;
//   console.log(firstChildElem);
//   const thirdChildElem = firstChildElem.nextElementSibling.nextElementSibling;
//   console.log(thirdChildElem);
//
//   const secondElem = document.querySelector('#second');
//   console.log(secondElem);
//   const parentSecElem = secondElem.parentElement;
//   console.log(parentSecElem);
//   // const fourthChildElem = secondElem.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
//   // console.log(fourthChildElem);
//   // element li id second przeciez nie ma dzieci jedynie rodzenstwo..
//   const fourthChildElem = parentSecElem.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
//   console.log(fourthChildElem);
//
//   const thirdElem = document.querySelector('[data-ex="third"]');
//   console.log(thirdElem);
//   const thirdElemGrandpa = thirdElem.parentElement.parentElement;
//   console.log(thirdElemGrandpa);
//   // const thirdElemLastChild = thirdElem.lastElementChild;
//   // console.log(thirdElemLastChild);
//   // przeciez on nie ma dziecka!
//   // Element o atrybucie data-ex nastawionym na wartość third -> jego dziadek ->
//   // jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko
//   // (żeby otrzymać środkowy element, podziel liczbę dzieci przez dwa i zaokrąglij w dół).
//
//   const forthElem = document.querySelector('div.forth');
//   console.log(forthElem);
//   const parentForthElem = forthElem.parentElement;
//   console.log(parentForthElem);
// })


document.addEventListener("DOMContentLoaded", function(){

    const first = document.querySelector('.first');
    const firstChild = first.firstElementChild;
    const answer1 = firstChild.children[2];
    console.log(answer1);

    const answer2 = document.querySelector('#second').parentElement.children[3];
    console.log(answer2);

    const attrElement = document.querySelector('[data-ex="third"]');
    const attrElementGrandpa = attrElement.parentElement.parentElement;
    const lastChild = attrElementGrandpa.lastElementChild.firstElementChild;
    const index = Math.floor(lastChild.children.length / 2);
    const answer3 = lastChild.children[index];
    console.log(answer3);

    const answer4 = document.querySelector('div.forth').parentElement.querySelector('article').getElementsByTagName('p')[1];
    console.log(answer4);

});
