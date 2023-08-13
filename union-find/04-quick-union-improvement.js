/*
 * Quick Union Improvements
 *
 * Improvement 2: path compression
 *
 * Quick-union with path compression. Just after computing the root of p,
 * set the id of each examined node to point to that root.
 *
 * --------------------------------------------------------
 * Two-pass implementation:
 * Add second loop to root() method to set the id[] (ids array) of 
 * each examined node to the root.
 *
 * Simpler one-pass variant:
 * Make every other node in path point to its grandparent (thereby 
 * halving path length)
 *
 * In practice: No reason not to! Keeps tree almost completely flat
 *
 * --------------------------------------------------------
 * 
 * ANALYSIS
 *
 * Weighted quick-union with path compression: amortized analysis
 *
 * Proposition: [Hopcroft-Ulman, Tarjan]
 * Starting from an empty data structure, any sequence of M union-find ops
 * on N objects makes <= c(N + M lg * N) array accesses.
 *  - Analysis can be improved to N + M a(M, N)
 *  - Simple algorithm with fascinating methematics
 *
 * Linear-time algorithm for M union-find ops on N objects?
 *  - Cost within constant factor of reading in the data
 *  - In theory, WQUPC is not quite linear
 *  - In practice, WQUPC is linear
 *
 * Quick-Find:                                M N
 * Quick-Union:                               M N
 * Weighted QU:                               N + M log N
 * QU + path compression:                     N + M log N
 * Weighted QU + path compression (WQUPC):    N + M lg * N
 *
 * --------------------------------------------------------
 * Ex.:
 *  - WQUPC reduces time from 30 years to 6 seconds
 *  - Supercomputer won't help much; good algorithm enables solution
 *
 */

// IMPORTANT: The size arrays was not added! It will not work
class QuickUnionWeightedUF {
  #idArr = null;

  constructor(numberOfItems) {
    this.#idArr = Array.from({ length: numberOfItems }, (_, i) => i);
  }

  #root(i) {
    while (i !== this.#idArr[i]) {
      // Only one extra line of code!
      id[i] = id[ id[i] ];
      i = this.#idArr[i];
    }

    return i;
  }

  connected(p, q) {
    return this.#root(p) === this.#root(q);
  }

  union(p, q) {
    const pRoot = this.#root(p);
    const qRoot = this.#root(q);

    if (pRoot === qRoot) return;

    if (sizeArr[pRoot] < sizeArr[qRoot]) {
      this.#idArr[pRoot] = qRoot;
      sizeArr[qRoot] += sizeArr[pRoot];
    } else {
      this.#idArr[qRoot] = pRoot;
      sizeArr[pRoot] += sizeArr[qRoot];
    }

  }

  showState() {
    console.log(`Show iteration state: ${this.#idArr}`);
  }
}

module.exports = QuickUnionWeightedUF;

