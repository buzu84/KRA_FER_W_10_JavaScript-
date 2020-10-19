/*
  Poniżej napisz kod rozwiązujący zadania
 */
const elementsOfList = document.querySelectorAll('.ex5 li');
for (let i =0; i < elementsOfList.length; i++) {
  if (i % 2 === 0){
    elementsOfList[i].style.backgroundColor = "green";
  }

  if (i % 3 === 0){
    elementsOfList[i].style.textDecoration = "underline";
    // trzeba dopisac w stylach sciagniecie textdec none dla wszystkich a najpierw
  }
  if (i === 4){
    elementsOfList[i].classList.add('big');
  }
  // jezeli to piaty elem
}
 // zadanie2
const elemOfDivs = document.querySelectorAll('.ex1');
console.log(elemOfDivs);




const divPic = document.querySelectorAll('.chrome, .edge, .firefox');
console.log(divPic);
divPic[0].style.backgroundImage = "url(assets/img/chrome.png)";
divPic[0].style.backgroundRepeat = "no-repeat";
divPic[0].style.width = "100px";
divPic[1].style.backgroundImage = "url(assets/img/edge.png)";
divPic[2].style.backgroundImage = "url(assets/img/firefox.png)";


const link = document.querySelectorAll('a');
console.log(link);

for (let i = 0; i < link.length; i ++) {
  link[i].style.textDecoration = "none";
}

// link[0].setAttribute = ("href", "https://www.google.pl/chrome/browser/desktop/index.html");
link[0].innerText = ("Chrome");


link[1].setAttribute("href", "https://www.microsoft.com/en-us/edge");
// dodac poczatek linka w for..

link[2].setAttribute("href", "https://www.mozilla.org/en-US/firefox/new/");
link[2].innerText = ("Firefox");



const name = document.getElementById('name');
const colors = document.getElementById("fav_color");
const meal = document.getElementById("fav_meal");
name.innerText = "Magdalena Buzikiewicz";
colors.innerText = "Rainbow:)";
meal.innerText = "Kapustnik kiszony:)";


// zadanie 3
const list = document.querySelector('.ex3 ul');
console.log(list);
// document.querySelector('.ex3 ul').classList;
// list.className += " name";
list.classList.add("name");

list.classList;

const elements = document.querySelectorAll('.ex3 ul li');

for (let i = 0; i < elements.length; i++){
  elements[i].classList.add("menuElement");
  elements[i].classList.remove("error");

}
console.log(elements);

const elements_ex4 = document.querySelectorAll('.ex4 ul li');
for (let i = 0; i < elements_ex4.length; i++){
  elements[i].setAttribute('data-id',i);
}
