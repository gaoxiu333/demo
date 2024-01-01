function bubbleSort(originalArray) {
  let swapped = false;
  const array = [...originalArray];
  for (let i = 1; i < array.length; i += 1) {
    swapped = false;
    for (let j = 0; j < array.length - 1; j += 1) {
      //   console.log(j, array[j + 1], array[j], array[j + 1] < array[j]);
      if (array[j + 1] < array[j]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) return array;
  }
  return array;
}

let a = bubbleSort([3, 2, 1, 2, 3, 4, 5, 6]);
console.log(a);
