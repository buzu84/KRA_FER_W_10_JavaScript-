
function createArray(number) {
    var newArray = [10];

    for(var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray.slice(1);
    // metoda dostepowa, w nawiasie od ktorego indeksu udostepnia, czyli bez indeksu zero(patrz linijka 3)
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));
