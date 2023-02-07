let num1 = 50, num2 = 32;
let resultado;
let mystyle ="background: #0c690c;color:#fff;font-family: sans-serif; padding: 5px; border: 2px solid #0c6963;";

//Operador de Suma
resultado = num1 + num2;
console.log(`%c${num1} + ${num2} = ${resultado}`, mystyle);

//Operador de Resta
resultado = num1 - num2;
console.log(`${num1} - ${num2} = ${resultado}`);

//Operador de Division
resultado = num1/num2;
console.log(`${num1} / ${num2} = ${resultado}`);

//Operador de Exponenciacion
num2 = 4;
resultado = num1 ** num2;
console.log(`${num1} ** ${num2} = ${resultado}`);

//Operador de Multiplicacion
num2 = 32;
resultado = num1 * num2;
console.log(`${num1} * ${num2} = ${resultado}`);

//Operador de Modulo o Residuo
resultado = num1 % num2;
console.log(`${num1} % ${num2} = ${resultado}`);

//Operador de Unary Negation
resultado = -num1;
console.log(`Negativo de ${num1} = ${resultado}`);

//Operador de Unary Pluss
num2 = -32
resultado = +num2;
console.log(`Positivo de ${num2} = ${resultado}`);