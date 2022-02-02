let originalNode:HTMLDivElement;
let texteInitial:string;

function formater ():void {
    var expReg = /(Article)\s(\w+)/g;
    var nouveauTexte = texteInitial.replace(expReg, '<h3>ARTICLE $2 :</h3>');
    originalNode.innerHTML=nouveauTexte;
}

function remettreTexteInitial():void {
    console.log("Remettre à zero...");
    originalNode.style.fontWeight='normal';
    document.getElementById('original').style.color = 'black';
    originalNode.innerHTML=texteInitial;
}

function mettreEnGras () : void{
	console.log("mettreEnGras");
	originalNode.style.fontWeight='bold';
}

function mettreEnCouleur () : void{
    var color : string = (document.getElementById("couleur") as HTMLInputElement).value;
	console.log("Couleur :",color);
	document.getElementById('original').style.color = color;
}

function getTablePositions (motif:string) :number[]{
    var tabIndex = new Array();
    let pos:number = 0;
    let ind:number = texteInitial.indexOf(motif,pos);
    while(ind>-1){
        tabIndex.push(ind);
        pos = ind+1;
        ind=texteInitial.indexOf(motif,pos);
    }
    return tabIndex;	
}

// Variables globales
const RECHERCHE_AVANT= 1; 
const RECHERCHE_ARRIERE = -1; 
let tabPositions:number[]=[]; 
let indexCourant = -1;

function indexEstValide (index:number, sens:number, max:number):boolean {
    if (sens == RECHERCHE_ARRIERE) return index > 0;
    if (sens == RECHERCHE_AVANT) return index < (max-1);
    return false;
}

function mettreEnEvidence (motif:string):string{
    return '<strong><FONT color="red">'+motif+'<FONT></strong>';
}

function mettreLeMotifEnEvidence (index:number,motif:string):void {
    let texteAvantMotif = texteInitial.substr(0,index);
    let texteApresMotif = texteInitial.substr(index+motif.length,texteInitial.length);
    let nouveauTexte = texteAvantMotif+mettreEnEvidence(motif)+texteApresMotif;
    remettreTexteInitial();   
    originalNode.innerHTML =  nouveauTexte;	

}

function getMotif(){
    return "Article";
}

function rechercher (sens:number):void {
    //console.log("sens : ",sens);
    // TODO appel de la fonction getTablePositions   
    let motif:string = getMotif(); 
    tabPositions=getTablePositions(motif);
    if(indexEstValide(indexCourant,sens,tabPositions.length)){
        indexCourant+=sens;
        mettreLeMotifEnEvidence(tabPositions[indexCourant],motif);}
    else alert(sens==RECHERCHE_AVANT?"fin de texte":"debut de texte");
} 

function setCommandes () : void {
    var btnGras:HTMLInputElement = document.getElementById('gras') as HTMLInputElement;
    btnGras.onclick = () => mettreEnGras();
    var btnCouleur:HTMLInputElement = document.getElementById('couleur') as HTMLInputElement;
    btnCouleur.onclick = () => mettreEnCouleur();
    var btnReset:HTMLInputElement=document.getElementById('reset') as HTMLInputElement;
    btnReset.onclick = () => remettreTexteInitial ();
    var btnRechercher:HTMLInputElement = document.getElementById('arriere') as HTMLInputElement;
    btnRechercher.onclick = () => rechercher(RECHERCHE_ARRIERE);
    var btnRechercher:HTMLInputElement = document.getElementById('avant') as HTMLInputElement;
    btnRechercher.onclick = () => rechercher(RECHERCHE_AVANT);
}

function initialisation() : void {
    console.log("Initialisation .......");
    originalNode = document.getElementById('original') as HTMLDivElement;
    setCommandes();
    texteInitial = originalNode.innerHTML;
    formater();
    let motif = 'Article';
    let tab : number[] = getTablePositions(motif);
    console.log(tab);
    if(tab.length>0)
        console.log(">"+texteInitial.substr(tab[0],motif.length)+"<");    
}

// point d'entrée du programme
window.onload = () => {
    console.log("page chargée ...")
    initialisation();
}