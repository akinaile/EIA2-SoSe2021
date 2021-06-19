var A11_BlumenwieseAdvanced;
(function (A11_BlumenwieseAdvanced) {
    var Flower = /** @class */ (function () {
        function Flower(_position) {
            //console.log("Flower");
        }
        Flower.prototype.draw = function (_x, _y) {
            for (var index = 0; index < 7; index++) {
                var greenFlower = Math.floor(Math.random() * 200);
                var blueFlower = Math.floor(Math.random() * 200);
                var redFlower = Math.floor(Math.random() * 200);
                //Stiel
                A11_BlumenwieseAdvanced.crc2.beginPath();
                A11_BlumenwieseAdvanced.crc2.strokeStyle = "#088A08";
                A11_BlumenwieseAdvanced.crc2.fillStyle = "#0B610B";
                A11_BlumenwieseAdvanced.crc2.fillRect(_x - 2, _y + 10, 4, 40);
                //Blüte
                A11_BlumenwieseAdvanced.crc2.beginPath();
                A11_BlumenwieseAdvanced.crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";
                A11_BlumenwieseAdvanced.crc2.moveTo(_x, _y);
                A11_BlumenwieseAdvanced.crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
                A11_BlumenwieseAdvanced.crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
                A11_BlumenwieseAdvanced.crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
                A11_BlumenwieseAdvanced.crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
                A11_BlumenwieseAdvanced.crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
                A11_BlumenwieseAdvanced.crc2.fill();
                //Punkt 
                A11_BlumenwieseAdvanced.crc2.beginPath();
                A11_BlumenwieseAdvanced.crc2.fillStyle = "#FFBF00";
                A11_BlumenwieseAdvanced.crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
                A11_BlumenwieseAdvanced.crc2.closePath();
                A11_BlumenwieseAdvanced.crc2.fill();
            }
        };
        Flower.prototype.draw2 = function (_x, _y) {
            for (var index = 0; index < 5; index++) {
                var greenFlower = Math.floor(Math.random() * 200);
                var blueFlower = Math.floor(Math.random() * 200);
                var redFlower = Math.floor(Math.random() * 200);
                //Stiel
                A11_BlumenwieseAdvanced.crc2.beginPath();
                A11_BlumenwieseAdvanced.crc2.strokeStyle = "#088A08";
                A11_BlumenwieseAdvanced.crc2.fillStyle = "#0B610B";
                A11_BlumenwieseAdvanced.crc2.fillRect(_x - 2, _y + 10, 4, 40);
                //Blüte
                A11_BlumenwieseAdvanced.crc2.beginPath();
                A11_BlumenwieseAdvanced.crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";
                A11_BlumenwieseAdvanced.crc2.moveTo(_x, _y);
                A11_BlumenwieseAdvanced.crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
                A11_BlumenwieseAdvanced.crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
                A11_BlumenwieseAdvanced.crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
                A11_BlumenwieseAdvanced.crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
                A11_BlumenwieseAdvanced.crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
                A11_BlumenwieseAdvanced.crc2.fill();
                //Punkt 
                A11_BlumenwieseAdvanced.crc2.beginPath();
                A11_BlumenwieseAdvanced.crc2.fillStyle = "#FFBF00";
                A11_BlumenwieseAdvanced.crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
                A11_BlumenwieseAdvanced.crc2.closePath();
                A11_BlumenwieseAdvanced.crc2.fill();
            }
        };
        return Flower;
    }()); //end flower 
    A11_BlumenwieseAdvanced.Flower = Flower;
})(A11_BlumenwieseAdvanced || (A11_BlumenwieseAdvanced = {}));
//# sourceMappingURL=flowerscript.js.map