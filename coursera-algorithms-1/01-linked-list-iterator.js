class LinkedListIterator {
  class ListIterator {
    #current;

    constructor (first) {
      this.#current = first;
    }

    hasNext() {
      return !!this.#current;
    }

    // throw UnsupportedOperationException
    remove() { /* not supported by linked lists */ }

    next() {
      // throw NoSuchElementException if no more items in iteration
      const item = this.#current.item;
      this.#current = this.#current.next;

      return item;
    }
  }

  iterator() {
    return new ListIterator();
  }
}


