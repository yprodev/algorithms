/*
 * In iteration i, find index min of smallest remaining entry
 * Swap a[i] and a[min]
 *
 * Running time insensitive to input. Quadratic time, even if input is sorted.
 * Data movement is minimal. Linear number of exchanges.
 */

function selectionSort(array) {
  let len = array.length;

  for (let i = 0; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      if (less(a[j], a[min])) {
        min = j;
      }
    }

    exchange(a, i, min);
  }
}

function less(a, b) {};

function exchange(array, item, min) {};

module.exports = selectionSort;

