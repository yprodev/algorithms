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
 * --------------------------------------------------------------------
 *
 * Complexity of sorting
 *
 * Computational complexity: framework to study efficiency of algorithms
 * for solving a particular problem X.
 *
 * Model of computation:    Allowable operations
 * Cost model:              Operation count(s)
 * Upper bound:             Cost guarantee provided by some algorithm for X
 * Lower bound:             Proven limit on cost guarantee of all algorithms for X
 * Optimal algorithm:       Algorithm with best possible cost guarantee for X
 *
 * Example: sorting
 *
 * Model of computation:    decision tree (can access information only through compares)
 * Cost model:              # compares
 * Upper bound:             ~ N log N from mergesort
 * Lower bound:             ~ N log N
 * Optimal algorithm:       mergesort
 *
 * --------------------------------------------------------------------
 *
 * Lessons: use theory as a guide
 *
 * Ex.: don't try to design sorting algorithm that guarantees 1/2 N lg N compares
 * Ex.: design sorting algorithm that is both time- and space-optimal
 *
 * --------------------------------------------------------------------
 *
 * Lower bound may not hold if the algorithm has information about
 *
 *  - The initial order of the input
 *  - The distribution of key values
 *  - The representation of the keys
 *
 * Partially-ordered arrays: depending on the initial order of the input, we 
 * may not need N log N compares.
 *
 * Duplicate keys: depending on the input distribution of duplicates, we may 
 * not need N lg N compares.
 *
 * Digital properties of keys: we can use digit / character compares instead 
 * of key compares for numbers and strings.
 *
 *
 */


