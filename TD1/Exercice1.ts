console.log('=== Test 1 : portee let-let ===');  
let langage1 = 'typescript';
{
    let langage1 = 'javascript';
    console.log('Langage 1: ' + langage1);
}
console.log('Langage 2: ' + langage1);

console.log('=== Test 2 : portee var-var ===');
var langage2 = 'typescript';
{
	var langage2 = 'javascript';
	console.log('Langage 1: ' + langage2);
}
console.log('Langage 2: ' + langage2);

console.log ('=== Test 3 : portee let-var ===');
let langage3 = 'typescript';
{
	var langage3 = 'javascript';
	console.log('Langage 1: ' + langage3);
}
console.log('Langage 2 : ' + langage3);
