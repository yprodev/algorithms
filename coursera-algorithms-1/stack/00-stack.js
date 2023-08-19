/* STACK CONSIDERATIONS
 *
 * Overfrlow and underflow
 *  - Underflow: throw exception if pop from an empty stack
 *  - Overflow: use resizing array for array implementation
 *
 * Null Items: we allow null items to be inserted
 *
 * Loitering: Holding a reference to an object when it is no longer needed
 *
 * pop() {
 *  return arr[--pointer];
 * }
 *
 * This version avoids 'loitering': garbage collector can reclaim memory
 * only if no outstanding references
 *
 * pop() {
 *  item = arr[--pointer];
 *
 *  arr[pointer] = null;
 *
 *  return item;
 * }
 *
 *
 *
 *
 *
 *
 *
 *
 */
