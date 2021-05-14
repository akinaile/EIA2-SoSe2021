var Canvas;
(function (Canvas) {
    //Variablen: crc2, Random
    window.addEventListener("load", handleLoad);
    var crc2;
    //Funktion zur Erstelleung des Canvas 
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawBackgroundGrass();
        drawBackgroundSky();
        drawSun();
        drawMountain1();
        drawMountain2();
        drawMountain3();
        drawBush1();
        drawBush2();
        drawBush3();
        drawBush4();
        drawTree1();
        drawTreeCrown1();
        drawClowd1();
        drawClowd2();
        drawFlower1(550, 560);
        drawFlower2(550, 560);
    }
    //Sky
    function drawBackgroundSky() {
        var grd = crc2.createLinearGradient(0, 0, 0, 400); //create Gradient
        grd.addColorStop(0, "#01A9DB");
        grd.addColorStop(1, "#A9F5F2");
        crc2.fillStyle = grd; //fill with gradient
        crc2.fillRect(0, 0, 1000, 400);
    }
    //grass
    function drawBackgroundGrass() {
        var grd = crc2.createLinearGradient(0, 0, 0, 700); //create Gradient
        grd.addColorStop(0, "#01DF3A");
        grd.addColorStop(1, "#088A4B");
        crc2.fillStyle = grd;
        crc2.fillRect(0, 0, 1000, 750);
    }
    //Sun
    function drawSun() {
        crc2.beginPath();
        crc2.arc(900, 50, 100, 0, 2 * Math.PI);
        crc2.fillStyle = "#FACC2E";
        crc2.fill();
        crc2.closePath();
        console.log("sun");
    }
    //Mountains
    function drawMountain1() {
        var grd = crc2.createLinearGradient(0, 0, 0, 200); //create Gradient
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "#6E6E6E");
        crc2.beginPath();
        crc2.moveTo(Math.floor((0) + 1), (400) + 1);
        crc2.lineTo(Math.floor((200) + 1), (400) + 1);
        crc2.lineTo(Math.floor((100) + 1), (50) + 1);
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.closePath();
        console.log("Mountain");
    }
    function drawMountain2() {
        var grd = crc2.createLinearGradient(0, 0, 0, 250); //create Gradient
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "#6E6E6E");
        crc2.beginPath();
        crc2.moveTo(Math.floor((50) + 1), (400) + 1);
        crc2.lineTo(Math.floor((600) + 1), (400) + 1);
        crc2.lineTo(Math.floor((400) + 1), (90) + 1);
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.closePath();
        console.log("Mountain");
    }
    function drawMountain3() {
        var grd = crc2.createLinearGradient(0, 0, 0, 220); //create Gradient
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "#848484");
        crc2.beginPath();
        crc2.moveTo(Math.floor((0) + 1), (400) + 1);
        crc2.lineTo(Math.floor((400) + 1), (400) + 1);
        crc2.lineTo(Math.floor((200) + 1), (80) + 1);
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.closePath();
        console.log("Mountain");
    }
    //Busch
    function drawBush1() {
        var grd = crc2.createLinearGradient(0, 0, 0, 430); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        crc2.beginPath();
        crc2.fillStyle = grd;
        //x        //y
        crc2.arc(50 + 60, 360 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        crc2.arc(50 + 80, 360 + 20, 30, 0, 2 * Math.PI);
        crc2.arc(50 + 120, 360 + 40, 30, 0, 2 * Math.PI);
        crc2.arc(50 + 90, 360 + 30, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        console.log("Bush");
    }
    function drawBush2() {
        var grd = crc2.createLinearGradient(0, 0, 0, 530); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        crc2.beginPath();
        crc2.fillStyle = grd;
        //x        //y
        crc2.arc(100 + 60, 460 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        crc2.arc(100 + 80, 460 + 20, 30, 0, 2 * Math.PI);
        crc2.arc(100 + 120, 460 + 40, 30, 0, 2 * Math.PI);
        crc2.arc(100 + 90, 460 + 30, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        console.log("Bush");
    }
    function drawBush3() {
        var grd = crc2.createLinearGradient(0, 0, 0, 530); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        crc2.beginPath();
        crc2.fillStyle = grd;
        //x        //y
        crc2.arc(700 + 60, 460 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        crc2.arc(700 + 80, 460 + 20, 30, 0, 2 * Math.PI);
        crc2.arc(700 + 120, 460 + 40, 30, 0, 2 * Math.PI);
        crc2.arc(700 + 90, 460 + 30, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        console.log("Bush");
    }
    function drawBush4() {
        var grd = crc2.createLinearGradient(0, 0, 0, 450); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        crc2.beginPath();
        crc2.fillStyle = grd;
        //x        //y
        crc2.arc(850 + 60, 360 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        crc2.arc(850 + 80, 360 + 20, 30, 0, 2 * Math.PI);
        crc2.arc(850 + 120, 360 + 40, 30, 0, 2 * Math.PI);
        crc2.arc(850 + 90, 360 + 30, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        console.log("Bush");
    }
    //Baum
    function drawTreeCrown1() {
        var grd = crc2.createLinearGradient(0, 0, 0, 450); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        crc2.beginPath();
        crc2.fillStyle = grd;
        //x        //y
        crc2.arc(750 + 90, 150 + 100, 90, 0, 2 * Math.PI);
        crc2.arc(760 + 120, 150 + 100, 120, 0, 2 * Math.PI);
        crc2.arc(700 + 90, 150 + 110, 110, 0, 2 * Math.PI);
        crc2.arc(700 + 120, 150 + 90, 120, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawTree1() {
        crc2.beginPath();
        crc2.fillStyle = "#61210B";
        crc2.rect(0, 0, 50, 150);
        crc2.fillRect(800, 150, 70, 450);
        crc2.closePath;
    }
    //Wolken
    function drawClowd1() {
        var grd = crc2.createLinearGradient(0, 0, 0, 150); //create Gradient
        grd.addColorStop(0, "#FFFFFF");
        grd.addColorStop(1, "#A9E2F3");
        crc2.beginPath();
        crc2.fillStyle = grd;
        //x        //y
        crc2.arc(150 + 60, 60 + 40, 25, 0, 2 * Math.PI);
        crc2.arc(150 + 80, 60 + 20, 30, 0, 2 * Math.PI);
        crc2.arc(150 + 120, 60 + 40, 30, 0, 2 * Math.PI);
        crc2.arc(150 + 90, 60 + 30, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        console.log("Wolke");
    }
    function drawClowd2() {
        var grd = crc2.createLinearGradient(0, 0, 0, 250); //create Gradient
        grd.addColorStop(0, "#FFFFFF");
        grd.addColorStop(1, "#A9E2F3");
        crc2.beginPath();
        crc2.fillStyle = grd;
        //x        //y
        crc2.arc(250 + 60, 160 + 40, 25, 0, 2 * Math.PI);
        crc2.arc(250 + 80, 160 + 20, 30, 0, 2 * Math.PI);
        crc2.arc(250 + 120, 160 + 40, 30, 0, 2 * Math.PI);
        crc2.arc(250 + 90, 160 + 30, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        console.log("Wolke");
    }
    //Pflanzen  
    function drawFlower1(_x, _y) {
        for (var index = 0; index < 7; index++) {
            var greenFlower = Math.floor(Math.random() * 200);
            var blueFlower = Math.floor(Math.random() * 200);
            var redFlower = Math.floor(Math.random() * 200);
            var _x_1 = 700 * Math.random();
            var _y_1 = 400;
            //Stiel
            crc2.beginPath();
            crc2.strokeStyle = "#088A08";
            crc2.fillStyle = "#0B610B";
            crc2.fillRect(_x_1 - 2, _y_1 + 10, 4, 40);
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";
            crc2.moveTo(_x_1, _y_1);
            crc2.arc(_x_1, _y_1 - 9, 7, 0, 2 * Math.PI);
            crc2.arc(_x_1 + 6, _y_1 + 6, 7, 0, 2 * Math.PI);
            crc2.arc(_x_1 - 6, _y_1 + 6, 7, 0, 2 * Math.PI);
            crc2.arc(_x_1 - 8, _y_1 - 4, 7, 0, 2 * Math.PI);
            crc2.arc(_x_1 + 8, _y_1 - 4, 7, 0, 2 * Math.PI);
            crc2.fill();
            //Punkt 
            crc2.beginPath();
            crc2.fillStyle = "#FFBF00";
            crc2.arc(_x_1, _y_1, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }
    function drawFlower2(_x, _y) {
        for (var index = 0; index < 5; index++) {
            var greenFlower = Math.floor(Math.random() * 200);
            var blueFlower = Math.floor(Math.random() * 200);
            var redFlower = Math.floor(Math.random() * 200);
            var _x_2 = 700 * Math.random();
            var _y_2 = 600;
            //Stiel
            crc2.beginPath();
            crc2.strokeStyle = "#088A08";
            crc2.fillStyle = "#0B610B";
            crc2.fillRect(_x_2 - 2, _y_2 + 10, 4, 40);
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";
            crc2.moveTo(_x_2, _y_2);
            crc2.arc(_x_2, _y_2 - 9, 7, 0, 2 * Math.PI);
            crc2.arc(_x_2 + 6, _y_2 + 6, 7, 0, 2 * Math.PI);
            crc2.arc(_x_2 - 6, _y_2 + 6, 7, 0, 2 * Math.PI);
            crc2.arc(_x_2 - 8, _y_2 - 4, 7, 0, 2 * Math.PI);
            crc2.arc(_x_2 + 8, _y_2 - 4, 7, 0, 2 * Math.PI);
            crc2.fill();
            //Punkt 
            crc2.beginPath();
            crc2.fillStyle = "#FFBF00";
            crc2.arc(_x_2, _y_2, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }
})(Canvas || (Canvas = {})); //namespaceklammer
//# sourceMappingURL=script.js.map