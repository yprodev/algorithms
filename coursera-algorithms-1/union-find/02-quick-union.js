/*
 * Quick union (lazy approach)
 *
 * EXAMPLE of algorithm work
 * --------------------------------------------------------
 * Integer array id[] of size N
 * Interpretation: id[i] is parent of i. Keep going until
 * it does not change (algorithm ensures no cycles)
 * Root of i is id[id[id[id[...id[i]...]]]]
 * --------------------------------------------------------
 * Not this is a set of trees, so called forest.
 *
 *  0  1  2  3  4  5  6  7  8  9
 * [0, 1, 9, 4, 9, 6, 6, 7, 8, 9]
 *
 * 0 1   9    6 7 8
 *      / \   |
 *     2   4  5
 *         |
 *         3
 *
 * root of 3 is 9
 * root of 5 is 6
 * 3 and 5 are not connected
 *
 * find operation: check if p and q have the same root
 * union operation: to merge components containing p and q
 * set the id of p's root to the id of q's root (in this case only
 * one value changes, there is no need to access array multiple times).
 *
 * 0 1            6 7 8
 *               /|
 *              / |
 *             /  5 (q)
 *            9   
 *           / \
 *          2   4
 *              |
 *          (p) 3
 *
 * --------------------------------------------------------
 * ANALYSIS
 *
 * Quick-union:
 * initialize:    N
 * union:         N (includes cost of finding roots)
 * find:          N (worst case)
 *
 * RECAP
 *
 * Quick-find defect:
 *  - Union too expensive (N array accesses)
 *  - Trees are flat, but too expensive to keep them flat
 * 
 * Quick-union defect:
 *  - Trees can get tall
 *  - Find too expensive (could be N array accesses)
 *
 */


class QuickUnionUF {
  #idArr = null;

  constructor(numberOfItems) {
    this.#idArr = Array.from({ length: numberOfItems }, (_, i) => i);
  }

  // Chase parent pointers until reach root
  // (depth of i array accesses)
  // So actually find the root with this method
  #root(i) {
    while (i !== this.#idArr[i]) {
      i = this.#idArr[i];
    }

    return i;
  }

  // Check if p and q have same root
  // (depth) of p and q array accesses)
  connected(p, q) {
    return this.#root(p) === this.#root(q);
  }

  // Change root of p to point to root of q
  // (depth of p and q array access)
  union(p, q) {
    const pRoot = this.#root(p);
    const qRoot = this.#root(q);

    this.#idArr[pRoot] = qRoot;
  }

  showState() {
    console.log(`Show iteration state: ${this.#idArr}`);
  }
}

module.exports = QuickUnionUF;

