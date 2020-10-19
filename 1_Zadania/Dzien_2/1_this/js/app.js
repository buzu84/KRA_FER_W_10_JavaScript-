const car = {
    brand: "Audi",
    color: "Black",
    numberOfKilometers: 0,
    printCarinfo: function() {
        // this w metodzie obiektu oznacza TEN OBIEKTs
        console.log(this.brand, this.color, this.numberOfKilometers);
        // jeśli this jest TYM OBIEKTEM, to mozemy wywolac jego metode
        //this.drive(10); // tak samo jak poza metoda (patrz linia 19)
    },
    drive: function(km){
        console.log('Własnie przejechałem ' + km + "km");
        // zmieniamy wartosc wlasciwosci numberOfKilometers w TYM OBIEKCIE
        this.numberOfKilometers += km; // this.numberOfKilometers = this.numberOfKilometers + km;
    },
    addServicingDate: function (date) {
      this.servDates.push(date);
    },
    returnDates: function () {
      return this.servDates;
    }
}

car.servDates = ["2 grudnia", "5 lipca"];
console.log(car.returnDates());

car.addServicingDate("15 wrzesien");
console.log(car.returnDates());



car.printCarinfo();
car.drive(50);
car.printCarinfo();


// zadanie 3

const stairs = {
  step: 0,
  up: function() {
    this.step = this.step +1;
    return this.step;
 },
  down: function() {
    this.step = this.step -1;
    return this.step;
  },
  printStep: function() {
    console.log(this.step);
  }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep();
