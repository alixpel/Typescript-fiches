let prenom = "Toto";
let age = 42;
let sexe = true;
const sport = ["foot", "rugby"];
const adresse = {
    ligne: "rue Morand",
    ville: "Paris",
    cp: 75011
}

var information : string|number|boolean;

information = "Toto";

test(information);
information = 3;
test(information);
information = true;
test(information);

function test(in_input:string|number|boolean) {
    if (typeof in_input === 'string') {
        console.log("string");
    } else if (typeof in_input === "number") {
        console.log("number");
    } else if (typeof in_input === "boolean") {
        console.log("boolean");
    } else {
        console.log("Toto");
    }
}
