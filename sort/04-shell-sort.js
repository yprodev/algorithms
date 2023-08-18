/*
 * Idea: move entries more than one position at a time by h-sorting the array
 *
 * How to h-sort an array? Use insertion sort, with stride length h
 *
 * Proposition: the worst-case number of compares used by shellsort with 
 * the 3x + 1 increments is O(N^(3/2))
 *
 * Property: number of compares used by shellsort with the 3x + 1 increments
 * is at most by a small multiple of N times the # of increments used.
 *
 * Remark: accurate model has not yet been discovered
 *
 */
function shellSort(array) {
  let len = array.length;

  let h = 1;

  while (h < len / 3) {
    h = 3 * h + 1; // 1, 4, 13, 40, 121, 364
  }

  while (h >= 1) {
    // insertion sort
    for (let i = h; i < len; i++) {
      for (let j = i; j >= h && less(a[j], a[j - h]); j -= h) {
        exchange(a, j, j - h);
      }
    }

    h = h / 3;
  }
}

function less(a, b) {};

function exchange(array, item, min) {};

module.exports = shellSort;

