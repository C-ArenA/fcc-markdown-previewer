let a = [23, 34, 45];
let b = 21;

let e = 0;
for (let index = 0; ((index < a.length) && (e == 0)); index++) {
	if (b > a[a.length-1]) {
		e = a.length+1;
	}
	if (b <= a[index]) {
		e = index+1;
	}
	
}

console.log(e);
