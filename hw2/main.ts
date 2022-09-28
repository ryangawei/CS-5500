import { Circle } from "./Circle";
import { Point2D } from "./point2D";

let c1: Circle = new Circle(1, 1, 4);
let c2: Circle = new Circle(1, 1, 4);
let c3: Circle = new Circle(1, 1, 5);


console.assert(c1.equals(c2));
console.assert(!c1.equals(c3));
console.log("Execute complete!")