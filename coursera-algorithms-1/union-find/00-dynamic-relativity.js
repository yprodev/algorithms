/*
 * Modeling the connections
 *
 * We assume "is connected to" is an equivalence relation:
 *
 * - Reflexive: p is connected to p
 * - Symmetric: if p is connected to q, then q is connected to p
 * - Transitive: if p is connected to q and q is connected to r,
 *   then p is connected to r.
 *
 * ----------------------------------------------------------------
 * UNION-FIND APPLICATIONS
 *  - Percolation
 *  - Games (Go, Hex)
 *  - Dynamic connectivity
 *  - Least common ancestor
 *  - Equivalence of finite state automata
 *  - Hoshen-Kopelman algorithm in physics
 *  - Hinley-Milner polymorphic type inference
 *  - Kruskal's minimum spanning tree algorithm
 *  - Compiling equivalence statements in Fortran
 *  - Morphological attribute openings and closings
 *  - Matlab's bwlabel() function in image processing
 * ----------------------------------------------------------------
 * PERCOLATION
 * A model for many physical systems:
 *  - N-by-N grid of sites
 *  - Each site is open with probability p (or blocked with probability 1 - p)
 *  - System percolates iff (iff - if and only if) top and bottom are 
 *  connectetd by open sites.
 *
 * When N is large, theory guarantees a sharp threshold p*.
 *  - p > p* : almost certainly percolates.
 *  - p < p* : almost certainly does not percolates.
 *
 * Monte Carlo simulation
 *  - Initialize N-by-N whole grid to be blocked
 *  - Declare random sites open until top connected to bottom
 *  - Vacancy percentage estimates p*
 *
 * Dynamic connectivity solution to estimate percolation threshold
 * Q: How to check whether and N-by-N system percolates?
 *  - Create an object for each site and name them 0 to N^2 - 1
 *  - Sites are in same component if connected by open sites
 *  - Percolates iff any site on bottom row (brute-force algorithm: N^2 calls 
 *  to connected() method) is connected to site on top row.
 *
 * Clever trick: Introduce 2 virtual sites (and connections to top and bottom)
 *  - Percolates iff virtual top site is connected (efficient algorithm: only 
 *  1 call to connected method ()) to virtual bottom site.
 *
 * Q: How to model opening a new site?
 * A: Connect newly opened site to all of its adjacent open sites (up to 4 
 * calls to union() method)
 *
 */


