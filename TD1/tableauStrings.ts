function comparer(e1 :string,e2:string) : number{
	if(e1<e2) return -1;
	if(e1>e2) return 1;
}
function trier(t:string[]) : string[]{
	t.sort(comparer);
	return t;
}
let t2 : string[] = ['B','C','D'];
t2[t2.length]='E';

console.log(t2);
t2.push('A');

let t3 = t2.slice();
console.log(t2);

trier(t2);
console.log('t2 : ',t2);
console.log('t3 : ',t3);

console.log('t3 trié :',t3.slice().sort(comparer));
console.log('t3 trié inverse :',t3.slice().sort(comparer).reverse);
console.log('t3 :',t3);

t3.slice().sort(comparer).reverse().forEach((element:string)=>console.log(element));
