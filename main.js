// Operadores lógicos 

// Los Operadores lógicos  nos devuelve un resultado a 
// partir de que se cumpla (o no) una condición, 
// su resultado es Booleano, y sus operandos son 
// valores lógicos o asimilables a ellos

let a = confirm("Variable A\n\t\tSeleciona Aceptar si deseas el boleano True\n\t\tSeleciona Cancelar si deseas el boleano False")

let cuerpo = document.querySelector("#myNOT");
cuerpo.insertAdjacentHTML("beforeend", ` <tr>
                                            <td>${a}</td>
                                            <td>${!a}</td>
                                        </tr>`);