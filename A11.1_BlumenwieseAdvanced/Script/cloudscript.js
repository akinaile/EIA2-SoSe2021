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
var A11_BlumenwieseAdvanced;
(function (A11_BlumenwieseAdvanced) {
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        function Cloud(_size, _position) {
            var _this = _super.call(this, _position) || this;
            if (_position)
                _this.position = _position;
            else
                _this.position = new A11_BlumenwieseAdvanced.Vector(20, 100);
            _this.velocity = new A11_BlumenwieseAdvanced.Vector(100, 0);
            _this.size = _size;
            return _this;
        }
        Cloud.prototype.draw = function () {
            var grd = A11_BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, 250); //create Gradient
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#A9E2F3");
            A11_BlumenwieseAdvanced.crc2.save();
            A11_BlumenwieseAdvanced.crc2.translate(this.position.x, this.position.y);
            A11_BlumenwieseAdvanced.crc2.scale(this.size, this.size);
            A11_BlumenwieseAdvanced.crc2.beginPath();
            A11_BlumenwieseAdvanced.crc2.arc(this.position.x, this.position.y, 60, Math.PI * 0.5, Math.PI * 1.5);
            A11_BlumenwieseAdvanced.crc2.arc(this.position.x + 70, this.position.y - 60, 70, Math.PI * 1, Math.PI * 1.85);
            A11_BlumenwieseAdvanced.crc2.arc(this.position.x + 152, this.position.y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            A11_BlumenwieseAdvanced.crc2.arc(this.position.x + 200, this.position.y, 60, Math.PI * 1.5, Math.PI * 0.5);
            A11_BlumenwieseAdvanced.crc2.moveTo(this.position.x + 200, this.position.y + 60);
            A11_BlumenwieseAdvanced.crc2.lineTo(this.position.x, this.position.y + 60);
            //crc2.strokeStyle = "white";
            A11_BlumenwieseAdvanced.crc2.stroke();
            A11_BlumenwieseAdvanced.crc2.fillStyle = grd;
            A11_BlumenwieseAdvanced.crc2.fill();
            A11_BlumenwieseAdvanced.crc2.restore();
        };
        return Cloud;
    }(A11_BlumenwieseAdvanced.Moveable)); //classklammer
    A11_BlumenwieseAdvanced.Cloud = Cloud;
})(A11_BlumenwieseAdvanced || (A11_BlumenwieseAdvanced = {})); //namespaceende
//# sourceMappingURL=cloudscript.js.map