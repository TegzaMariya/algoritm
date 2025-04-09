const N = 9;

function getRandomNumber() {
  return Math.floor(Math.random() * 51);
}

let matrix = [];
for (let i = 0; i < N; i++) {
  let row = [];
  for (let j = 0; j < N; j++) {
    row.push(getRandomNumber());
  }
  matrix.push(row);
}

function printMatrix(mat) {
    for (let i = 0; i < mat.length; i++) {
      console.log(mat[i].join("\t"));
  }
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  } 
}

console.log("Початковий масив:");
printMatrix(matrix);

{
  for (let i = 0; i < N; i++) 
  bubbleSort(matrix[i]);
}

console.log("Відсортований масив (рядки за спаданням):");
printMatrix(matrix);