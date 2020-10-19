const country = {
    capital: "ABC",
    population: 1234,
    president: "Adam Nowak",
    primeMinisters: [
        {
            name: "Michal Kowalski"
        },
        {
            name: "Krzysiek Kowalski"
        }
    ]

};

for(let i = 0; i < country.primeMinisters.length; i++){
    console.log(country.primeMinisters[i]);
    console.log(country.primeMinisters[i].name);
}

const timeMachine = {
    shape: "Rect",
    model: "S",
    run: function(date, place) {
        console.log(`Przenosimy się do ${place} w roku ${date}`);
    }
}

console.log(timeMachine.shape);
console.log(timeMachine.model);
console.log(timeMachine.run);

timeMachine.run("2019", "Warszawa");

const timeMachineKeys = Object.keys(timeMachine);
// ["shape", "model", "run"]

for(let i = 0; i < timeMachineKeys.length; i++){
    const key = timeMachineKeys[i];
    console.log(timeMachine[key]);
}


const book = {
  title : "The Power of Now",
  author: "Eckhardt Tolle",
  numberOfPages: 300,
}


// sposob 1 bezposredni
console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);


	for (const prop in book) {
		// console.log(" " + prop + " = " + book[prop]);
    // tu wypisze key i properties
    console.log(book[prop]);
	}

  const person = {
    name: "Margo",
    age: 21,
    sayHello: function () {
      console.log("hello!");
    }
  }
  for (const prop in person) {
    console.log(person[prop]);
	}

  person.sayHello();

const recipe = {
  title: "Aglio e oglio",
  servings: 2,
}

recipe.ingredients = ["penne rigatte 500g", "2 cloves garlic", "extra virgin olive of oil", "grana padano"]
for (const prop in recipe) {
  console.log(recipe[prop]);
}

var spoon = {
  isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);
