var A10_BlumenwiesePolymorphie;
(function (A10_BlumenwiesePolymorphie) {
    var Flower = /** @class */ (function () {
        function Flower(_position) {
            console.log("flower constructor");
        }
        Flower.prototype.draw = function (_x, _y) {
            for (var index = 0; index < 7; index++) {
                var greenFlower = Math.floor(Math.random() * 200);
                var blueFlower = Math.floor(Math.random() * 200);
                var redFlower = Math.floor(Math.random() * 200);
                //Stiel
                A10_BlumenwiesePolymorphie.crc2.beginPath();
                A10_BlumenwiesePolymorphie.crc2.strokeStyle = "#088A08";
                A10_BlumenwiesePolymorphie.crc2.fillStyle = "#0B610B";
                A10_BlumenwiesePolymorphie.crc2.fillRect(_x - 2, _y + 10, 4, 40);
                //Blüte
                A10_BlumenwiesePolymorphie.crc2.beginPath();
                A10_BlumenwiesePolymorphie.crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";
                A10_BlumenwiesePolymorphie.crc2.moveTo(_x, _y);
                A10_BlumenwiesePolymorphie.crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
                A10_BlumenwiesePolymorphie.crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
                A10_BlumenwiesePolymorphie.crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
                A10_BlumenwiesePolymorphie.crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
                A10_BlumenwiesePolymorphie.crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
                A10_BlumenwiesePolymorphie.crc2.fill();
                //Punkt 
                A10_BlumenwiesePolymorphie.crc2.beginPath();
                A10_BlumenwiesePolymorphie.crc2.fillStyle = "#FFBF00";
                A10_BlumenwiesePolymorphie.crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
                A10_BlumenwiesePolymorphie.crc2.closePath();
                A10_BlumenwiesePolymorphie.crc2.fill();
            }
        };
        Flower.prototype.draw2 = function (_x, _y) {
            for (var index = 0; index < 5; index++) {
                var greenFlower = Math.floor(Math.random() * 200);
                var blueFlower = Math.floor(Math.random() * 200);
                var redFlower = Math.floor(Math.random() * 200);
                //Stiel
                A10_BlumenwiesePolymorphie.crc2.beginPath();
                A10_BlumenwiesePolymorphie.crc2.strokeStyle = "#088A08";
                A10_BlumenwiesePolymorphie.crc2.fillStyle = "#0B610B";
                A10_BlumenwiesePolymorphie.crc2.fillRect(_x - 2, _y + 10, 4, 40);
                //Blüte
                A10_BlumenwiesePolymorphie.crc2.beginPath();
                A10_BlumenwiesePolymorphie.crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";
                A10_BlumenwiesePolymorphie.crc2.moveTo(_x, _y);
                A10_BlumenwiesePolymorphie.crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
                A10_BlumenwiesePolymorphie.crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
                A10_BlumenwiesePolymorphie.crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
                A10_BlumenwiesePolymorphie.crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
                A10_BlumenwiesePolymorphie.crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
                A10_BlumenwiesePolymorphie.crc2.fill();
                //Punkt 
                A10_BlumenwiesePolymorphie.crc2.beginPath();
                A10_BlumenwiesePolymorphie.crc2.fillStyle = "#FFBF00";
                A10_BlumenwiesePolymorphie.crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
                A10_BlumenwiesePolymorphie.crc2.closePath();
                A10_BlumenwiesePolymorphie.crc2.fill();
            }
        };
        return Flower;
    }()); //end flower 
    A10_BlumenwiesePolymorphie.Flower = Flower;
})(A10_BlumenwiesePolymorphie || (A10_BlumenwiesePolymorphie = {}));
//# sourceMappingURL=flowerscript.js.map