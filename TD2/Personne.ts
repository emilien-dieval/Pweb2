class Personne{
    prenom : string;
    nom : string;

    constructor(prenom:string,nom:string){
        this.prenom=prenom;
        this.nom=nom;
    }

    hello(prenom?:string){
        if(prenom){
            return "Salut " + prenom + ", je suis " + this.prenom + " " + this.nom;
        }
        return "Salut, je suis " + this.prenom + " " + this.nom;
    }
}
let x: Personne = new Personne("Anders", "Hejlsberg");
console.log(x.hello());
console.log(x.hello("Bill"));