var prenom = "Toto";
var age = 42;
var sexe = true;
var sport = ["foot", "rugby"];
var adresse = {
    ligne: "rue Morand",
    ville: "Paris",
    cp: 75011
};
var information;
information = "Toto";
test(information);
information = 3;
test(information);
information = true;
test(information);
function test(in_input) {
    if (typeof in_input === 'string') {
        console.log("string");
    }
    else if (typeof in_input === "number") {
        console.log("number");
    }
    else if (typeof in_input === "boolean") {
        console.log("boolean");
    }
    else {
        console.log("Toto");
    }
}
