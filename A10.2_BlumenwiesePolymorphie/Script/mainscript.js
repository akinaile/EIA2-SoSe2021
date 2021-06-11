var A10_BlumenwiesePolymorphie;
(function (A10_BlumenwiesePolymorphie) {
    var imageData;
    var cloudArray = [];
    var beeArray = [];
    var flowerArray = [];
    //Variablen: crc2, Random
    window.addEventListener("load", handleLoad);
    //Funktion zur Erstelleung des Canvas 
    function handleLoad(_event) {
        console.log("Wiese start");
        var canvas = document.querySelector("canvas");
        A10_BlumenwiesePolymorphie.crc2 = canvas.getContext("2d");
        drawBackgroundGrass();
        drawBackgroundSky();
        drawSun();
        createClouds();
        window.setInterval(moveCloud, 50);
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
        imageData = A10_BlumenwiesePolymorphie.crc2.getImageData(0, 0, 1000, 750);
        createBee(10);
        window.setInterval(moveBee, 20);
    } //handleload
    function createBee(_amound) {
        for (var i = 0; i < 10; i++) {
            // console.log("create bee");
            var bee = new A10_BlumenwiesePolymorphie.Bee(0.8);
            beeArray.push(bee);
        }
    }
    function moveBee() {
        for (var _i = 0, beeArray_1 = beeArray; _i < beeArray_1.length; _i++) {
            var bee = beeArray_1[_i];
            bee.move(1 / 50); //20 ms = 1/50
            bee.draw();
        }
    }
    function createClouds() {
        for (var i = 0; i < 1; i++) {
            var cloud = new A10_BlumenwiesePolymorphie.Cloud(0.5);
            cloudArray.push(cloud);
            // console.log(cloudArray);                 
        }
    }
    function moveCloud() {
        // console.log("cloud float");
        A10_BlumenwiesePolymorphie.crc2.clearRect(0, 0, 1000, 750);
        A10_BlumenwiesePolymorphie.crc2.putImageData(imageData, 0, 0);
        for (var _i = 0, cloudArray_1 = cloudArray; _i < cloudArray_1.length; _i++) {
            var cloud = cloudArray_1[_i];
            cloud.move(1 / 50); //20 ms = 1/50
            cloud.draw();
        }
    }
    function createFlower() {
        console.log("create flower");
        for (var i = 0; i < 10; i++) {
            var flower = new A10_BlumenwiesePolymorphie.Flower();
            flowerArray.push(flower);
        }
        for (var i = 0; i < 10; i++) {
            var flower2 = new A10_BlumenwiesePolymorphie.Flower();
            flowerArray.push(flower2);
        }
    }
    function drawFlower() {
        for (var _i = 0, flowerArray_1 = flowerArray; _i < flowerArray_1.length; _i++) {
            var flower = flowerArray_1[_i];
            var randomX = Math.floor(Math.random() * 900);
            var randomY = Math.floor(Math.random() * 200);
            flower.draw(randomX + 50, randomY + 370);
        }
        for (var _a = 0, flowerArray_2 = flowerArray; _a < flowerArray_2.length; _a++) {
            var flower2 = flowerArray_2[_a];
            var randomX = Math.floor(Math.random() * 900);
            var randomY = Math.floor(Math.random() * 200);
            flower2.draw2(randomX + 50, randomY + 470);
        }
    }
    //Sky
    function drawBackgroundSky() {
        var grd = A10_BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, 400); //create Gradient
        grd.addColorStop(0, "#01A9DB");
        grd.addColorStop(1, "#A9F5F2");
        A10_BlumenwiesePolymorphie.crc2.fillStyle = grd; //fill with gradient
        A10_BlumenwiesePolymorphie.crc2.fillRect(0, 0, 1000, 400);
    }
    //grass
    function drawBackgroundGrass() {
        var grd = A10_BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, 700); //create Gradient
        grd.addColorStop(0, "#01DF3A");
        grd.addColorStop(1, "#088A4B");
        A10_BlumenwiesePolymorphie.crc2.fillStyle = grd;
        A10_BlumenwiesePolymorphie.crc2.fillRect(0, 0, 1000, 750);
    }
    //Sun
    function drawSun() {
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.arc(900, 50, 100, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.fillStyle = "#FACC2E";
        A10_BlumenwiesePolymorphie.crc2.fill();
        A10_BlumenwiesePolymorphie.crc2.closePath();
        //console.log("sun");
    }
    //Mountains
    function drawMountain1() {
        var grd = A10_BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, 200); //create Gradient
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "#6E6E6E");
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.moveTo(Math.floor((0) + 1), (400) + 1);
        A10_BlumenwiesePolymorphie.crc2.lineTo(Math.floor((200) + 1), (400) + 1);
        A10_BlumenwiesePolymorphie.crc2.lineTo(Math.floor((100) + 1), (50) + 1);
        A10_BlumenwiesePolymorphie.crc2.fillStyle = grd;
        A10_BlumenwiesePolymorphie.crc2.fill();
        A10_BlumenwiesePolymorphie.crc2.closePath();
        //console.log("Mountain");
    }
    function drawMountain2() {
        var grd = A10_BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, 250); //create Gradient
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "#6E6E6E");
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.moveTo(Math.floor((50) + 1), (400) + 1);
        A10_BlumenwiesePolymorphie.crc2.lineTo(Math.floor((600) + 1), (400) + 1);
        A10_BlumenwiesePolymorphie.crc2.lineTo(Math.floor((400) + 1), (90) + 1);
        A10_BlumenwiesePolymorphie.crc2.fillStyle = grd;
        A10_BlumenwiesePolymorphie.crc2.fill();
        A10_BlumenwiesePolymorphie.crc2.closePath();
        //console.log("Mountain");
    }
    function drawMountain3() {
        var grd = A10_BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, 220); //create Gradient
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "#848484");
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.moveTo(Math.floor((0) + 1), (400) + 1);
        A10_BlumenwiesePolymorphie.crc2.lineTo(Math.floor((400) + 1), (400) + 1);
        A10_BlumenwiesePolymorphie.crc2.lineTo(Math.floor((200) + 1), (80) + 1);
        A10_BlumenwiesePolymorphie.crc2.fillStyle = grd;
        A10_BlumenwiesePolymorphie.crc2.fill();
        A10_BlumenwiesePolymorphie.crc2.closePath();
        //console.log("Mountain");
    }
    //Busch
    function drawBush1() {
        var grd = A10_BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, 430); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.fillStyle = grd;
        //x        //y
        A10_BlumenwiesePolymorphie.crc2.arc(50 + 60, 360 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        A10_BlumenwiesePolymorphie.crc2.arc(50 + 80, 360 + 20, 30, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.arc(50 + 120, 360 + 40, 30, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.arc(50 + 90, 360 + 30, 35, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.strokeStyle = "#006600";
        A10_BlumenwiesePolymorphie.crc2.lineWidth = 2;
        A10_BlumenwiesePolymorphie.crc2.stroke();
        A10_BlumenwiesePolymorphie.crc2.closePath();
        A10_BlumenwiesePolymorphie.crc2.fill();
        //console.log("Bush");
    }
    function drawBush2() {
        var grd = A10_BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, 530); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.fillStyle = grd;
        //x        //y
        A10_BlumenwiesePolymorphie.crc2.arc(100 + 60, 460 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        A10_BlumenwiesePolymorphie.crc2.arc(100 + 80, 460 + 20, 30, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.arc(100 + 120, 460 + 40, 30, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.arc(100 + 90, 460 + 30, 35, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.strokeStyle = "#006600";
        A10_BlumenwiesePolymorphie.crc2.lineWidth = 2;
        A10_BlumenwiesePolymorphie.crc2.stroke();
        A10_BlumenwiesePolymorphie.crc2.closePath();
        A10_BlumenwiesePolymorphie.crc2.fill();
        //console.log("Bush");
    }
    function drawBush3() {
        var grd = A10_BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, 530); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.fillStyle = grd;
        //x        //y
        A10_BlumenwiesePolymorphie.crc2.arc(700 + 60, 460 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        A10_BlumenwiesePolymorphie.crc2.arc(700 + 80, 460 + 20, 30, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.arc(700 + 120, 460 + 40, 30, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.arc(700 + 90, 460 + 30, 35, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.strokeStyle = "#006600";
        A10_BlumenwiesePolymorphie.crc2.lineWidth = 2;
        A10_BlumenwiesePolymorphie.crc2.stroke();
        A10_BlumenwiesePolymorphie.crc2.closePath();
        A10_BlumenwiesePolymorphie.crc2.fill();
        //console.log("Bush");
    }
    function drawBush4() {
        var grd = A10_BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, 450); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.fillStyle = grd;
        //x        //y
        A10_BlumenwiesePolymorphie.crc2.arc(850 + 60, 360 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        A10_BlumenwiesePolymorphie.crc2.arc(850 + 80, 360 + 20, 30, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.arc(850 + 120, 360 + 40, 30, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.arc(850 + 90, 360 + 30, 35, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.strokeStyle = "#006600";
        A10_BlumenwiesePolymorphie.crc2.lineWidth = 2;
        A10_BlumenwiesePolymorphie.crc2.stroke();
        A10_BlumenwiesePolymorphie.crc2.closePath();
        A10_BlumenwiesePolymorphie.crc2.fill();
        //console.log("Bush");
    }
    //Baum
    function drawTreeCrown1() {
        //Ast
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.fillStyle = "#61210B";
        A10_BlumenwiesePolymorphie.crc2.fillRect(700, 390, 100, 20);
        A10_BlumenwiesePolymorphie.crc2.closePath();
        A10_BlumenwiesePolymorphie.crc2.restore();
        //Stamm
        A10_BlumenwiesePolymorphie.crc2.save();
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.fillStyle = "#61210B";
        A10_BlumenwiesePolymorphie.crc2.rect(0, 0, 50, 150);
        A10_BlumenwiesePolymorphie.crc2.fillRect(800, 150, 70, 450);
        A10_BlumenwiesePolymorphie.crc2.closePath;
        A10_BlumenwiesePolymorphie.crc2.restore();
        //Krone
        var grd = A10_BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, 450); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.fillStyle = grd;
        //x        //y
        A10_BlumenwiesePolymorphie.crc2.arc(750 + 90, 150 + 100, 90, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.arc(760 + 120, 150 + 100, 120, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.arc(700 + 90, 150 + 110, 110, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.arc(700 + 120, 150 + 90, 120, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.strokeStyle = "#006600";
        A10_BlumenwiesePolymorphie.crc2.lineWidth = 2;
        A10_BlumenwiesePolymorphie.crc2.stroke();
        A10_BlumenwiesePolymorphie.crc2.closePath();
        A10_BlumenwiesePolymorphie.crc2.fill();
    }
    function drawNest() {
        //Nest
        A10_BlumenwiesePolymorphie.crc2.save();
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.ellipse(750, 460, 50, 65, Math.PI / 1, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.fillStyle = "#FF9933";
        A10_BlumenwiesePolymorphie.crc2.strokeStyle = "#996600";
        A10_BlumenwiesePolymorphie.crc2.lineWidth = 5;
        A10_BlumenwiesePolymorphie.crc2.stroke();
        A10_BlumenwiesePolymorphie.crc2.fill();
        A10_BlumenwiesePolymorphie.crc2.closePath();
        //streifen
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.moveTo(710, 420);
        A10_BlumenwiesePolymorphie.crc2.lineTo(790, 420);
        A10_BlumenwiesePolymorphie.crc2.moveTo(700, 450);
        A10_BlumenwiesePolymorphie.crc2.lineTo(800, 450);
        A10_BlumenwiesePolymorphie.crc2.moveTo(700, 470);
        A10_BlumenwiesePolymorphie.crc2.lineTo(800, 470);
        A10_BlumenwiesePolymorphie.crc2.moveTo(710, 500);
        A10_BlumenwiesePolymorphie.crc2.lineTo(790, 500);
        A10_BlumenwiesePolymorphie.crc2.strokeStyle = "#996600";
        A10_BlumenwiesePolymorphie.crc2.lineWidth = 3;
        A10_BlumenwiesePolymorphie.crc2.stroke();
        A10_BlumenwiesePolymorphie.crc2.closePath();
        //tür
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.arc(750, 470, 15, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.fillStyle = "#996600";
        A10_BlumenwiesePolymorphie.crc2.fill();
        A10_BlumenwiesePolymorphie.crc2.closePath();
        //türschatten
        A10_BlumenwiesePolymorphie.crc2.beginPath();
        A10_BlumenwiesePolymorphie.crc2.arc(750, 470, 10, 0, 2 * Math.PI);
        A10_BlumenwiesePolymorphie.crc2.fillStyle = "#663300";
        A10_BlumenwiesePolymorphie.crc2.fill();
        A10_BlumenwiesePolymorphie.crc2.closePath();
    }
})(A10_BlumenwiesePolymorphie || (A10_BlumenwiesePolymorphie = {})); //namespaceklammer
//# sourceMappingURL=mainscript.js.map