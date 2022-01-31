let tab:number[] = [10,2,55,9,43];

console.log("\t For Classique");
for(var i=0; i<tab.length; i++)
	console.log(tab[i]);
console.log("\t For in");
for(var j in tab)
	console.log(tab[j]);
console.log("\t For of");
for(var k of tab)
	console.log(k);
console.log("\t For Each");
tab.forEach((n:number)=>console.log(n));
