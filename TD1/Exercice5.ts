const MAX:number = 100;

function comparer(e1 :number,e2:number) : number{
	return e1-e2;
}

function creerTableau(nbElements : number) : number[]{
	var tab=[];
	for(var i=0; i<nbElements; i++){
		tab.push(Math.floor(Math.random() * MAX));
	}
	return tab;
}

function rechercheClassique(tab:number[], element:number):boolean{
	for (let v of tab)
		if (v==element) return true;
	return false;

}

function recherche(element:number):boolean{
	console.log(element,'?',this);
	return element=this;
}

function estPair(element:number):boolean{
	if(element%2==0)
		return true;
	return false;
}

function estInferieur(element:number):boolean{
	return element < this;
}

function plusPetitQueLeSuivant(element:number, index:number, array:number[]){
	if(index==0)
		return true;
	return element >= tab[index-1];
}

function multiplier(element:number):number{
	return element*2;
}

function addition(cumul:number[],element:number[]):number[]{
	cumul[0]+=element[0]
	cumul[1]+=element[1];
	return cumul;
}

console.log("===Création d'un tableau d'entiers : ===");
let tab = creerTableau(20);
console.log(tab);

console.log("========= Test si un élément appartient au tableau ========="); 
console.log(tab[7]);
console.log(rechercheClassique(tab,tab[7]));
console.log (tab.some(recherche,tab[7]));

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

console.log('Extraire en fonction d un nombre : ', tab.filter(estInferieur,10));
console.log('Multiplication des elements par 2 : ', tab.map(multiplier));

console.log('Moyenne : ', tab.length==0?0:tab.reduce((e1:number,e2:number):number=>e1+e2)/tab.length);
console.log('Moyenne coef :', [[1,10], [2,15], [1,5]].reduce(addition,[10,10]));
console.log('Moyenne coef :', [[1,10], [2,15], [1,5]].reduce(addition));