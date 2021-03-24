//Namespace
var RandomPoem;
(function (RandomPoem) {
    //Arrays
    var Subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    var Pradikate = ["baut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    var Objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    var Satz = "";
    //funktion
    function getVerse(_Subjekte, _Pradikate, _Objekte, _Satz) {
        var zufallssubjekt = Math.floor(Math.random() * _Subjekte.length);
        _Satz += _Subjekte.splice(zufallssubjekt, 1) + " ";
        var zufallspradikat = Math.floor(Math.random() * _Subjekte.length);
        _Satz += _Pradikate.splice(zufallspradikat, 1) + " ";
        var zufallsobjekte = Math.floor(Math.random() * _Subjekte.length);
        _Satz += _Objekte.splice(zufallsobjekte, 1) + " ";
        console.log(_Satz);
        return _Satz;
    }
    //Schleife
    for (var i = 6; i <= Objekte.length; i--) {
        if (i == 0) {
            break;
        }
        getVerse(Subjekte, Pradikate, Objekte, Satz);
    }
    //Namespace Ende
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=script.js.map