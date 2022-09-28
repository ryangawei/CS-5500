import { Point2D } from "./point2D";
import { Shape } from "./Shape";

/**
 * An abstract class that contains all of the code that is shared by all types
 * of Shapes.
 */
export abstract class AbstractShape implements Shape {
  public reference: Point2D;

  abstract area(): number;
  abstract perimeter(): number;
  abstract resize(factor: number): Shape;

  /**
   * Protected constructor for use by subclasses.
   * 
   * @param reference the initial reference for this shape
   */
  protected constructor(reference: Point2D) {
    this.reference = reference;
  }

  public distToOrigin(): number {
    return this.reference.dist(new Point2D(0, 0));
  }

  public compareTo(s: Shape): number {
    let areaThis: number = this.area();
    let areaOther: number = s.area();

    if (areaThis < areaOther) {
      return -1;
    } else if (areaOther < areaThis) {
      return 1;
    } else {
      return 0;
    }
  }
}