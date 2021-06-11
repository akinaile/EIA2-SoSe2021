var A10_BlumenwiesePolymorphie;
(function (A10_BlumenwiesePolymorphie) {
    var Moveable = /** @class */ (function () {
        //konstruieren der Biene
        function Moveable(_position) {
            //console.log("Move Constructor");
            //position
            if (_position)
                this.position = _position; //position, wie deklaiert
            else
                this.position = new A10_BlumenwiesePolymorphie.Vector(750, 470); //position, wenn kein Vektor angegeben ist
            //geschwindigkeit
            this.velocity = new A10_BlumenwiesePolymorphie.Vector(1000, 0); //Geschwindigkeit
        }
        Moveable.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy(); //offset=weg
            offset.scale(_timeslice); //mit scale muliplizieren = Verschiebung
            this.position.add(offset);
            //damit Objekt innerhalb des Bereichs bleibt
            if (this.position.x < 0)
                this.position.x += A10_BlumenwiesePolymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A10_BlumenwiesePolymorphie.crc2.canvas.height;
            if (this.position.x > A10_BlumenwiesePolymorphie.crc2.canvas.height)
                this.position.x -= A10_BlumenwiesePolymorphie.crc2.canvas.width;
            if (this.position.y > A10_BlumenwiesePolymorphie.crc2.canvas.height)
                this.position.y -= A10_BlumenwiesePolymorphie.crc2.canvas.height;
        };
        Moveable.prototype.draw = function () {
            // console.log("moveable Move");
        };
        return Moveable;
    }()); //classklammer
    A10_BlumenwiesePolymorphie.Moveable = Moveable;
})(A10_BlumenwiesePolymorphie || (A10_BlumenwiesePolymorphie = {})); //namespaceklammer
//# sourceMappingURL=moveablescript.js.map