var A03;
(function (Aufgabe3) {

    //Variablen 
    let cardAmount: number;
    let cardNum: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
    let cardArray: HTMLElement [] = [];
    let cardsOpen: number = 0;
    let cardsOpenArray: HTMLElement [] = [];
    let checkCard: HTMLElement [] = [];

    // Start game//load
    window.addEventListener("load", startGame);
    function startGame() {
        let startMemory = document.querySelector(".start");
        startMemory.addEventListener("click", main);
    }

    // FormData für Main
    let formData: FormData;
    let size: number;
    let backGColor: FormDataEntryValue | null;
    let backSColor: FormDataEntryValue | null;
    let fontColor: FormDataEntryValue | null;
    let fontStyle: FormDataEntryValue | null;

    //Karten erzeugen    
    function createCard(_cardNum) {
        let card = document.createElement("div");

        card.innerHTML = "<p>" + _cardNum + "</p>";
        card.classList.add("card");
        card.classList.add("hidden");
        cardArray.push(card);
        checkCard.push(card);
        card.addEventListener("click", clickHandler);


        // Slider Kartengröße
        card.style.width = size + "px";
        card.style.height = size + "px";

        // Hintergrundfarbe
        if (backGColor) { 
            card.style.backgroundColor = backGColor.toString();
        }

        // Kartenfarbe
        if (backSColor) {
            card.style.background = backSColor.toString();
        }

        // Schriftfarbe
        if (fontColor) {
            card.style.color = fontColor.toString();
        }

        // Schriftart
        if (fontStyle) {
            card.style.fontFamily = fontStyle.toString();
        }
    }

    //click Event für die Karten
    function clickHandler(_event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.classList.contains("card")) {
            cardsOpen++;
            if (!(cardsOpen > 2) && target.classList.contains("hidden") && target != cardsOpenArray[0]) {
                if (target.classList.contains("hidden")) { //rückseite wird angezeigt
                    target.classList.remove("hidden"); //rückseite removed
                    target.classList.add("open"); //karte wird angezeigt
                    cardsOpenArray.push(target); //wird nun angezeigt mit Zahö
                }
            }
            else {
                cardsOpen--; //karten werden nicht angezeigt
            }
            if (cardsOpen == 2) { //das nur 2 Karten gedrückt werden können
                setTimeout(compareCards, 2000);
            }
        }
    }

    // Vergleicht Karten Inhalte bzw die Zahlen
    function compareCards(): void {
        if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {
            for (var i = 0; i < 2; i++) {
                cardsOpenArray[i].classList.remove("open"); 
                cardsOpenArray[i].classList.add("taken"); //gehen weg wenn card matched
            }
            checkCard.splice(0, 2);
        }
        else {
            for (var i = 0; i < cardsOpenArray.length; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("hidden"); //wenn falsch - zurück zu hidden
            }
        }
        cardsOpenArray = [];
        cardsOpen = 0; //wenn alle Karten taken sind, kann nach Gewinn abgefragt werden
        checkWin(); //gewinnalert 
    }

//alert am Ende
    function checkWin(): void {
        if (checkCard.length == 0) {
            alert("Glückwunsch! Zeit" + hours + ":" + minutes + ":" + seconds);
        }
    }
//timer
let seconds = 0;
let minutes = 0;
let hours = 0;
let timerHTML: HTMLElement = <HTMLElement>document.querySelector("#timer");

function add(): void{
    setInterval (function(): void {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        timerHTML.innerHTML = hours + ":" + minutes + ":" + seconds;
        },      1000);
}

 //mix cards
    function mixCards(_array): void {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp: number = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }
    // Main Funktion zum Anzeigen des Memorys
    function main(_event: Event): void {
        let fieldset: HTMLFormElement = <HTMLFormElement>document.querySelector(".form");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");
        }

        //Popup für Kartenpaare
        formData = new FormData(document.forms[0]); 
        console.log(formData);
        size = Number(formData.get("Slider")); 
        backGColor = formData.get("BGColor"); 
        backSColor = formData.get("BSColor");
        fontColor = formData.get("FColor");
        fontStyle = formData.get("Radiogroup");

        // Stepper response
        let pairOfCards: FormDataEntryValue | null = formData.get("Stepper");

        if (pairOfCards) {
            cardAmount = Number(pairOfCards);
        }
        else {
            cardAmount = 5;
        }

        //Karten erzeugen
        for (let i: number = 0; i < cardAmount; i++) {
            createCard(cardNum[i]);
            createCard(cardNum[i]);
        }

        //Mix Karten (für die erwünschte Anzahl)    
        mixCards(cardArray);
        for (let i: number = 0; i < cardArray.length; i++) {
            var playerbox = document.getElementById("playerbox");
            playerbox.appendChild(cardArray[i]);
        }
    }
})(A03 || (A03 = {}));
//# sourceMappingURL=script.js.map