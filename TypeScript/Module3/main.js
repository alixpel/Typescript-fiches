var prenom = "Toto";
var age = 42;
var sexe = true;
var sport = ["foot", "rugby"];
var adresse = {
    ligne: "rue Morand",
    ville: "Paris",
    cp: 75011
};
// fonction : 
function ajout(e1, e2) {
    if (typeof e1 === "number" && typeof e2 === "number") {
        return e1 + e2;
    }
    return e1.toString() + " " + e2.toString();
}
var calcul = ajout(2, 5);
console.log(Math.floor(calcul));
var concat = ajout("Matthieu", "Gaston");
console.log(concat.toUpperCase());
var mixte = ajout(10, "Toto");
console.log(mixte);
