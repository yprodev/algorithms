
class LinkedStackOfStrings {
  #first = null;

  // Private class
  class Node {
    item;
    next;
  }

  isEmpty() {
    return this.#first === null;
  }
  
  push(item) {
    let oldFirst = this.#first;
    
    this.#first = new Node();

    this.#first.item = item;
    this.#first.next = oldFirst;
  }

  pop() {
    let item = this.#first.item;
    this.#first = this.#first.next;

    return item;
  }
}

module.exports = LinkedStackOfStrings;

