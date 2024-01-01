function countingSort(array) {
  let min = 0,
    max = 0;
  array.forEach((element) => {
    if (min > element) {
      min = element;
    }
    if (max < element) {
      max = element;
    }
  });
  const count = Array(max - min + 1).fill(0);
  array.forEach((element) => {
    count[element - min] += 1;
  });
  
}
