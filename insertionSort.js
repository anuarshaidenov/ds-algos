const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let holePosition;
  let valueToInsert;

  for (let i = 1; i < array.length; i++) {
    valueToInsert = array[i];
    holePosition = i;

    while (holePosition > 0 && array[holePosition - 1] > valueToInsert) {
      array[holePosition] = array[holePosition - 1];
      holePosition = holePosition - 1;
    }

    array[holePosition] = valueToInsert;
  }
}

insertionSort(numbers);
console.log(numbers);
