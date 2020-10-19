document.addEventListener("DOMContentLoaded", function () {
document.querySelector('#element1').addEventListener('click', function(e){
	console.log('Event in #element1 fired!');
});

document.querySelector('#element2').addEventListener('click', function(e){
	console.log('Event in #element2 fired!');
	e.stopPropagation();
});

document.querySelector('#element3').addEventListener('click', function(e){
	console.log('Event in #element3 fired!');
});

document.querySelector('#element4').addEventListener('click', function(e){
	console.log('Event in #element4 fired!');
	e.stopPropagation();
});

const elem5 = document.querySelector('#element5');
elem5.addEventListener('click', function(e){
	console.log('Event in #element5 fired!');
	e.stopImmediatePropagation();

},
{once:true});
// zdarzenie zostanie obsluzone tylko raz...

})

// document.querySelector('#element1').addEventListener('click', function(e){
// 	console.log('Event in #element1 fired!');
// });
//
// document.querySelector('#element2').addEventListener('click', function(e){
// 	// Rodzic nie dowie sie o tym, ze ktos kliknal,
// 	// ale gdyby #element2 miał więcej niz jeden event click,
// 	// to wykonalyby sie wszystkie jego eventy
// 	e.stopPropagation();
// 	console.log('Event in #element2 fired!');
// });
//
// document.querySelector('#element3').addEventListener('click', function(e){
// 	console.log('Event in #element3 fired!');
// });
//
// document.querySelector('#element4').addEventListener('click', function(e){
// 	console.log('Event in #element4 fired!');
// });
//
// document.querySelector('#element5').addEventListener('click', function(e){
// 	// Zatrzymuje propagacje do rodzica, czyli rodzic nie wie, ze ktos kliknal
// 	// ale zatrzymuje tez drugi event dla #element5
// 	e.stopImmediatePropagation();
// 	console.log('Event in #element5 fired!');
// });
//
// document.querySelector('#element5').addEventListener('click', function(e){
// 	// To sie nie wykona, bo mamy stopImmediatePropagation()
// 	console.log('Second event in #element5 fired!');
// });
