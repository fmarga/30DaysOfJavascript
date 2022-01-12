const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]


//Find a union b
const c = [...a, ...b];
const A = new Set(a);
const B = new Set(b);
const C = new Set(c);

//Find a intersection b
const d = a.filter((num) => B.has(num));
const D = new Set(d);

//Find a within b
const e = a.filter((num) => !B.has(num));
const E = new Set(e);
