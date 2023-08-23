/*
 *
 * Basic plan
 *  - Divide array into two halves
 *  - Recursively sort each half
 *  - Merge two halves
 *
 * Goal: Given two sorted subarrays a[lo] to a[mid] and a[mid + 1] to a[hi],
 * replace with sorted subarray a[lo] to a[hi]
 *
 * Proposition: mergesort uses at most N lg N compares and 6 N lg N Array
 * accesses to sort any array of size N.
 *
 * Divide-and-conquer recurrence: proof by picture
 *
 * Use insertions sort for small subarrays.
 *  - Mergesort has too much overhead for tiny subarrays
 *  - Cutoff to insertion sort for ~7 items.
 *
 */

function merge(array, auxilaryArray, lo, mid, hi) {
  
  /*
    * precondition: a[lo..mid]      sorted
    * precondition: a[mid + 1..hi]  sorted
    */

  // Copy original array values into an auxilaryArray
  for (let k = lo; k <= hi; k++) {
    auxilaryArray[k] = array[k];
  }

  // Merge in-place
  let i = lo,
    j = mid + 1;

  for (let k = lo; k <= hi; k++) {
    if (i > mid)                    a[k] = aux[j++];
    if else (j > hi)                a[k] = aux[i++];
    if else (less(aux[j], aux[i]))  a[k] = aux[j++];
    else                            a[k] = aux[i++];
  }

  /*
    * postcondition: a[lo..hi]      sorted
    */
}


function sort(array) {
  let auxilaryArray = new Array(array.length);

  sort(array, auxilaryArray, 0, array.length - 1);
}

// Overloading (should be in class)
function sort(array, auxilaryArray, lo, hi) {
  if (hi <= lo) return;

  let mid = lo + (hi - lo) / 2;

  sort(array, auxilaryArray, lo, mid);
  sort(array, auxilaryArray, mid + 1, hi);

  // Stop if already sorted
  // Is biggest item in first half =< smallest item in second half?
  // Helps for partially-ordered arrays.
  if (!less(a[mid + 1], a[mid])) return;

  merge(array, auxilaryArray, lo, mid, hi);
}


/*
 * Bottom-up mergesort
 *
 * Basic plan
 *  - Pass through array, merging subarrays of size 1
 *  - Repeat for subarrays of size 2, 4, 8, 16, ...
 *
 * Bottom line: no recursion needed
 * Bottom line: concise industrial-strength code, if you have the space
 *
 */

function sort_without_recursion(array) {
  let len = array.length;
  let auxilaryArray = new Array(len);

  for (let size = 1; size < len; sz = sz + sz) {
    for (let lo = 0; lo < len - sz; lo += sz + sz) {
      merge(array, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, len - 1));
    }
  }

}


