class ArrayIterator {
  class ReverseArrayIterator {
    #length = 0;
    #storage = [];

    constructor (storage, capacity) {
      this.#length = capacity;
      this.#storage = storage;
    }

    hasNext() {
      return this.#length > 0;
    }

    remove() { /* not supported by array */ }

    next() {
      return this.#storage[--this.#length];
    }
  }

  iterator() {
    return new ReverseArrayIterator();
  }
}
