const header = document.querySelector('h1');
console.log(header);
// pierwszy h1 na stronie

const title = document.getElementsByClassName('title');
console.log(title);
// element o class title

const elementWithAttribute = document.querySelector('[data-animation]');
console.log(elementWithAttribute);
// element z atrybutem data-animation

const divs = document.getElementsByTagName('div');
console.log(divs.length);
// Ile na stronie znajduje się elementów div

const offers = document.querySelectorAll('.oferts');
console.log(offers.length);
// Ile na stronie znajduje się elementów o klasie oferts

const links = document.querySelectorAll('[href]');
console.log(links.length);
// Ile na stronie znajduje się elementów, które posiadają atrybut href

// zadanie01

const home = document.getElementById('home');
console.log(home);
const home2 = document.querySelector('#home');
console.log(home2);
// Element o id home (na dwa sposoby)

const elem_attribute = document.querySelector('li[data-direction]');
console.log(elem_attribute);
// pierwszy li z atrybutem data-direction

// const block1 = document.getElementsByClassName('block:first-child');
// console.log(block1);

const block1 = document.querySelector('.block');
console.log(block1);
// Pierwszy element o klasie block

const li_elem = document.querySelectorAll('nav li');
console.log(li_elem.length);
// Wszystkie elementy li znajdujące się w tagu nav

const paragraphs = document.querySelectorAll('div > p');
console.log(paragraphs.length);
// Wszystkie paragrafy należące do wszystkich elementów div

const divsInArticle = document.querySelectorAll('article div');
console.log(divsInArticle.length);
// Wszystkie divy znajdujące się w tagu article

const article = document.querySelector('article.first');
console.log(article);
// Wyszukaj na stronie i zapisz do odpowiednio nazwanej zmiennej tag article o klasie first


console.log(article.querySelectorAll('h1').length);
// wypisz w konsoli, ile elementów h1 znajduje się w tym tagu
