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
var A10_BlumenwiesePolymorphie;
(function (A10_BlumenwiesePolymorphie) {
    var Bee = /** @class */ (function (_super) {
        __extends(Bee, _super);
        //konstruieren der Biene
        function Bee(_position) {
            var _this = _super.call(this, _position) || this;
            //position
            if (_position)
                _this.position = _position; //position, wie deklaiert
            else
                _this.position = new A10_BlumenwiesePolymorphie.Vector(750, 470); //position, wenn kein Vektor angegeben ist
            //geschwindigkeit
            _this.velocity = new A10_BlumenwiesePolymorphie.Vector(1000, 0); //Geschwindigkeit
            _this.velocity.random(120, 20); //Geschwindigkeit zufällig innerhalb eines Bereichs
            return _this;
        }
        Bee.prototype.draw = function () {
            //console.log("Bee draw");
            A10_BlumenwiesePolymorphie.crc2.save();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            //körper
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            A10_BlumenwiesePolymorphie.crc2.fillStyle = "#FFCC33";
            A10_BlumenwiesePolymorphie.crc2.fill();
            A10_BlumenwiesePolymorphie.crc2.closePath();
            //ssreifen
            A10_BlumenwiesePolymorphie.crc2.save();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.moveTo(this.position.x, this.position.y + 10);
            A10_BlumenwiesePolymorphie.crc2.lineTo(this.position.x, this.position.y - 10);
            A10_BlumenwiesePolymorphie.crc2.strokeStyle = "black";
            A10_BlumenwiesePolymorphie.crc2.lineWidth = 10;
            A10_BlumenwiesePolymorphie.crc2.stroke();
            A10_BlumenwiesePolymorphie.crc2.closePath();
            A10_BlumenwiesePolymorphie.crc2.restore();
            //flügel
            A10_BlumenwiesePolymorphie.crc2.save();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x - 2, this.position.y - 9, 5, 0, 2 * Math.PI);
            A10_BlumenwiesePolymorphie.crc2.strokeStyle = "white";
            A10_BlumenwiesePolymorphie.crc2.fillStyle = "lightblue";
            A10_BlumenwiesePolymorphie.crc2.fill();
            A10_BlumenwiesePolymorphie.crc2.closePath();
            A10_BlumenwiesePolymorphie.crc2.lineWidth = 3;
            A10_BlumenwiesePolymorphie.crc2.stroke();
            A10_BlumenwiesePolymorphie.crc2.restore();
            //flügel
            A10_BlumenwiesePolymorphie.crc2.save();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x + 2, this.position.y - 4, 5, 0, 2 * Math.PI);
            A10_BlumenwiesePolymorphie.crc2.strokeStyle = "white";
            A10_BlumenwiesePolymorphie.crc2.fillStyle = "lightblue";
            A10_BlumenwiesePolymorphie.crc2.fill();
            A10_BlumenwiesePolymorphie.crc2.lineWidth = 2;
            A10_BlumenwiesePolymorphie.crc2.closePath();
            A10_BlumenwiesePolymorphie.crc2.stroke();
            A10_BlumenwiesePolymorphie.crc2.restore();
            //fühler oder stachel, liegt im auge des Betrachters
            A10_BlumenwiesePolymorphie.crc2.save();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.moveTo(this.position.x - 8, this.position.y - 2);
            A10_BlumenwiesePolymorphie.crc2.lineTo(this.position.x - 15, this.position.y - 5);
            A10_BlumenwiesePolymorphie.crc2.strokeStyle = "black";
            A10_BlumenwiesePolymorphie.crc2.stroke();
            A10_BlumenwiesePolymorphie.crc2.lineWidth = 2;
            A10_BlumenwiesePolymorphie.crc2.closePath();
            A10_BlumenwiesePolymorphie.crc2.restore();
        };
        return Bee;
    }(A10_BlumenwiesePolymorphie.Moveable)); //classklammer
    A10_BlumenwiesePolymorphie.Bee = Bee;
})(A10_BlumenwiesePolymorphie || (A10_BlumenwiesePolymorphie = {})); //namespaceklammer
//# sourceMappingURL=beescript.js.map