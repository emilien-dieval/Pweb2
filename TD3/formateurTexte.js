var originalNode;
var texteInitial;
function formater() {
    var expReg = /(Article)\s(\w+)/g;
    var nouveauTexte = texteInitial.replace(expReg, '<h3>ARTICLE $2 :</h3>');
    originalNode.innerHTML = nouveauTexte;
}
function mettreEnGras() {
    console.log("mettreEnGras");
    originalNode.style.fontWeight = 'bold';
}
function mettreEnCouleur() {
    console.log("mettreEnCouleur");
    originalNode.style.color = 'red';
}
function setCommandes() {
    var btnGras = document.getElementById('gras');
    btnGras.onclick = function () { return mettreEnGras(); };
    var btnCouleur = document.getElementById("couleur");
    btnCouleur.onclick = function () { return mettreEnCouleur(); };
}
function initialisation() {
    console.log("Initialisation .......");
    originalNode = document.getElementById('original');
    setCommandes();
    texteInitial = originalNode.innerHTML;
    formater();
}
// point d'entrée du programme
window.onload = function () {
    console.log("page chargée ...");
    initialisation();
};
