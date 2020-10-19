// wywoluje funkcje przed jej definicja, zadziala hoisting

sayHello();

function sayHello( ) {
    console.log("Czesc!");
}

sayHello();


// ciao();
// Cannot access 'ciao' before initialization
// Jestem funkcją o nazwie 'ciao' i jestem przypisana do zmennej, czyli jestem wyrazeniem funkcyjnym
// u mnie hoisting nie zadziala!
const ciao = function ciao(name_function) {
    console.log("Ciao! Uwielbiam wloska kuchnie i Java Script!");
}

ciao();
