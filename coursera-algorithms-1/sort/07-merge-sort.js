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

