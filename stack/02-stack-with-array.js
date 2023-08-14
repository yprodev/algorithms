class FixedCapacityStackOfStrings {
  #strArr;
  #capacity = 0; // (N)

  // The argument capacity is a cheat
  constructor(capacity) {
    this.#strArr = Array.from({ length: capacity }, () => null);
  }


  isEmpty() {
    return this.#capacity === 0;
  }
  
  // use to index into array
  // then increment capacity (N)
  push(item) {
    this.#strArr[this.#capacity++] = item;
  }

  // decrement capacity (N) of the array
  // then use to index into array
  pop() {
    // this is LOITERING. Check file with 00-
    return this.#strArr[--this.#capacity];
  }
}

module.exports = LinkedStackOfStrings;

