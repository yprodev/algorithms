/*
  * Q: How to shrink array?
  * First try:
  *  - push(): double size of array s[] when array is full
  *  - pop(): halve size of array s[] when array is one-half full.
  *
  * Too expensive in wors case
  *  - Consider push-pop-push-pop-... (thrashing) sequence when array is full
  *  - Each operation take time proportional to N.
  * -------------------------------------------------------------------------
  * Amortized analysis: average running time per operation over a worst-case 
  * sequence of operations
  *
  * Proposition: starting from an empty stack, any sequence of M push and pop
  * operations takes time proportional to M.
  *
  *
  *
  */

class ResizingArrayStackOfStrings {
  #strArr;
  #capacity = 0;

  constructor() {
    // The array of size 1
    this.#strArr = Array.from({ length: 1 });
  }

  isEmpty() {
    return this.#capacity === 0;
  }
  
  push(item) {
    if (this.#capacity === this.#strArr.length) {
      this.resize(2 * this.#strArr.length);
    }

    this.#strArr[this.#capacity++] = item;
  }

  pop() {
    // without loitering
    const item = this.#strArr[--this.#capacity];
    this.#strArr[this.#capacity] = null;

    if (this.#capacity > 0 && this.#capacity === this.#strArr.length / 4) {
      // if the quarter is full, thrash / resize down the array by half
      resize(this.#strArr.length / 2);
    }

    return item;
  }

  // Consequence: inserting first N times takes 
  // time proportional to N (not N^2)
  resize(capacity) {
    const copy = new Array.from({ length: capacity });

    for (let i = 0; i < this.#capacity; i++) {
      copy[i] = this.#strArr[i];
    }

    this.#strArr = copy;
  }
}

module.exports = ResizingArrayStackOfStrings;

