var L09BlumenwieseClasses;
(function (L09BlumenwieseClasses) {
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
                L09BlumenwieseClasses.crc2.beginPath();
                L09BlumenwieseClasses.crc2.strokeStyle = "#088A08";
                L09BlumenwieseClasses.crc2.fillStyle = "#0B610B";
                L09BlumenwieseClasses.crc2.fillRect(_x - 2, _y + 10, 4, 40);
                //Blüte
                L09BlumenwieseClasses.crc2.beginPath();
                L09BlumenwieseClasses.crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";
                L09BlumenwieseClasses.crc2.moveTo(_x, _y);
                L09BlumenwieseClasses.crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
                L09BlumenwieseClasses.crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
                L09BlumenwieseClasses.crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
                L09BlumenwieseClasses.crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
                L09BlumenwieseClasses.crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
                L09BlumenwieseClasses.crc2.fill();
                //Punkt 
                L09BlumenwieseClasses.crc2.beginPath();
                L09BlumenwieseClasses.crc2.fillStyle = "#FFBF00";
                L09BlumenwieseClasses.crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
                L09BlumenwieseClasses.crc2.closePath();
                L09BlumenwieseClasses.crc2.fill();
            }
        };
        Flower.prototype.draw2 = function (_x, _y) {
            for (var index = 0; index < 5; index++) {
                var greenFlower = Math.floor(Math.random() * 200);
                var blueFlower = Math.floor(Math.random() * 200);
                var redFlower = Math.floor(Math.random() * 200);
                //Stiel
                L09BlumenwieseClasses.crc2.beginPath();
                L09BlumenwieseClasses.crc2.strokeStyle = "#088A08";
                L09BlumenwieseClasses.crc2.fillStyle = "#0B610B";
                L09BlumenwieseClasses.crc2.fillRect(_x - 2, _y + 10, 4, 40);
                //Blüte
                L09BlumenwieseClasses.crc2.beginPath();
                L09BlumenwieseClasses.crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";
                L09BlumenwieseClasses.crc2.moveTo(_x, _y);
                L09BlumenwieseClasses.crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
                L09BlumenwieseClasses.crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
                L09BlumenwieseClasses.crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
                L09BlumenwieseClasses.crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
                L09BlumenwieseClasses.crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
                L09BlumenwieseClasses.crc2.fill();
                //Punkt 
                L09BlumenwieseClasses.crc2.beginPath();
                L09BlumenwieseClasses.crc2.fillStyle = "#FFBF00";
                L09BlumenwieseClasses.crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
                L09BlumenwieseClasses.crc2.closePath();
                L09BlumenwieseClasses.crc2.fill();
            }
        };
        return Flower;
    }()); //end flower 
    L09BlumenwieseClasses.Flower = Flower;
})(L09BlumenwieseClasses || (L09BlumenwieseClasses = {}));
//# sourceMappingURL=flowerscript.js.map