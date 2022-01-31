var Personne = /** @class */ (function () {
    function Personne(prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    }
    Personne.prototype.hello = function (prenom) {
        if (prenom) {
            return "Salut " + prenom + ", je suis " + this.prenom + " " + this.nom;
        }
        return "Salut, je suis " + this.prenom + " " + this.nom;
    };
    return Personne;
}());
var x = new Personne("Anders", "Hejlsberg");
console.log(x.hello());
console.log(x.hello("Bill"));
