"use strict";
exports.__esModule = true;
exports.AbstractShape = void 0;
var point2D_1 = require("./point2D");
/**
 * An abstract class that contains all of the code that is shared by all types
 * of Shapes.
 */
var AbstractShape = /** @class */ (function () {
    /**
     * Protected constructor for use by subclasses.
     *
     * @param reference the initial reference for this shape
     */
    function AbstractShape(reference) {
        this.reference = reference;
    }
    AbstractShape.prototype.distToOrigin = function () {
        return this.reference.dist(new point2D_1.Point2D(0, 0));
    };
    AbstractShape.prototype.compareTo = function (s) {
        var areaThis = this.area();
        var areaOther = s.area();
        if (areaThis < areaOther) {
            return -1;
        }
        else if (areaOther < areaThis) {
            return 1;
        }
        else {
            return 0;
        }
    };
    return AbstractShape;
}());
exports.AbstractShape = AbstractShape;
//# sourceMappingURL=AbstractShape.js.map