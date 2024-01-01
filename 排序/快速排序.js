
function quickSort(originalArray) {
  const array = [...originalArray];
  if (array.length <= 1) {
    return array;
  }
  const leftArray = [];
  const rightArray = [];
  const pivotElement = array.shift();
  const centerArray = [pivotElement];
  while (array.length) {
    const currentElement = array.shift();
    if (currentElement === pivotElement) {
      centerArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      leftArray.push(currentElement);
    } else {
      rightArray.push(currentElement);
    }
  }
  const leftArraySorted = quickSort(leftArray);
  const rightArraySorted = quickSort(rightArray);
  return leftArraySorted.concat(centerArray, rightArraySorted);
}
