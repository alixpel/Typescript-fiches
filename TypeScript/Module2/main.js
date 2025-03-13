let prenom = "Toto";
let age = 42;
let sexe = true;
const sport = ["foot", "rugby"];
const adresse = {
    ligne: "rue Morand",
    ville: "Paris",
    cp: 75011
};
let afficherPersonne = (in_prenom, in_age, in_sexe, in_sports, in_adresse) => {
    console.log("Prénom : " + in_prenom);
    console.log("Age : " + in_age);
    console.log("Age : " + (in_sexe ? "Masculin" : "Féminin"));
    console.log("Sports : ");
    for (let sport of in_sports) {
        console.log(sport);
    }
    console.log("Adresse : ");
    console.log(in_adresse.ligne);
    console.log(in_adresse.cp + " " + in_adresse.ville);
};
//console.log("pénom : " + prenom);
afficherPersonne(prenom, age, sexe, sport, adresse);
let anniversaire = (in_age = 17) => {
    return in_age + 1;
};
let newAge;
newAge = anniversaire(age);
console.log(`Age : ${newAge}`);
