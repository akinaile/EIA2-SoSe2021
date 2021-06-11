var L09BlumenwieseClasses;
(function (L09BlumenwieseClasses) {
    var Cloud = /** @class */ (function () {
        function Cloud(_size, _position) {
            console.log("cloud constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L09BlumenwieseClasses.Vector(20, 100);
            this.velocity = new L09BlumenwieseClasses.Vector(100, 0);
            this.size = _size;
        }
        Cloud.prototype.move = function (_timeslice) {
            console.log("cloud move");
            var offset = new L09BlumenwieseClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09BlumenwieseClasses.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09BlumenwieseClasses.crc2.canvas.height;
            if (this.position.x > L09BlumenwieseClasses.crc2.canvas.width)
                this.position.x -= L09BlumenwieseClasses.crc2.canvas.width;
            if (this.position.y > L09BlumenwieseClasses.crc2.canvas.height)
                this.position.y -= L09BlumenwieseClasses.crc2.canvas.height;
        };
        Cloud.prototype.draw = function () {
            // console.log("cloud draw");
            var grd = L09BlumenwieseClasses.crc2.createLinearGradient(0, 0, 0, 250); //create Gradient
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#A9E2F3");
            L09BlumenwieseClasses.crc2.save();
            L09BlumenwieseClasses.crc2.translate(this.position.x, this.position.y);
            L09BlumenwieseClasses.crc2.scale(this.size, this.size);
            L09BlumenwieseClasses.crc2.beginPath();
            L09BlumenwieseClasses.crc2.arc(this.position.x, this.position.y, 60, Math.PI * 0.5, Math.PI * 1.5);
            L09BlumenwieseClasses.crc2.arc(this.position.x + 70, this.position.y - 60, 70, Math.PI * 1, Math.PI * 1.85);
            L09BlumenwieseClasses.crc2.arc(this.position.x + 152, this.position.y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            L09BlumenwieseClasses.crc2.arc(this.position.x + 200, this.position.y, 60, Math.PI * 1.5, Math.PI * 0.5);
            L09BlumenwieseClasses.crc2.moveTo(this.position.x + 200, this.position.y + 60);
            L09BlumenwieseClasses.crc2.lineTo(this.position.x, this.position.y + 60);
            //crc2.strokeStyle = "white";
            L09BlumenwieseClasses.crc2.stroke();
            L09BlumenwieseClasses.crc2.fillStyle = grd;
            L09BlumenwieseClasses.crc2.fill();
            L09BlumenwieseClasses.crc2.restore();
        };
        return Cloud;
    }()); //classklammer
    L09BlumenwieseClasses.Cloud = Cloud;
})(L09BlumenwieseClasses || (L09BlumenwieseClasses = {})); //namespaceende
//# sourceMappingURL=cloudscript.js.map