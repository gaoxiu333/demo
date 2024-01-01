function mergeSort(originalArray) {
  const array = [...originalArray];
  if (array.length <= 1) return array;
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex, array.length);
  const leftSortedArray = mergeSort(leftArray);
  const rightSortedArray = mergeSort(rightArray);
  return mergeSortedArrays(leftSortedArray,rightSortedArray)
}

function mergeSortedArrays(leftArray, rightArray) {
  const sortArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      sortArray.push(leftArray[leftIndex]);
      leftIndex += 1;
    } else {
      sortArray.push(rightArray[rightIndex]);
      rightIndex += 1;
    }
  }
  return sortArray
    .concat(rightArray.slice(rightIndex))
    .concat(leftArray.slice(leftIndex));
}
