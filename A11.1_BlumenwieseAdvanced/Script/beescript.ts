namespace A11_BlumenwieseAdvanced{

    export class Bee extends Moveable {
        protected position: Vector;
        protected velocity: Vector;
        protected size: number;

//konstruieren der Biene
        constructor (_position?: Vector){ 
            super(_position);
            
            //position
            if (_position) 
                this.position = _position; //position, wie deklaiert
            else
                this.position = new Vector(750, 470); //position, wenn kein Vektor angegeben ist
                
            //geschwindigkeit
            this.velocity = Vector.getRandom(150, 50); //Geschwindigkeit zufällig innerhalb eines Bereichs
        }

        public draw(): void{
            //console.log("Bee draw");
            crc2.save();
            crc2.beginPath();
            //körper
            crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFCC33";
            crc2.fill();
            crc2.closePath();
            
            //ssreifen
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y + 10);
            crc2.lineTo(this.position.x, this.position.y - 10);
            crc2.strokeStyle = "black";
            crc2.lineWidth = 10;
            crc2.stroke();
            crc2.closePath();
            crc2.restore();

            //flügel
            crc2.save();
            crc2.beginPath();
            crc2.arc(this.position.x - 2, this.position.y - 9, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "white";
            crc2.fillStyle = "lightblue";
            crc2.fill();
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.restore();
            //flügel
            crc2.save();
            crc2.beginPath();
            crc2.arc(this.position.x + 2, this.position.y - 4, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "white";
            crc2.fillStyle = "lightblue";
            crc2.fill();
            crc2.lineWidth = 2;
            crc2.closePath();
            crc2.stroke();
            crc2.restore();

            //fühler oder stachel, liegt im auge des Betrachters
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(this.position.x - 8, this.position.y - 2);
            crc2.lineTo(this.position.x - 15, this.position.y - 5);

            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.lineWidth = 2;
            crc2.closePath();
            crc2.restore();

        }

    }//classklammer


}//namespaceklammer