let originalNode:HTMLDivElement;
let texteInitial:String;

function formater ():void {
    var expReg = /(Article)\s(\w+)/g;
    var nouveauTexte = texteInitial.replace(expReg, '<h3>ARTICLE $2 :</h3>');
    originalNode.innerHTML=nouveauTexte;
}

function mettreEnGras () : void{
	console.log("mettreEnGras");
	originalNode.style.fontWeight='bold';
}

function mettreEnCouleur () : void{
	console.log("mettreEnCouleur");
	originalNode.style.color='red';
}

function setCommandes () : void {
    var btnGras:HTMLInputElement = document.getElementById('gras') as HTMLInputElement;
    btnGras.onclick = () => mettreEnGras();
    var btnCouleur:HTMLInputElement = document.getElementById("couleur") as HTMLInputElement;
    btnCouleur.onclick = () => mettreEnCouleur();
}

function initialisation() : void {
  console.log("Initialisation .......");
  originalNode = document.getElementById('original') as HTMLDivElement;
  setCommandes();
  texteInitial = originalNode.innerHTML;
  formater();
}

// point d'entrée du programme
window.onload = () => {
    console.log("page chargée ...")
    initialisation();
}