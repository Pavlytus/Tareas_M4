//Problema: Encuentra los Invitados que Pueden Sentarse Juntos
// Instrucciones para resolver el problema:
// Usa un puntero al inicio del arreglo y otro al siguiente elemento.
// Compara las iniciales de los nombres en las posiciones de ambos punteros.
// Si coinciden, detén la búsqueda y devuelve los nombres.
// Si no coinciden, avanza ambos punteros y repite.
// Detén la búsqueda si recorres toda la lista sin encontrar un par.

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let resultado = [];
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        const inicial1 = arr[inicio].charAt(0).toLowerCase();
        const inicial2 = arr[siguiente].charAt(0).toLowerCase();

        if (inicial1 === inicial2) {
            console.log(`Los invitados ${arr[inicio]} y ${arr[siguiente]} pueden sentarse juntos.`);
            resultado.push([arr[inicio], arr[siguiente]]);
        }

        inicio++;
        siguiente++;
    }

    if (resultado.length === 0) {
        console.log("No se encontró ninguna pareja con la misma inicial.");
        return null;
    }
    return resultado;
}

console.log(encontrarPareja(invitados));


