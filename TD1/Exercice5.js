var MAX = 100;
function comparer(e1, e2) {
    return e1 - e2;
}
function creerTableau(nbElements) {
    var tab = [];
    for (var i = 0; i < nbElements; i++) {
        tab.push(Math.floor(Math.random() * MAX));
    }
    return tab;
}
function rechercheClassique(tab, element) {
    for (var _i = 0, tab_1 = tab; _i < tab_1.length; _i++) {
        var v = tab_1[_i];
        if (v == element)
            return true;
    }
    return false;
}
function recherche(element) {
    console.log(element, '?', this);
    return element = this;
}
function estPair(element) {
    if (element % 2 == 0)
        return true;
    return false;
}
function estInferieur(element) {
    return element < this;
}
function plusPetitQueLeSuivant(element, index, array) {
    if (index == 0)
        return true;
    return element >= tab[index - 1];
}
function multiplier(element) {
    return element * 2;
}
function addition(cumul, element) {
    cumul[0] += element[0];
    cumul[1] += element[1];
    return cumul;
}
console.log("===Création d'un tableau d'entiers : ===");
var tab = creerTableau(20);
console.log(tab);
console.log("========= Test si un élément appartient au tableau =========");
console.log(tab[7]);
console.log(rechercheClassique(tab, tab[7]));
console.log(tab.some(recherche, tab[7]));
console.log("========= Utilisation de some et any =========");
console.log(tab.every(estPair));
console.log(tab.some(estPair));
console.log(tab.filter(estPair).every(estPair));
console.log("========= Test tous les éléments sont triés ? avec every =========");
console.log("Avant le tri : ", tab.every(plusPetitQueLeSuivant));
tab.sort();
console.log("Après le tri : ", tab.every(plusPetitQueLeSuivant));
console.log("========= Extraire des paires ==================");
console.log(tab.filter(estPair));
console.log('Extraire en fonction d un nombre : ', tab.filter(estInferieur, 10));
console.log('Multiplication des elements par 2 : ', tab.map(multiplier));
console.log('Moyenne : ', tab.length == 0 ? 0 : tab.reduce(function (e1, e2) { return e1 + e2; }) / tab.length);
console.log('Moyenne coef :', [[1, 10], [2, 15], [1, 5]].reduce(addition, [10, 10]));
console.log('Moyenne coef :', [[1, 10], [2, 15], [1, 5]].reduce(addition));
