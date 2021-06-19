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
    var Bee = /** @class */ (function (_super) {
        __extends(Bee, _super);
        //konstruieren der Biene
        function Bee(_position) {
            var _this = _super.call(this, _position) || this;
            //position
            if (_position)
                _this.position = _position; //position, wie deklaiert
            else
                _this.position = new A11_BlumenwieseAdvanced.Vector(750, 470); //position, wenn kein Vektor angegeben ist
            //geschwindigkeit
            _this.velocity = A11_BlumenwieseAdvanced.Vector.getRandom(150, 50); //Geschwindigkeit zufällig innerhalb eines Bereichs
            return _this;
        }
        Bee.prototype.draw = function () {
            //console.log("Bee draw");
            A11_BlumenwieseAdvanced.crc2.save();
            A11_BlumenwieseAdvanced.crc2.beginPath();
            //körper
            A11_BlumenwieseAdvanced.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            A11_BlumenwieseAdvanced.crc2.fillStyle = "#FFCC33";
            A11_BlumenwieseAdvanced.crc2.fill();
            A11_BlumenwieseAdvanced.crc2.closePath();
            //ssreifen
            A11_BlumenwieseAdvanced.crc2.save();
            A11_BlumenwieseAdvanced.crc2.beginPath();
            A11_BlumenwieseAdvanced.crc2.moveTo(this.position.x, this.position.y + 10);
            A11_BlumenwieseAdvanced.crc2.lineTo(this.position.x, this.position.y - 10);
            A11_BlumenwieseAdvanced.crc2.strokeStyle = "black";
            A11_BlumenwieseAdvanced.crc2.lineWidth = 10;
            A11_BlumenwieseAdvanced.crc2.stroke();
            A11_BlumenwieseAdvanced.crc2.closePath();
            A11_BlumenwieseAdvanced.crc2.restore();
            //flügel
            A11_BlumenwieseAdvanced.crc2.save();
            A11_BlumenwieseAdvanced.crc2.beginPath();
            A11_BlumenwieseAdvanced.crc2.arc(this.position.x - 2, this.position.y - 9, 5, 0, 2 * Math.PI);
            A11_BlumenwieseAdvanced.crc2.strokeStyle = "white";
            A11_BlumenwieseAdvanced.crc2.fillStyle = "lightblue";
            A11_BlumenwieseAdvanced.crc2.fill();
            A11_BlumenwieseAdvanced.crc2.closePath();
            A11_BlumenwieseAdvanced.crc2.lineWidth = 3;
            A11_BlumenwieseAdvanced.crc2.stroke();
            A11_BlumenwieseAdvanced.crc2.restore();
            //flügel
            A11_BlumenwieseAdvanced.crc2.save();
            A11_BlumenwieseAdvanced.crc2.beginPath();
            A11_BlumenwieseAdvanced.crc2.arc(this.position.x + 2, this.position.y - 4, 5, 0, 2 * Math.PI);
            A11_BlumenwieseAdvanced.crc2.strokeStyle = "white";
            A11_BlumenwieseAdvanced.crc2.fillStyle = "lightblue";
            A11_BlumenwieseAdvanced.crc2.fill();
            A11_BlumenwieseAdvanced.crc2.lineWidth = 2;
            A11_BlumenwieseAdvanced.crc2.closePath();
            A11_BlumenwieseAdvanced.crc2.stroke();
            A11_BlumenwieseAdvanced.crc2.restore();
            //fühler oder stachel, liegt im auge des Betrachters
            A11_BlumenwieseAdvanced.crc2.save();
            A11_BlumenwieseAdvanced.crc2.beginPath();
            A11_BlumenwieseAdvanced.crc2.moveTo(this.position.x - 8, this.position.y - 2);
            A11_BlumenwieseAdvanced.crc2.lineTo(this.position.x - 15, this.position.y - 5);
            A11_BlumenwieseAdvanced.crc2.strokeStyle = "black";
            A11_BlumenwieseAdvanced.crc2.stroke();
            A11_BlumenwieseAdvanced.crc2.lineWidth = 2;
            A11_BlumenwieseAdvanced.crc2.closePath();
            A11_BlumenwieseAdvanced.crc2.restore();
        };
        return Bee;
    }(A11_BlumenwieseAdvanced.Moveable)); //classklammer
    A11_BlumenwieseAdvanced.Bee = Bee;
})(A11_BlumenwieseAdvanced || (A11_BlumenwieseAdvanced = {})); //namespaceklammer
//# sourceMappingURL=beescript.js.map