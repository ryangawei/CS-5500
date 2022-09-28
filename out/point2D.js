"use strict";
exports.__esModule = true;
exports.Point2D = void 0;
/**
 * This class represents a 2D point. This point is denoted in Cartesian
 * coordinates as (x, y).
 */
var Point2D = /** @class */ (function () {
    /**
     * Construct a 2d point with the given coordinates.
     *
     * @param x the x-coordinate of this point
     * @param y the y-coordinate of this point
     */
    function Point2D(x, y) {
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
    Point2D.prototype.dist = function (other) {
        var xDiff = this.x - other.x;
        var yDiff = this.y - other.y;
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    };
    /**
     * Return the x-coordinate of this point.
     *
     * @return x-coordinate of this point
     */
    Point2D.prototype.getX = function () {
        return this.x;
    };
    /**
     * Return the y-coordinate of this point.
     *
     * @return y-coordinate of this point
     */
    Point2D.prototype.getY = function () {
        return this.x;
    };
    Point2D.prototype.equals = function (o) {
        if (this === o) {
            return true;
        }
        if (!(o instanceof Point2D)) {
            return false;
        }
        var other = o;
        return this.dist(other) < 0.001;
    };
    return Point2D;
}());
exports.Point2D = Point2D;
//# sourceMappingURL=point2D.js.map