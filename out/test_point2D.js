"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var c1 = new Circle_1.Circle(1, 1, 4);
var c2 = new Circle_1.Circle(1, 1, 4);
var c3 = new Circle_1.Circle(1, 1, 5);
console.assert(c1.equals(c2));
console.assert(!c1.equals(c3));
console.log("Execute complete!");
//# sourceMappingURL=test_point2D.js.map