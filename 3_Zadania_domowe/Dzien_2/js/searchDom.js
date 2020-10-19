const mainHeader = document.getElementById("menu");
console.log(mainHeader);

function getDataInfo(element) {
  let arrayData = [];

  for (let i = 0; i < element.children.length; i++) {
    arrayData.push(element.children[i].dataset);
  }

  return arrayData;
}
 console.log(getDataInfo(mainHeader));



const mainCont = document.getElementById("main-contener");
console.log(mainCont);

 function getElementClass(element) {
   // let elemClass = [];
   // elemClass.push(element.classList);
   // return elemClass;
   // return element.classList;
   // wersja prostsza
            // "ala,ma,kota".split() => ["ala,ma,kota"]
   return element.className.split(" ");
 }

console.log(getElementClass(mainCont));



const h1 = document.getElementsByClassName("pink-color");
console.log(h1);

function getElementText(element) {
  // let elemText = [];
  // for (let i = 0; i < element.length; i++) {
  //   elemText.push(element[i].innerText);
  // }
  //
  // return elemText;
  return Array.from(element).map(function(i) {
    return i.innerText;
  })
}

console.log(getElementText(h1));



const img = document.getElementsByClassName("images");
console.log(img);

function getElementAlt(element) {
  // let elemAlt = [];
  // for (let i = 0; i < element.length; i++) {
  //   elemAlt.push(element[i].getAttribute("alt"));
  // }
  //
  // return elemAlt;

  // wersja z map-krotsza
  return Array.from(element).map(function(i) {
    return i.getAttribute("alt");
  })
}

console.log(getElementAlt(img));


const link = document.getElementsByClassName("my-link");
console.log(link);

function getElementHref(element) {
  // let elemHref = [];
  // for (let i = 0; i < element.length; i++) {
  //   elemHref.push(element[i].getAttribute("href"));
  // }
  // return elemHref;
  return Array.from(element).map(function(i) {
    return i.getAttribute("href");
  })
}

console.log(getElementHref(link));
