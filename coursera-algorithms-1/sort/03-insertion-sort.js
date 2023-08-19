/*
 * In iteration i, swap a[i] with each larger entry to its left
 *
 * Proposition: To sort a randomly-ordered array with distinct keys,
 * insertion sort uses ~ 1/4 N^2 compares and ~ 1/4 N^2 exchanges on average
 *
 * Pf. Expect each entry to move halfway back
 *
 * Best case: if the array is in ascending order, insertion sort makes N - 1
 * compares and 0 exchanges
 *
 * Worst case: if the array is in descending order (and no duplicates),
 * insertion sort makes ~ 1/2 N^2 compares and ~ 1/2 N^2 exchanges.
 *
 */
function insertionSort(array) {
  let len = array.length;

  for (let i = 0; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (less(a[j], a[j - 1])) {
        exchange(a, j, j - 1);
      } else {
        break;
      }
    }
  }
}

function less(a, b) {};

function exchange(array, item, min) {};

module.exports = insertionSort;


