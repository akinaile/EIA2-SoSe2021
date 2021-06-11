var L09BlumenwieseClasses;
(function (L09BlumenwieseClasses) {
    var Bee = /** @class */ (function () {
        //konstruieren der Biene
        function Bee(_size, _position) {
            console.log("bee Constructor");
            //position
            if (_position)
                this.position = _position; //position, wie deklaiert
            else
                this.position = new L09BlumenwieseClasses.Vector(750, 470); //position, wenn kein Vektor angegeben ist
            //geschwindigkeit
            this.velocity = new L09BlumenwieseClasses.Vector(1000, 0); //Geschwindigkeit
            this.velocity.random(120, 20); //Geschwindigkeit zufällig innerhalb eines Bereichs
        }
        Bee.prototype.draw = function () {
            console.log("Bee draw");
            L09BlumenwieseClasses.crc2.save();
            L09BlumenwieseClasses.crc2.beginPath();
            //körper
            L09BlumenwieseClasses.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            L09BlumenwieseClasses.crc2.fillStyle = "#FFCC33";
            L09BlumenwieseClasses.crc2.fill();
            L09BlumenwieseClasses.crc2.closePath();
            //ssreifen
            L09BlumenwieseClasses.crc2.save();
            L09BlumenwieseClasses.crc2.beginPath();
            L09BlumenwieseClasses.crc2.moveTo(this.position.x, this.position.y + 10);
            L09BlumenwieseClasses.crc2.lineTo(this.position.x, this.position.y - 10);
            L09BlumenwieseClasses.crc2.strokeStyle = "black";
            L09BlumenwieseClasses.crc2.lineWidth = 10;
            L09BlumenwieseClasses.crc2.stroke();
            L09BlumenwieseClasses.crc2.closePath();
            L09BlumenwieseClasses.crc2.restore();
            //flügel
            L09BlumenwieseClasses.crc2.save();
            L09BlumenwieseClasses.crc2.beginPath();
            L09BlumenwieseClasses.crc2.arc(this.position.x - 2, this.position.y - 9, 5, 0, 2 * Math.PI);
            L09BlumenwieseClasses.crc2.strokeStyle = "white";
            L09BlumenwieseClasses.crc2.fillStyle = "lightblue";
            L09BlumenwieseClasses.crc2.fill();
            L09BlumenwieseClasses.crc2.closePath();
            L09BlumenwieseClasses.crc2.lineWidth = 3;
            L09BlumenwieseClasses.crc2.stroke();
            L09BlumenwieseClasses.crc2.restore();
            //flügel
            L09BlumenwieseClasses.crc2.save();
            L09BlumenwieseClasses.crc2.beginPath();
            L09BlumenwieseClasses.crc2.arc(this.position.x + 2, this.position.y - 4, 5, 0, 2 * Math.PI);
            L09BlumenwieseClasses.crc2.strokeStyle = "white";
            L09BlumenwieseClasses.crc2.fillStyle = "lightblue";
            L09BlumenwieseClasses.crc2.fill();
            L09BlumenwieseClasses.crc2.lineWidth = 2;
            L09BlumenwieseClasses.crc2.closePath();
            L09BlumenwieseClasses.crc2.stroke();
            L09BlumenwieseClasses.crc2.restore();
            //fühler oder stachel, liegt im auge des Betrachters
            L09BlumenwieseClasses.crc2.save();
            L09BlumenwieseClasses.crc2.beginPath();
            L09BlumenwieseClasses.crc2.moveTo(this.position.x - 8, this.position.y - 2);
            L09BlumenwieseClasses.crc2.lineTo(this.position.x - 15, this.position.y - 5);
            L09BlumenwieseClasses.crc2.strokeStyle = "black";
            L09BlumenwieseClasses.crc2.stroke();
            L09BlumenwieseClasses.crc2.lineWidth = 2;
            L09BlumenwieseClasses.crc2.closePath();
            L09BlumenwieseClasses.crc2.restore();
        };
        return Bee;
    }()); //classklammer
    L09BlumenwieseClasses.Bee = Bee;
})(L09BlumenwieseClasses || (L09BlumenwieseClasses = {})); //namespaceklammer
//# sourceMappingURL=beescript.js.map