/*
 * Quick Union Improvements
 *
 * Improvement 1: weighting
 *
 * Weighted quick-union:
 *  - Modify quick-union to avoid tall trees
 *  - Keep track of size of each tree (number of objects)
 *  - Balance by linking root of smaller tree to root
 *  of larger tree (reasonable alternatives: union by height or 'rank')
 * --------------------------------------------------------
 * DATA STRUCTURE
 * Same as quick-union, but maintain extra array sz[i] to count number of
 * objects in the tree rooted at i.
 *
 * FIND
 * Identical to quick-union
 *
 * UNION
 * Modify quick-union to:
 * - Link root of smaller tree to root of larger tree
 * - Update the sz[] array
 * --------------------------------------------------------
 * 
 * ANALYSIS
 *
 * Running Time
 *  - Find: take time proportional to depth of p and q
 *  - Union: takes constant time, given roots.
 *
 * Proposition: Depth of any node x is at most lg N (lg is base-2 logarithm)
 *
 * When does depth of x increase?
 * Increases by 1 when tree T1 containing x is merged into another tree T2.:
 *  - The size of the tree containing x at least doubles since |T2| >= |T1|
 *  - Size of tree containing x ccan double at most lg N times. Why?
 *
 * Weighted Quick-Union:
 * initialize:        N
 * union:             lg N (includes costs of finding roots)
 * connected:         lg N
 *
 * Q: Stop at guaranteed acceptable performance?
 * A: No, easy to improve further
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
      i = this.#idArr[i];
    }

    return i;
  }

  connected(p, q) {
    return this.#root(p) === this.#root(q);
  }

  // Link root of smaller tree to root of larger tree
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

