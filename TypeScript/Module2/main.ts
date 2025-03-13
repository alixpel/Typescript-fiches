let prenom = "Toto";
let age = 42;
let sexe = true;
const sport = ["foot", "rugby"];
const adresse = {
    ligne: "rue Morand",
    ville: "Paris",
    cp: 75011
}

let afficherPersonne = (
    in_prenom:string, in_age:number, 
    in_sexe:boolean, 
    in_sports:string[], 
    in_adresse:{
        ligne : string;
        ville : string;
        cp : number;
    }
    ) : void => {
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
}
//console.log("pénom : " + prenom);

//afficherPersonne(prenom, age, sexe, sport, adresse);

let anniversaire = (in_age:number) : number => {
    return in_age + 1;
}
function afficherResultat(resultat:number) : void {
    console.log(`Le résultat : ${resultat}`);
}

function afficherAge(age:number) : void {
    console.log(`Age : ${age}`);
}

function ajout(nb1:number, nb2:number, callback : (n : number) => void) {
    let res = nb1 + nb2;
    callback(res);
}

ajout(10,3, afficherAge);