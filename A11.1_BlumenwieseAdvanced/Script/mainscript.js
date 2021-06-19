var A11_BlumenwieseAdvanced;
(function (A11_BlumenwieseAdvanced) {
    window.addEventListener("load", handleLoad);
    var imageData;
    var flowerArray = []; //flowers don+t move
    var moveables = [];
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        A11_BlumenwieseAdvanced.crc2 = canvas.getContext("2d");
        drawBackgroundGrass();
        drawBackgroundSky();
        drawSun();
        createClouds();
        window.setInterval(update, 50);
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
        imageData = A11_BlumenwieseAdvanced.crc2.getImageData(0, 0, canvas.width, canvas.height);
        createBee(15);
        nectarAmount();
        window.setInterval(nectarAmount, 200);
    } //handleload
    function update() {
        //console.log("update");
        A11_BlumenwieseAdvanced.crc2.clearRect(0, 0, 1000, 750);
        A11_BlumenwieseAdvanced.crc2.putImageData(imageData, 0, 0);
        for (var _i = 0, moveables_1 = moveables; _i < moveables_1.length; _i++) {
            var moveable = moveables_1[_i];
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
    function createBee(_amound) {
        for (var i_1 = 0; i_1 < 15; i_1++) {
            // console.log("create bee");
            var bee = new A11_BlumenwieseAdvanced.Bee();
            moveables.push(bee);
        }
    }
    function createClouds() {
        for (var i_2 = 0; i_2 < 1; i_2++) {
            var cloud = new A11_BlumenwieseAdvanced.Cloud(0.5);
            moveables.push(cloud);
            // console.log(cloudArray);                 
        }
    }
    function createFlower() {
        //console.log("create flower");
        for (var i_3 = 0; i_3 < 10; i_3++) {
            var flower = new A11_BlumenwieseAdvanced.Flower();
            flowerArray.push(flower);
        }
        for (var i_4 = 0; i_4 < 10; i_4++) {
            var flower2 = new A11_BlumenwieseAdvanced.Flower();
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
        var grd = A11_BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, 400); //create Gradient
        grd.addColorStop(0, "#01A9DB");
        grd.addColorStop(1, "#A9F5F2");
        A11_BlumenwieseAdvanced.crc2.fillStyle = grd; //fill with gradient
        A11_BlumenwieseAdvanced.crc2.fillRect(0, 0, 1000, 400);
    }
    //grass
    function drawBackgroundGrass() {
        var grd = A11_BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, 700); //create Gradient
        grd.addColorStop(0, "#01DF3A");
        grd.addColorStop(1, "#088A4B");
        A11_BlumenwieseAdvanced.crc2.fillStyle = grd;
        A11_BlumenwieseAdvanced.crc2.fillRect(0, 0, 1000, 750);
    }
    //Sun
    function drawSun() {
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.arc(900, 50, 100, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.fillStyle = "#FACC2E";
        A11_BlumenwieseAdvanced.crc2.fill();
        A11_BlumenwieseAdvanced.crc2.closePath();
        //console.log("sun");
    }
    //Mountains
    function drawMountain1() {
        var grd = A11_BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, 200); //create Gradient
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "#6E6E6E");
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.moveTo(Math.floor((0) + 1), (400) + 1);
        A11_BlumenwieseAdvanced.crc2.lineTo(Math.floor((200) + 1), (400) + 1);
        A11_BlumenwieseAdvanced.crc2.lineTo(Math.floor((100) + 1), (50) + 1);
        A11_BlumenwieseAdvanced.crc2.fillStyle = grd;
        A11_BlumenwieseAdvanced.crc2.fill();
        A11_BlumenwieseAdvanced.crc2.closePath();
        //console.log("Mountain");
    }
    function drawMountain2() {
        var grd = A11_BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, 250); //create Gradient
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "#6E6E6E");
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.moveTo(Math.floor((50) + 1), (400) + 1);
        A11_BlumenwieseAdvanced.crc2.lineTo(Math.floor((600) + 1), (400) + 1);
        A11_BlumenwieseAdvanced.crc2.lineTo(Math.floor((400) + 1), (90) + 1);
        A11_BlumenwieseAdvanced.crc2.fillStyle = grd;
        A11_BlumenwieseAdvanced.crc2.fill();
        A11_BlumenwieseAdvanced.crc2.closePath();
        //console.log("Mountain");
    }
    function drawMountain3() {
        var grd = A11_BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, 220); //create Gradient
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "#848484");
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.moveTo(Math.floor((0) + 1), (400) + 1);
        A11_BlumenwieseAdvanced.crc2.lineTo(Math.floor((400) + 1), (400) + 1);
        A11_BlumenwieseAdvanced.crc2.lineTo(Math.floor((200) + 1), (80) + 1);
        A11_BlumenwieseAdvanced.crc2.fillStyle = grd;
        A11_BlumenwieseAdvanced.crc2.fill();
        A11_BlumenwieseAdvanced.crc2.closePath();
        //console.log("Mountain");
    }
    //Busch
    function drawBush1() {
        var grd = A11_BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, 430); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.fillStyle = grd;
        //x        //y
        A11_BlumenwieseAdvanced.crc2.arc(50 + 60, 360 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        A11_BlumenwieseAdvanced.crc2.arc(50 + 80, 360 + 20, 30, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.arc(50 + 120, 360 + 40, 30, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.arc(50 + 90, 360 + 30, 35, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.strokeStyle = "#006600";
        A11_BlumenwieseAdvanced.crc2.lineWidth = 2;
        A11_BlumenwieseAdvanced.crc2.stroke();
        A11_BlumenwieseAdvanced.crc2.closePath();
        A11_BlumenwieseAdvanced.crc2.fill();
        //console.log("Bush");
    }
    function drawBush2() {
        var grd = A11_BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, 530); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.fillStyle = grd;
        //x        //y
        A11_BlumenwieseAdvanced.crc2.arc(100 + 60, 460 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        A11_BlumenwieseAdvanced.crc2.arc(100 + 80, 460 + 20, 30, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.arc(100 + 120, 460 + 40, 30, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.arc(100 + 90, 460 + 30, 35, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.strokeStyle = "#006600";
        A11_BlumenwieseAdvanced.crc2.lineWidth = 2;
        A11_BlumenwieseAdvanced.crc2.stroke();
        A11_BlumenwieseAdvanced.crc2.closePath();
        A11_BlumenwieseAdvanced.crc2.fill();
        //console.log("Bush");
    }
    function drawBush3() {
        var grd = A11_BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, 530); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.fillStyle = grd;
        //x        //y
        A11_BlumenwieseAdvanced.crc2.arc(700 + 60, 460 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        A11_BlumenwieseAdvanced.crc2.arc(700 + 80, 460 + 20, 30, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.arc(700 + 120, 460 + 40, 30, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.arc(700 + 90, 460 + 30, 35, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.strokeStyle = "#006600";
        A11_BlumenwieseAdvanced.crc2.lineWidth = 2;
        A11_BlumenwieseAdvanced.crc2.stroke();
        A11_BlumenwieseAdvanced.crc2.closePath();
        A11_BlumenwieseAdvanced.crc2.fill();
        //console.log("Bush");
    }
    function drawBush4() {
        var grd = A11_BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, 450); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.fillStyle = grd;
        //x        //y
        A11_BlumenwieseAdvanced.crc2.arc(850 + 60, 360 + 40, 25, 0, 2 * Math.PI); //Busch Koodinaten von Mona Stingel inspiriert 
        A11_BlumenwieseAdvanced.crc2.arc(850 + 80, 360 + 20, 30, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.arc(850 + 120, 360 + 40, 30, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.arc(850 + 90, 360 + 30, 35, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.strokeStyle = "#006600";
        A11_BlumenwieseAdvanced.crc2.lineWidth = 2;
        A11_BlumenwieseAdvanced.crc2.stroke();
        A11_BlumenwieseAdvanced.crc2.closePath();
        A11_BlumenwieseAdvanced.crc2.fill();
        //console.log("Bush");
    }
    //Baum
    function drawTreeCrown1() {
        //Ast
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.fillStyle = "#61210B";
        A11_BlumenwieseAdvanced.crc2.fillRect(700, 390, 100, 20);
        A11_BlumenwieseAdvanced.crc2.closePath();
        A11_BlumenwieseAdvanced.crc2.restore();
        //Stamm
        A11_BlumenwieseAdvanced.crc2.save();
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.fillStyle = "#61210B";
        A11_BlumenwieseAdvanced.crc2.rect(0, 0, 50, 150);
        A11_BlumenwieseAdvanced.crc2.fillRect(800, 150, 70, 450);
        A11_BlumenwieseAdvanced.crc2.closePath;
        A11_BlumenwieseAdvanced.crc2.restore();
        //Krone
        var grd = A11_BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, 450); //create Gradient
        grd.addColorStop(0, "#A5DF00");
        grd.addColorStop(1, "#298A08");
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.fillStyle = grd;
        //x        //y
        A11_BlumenwieseAdvanced.crc2.arc(750 + 90, 150 + 100, 90, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.arc(760 + 120, 150 + 100, 120, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.arc(700 + 90, 150 + 110, 110, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.arc(700 + 120, 150 + 90, 120, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.strokeStyle = "#006600";
        A11_BlumenwieseAdvanced.crc2.lineWidth = 2;
        A11_BlumenwieseAdvanced.crc2.stroke();
        A11_BlumenwieseAdvanced.crc2.closePath();
        A11_BlumenwieseAdvanced.crc2.fill();
    }
    function drawNest() {
        //Nest
        A11_BlumenwieseAdvanced.crc2.save();
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.ellipse(750, 460, 50, 65, Math.PI / 1, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.fillStyle = "#FF9933";
        A11_BlumenwieseAdvanced.crc2.strokeStyle = "#996600";
        A11_BlumenwieseAdvanced.crc2.lineWidth = 5;
        A11_BlumenwieseAdvanced.crc2.stroke();
        A11_BlumenwieseAdvanced.crc2.fill();
        A11_BlumenwieseAdvanced.crc2.closePath();
        //streifen
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.moveTo(710, 420);
        A11_BlumenwieseAdvanced.crc2.lineTo(790, 420);
        A11_BlumenwieseAdvanced.crc2.moveTo(700, 450);
        A11_BlumenwieseAdvanced.crc2.lineTo(800, 450);
        A11_BlumenwieseAdvanced.crc2.moveTo(700, 470);
        A11_BlumenwieseAdvanced.crc2.lineTo(800, 470);
        A11_BlumenwieseAdvanced.crc2.moveTo(710, 500);
        A11_BlumenwieseAdvanced.crc2.lineTo(790, 500);
        A11_BlumenwieseAdvanced.crc2.strokeStyle = "#996600";
        A11_BlumenwieseAdvanced.crc2.lineWidth = 3;
        A11_BlumenwieseAdvanced.crc2.stroke();
        A11_BlumenwieseAdvanced.crc2.closePath();
        //tür
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.arc(750, 470, 15, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.fillStyle = "#996600";
        A11_BlumenwieseAdvanced.crc2.fill();
        A11_BlumenwieseAdvanced.crc2.closePath();
        //türschatten
        A11_BlumenwieseAdvanced.crc2.beginPath();
        A11_BlumenwieseAdvanced.crc2.arc(750, 470, 10, 0, 2 * Math.PI);
        A11_BlumenwieseAdvanced.crc2.fillStyle = "#663300";
        A11_BlumenwieseAdvanced.crc2.fill();
        A11_BlumenwieseAdvanced.crc2.closePath();
    }
    var i = 0;
    function nectarAmount() {
        if (i == 0) {
            i = 1;
            var bar_1 = document.getElementById("bar");
            var width_1 = 1;
            var percent_1 = setInterval(frame, 150);
            function frame() {
                if (width_1 >= 100) {
                    clearInterval(percent_1);
                    i = 100;
                }
                else {
                    width_1++;
                    bar_1.style.width = width_1 + "%";
                    bar_1.innerHTML = width_1 + "%";
                }
            }
        }
    }
})(A11_BlumenwieseAdvanced || (A11_BlumenwieseAdvanced = {})); //namespaceklammer
//# sourceMappingURL=mainscript.js.map