
var task1Array = [
                  [2, 3],
                  ["Ala", "Ola"],
                  [true, false],
                  [5, 6, 7, 8],
                  [12, 15, 67]
              ];

console.log(task1Array[3][2]);

console.log(task1Array[1].length);

console.log(task1Array[4][2]);


function print2DArray(a2D) {

  for (let i = 0; i < a2D.length; i++) {
    // console.log(a2D[i]);
    for (let j = 0; j < a2D[i].length; j++) {
      console.log(a2D[i][j]);
    }
  }
}

 print2DArray(task1Array);
