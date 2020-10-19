var homeElement = document.getElementById("home");
var childElements = document.querySelector(".oferts").querySelectorAll('div, h2, p');
var banner = document.querySelector(".ban");
var blocks = document.querySelectorAll(".block");
var links = document.querySelector(".links").querySelectorAll('li');
// sprawdz jaki to jest wynik!!! element o klasie links, wszystkie elementy li w srodku
// po kropce-wtedy wyszukuje wewnatrz elementu przed kropka to co jest po kropce
// po kropce tj metoda czyli funkcja na obiekcie(obiekt moze miec wlasciwosci i metody)
// czyli np querysel jest metoda dla kazdego obiektu ktorej moge uzyc wzg wyszukiwanego obiektu-
// wywolanie lancuchowe
/*
  Poniżej napisz kod rozwiązujący zadania
 */

function getDatasInfo(elements) {
  const colors = [];
  // to bedzie tablica elem li
  console.log(elements);
  // nie na links bo funkcja ma pracowac na zewn zmiennej zeby mozna bylo uzyc do roznych elem..
  // dzieki temu moge uzyc funkcji dla roznych elements
  // funkcja ma byc uniwersalna
  // console.log(elements[0].dataset);
  // wyciagam info z pojedynczego elementu-przyklad
  for (let i = 0; i < elements.length; i++){
    colors.push(elements[i].dataset.color);
    // moglabym po elem[i] wyszukiwac queryselector..
  }
  return colors;
  // bez return console.log byloby undefined
}
console.log(getDatasInfo(links));
// let elements=links

console.log(homeElement);
// wypisuje zmienna homeelem
console.log(homeElement.tagName);
console.log(homeElement.className);

 function getChildElements(childElem) {
   const children = [];
   for (let i = 0; i < childElem.length; i++) {
     children.push(childElem[i]);

   }
   return children;
 }
 console.log(getChildElements(childElements));



 function getChildElementsTag(childElem) {
   const children = [];
   for (let i = 0; i < childElem.length; i++) {
     children.push(childElem[i].tagName);

   }
   return children;
 }
console.log(getChildElementsTag(childElements));



function getChildElementsClass(childElem) {
  const children = [];
  for (let i = 0; i < childElem.length; i++) {
    children.push(childElem[i].className);

  }
  return children;
}

console.log(getChildElementsClass(childElements));


 console.log(banner);
 // wypisuje zmienna banner
 console.log(banner.tagName);
 console.log(banner.className);

 function getBlocks(blockElem) {
   const block = [];
   for (let i = 0; i < blockElem.length; i++) {
     block.push(blockElem[i]);

   }
   return block;
 }
 console.log(getBlocks(blocks));

 function getBlocksTag(blockElem) {
   const block = [];
   for (let i = 0; i < blockElem.length; i++) {
     block.push(blockElem[i].tagName);

   }
   return block;
 }
 console.log(getBlocksTag(blocks));


 function getBlocksClass(blockElem) {
   const block = [];
   for (let i = 0; i < blockElem.length; i++) {
     block.push(blockElem[i].className);

   }
   return block;
 }
 console.log(getBlocksClass(blocks));


 function getLinks(linkElem) {
   const link = [];
   for (let i = 0; i < linkElem.length; i++) {
     link.push(linkElem[i]);

   }
   return link;
 }
 console.log(getLinks(links));

 function getLinksTag(linkElem) {
   const link = [];
   for (let i = 0; i < linkElem.length; i++) {
     link.push(linkElem[i].tagName);

   }
   return link;
 }
 console.log(getLinksTag(links));

 function getLinksClass(linkElem) {
   const link = [];
   for (let i = 0; i < linkElem.length; i++) {
     link.push(linkElem[i].className);

   }
   return link;
 }
 console.log(getLinksClass(links));


// zadanie2

function getBlocksInnerText(blockElem) {
  const block = [];
  for (let i = 0; i < blockElem.length; i++) {
    block.push(blockElem[i].innerText);

  }
  return block;
}
console.log(getBlocksInnerText(blocks));


function changeInnerText(blockElem) {
  const block = [];
  for (let i = 0; i < blockElem.length; i++) {
    blockElem[i].innerText = "Nowa wartość diva o klasie blocks";
    block.push(blockElem[i].innerText);

  }
  return block;
}
console.log(changeInnerText(blocks));



const footer = document.querySelectorAll(".superFooter");

function getElementId(element) {
  const id = [];
  for (let i = 0; i < element.length; i++) {
    id.push(element[i].id);
  }
  return id;
}

console.log(getElementId(footer));


function getClassInfo(element) {
  const banClass = [];
  banClass.push(element.classList);
  return banClass;
}

console.log(getClassInfo(banner));
