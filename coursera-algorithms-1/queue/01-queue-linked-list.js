class LinkedQueueOfStrings {
  #first;
  #last;

  class Node {
    item;
    next;
  }

  isEmpty() {
    return !this.#first;
  }

  enqueue(item) {
    const oldLast = this.#last;

    this.#last = new Node();
    this.#last.item = item;

    if (this.isEmpty()) {
      this.#first = this.#last;
    } else {
      oldLast.next = this.#last;
    }
  }

  dequeue() {
    const item = this.#first.item;
    this.#first = this.#first.next;

    if (this.isEmpty()) {
      this.#last = undefined;
    }

    return item;
  }
}


