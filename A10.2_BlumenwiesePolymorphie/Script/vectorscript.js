var A10_BlumenwiesePolymorphie;
(function (A10_BlumenwiesePolymorphie) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.set(_x, _y);
        }
        //x,y werden mit set besetzt
        Vector.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        //skalierung/größe/Änderung um den Faktor
        Vector.prototype.scale = function (_factor) {
            this.x *= _factor;
            this.y *= _factor;
        };
        //einen weiteren Vektor auf den bisherigen Vektor addieren
        Vector.prototype.add = function (_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        };
        //zufällige Richtung mit bestimmter Länge
        Vector.prototype.random = function (_minLength, _maxLength) {
            var length = _minLength + Math.random() * (_maxLength - _minLength);
            var direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        };
        return Vector;
    }());
    A10_BlumenwiesePolymorphie.Vector = Vector;
})(A10_BlumenwiesePolymorphie || (A10_BlumenwiesePolymorphie = {})); //namespaceklammer
//# sourceMappingURL=vectorscript.js.map