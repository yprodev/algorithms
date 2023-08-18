/*
 * The convex hull of a set of N points is the smallest perimeter fence
 * enclosing the points.
 *
 * Equivalent definitions
 *  - Smallest convex set containing all the points.
 *  - Smallest area convex polygon enclosing the points.
 *  - Convex polygon enclosing the points, whose vertices are points in set.
 *
 * Convex hull output: sequence of vertices in countercloskwise order.
 * 
 * Mechanical algorithm: hammer nails perpendicular to plane; stretch elastic
 * rubber band around points.
 *
 * Farthest pair problem: given N points in the plane, find a pair of points
 * with the largest Euclidean distance between them.
 *
 * Fact: Farthest pair of points are extreme points on convex hull.
 * Fact: Can traverse the convex hull by making only counterclockwise turns.
 * Fact: The vertices of convex hull appear in increasing order of polar angle
 * with respect to point p with lowest y-coordinate
 *
 * Graham scan
 *  - Choose point p with smallest y-coordinate
 *  - Sort points by polar angle with p
 *  - Consider points in order; discard unless it create a ccw turn.
 *
 * Q: How to find point p with smallest y-coordinate?
 * A: Define a total order, comparing by y-coordinate.
 *
 * Q: How to sort points by polar angle with respect to p?
 * A: Define a total order for each point p.
 *
 * Q: How to determine whether p1 -> p2 -> p3 is a countercloskwise (ccw) turn?
 * A: Computational geometry
 *
 * Q: How to sort efficiently?
 * A: Mergesort sorts in N log N time.
 *
 * Q: How to handle degeneracies (three or more points on a line)?
 * A: Requires some care, but not hard
 *
 * Lesson: geometric primitives are tricky to implement.
 *  - Dealing with degenerate cases
 *  - Coping with floating-point precision.
 *
 */

function countercloskwise(pointA, pointB, pointC) {
  const firstEquation = (pointB.x - pointA.x) * (pointC.y - pointA.y);
  const secondEquation = (pointB.y - pointA.y) * (pointC.x - pointA.x);

  const area2 = firstEquation - secondEquation;

  if (area2 < 0) return -1; // clockwise
  if else (area2 > 0) return 1; // counter-clockwise
  else return 0; // collinear
}

