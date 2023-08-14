function binarySearch(array, target) {
  let left = 0,
      right = array.length - 1;

  while (left <= right) {
    let middle = left + (right - left) / 2;

    if (target < array[middle]) {
      right = middle - 1;
    }

    if (target > array[middle]) {
      left = middle + 1;
    }

    return middle;
  }

  return -1;
}


