"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Circle = void 0;
var AbstractShape_1 = require("./AbstractShape");
var point2D_1 = require("./point2D");
/**
 * This class represents a circle. It offers all the operations mandated by the
 * Shape interface.
 */
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    /**
     * Construct a circle object using the given center and radius.
     *
     * @param x      x coordinate of the center of this circle
     * @param y      y coordinate of the center of this circle
     * @param radius the radius of this circle
     */
    function Circle(x, y, radius) {
        var _this = _super.call(this, new point2D_1.Point2D(x, y)) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.resize = function (factor) {
        return new Circle(this.reference.getX(), this.reference.getY(), Math.sqrt(factor) * this.radius);
    };
    Circle.prototype.equalsCircle = function (other) {
        return Math.abs(this.reference.dist(other.reference)) < 0.001
            && Math.abs(this.radius - other.radius) < 0.001;
    };
    Circle.prototype.equals = function (other) {
        if (other instanceof Circle) {
            var ashape = other;
            return ashape.equalsCircle(this);
        }
        return false;
    };
    return Circle;
}(AbstractShape_1.AbstractShape));
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map