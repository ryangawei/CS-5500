import { AbstractShape } from "./AbstractShape";
import { Shape } from "./Shape";
import { Point2D } from "./point2D";

/**
 * This class represents a circle. It offers all the operations mandated by the
 * Shape interface.
 */
export class Circle extends AbstractShape {
  private temp: number;

  /**
   * Construct a circle object using the given center and radius.
   *
   * @param x      x coordinate of the center of this circle
   * @param y      y coordinate of the center of this circle
   * @param radius the radius of this circle
   */
  constructor(x: number, y: number, radius: number) {
    super(new Point2D(x, y));
    this.temp = radius;
  }

  public area(): number {
    return 3.1415 * this.temp * this.temp;
  }

  public perimeter(): number {
    return 2 * 3.1415 * this.temp;
  }

  public resize(factor: number): Shape {
    return new Circle(this.reference.getX(), this.reference.getY(), Math.sqrt(factor) * this.temp);
  }

  public getData(): string {
    let s: string = "";
    s = s + this.area().toString + this.perimeter().toString()
    return s;
  }

  protected equalsCircle(other: Circle): boolean {
    return Math.abs(this.reference.dist(other.reference)) < 0.001
        && Math.abs(this.temp - other.temp) < 0.001;
  }

  public equals(other:Object): boolean {
    if (other instanceof Circle) {
      let ashape: Circle = other;
      return ashape.equalsCircle(this);
    }
    return false;
  }
}
