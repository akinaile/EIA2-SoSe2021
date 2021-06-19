namespace A11_BlumenwieseAdvanced{
    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number){
            this.set(_x, _y);
        }

        //zufällige Richtung mit bestimmter Länge
        public static getRandom(_minLength: number, _maxLength: number): Vector {
            let vector: Vector = new Vector (0, 0); 
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector
        }

        //x,y werden mit set besetzt
        public set(_x: number, _y: number){
            this.x = _x;
            this.y = _y;
        }

        //skalierung/größe/Änderung um den Faktor
        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }
        //einen weiteren Vektor auf den bisherigen Vektor addieren
        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        //copy der Position mit gleichem Wert
        public copy(): Vector {
            return new Vector(this.x, this.y);
        }
    }

}//namespaceklammer