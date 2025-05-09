

// viajes.js

// Array para guardar los destinos
let destinos = [];
let ciudad = prompt("¿A qué ciudad desea viajar? Eliga una opción entre París, Londres o Nueva York")
let dia = prompt("¿Cuándo desea viajar? Inserte su respuesta en formado DD/MM/AAAA")
let transporte = prompt("¿Desea viajar en tren, barco o en avión?")
let numpersonas = prompt("¿Cuántas personas viajan en total contándose a usted?")

// Función para calcular el costo del viaje
function calcularCosto(ciudad, transporte) {
    let costoBase = 0;

    // Costo base por destino
    if (ciudad === "París") {
        costoBase = 500;
    } else if (ciudad === "Londres") {
        costoBase = 400;
    } else if (ciudad === "Nueva York") {
        costoBase = 600;
    };

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 300;
    } else if (transporte === "Tren") {
        costoBase += 100;
    } else if (transporte === "Barco") {
        costoBase += 200;
    };
     // Costo total según el número de personas

    return costoBase;
    
}

let costoTotal = numpersonas*calcularCosto(ciudad, transporte)

// Función para registrar un destino de viaje
function registrarDestino(destino, fecha, transporte, personas, costo) {
    // TODO: Crear un objeto con los datos del destino
    let nuevoViaje = {
        destino: ciudad,
        fecha: dia,
        transporte: transporte,
        personas: numpersonas,
        costo: costoTotal,
    }

    destinos.push(nuevoViaje);
}
registrarDestino(ciudad, dia, transporte, numpersonas, costoTotal);

// Función para mostrar el itinerario de los viajes registrados
function mostrarItinerario() {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (var i = 0; i < destinos.length; i++) {
        let viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Número de personas: " + viaje.personas);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    };
};
mostrarItinerario();


// // Iniciar la aplicación
// function iniciarApp() {
//     // Ejemplo de cómo registrar destinos
//     registrarDestino("Paris", "2024-06-15", "Avión");
//     registrarDestino("Londres", "2024-07-01", "Tren");

//     // Mostrar el itinerario de los viajes
//     mostrarItinerario();
// }

