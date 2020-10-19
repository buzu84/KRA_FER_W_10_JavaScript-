const a = document.getElementById("a");
const b = document.getElementById("b");

// Tutaj this wskazuje na obiekt document (Ponieważ kontext wywołania funkcji
// addEventListener to właśnie document)
console.log("obiekt document: ", this);
// gdy uzyje this poza jakakolwiek funkcja (czyli mowiac w jezyku IT: w globalnym kontekscie)
// this oznacza caly dokument

a.addEventListener("click", function(event){
  // Tutaj this wskazuje na element DOM o id a
  console.log("a: ", this);
});
// tutaj dodajesz "click" do elementu a, wiec wewnatrz funkcji obslugujacej "click" this oznacza ten element,
// do ktorego dodajesz "click"

b.addEventListener("click", function(event){
  // Tutaj this wskazuje na element DOM o id b
  console.log("b: ", this);


  function innerFuncOne(){
      // Tutaj this wskazuje na element Window, bo funkcja została
      //wywołana bez żadnego kontekstu.
      console.log("innerFuncOne: ", this);
  // wyglada na to, ze w takim przypadku (nie podaje do innerFuncOne zadnego argumentu
  // ani nie uzywam jej do obslugi zdarzenia dla jakiegos elementu) wewnatrz takiej funkcji this oznacza window
  }
  innerFuncOne();

});
// moge ustawic kontekst za pomoca bind. jesli innerfuncone byloby zapisane jako "rakieta" this bedzie rzejety z b.add..
