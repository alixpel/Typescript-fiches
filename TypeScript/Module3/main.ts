var prenom = "Toto";
var age = 42;
var sexe = true;
var sport = ["foot", "rugby"];
var adresse = {
    ligne: "rue Morand",
    ville: "Paris",
    cp: 75011
};

// surcharge :
function ajout(e1:number, e2:string) : string;
function ajout(e1:string, e2:string) : string;
function ajout(e1:number, e2:number) : number;
// fonction : 
function ajout(e1:number|string, e2:number|string):number|string {
    if (typeof e1 === "number" && typeof e2 === "number") {
        return e1 + e2;
    } return e1.toString() + " " + e2.toString()
}

let calcul = ajout(2,5);
console.log(Math.floor(calcul));

let concat = ajout("Matthieu", "Gaston");
console.log(concat.toUpperCase());

let mixte = ajout(10, "Toto");
console.log(mixte);