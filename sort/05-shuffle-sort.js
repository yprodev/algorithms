/*
 * Generate a random real number for each array entry (useful for shuffling 
 * columns in a spreadsheet)
 * Sort the array
 *
 * Proposition: shuffle sort produces a uniformly random (assuming real numbers 
 * uniformly at random) permutation of the input array, provided no 
 * duplicate values.
 *
 * Drawback. Need to pay cost of sort?
 *
 * Goal: rearrange array so that result is a uniformly random permutation 
 * in linear time.
 *  - in iteration i, pick integer r between 0 and i uniformly at random.
 *  - swap a[i] and a[r]
 *
 * Proposition: [Fisher-Yates 1938] Knuth shuffling algorithm produces a 
 * uniformly random permutation (assuming integers uniformly at random) of 
 * the input array in linear time.
 *
 *  - in iteration i, pick integer r between 0 and i uniformly at random.
 *  Common bug here: between 0 and N - 1 
 *  Correct variant: between i and N - 1
 */

function shuffle(array) {
  let len = array.length;

  for (let i = 0; i < len; i++) {
    let random = Math.random(i + 1); // between 0 and 1

    exchange(a, i, r);
  }
}

function exchange(array, firstItem, secondItem);




