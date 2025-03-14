## installation ts (globalement) : 
npm install  -g typescript

## Compiler ts : 
tsc main.ts
--watch : pour mettre à jour le fichier js correspondant à chaque sauvegarde du fichier ts.
fichier.ts --target es6 --watch

# Types :

- in_prenom:string, 
- in_age:number, 
- in_sexe:boolean, 
- in_sports:string[], 
- in_adresse:{
    - ligne : string;
    - ville : string;
    - cp : number;
    }

var union : number|string



22. les tableaux