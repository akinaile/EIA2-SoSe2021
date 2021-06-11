namespace A10_BlumenwiesePolymorphie { //Busch und Pflanze habe ich mir etwas bei Mona S. abgeschaut

    //Interface für Random Positionen (x,y)
    interface Vector {
        x: number;
        y: number; 
    }
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;

    let imageData: ImageData;
    let cloudArray: Cloud [] = [];
    let beeArray: Bee [] = [];
    let flowerArray: Flower [] = [];
    let moveables: Moveable [] = [];

    function handleLoad(_event: Event): void {

        let canvas : HTMLCanvasElement | null = document.querySelector("canvas")!;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")!;
        
        drawBackgroundGrass();
        drawBackgroundSky();

        drawSun();

        createClouds(); 

        drawMountain1();
        drawMountain2();
        drawMountain3();
        drawBush1();
        drawBush2();
        drawBush3();
        drawBush4();

        createFlower();
        drawFlower();
        
        drawTreeCrown1();

        drawNest();

        //backgroud imageData
        imageData = crc2.getImageData(0, 0, 1000, 750);
        createBee(10);
        window.setInterval(update, 20);
}//handleload

    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }   

    function createBee(_amound: number): void {
        for (let i: number = 0; i < 10; i++) {
            // console.log("create bee");
            let bee: Moveable = new Bee();
            moveables.push(bee);    
        }
    }

    function moveBee(): void {    
        for (let bee of beeArray) {
            bee.move(1 / 50); //20 ms = 1/50
            bee.draw();
        }
    }

    function createClouds(): void {
        for (let i: number = 0; i < 1; i++) {
            let cloud: Moveable = new Cloud(0.5);
            moveables.push(cloud);
            // console.log(cloudArray);                 
        }
    }

    function moveCloud(): void {
        // console.log("cloud float");
        crc2.clearRect(0, 0, 1000, 750);
        crc2.putImageData(imageData, 0, 0);

        for (let cloud of cloudArray) {
            cloud.move(1 / 50); //20 ms = 1/50
            cloud.draw();
        }
    } 

    function createFlower(): void {
        //console.log("create flower");
        for (let i: number = 0; i < 10; i++) {
            let flower: Flower = new Flower();
            flowerArray.push(flower);  
        } 
        for (let i: number = 0; i < 10; i++) {
            let flower2: Flower = new Flower();
            flowerArray.push(flower2);  
        }
    }
    function drawFlower(): void {
        for (let flower of flowerArray) {
            let randomX: number = Math.floor(Math.random() * 900);
            let randomY: number = Math.floor(Math.random() * 200);
            flower.draw(randomX + 50, randomY + 370);
        }
        for (let flower2 of flowerArray) {
            let randomX: number = Math.floor(Math.random() * 900);
            let randomY: number = Math.floor(Math.random() * 200);
            flower2.draw2(randomX + 50, randomY + 470);
        }
    }

//Sky
    function drawBackgroundSky (): void {
        let grd = crc2.createLinearGradient(0, 0, 0, 400); //create Gradient
        grd.addColorStop(0, "#01A9DB");
        grd.addColorStop(1, "#A9F5F2");

        crc2.fillStyle = grd; //fill with gradient
        crc2.fillRect(0, 0, 1000, 400);
}

//grass
    function drawBackgroundGrass (): void {
        let grd = crc2.createLinearGradient(0, 0, 0, 700); //create Gradient
        grd.addColorStop(0, "#01DF3A");
        grd.addColorStop(1, "#088A4B");

        crc2.fillStyle = grd;
        crc2.fillRect(0, 0, 1000, 750);
    }

//Sun
    function drawSun (): void {
        crc2.beginPath();
        crc2.arc(900, 50, 100, 0, 2*Math.PI);
        crc2.fillStyle = "#FACC2E";
        crc2.fill();

        crc2.closePath();
        //console.log("sun");
    }

//Mountains
    function drawMountain1 (): void {
        let grd = crc2.createLinearGradient(0, 0, 0, 200); //create Gradient
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "#6E6E6E");

        crc2.beginPath();
        crc2.moveTo(Math.floor((0) + 1), (400) + 1);
        crc2.lineTo(Math.floor((200) + 1), (400) + 1);
        crc2.lineTo(Math.floor( (100) + 1), (50) + 1);
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.closePath();

        //console.log("Mountain");
    }

    function drawMountain2 (): void {
        let grd = crc2.createLinearGradient(0, 0, 0, 250); //create Gradient
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "#6E6E6E");

        crc2.beginPath();
        crc2.moveTo(Math.floor((50) + 1), (400) + 1);
        crc2.lineTo(Math.floor((600) + 1), (400) + 1);
        crc2.lineTo(Math.floor( (400) + 1), (90) + 1);
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.closePath();

        //console.log("Mountain");
    }

    function drawMountain3 (): void {
        let grd = crc2.createLinearGradient(0, 0, 0, 220); //create Gradient
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "#848484");

        crc2.beginPath();
        crc2.moveTo(Math.floor((0) + 1), (400) + 1);
        crc2.lineTo(Math.floor((400) + 1), (400) + 1);
        crc2.lineTo(Math.floor( (200) + 1), (80) + 1);
        crc2.fillStyle = grd;
    
        crc2.fill();
        crc2.closePath();

        //console.log("Mountain");
    }


//Busch
    function drawBush1(): void {
        let grd = crc2.createLinearGradient(0, 0, 0, 430); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");

        crc2.beginPath();
        crc2.fillStyle = grd;
                //x        //y
        crc2.arc(50 + 60, 360 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        crc2.arc(50 + 80, 360 + 20, 30, 0, 2 * Math.PI);
        crc2.arc(50 + 120, 360 + 40, 30, 0, 2 * Math.PI);
        crc2.arc(50 + 90, 360 + 30, 35, 0, 2 * Math.PI);
        crc2.strokeStyle = "#006600";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.closePath();
        crc2.fill();

        //console.log("Bush");
    }

    function drawBush2(): void {
        let grd = crc2.createLinearGradient(0, 0, 0, 530); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");

        crc2.beginPath();
        crc2.fillStyle = grd;
                //x        //y
        crc2.arc(100 + 60, 460 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        crc2.arc(100 + 80, 460 + 20, 30, 0, 2 * Math.PI);
        crc2.arc(100 + 120, 460 + 40, 30, 0, 2 * Math.PI);
        crc2.arc(100 + 90, 460 + 30, 35, 0, 2 * Math.PI);
        crc2.strokeStyle = "#006600";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.closePath();
        crc2.fill();

        //console.log("Bush");
    }

    function drawBush3(): void {
        let grd = crc2.createLinearGradient(0, 0, 0, 530); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");

        crc2.beginPath();
        crc2.fillStyle = grd;
                //x        //y
        crc2.arc(700 + 60, 460 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        crc2.arc(700 + 80, 460 + 20, 30, 0, 2 * Math.PI);
        crc2.arc(700 + 120, 460 + 40, 30, 0, 2 * Math.PI);
        crc2.arc(700 + 90, 460 + 30, 35, 0, 2 * Math.PI);
        crc2.strokeStyle = "#006600";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.closePath();
        crc2.fill();

        //console.log("Bush");
    }

        function drawBush4(): void {
        let grd = crc2.createLinearGradient(0, 0, 0, 450); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");

        crc2.beginPath();
        crc2.fillStyle = grd;
                //x        //y
        crc2.arc(850 + 60, 360 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        crc2.arc(850 + 80, 360 + 20, 30, 0, 2 * Math.PI);
        crc2.arc(850 + 120, 360 + 40, 30, 0, 2 * Math.PI);
        crc2.arc(850 + 90, 360 + 30, 35, 0, 2 * Math.PI);
        crc2.strokeStyle = "#006600";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.closePath();
        crc2.fill();

        //console.log("Bush");
    }

//Baum
    function drawTreeCrown1(): void {
        //Ast
        crc2.beginPath();
        crc2.fillStyle = "#61210B";
        crc2.fillRect(700, 390, 100, 20);

        crc2.closePath();
        crc2.restore();
        //Stamm
        crc2.save();
        crc2.beginPath();
        crc2.fillStyle = "#61210B";
        crc2.rect(0, 0, 50, 150);
        crc2.fillRect(800, 150, 70, 450);
        crc2.closePath;
        crc2.restore();
        //Krone
        let grd = crc2.createLinearGradient(0, 0, 0, 450); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");

        crc2.beginPath();
        crc2.fillStyle = grd;
                 //x        //y
        crc2.arc(750 + 90, 150 + 100, 90, 0, 2 * Math.PI); 
        crc2.arc(760 + 120, 150 + 100, 120, 0, 2 * Math.PI);
        crc2.arc(700 + 90, 150 + 110, 110, 0, 2 * Math.PI);
        crc2.arc(700 + 120, 150 + 90, 120, 0, 2 * Math.PI);
        crc2.strokeStyle = "#006600";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.closePath();
        crc2.fill();
}




    function drawNest(): void {
        //Nest
        crc2.save();
        crc2.beginPath();
        crc2.ellipse(750, 460, 50, 65, Math.PI / 1, 0, 2 * Math.PI);
        crc2.fillStyle = "#FF9933";
        crc2.strokeStyle = "#996600";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        //streifen
        crc2.beginPath();
        crc2.moveTo(710, 420);
        crc2.lineTo(790, 420);
        crc2.moveTo(700, 450);
        crc2.lineTo(800, 450);
        crc2.moveTo(700, 470);
        crc2.lineTo(800, 470);
        crc2.moveTo(710, 500);
        crc2.lineTo(790, 500);
        crc2.strokeStyle = "#996600";
        crc2.lineWidth = 3;
        crc2.stroke();
        crc2.closePath();
        //tür
        crc2.beginPath();
        crc2.arc(750, 470, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#996600";
        crc2.fill();
        crc2.closePath();
        //türschatten
        crc2.beginPath();
        crc2.arc(750, 470, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#663300";
        crc2.fill();
        crc2.closePath();



    }

} //namespaceklammer
