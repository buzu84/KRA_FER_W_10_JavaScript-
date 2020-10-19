function getNumber(number, array) {
  for(i=0; i < array.length; i++) {
    if (number === array[i]) {
      return true;
    }
  }
  return false;
}


console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));


function addTheSameNumbers(number, array) {
  let result = 0;
  let exist = false;
  for(i = 0; i < array.length; i++) {
    if(number === array[i]) {
      result = result + array[i];
      exist = true;
    }
  }
  if (exist === true) {
    return result;
  }
  else {
    return null;
  }
}

console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));


function factors(number) {
  const factArray = [];
  let i = 0;
  if (number > 0) {
    for (i = 1; i <= number; i++)
      if(number % i === 0) {
        factArray.push(i);
        // if (number / i !== i)
        // factArray.push(number / i);
    }

     factArray.sort(function(x, y) {
       return x - y;
   });
       return factArray;

  } else {
      return [];
  }
}

console.log(factors(6));

// function factors(number){
//   const factArray = [];
//   if (number > 0){
//     for (let i = 1; i <= number; i++) {
//       if(number % i === 0) {
//         factArray.push(i);
//       }
//       factArray.sort(function(x,y) {
//         return x - y;
//       });
//       return factArray;
//     }
//
//   } else {
//     return [];
//   }
// }
//
// console.log(factors(8));
