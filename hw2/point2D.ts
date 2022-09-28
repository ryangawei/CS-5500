/**
 * This class represents a 2D point. This point is denoted in Cartesian
 * coordinates as (x, y).
 */
export class Point2D {
  private x: number;
  private y: number;

  /**
   * Construct a 2d point with the given coordinates.
   *
   * @param x the x-coordinate of this point
   * @param y the y-coordinate of this point
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Compute and return the Euclidean distance between this point and another
   * point passed as its argument.
   *
   * @param other the other point to which the distance from this point is to be
   *              computed
   * @return the Euclidean distance between this point and the other point
   */
  public dist(other: Point2D) {
    var xDiff = this.x - other.x;
    var yDiff = this.y - other.y;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  }

  /**
   * Return the x-coordinate of this point.
   *
   * @return x-coordinate of this point
   */
  public getX(): number {
    return this.x;
  }

  /**
   * Return the y-coordinate of this point.
   *
   * @return y-coordinate of this point
   */
  public getY(): number {
    return this.x;
  }

  public equals(o: object): boolean {
    if (this === o) {
      return true;
    }

    if (!(o instanceof Point2D)) {
      return false;
    }

    var other: Point2D = o;
    return this.dist(other) < 0.001;
  }
}
