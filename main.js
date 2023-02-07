let num1 = 50, num2 = 32;
let resultado;
let mystyle ="background: #0c690c;color:#fff;font-family: sans-serif; padding: 5px; border: 2px solid #0c6963;";

//Libreria Matemática Math
//Mat.ceil()
//Devuelve el numero entero superior al numero escrito
console.log(Math.ceil(2.087));
console.log(Math.ceil(2.95));

//Mat.floor()
//Devuelve el numero entero superior al numero escrito
console.log(Math.ceil(4.097));
console.log(Math.ceil(4.972));

//Mat.max()
//Devuelve el numero mas grande de un grupo de numeros dados
console.log(Math.max(6,35,2,94,8));

//Mat.min()
//Devuelve el numero mas pequño de un grupo de numeros dados
console.log(Math.min(6,35,2,94,8));

//Mat.pow()
//Devuelve el valor de elevar un numero base aun un exponente
console.log(Math.pow(3, 6));

//Mat.random()
//Devuelve un numero aleatorio entre 0 y 1
console.log(Math.random());
//Si quiero numeros entre 0 y 100
console.log(Math.random()*100);

//Mat.round()
//Redondea un valor al numero entero mas proximo
console.log(Math.round(3.158));
console.log(Math.round(3.623));

//Mat.trunc()
//Trunca un valor dejando solo la parte entera
console.log(Math.trunc(3.158));
console.log(Math.trunc(3.623));

//Mat.sqrt()
//Devuelve la raiz cuadrada de un numero
console.log(Math.sqrt(358));

//xxx.toFixed() 
//Devuelve un numero redondeandolo de acuerdo a una cantidad de decimales que deseo
console.log(365987.125485.toFixed(3));
console.log(365987.125612.toFixed(3));