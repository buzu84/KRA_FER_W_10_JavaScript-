function distFromAvarage(myArray) {
    const resultArray = [];
    let sumOfArray = 0;
    for(let i=0; i < myArray.length; i++){
        sumOfArray += myArray[i];
    }
    let avg = sumOfArray / myArray.length;
    for(let i=0; i < myArray.length; i++){
        resultArray.push(myArray[i] - avg);
    }
    return resultArray;
}

const arrayToTest = [1,2,3,4,5,6,7];
console.log(distFromAvarage(arrayToTest));





const fruits = ["mango", "banana", "papaya", "orange"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
for (let i=0; i < fruits.length; i++) {
   console.log(fruits[i]);
}
//wypisuje 1 owoc, ostatini oraz wszystkie//

function printTable(array) {

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

}

const array = [2, 4, 7, "Magda" ,1717];
printTable(array);




function multipleArray(myArray) {
let multipleResult = 1;
for (let i=0; i < myArray.length; i++) {
  multipleResult *= myArray[i];
  }
  return multipleResult;
}
const myArray = [1,2,3,4,5,6,7];
console.log(multipleArray(myArray));

// ponizej przyklad na uzycie reduce()-met iteracyjna dla tablic, mozna by tu uzyc.
// const foo = [1, 2, 3];
// const sum = foo.reduce(function(total, item) {
//   return total + item;
// });
//
// console.log(sum);





function getEvenAverage (array_6) {
  let averageResult = 0;
  let counter = 0;
  for (i =  0; i < array_6.length; i++) {
    // tu sprawdza czy liczba z tablicy jest parzysta
    if (array_6[i] % 2 === 0) {
      // to wtedy co robie jak jest parzysta
     averageResult += array_6[i];
     counter++;
    }

  }
  if (counter === 0) {
      return null;
  }

  // tu srednia z liczb parzystych
  averageResult = averageResult / counter;
  return averageResult;
}
const array_6 = [1,1,1];
console.log(getEvenAverage(array_6));
// co zrobic gdy jest troche parzystych troche nieparzystych






 function sortArray(array){
    console.log(array);

    array.sort(function(a, b){
        return a - b;
    });

    console.log(array);
    return array;
}
sortArray([145,11,3,64,4,6,10]);

function addArrays(array1, array2){
  let result = [];
  // array1.map(function (num, idx) {
  //   result = num + array2[idx];
  // });
  // return result;
    for(var i = 0; i < array1.length; i++){
     result.push(array1[i] + array2[i]);
  }
  return result;
}


console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));


// function addArrays(firstArray, secondArray){
//     let thirdArray = [];
//     let longerArrayLength = firstArray.length;
//     if (firstArray.length < secondArray.length){
//         longerArrayLength = secondArray.length;
//     }
//     for (let i=0; i<longerArrayLength; i++){
//         const a = !firstArray[i] ? 0 : firstArray[i];  //jeśli nie znajdzie !firstArray[i]
//         const b = !secondArray[i] ? 0 : secondArray[i];
//         thirdArray.push(a + b);
//     }
//     return thirdArray;
// }
// console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
// console.log(addArrays([8,3,22], [1,3,2]));
// console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));
