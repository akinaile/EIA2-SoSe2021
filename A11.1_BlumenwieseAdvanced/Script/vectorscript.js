var A11_BlumenwieseAdvanced;
(function (A11_BlumenwieseAdvanced) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.set(_x, _y);
        }
        //zufällige Richtung mit bestimmter Länge
        Vector.getRandom = function (_minLength, _maxLength) {
            var vector = new Vector(0, 0);
            var length = _minLength + Math.random() * (_maxLength - _minLength);
            var direction = Math.random() * 2 * Math.PI;
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        };
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
        //copy der Position mit gleichem Wert
        Vector.prototype.copy = function () {
            return new Vector(this.x, this.y);
        };
        return Vector;
    }());
    A11_BlumenwieseAdvanced.Vector = Vector;
})(A11_BlumenwieseAdvanced || (A11_BlumenwieseAdvanced = {})); //namespaceklammer
//# sourceMappingURL=vectorscript.js.map