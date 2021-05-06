namespace Canvas {

//Interface für Random Positionen (x,y)
interface Vector {
    x: number;
    y: number; 
}

//Variablen: crc2, Random
window.addEventListener("load", drawField);
var crc2: CanvasRenderingContext2D;
var crc3: CanvasRenderingContext2D;

//Funktion zur Erstelleung des Canvas 
function drawField(_event: Event): void {

var canvas : HTMLCanvasElement | null = document.querySelector("canvas")!;
crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
crc3 = <CanvasRenderingContext2D>canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawQuadrat();
drawRectTwo({x: 400, y:80})
drawCircle();
drawtriangle();
}

function drawQuadrat (): void {
    for (let i: number = 0; i < 30; i ++) {
        let positionX : number = crc2.canvas.width * Math.random();
        let positionY : number = crc2.canvas.height * Math.random();
        let greenQuadrat: number = Math.floor(Math.random() * 350);
        let blueQuadrat: number = Math.floor(Math.random() * 350);
        let redQuadrat: number = Math.floor(Math.random() * 350);

        crc2.beginPath();
        crc2.rect(positionX, positionY, 100, 50);
        crc2.fillStyle = "rgb( " + greenQuadrat + ", " + blueQuadrat + ", " + redQuadrat + ")";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
}

function drawCircle(): void {
    for (let i: number = 0; i < 20; i++) {

        let greenCircle: number = Math.floor(Math.random() * 350);
        let blueCircle: number = Math.floor(Math.random() * 350);
        let redCircle: number = Math.floor(Math.random() * 350);
        
        crc2.beginPath();
        crc2.arc(Math.floor(Math.random() * (500) + 1), (Math.random() * (500) + 1), (Math.random() * (90) + 1), 0, 5 + Math.PI);
        crc2.fillStyle = "rgb( " + greenCircle + ", " + blueCircle + ", " + redCircle + ")";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
}

function drawtriangle(): void {
    for (let index: number = 0; index < 5; index++) {
        let positionX : number = crc2.canvas.width * Math.random();
        let positionY : number = crc2.canvas.height * Math.random();
        let greenTriangle: number = Math.floor(Math.random() * 200);
        let blueTriangle: number = Math.floor(Math.random() * 200);
        let redTriangle: number = Math.floor(Math.random() * 200);

        crc3.beginPath();
        crc2.rect(positionX, positionY, 100, 50);
        crc3.moveTo(Math.floor(Math.random() * (700) + 1), Math.floor(Math.random() * (400) + 1));
        crc3.lineTo(Math.floor(Math.random() * (800) + 1), Math.floor(Math.random() * (400) + 1));
        crc3.lineTo(Math.floor(Math.random() * (900) + 1), Math.floor(Math.random() * (350) + 1));

        crc3.fillStyle = "rgb( " + greenTriangle + ", " + blueTriangle + ", " + redTriangle + ")";
        crc3.fill();

        crc3.closePath();
        crc3.stroke();

    }

}

    function drawRectTwo(_position: Vector): void {
        for (let i: number = 0; i < 10; i++) { //i<10 läuft 10 mal durch die schleife, 1. durchlauf i=0; 2. i=1; (veränderug von i); i+20= veränderung i mit 50
            let positionX : number = crc2.canvas.width * Math.random();
            let positionY : number = crc2.canvas.height * Math.random();

            let greenQuadrat: number = Math.floor(Math.random() * 350);
            let blueQuadrat: number = Math.floor(Math.random() * 350);
            let redQuadrat: number = Math.floor(Math.random() * 350);
            //formvorgben
            crc2.beginPath(); //anfang
            crc2.rect(_position.x + i * 30, _position.y + i * 20, 100, 200); //größe des quadrats; kann man durch position verändern
            crc2.fillStyle = "rgb( " + greenQuadrat + ", " + blueQuadrat + ", " + redQuadrat + ")"; //Farbfüllung
            crc2.fill(); //füllung des Pfads
            crc2.stroke(); //zeigt die linie an
            crc2.closePath(); //ende
        } 
    }

//reload btn
    let newCanvas: HTMLElement = <HTMLElement>document.querySelector(".reloadBtn");

    newCanvas.addEventListener("click", function (): void {
        location.reload();
    });

} //namespace schlussklammer