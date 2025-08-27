

//type literal types
let num : 10 | 20 | 30 = 10;
// num = 15;
let num2 : string | number | undefined = 'hello';

num2 = 20;
num2 = undefined;
num2 = 'world';

console.log(num2.toUpperCase());
num2 = 30;
console.log('Number num2:', num2)

