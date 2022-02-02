var originalNode;
var texteInitial;
function formater() {
    var expReg = /(Article)\s(\w+)/g;
    var nouveauTexte = texteInitial.replace(expReg, '<h3>ARTICLE $2 :</h3>');
    originalNode.innerHTML = nouveauTexte;
}
function remettreTexteInitial() {
    console.log("Remettre à zero...");
    originalNode.style.fontWeight = 'normal';
    document.getElementById('original').style.color = 'black';
    originalNode.innerHTML = texteInitial;
}
function mettreEnGras() {
    console.log("mettreEnGras");
    originalNode.style.fontWeight = 'bold';
}
function mettreEnCouleur() {
    var color = document.getElementById("couleur").value;
    console.log("Couleur :", color);
    document.getElementById('original').style.color = color;
}
function getTablePositions(motif) {
    var tabIndex = new Array();
    var pos = 0;
    var ind = texteInitial.indexOf(motif, pos);
    while (ind > -1) {
        tabIndex.push(ind);
        pos = ind + 1;
        ind = texteInitial.indexOf(motif, pos);
    }
    return tabIndex;
}
// Variables globales
var RECHERCHE_AVANT = 1;
var RECHERCHE_ARRIERE = -1;
var tabPositions = [];
var indexCourant = -1;
function indexEstValide(index, sens, max) {
    if (sens == RECHERCHE_ARRIERE)
        return index > 0;
    if (sens == RECHERCHE_AVANT)
        return index < (max - 1);
    return false;
}
function mettreEnEvidence(motif) {
    return '<strong><FONT color="red">' + motif + '<FONT></strong>';
}
function mettreLeMotifEnEvidence(index, motif) {
    var texteAvantMotif = texteInitial.substr(0, index);
    var texteApresMotif = texteInitial.substr(index + motif.length, texteInitial.length);
    var nouveauTexte = texteAvantMotif + mettreEnEvidence(motif) + texteApresMotif;
    remettreTexteInitial();
    originalNode.innerHTML = nouveauTexte;
}
function getMotif() {
    return "Article";
}
function rechercher(sens) {
    //console.log("sens : ",sens);
    // TODO appel de la fonction getTablePositions   
    var motif = getMotif();
    tabPositions = getTablePositions(motif);
    if (indexEstValide(indexCourant, sens, tabPositions.length)) {
        indexCourant += sens;
        mettreLeMotifEnEvidence(tabPositions[indexCourant], motif);
    }
    else
        alert(sens == RECHERCHE_AVANT ? "fin de texte" : "debut de texte");
}
function setCommandes() {
    var btnGras = document.getElementById('gras');
    btnGras.onclick = function () { return mettreEnGras(); };
    var btnCouleur = document.getElementById('couleur');
    btnCouleur.onclick = function () { return mettreEnCouleur(); };
    var btnReset = document.getElementById('reset');
    btnReset.onclick = function () { return remettreTexteInitial(); };
    var btnRechercher = document.getElementById('arriere');
    btnRechercher.onclick = function () { return rechercher(RECHERCHE_ARRIERE); };
    var btnRechercher = document.getElementById('avant');
    btnRechercher.onclick = function () { return rechercher(RECHERCHE_AVANT); };
}
function initialisation() {
    console.log("Initialisation .......");
    originalNode = document.getElementById('original');
    setCommandes();
    texteInitial = originalNode.innerHTML;
    formater();
    var motif = 'Article';
    var tab = getTablePositions(motif);
    console.log(tab);
    if (tab.length > 0)
        console.log(">" + texteInitial.substr(tab[0], motif.length) + "<");
}
// point d'entrée du programme
window.onload = function () {
    console.log("page chargée ...");
    initialisation();
};
