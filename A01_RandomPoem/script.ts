//Namespace

namespace RandomPoem {


//Arrays

let Subjekte: string[] =["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let Pradikate: string[] =  ["baut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let Objekte: string[] =  ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
let Satz: string  = "";



//funktion

function getVerse(_Subjekte:string[], _Pradikate: string[], _Objekte: string[], _Satz: string): string {
    let zufallssubjekt: number = Math.floor(Math.random() * _Subjekte.length);
    _Satz += _Subjekte.splice(zufallssubjekt, 1) + " ";

    let zufallspradikat: number = Math.floor(Math.random() * _Subjekte.length);
    _Satz += _Pradikate.splice(zufallspradikat, 1) + " ";

    let zufallsobjekte: number = Math.floor(Math.random() * _Subjekte.length);
    _Satz += _Objekte.splice(zufallsobjekte, 1) + " ";

    console.log(_Satz);
    return _Satz;
}



//Schleife

for (var i:number = 6; i <= Objekte.length; i--) {
    if (i == 0) {
        break;
    }
    getVerse(Subjekte, Pradikate, Objekte, Satz);
}


//Namespace Ende
}