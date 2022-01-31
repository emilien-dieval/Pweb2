function f1(x: string,y: string): boolean{
	return x< y;
}

function f2(x: string, y?: string): boolean{
	if(!y){
		return true;
	}
	return x < y;
}

function f3(...args) : void {
	console.log(args.length);
	for (let i=0; i<args.length; i++)
		console.log("arguement "+ i + " : " + args[i]);
}



console.log(f1('2','5'));
console.log(f2('2','3'));
f3();
f3(1,2,3,4,5);
let tab = [1,2,3,4];
f3(tab);
f3(...tab);
