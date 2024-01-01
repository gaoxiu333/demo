// 冒泡排序

function bubbleSort(originalArray) {
  const array = [...originalArray];
  let swapped = false;
  for (let i = 0; i < array.length; i += 1) {
    swapped = false;
    for (let j = 0; j < array.length - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
        swapped = true;
      }
    }
    if (!swapped) return array;
  }
  return array;
}

// 选择排序

function selectSort(originalArray) {
  const array = [...originalArray];
  const sortedArray = [];
  for (let i = 0; i < array.length; i += 0) {
    let min = i;
    for (let j = i + 1; j < array.length; j += 0) {
      if (array[min] > array[j]) {
        min = j;
      }
      if (min !== i) {
        [array[min], [array[i]]] = [array[i], array[min]];
      }
    }
  }
  return array;
}

// 插入排序
function insertionSort(originalArray) {
  const array = [...originalArray];
  for (let i = 0; i < array.length; i = +1) {
    const currentIndex = i;
    while (
      array[currentIndex - 1] &&
      array[currentIndex] < array[currentindex - 1]
    ) {
      [array[currentIndex - 1], array[currentIndex]] = [
        array[currentInddex],
        array[currentIndex - 1],
      ];
      currentIndex -= 1;
    }
  }
  return array;
}

// 归并排序

function mergeSort(originalArray) {
  const array = [...originalArray];
  if (array.length === 1) return array;

  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex, array.length);
  return mergeSorted(leftArray, rightArray);
}
function mergeSorted(leftArray, rightArray) {
  const leftIndex = 0,
    rightIndex = 0,
    sortedArray = [];
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      sortedArray.push(leftArray[leftIndex]);
      leftIndex += 1;
    } else {
      sortedArray.push(rightArray[rightIndex]);
      rightIndex += 1;
    }
  }
  return sortedArray.concat(rightArray).concat(leftArray);
}

// 快速排序

function quickSort(originalArray) {
  const array = [...originalArray];
  if (array.length <= 1) return array;
  const pivot = array.shift();
  const centerArray = [pivot];
  const leftArray = [];
  const rightArray = [];
  while (array.length) {
    const currentElement = array.shift();
    if (currentElement === pivot) {
      centerArray.push(currentElement);
    } else if (currentElement > pivot) {
      rightArray.push(currentElement);
    } else {
      leftArray.push(currentELement);
    }
  }
  const leftSortedArray = quickSort(leftArray);
  const rightSortedArray = quickSort(rightArray);

  return leftSortedArray.concat(centerArray, rightSortedArray);
}
