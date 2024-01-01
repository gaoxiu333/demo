function insertionSort(originalArray) {
  const array = [...originalArray];
  for (let i = 0; i < array.length; i += 1) {
    let currentIndex = i;
    while (
      array[currentIndex - 1] &&
      array[currentIndex] < array[currentIndex - 1]
    ) {
      [array[currentIndex], array[currentIndex - 1]] = [
        array[currentIndex - 1],
        array[currentindex],
      ];
      currentindex -= 1;
    }
  }
  return array;
}
