/*
 * Quick Find (eager approach)
 *
 * EXAMPLE of algorithm work
 * --------------------------------------------------------
 * Integer array id[] of size N
 * Interpretation: p and q are connected iff (if and only if) they
 * have the same id
 * --------------------------------------------------------
 *
 *  0  1  2  3  4  5  6  7  8  9
 * [0, 1, 1, 8, 8, 0, 0, 1, 8, 8]
 *
 * 0 -> 5 -> 6
 * 
 * 1 -> 2 -> 7
 *
 * 8 -> 3 -> 4 -> 9
 *
 * --------------------------------------------------------
 * ANALYSIS
 *
 * Quick-find:
 * initialize: N
 * union:      N
 * find:       1
 * 
 * Take N^2 array accesses to process sequence of N 
 * union commands on N objects
 * 
 */


class QuickFindUF {
  #idArr = null;

  constructor(numberOfItems) {
    this.#idArr = Array.from({ length: numberOfItems }, (_, i) => i);
  }

  // This is a quick find algorithm - find if items are connected
  connected(p, q) {
    return this.#idArr[p] === this.#idArr[q];
  }

  union(p, q) {
    const pIdValue = this.#idArr[p];
    const qIdValue = this.#idArr[q];

    // Change all entries with id[p] to id[q]
    // (at most 2N + 2 array accesses)
    for (let i = 0; i < this.#idArr.length; i++) {
      if (this.#idArr[i] === pIdValue) {
        this.#idArr[i] = qIdValue;
      }
    }
  }

  showState() {
    console.log(`Show iteration state: ${this.#idArr}`);
  }
}

module.exports = QuickFindUF;

