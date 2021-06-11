var A10_BlumenwiesePolymorphie;
(function (A10_BlumenwiesePolymorphie) {
    var Cloud = /** @class */ (function () {
        function Cloud(_size, _position) {
            console.log("cloud constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new A10_BlumenwiesePolymorphie.Vector(20, 100);
            this.velocity = new A10_BlumenwiesePolymorphie.Vector(100, 0);
            this.size = _size;
        }
        Cloud.prototype.move = function (_timeslice) {
            console.log("cloud move");
            var offset = new A10_BlumenwiesePolymorphie.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A10_BlumenwiesePolymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A10_BlumenwiesePolymorphie.crc2.canvas.height;
            if (this.position.x > A10_BlumenwiesePolymorphie.crc2.canvas.width)
                this.position.x -= A10_BlumenwiesePolymorphie.crc2.canvas.width;
            if (this.position.y > A10_BlumenwiesePolymorphie.crc2.canvas.height)
                this.position.y -= A10_BlumenwiesePolymorphie.crc2.canvas.height;
        };
        Cloud.prototype.draw = function () {
            // console.log("cloud draw");
            var grd = A10_BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, 250); //create Gradient
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#A9E2F3");
            A10_BlumenwiesePolymorphie.crc2.save();
            A10_BlumenwiesePolymorphie.crc2.translate(this.position.x, this.position.y);
            A10_BlumenwiesePolymorphie.crc2.scale(this.size, this.size);
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x, this.position.y, 60, Math.PI * 0.5, Math.PI * 1.5);
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x + 70, this.position.y - 60, 70, Math.PI * 1, Math.PI * 1.85);
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x + 152, this.position.y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x + 200, this.position.y, 60, Math.PI * 1.5, Math.PI * 0.5);
            A10_BlumenwiesePolymorphie.crc2.moveTo(this.position.x + 200, this.position.y + 60);
            A10_BlumenwiesePolymorphie.crc2.lineTo(this.position.x, this.position.y + 60);
            //crc2.strokeStyle = "white";
            A10_BlumenwiesePolymorphie.crc2.stroke();
            A10_BlumenwiesePolymorphie.crc2.fillStyle = grd;
            A10_BlumenwiesePolymorphie.crc2.fill();
            A10_BlumenwiesePolymorphie.crc2.restore();
        };
        return Cloud;
    }()); //classklammer
    A10_BlumenwiesePolymorphie.Cloud = Cloud;
})(A10_BlumenwiesePolymorphie || (A10_BlumenwiesePolymorphie = {})); //namespaceende
//# sourceMappingURL=cloudscript.js.map