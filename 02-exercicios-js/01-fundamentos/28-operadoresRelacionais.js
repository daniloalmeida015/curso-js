console.log('01)', '1'==1); // '1' é igual a 1:    true

//'1' é estritamento igual a 1?     FALSE
// === leva em conta tipo e valor
console.log('01)', '1'===1);

console.log('02)', '3'!=3);     // false
console.log('03)', '3'!==3);    // true

console.log('04)', 3<2);
console.log('05)', 3<=2);

const d1 = new Date(0); // zero, data padrao, 01 jan 1970
const d2 = new Date(0);

console.log('06)', d1 == d2);   //false, leva em conta end memoria
console.log('07)', d1 === d2);

console.log('08)', d1.getTime == d2.getTime); //true

console.log('09)', undefined == null); //true
console.log('10)', undefined === null); //false