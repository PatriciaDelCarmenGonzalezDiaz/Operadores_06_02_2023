let num1 = 50, num2 = 32;
let resultado;
let mystyle ="background: #0c690c;color:#fff;font-family: sans-serif; padding: 5px; border: 2px solid #0c6963;";

//Equality
console.log(`%c${num1} == ${num2} ${num1==num2}`,mystyle);
//Inequality
console.log(`%c${num1} != ${num2} ${num1!=num2}`,mystyle);

//Identity
console.log(`%c${num1} === ${num2} ${num1===num2}`,mystyle);

//Non-identity
console.log(`%c${num1} !== ${num2} ${num1!==num2}`,mystyle);

//Mayor que
console.log(`%c${num1} > ${num2} ${num1>num2}`,mystyle);

//Mayor o Igual que
console.log(`%c${num1} >= ${num2} ${num1>=num2}`,mystyle);

//Menor que
console.log(`%c${num1} < ${num2} ${num1<num2}`,mystyle);

//Menor o igual que
console.log(`%c${num1} <= ${num2} ${num1<=num2}`,mystyle);
