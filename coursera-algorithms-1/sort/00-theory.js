/*
 * A total order is relative to compareTo() method interface and logic
 * implementation.
 *
 * A Total Order is a binary relation =< that satisfies
 *  - Antisymmetry: if v =< w and w =< v, then v = w
 *  - Transitivity: if v =< w and w =< x, then v =< x
 *  - Totality: either v =< w or w =< v or both
 *
 * Implement compareTo() so that v.compareTo(w)
 *  - Is total order
 *  - Returns a negative integer, zero, or positive integer
 *  if v is less than, equal to, or greater than w, respectively
 *  - Throws an exception if incompatible types (or either is null)
 *
 * less than (return -1)
 * equal to (return 0)
 * greater than (return +1)
 *
 *
 *
 */


