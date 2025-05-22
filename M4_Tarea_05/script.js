// Problema: Búsqueda del Máximo en un Arreglo con Divide and Conquer
// Dado un arreglo de números, implementa una función que utilice el enfoque Divide and Conquer para encontrar el número máximo.

// Instrucciones para resolver el problema:
// Divide el arreglo en dos mitades.
// Resuelve el problema recursivamente para encontrar el máximo en cada mitad.
// Combina las soluciones comparando los máximos de ambas mitades.
// Devuelve el número máximo encontrado.


function findLongestWord(text) {
    // TODO: Dividir el texto en palabras y almacenarlas en una variable
    const words = text.split(' ');
    console.log(words); // Mostrar las palabras en la consola
    let longestWord = ''; // Inicializar la palabra más larga
    // TODO: Recorrer el arreglo de palabras con un ciclo
    for (i=0; i<words.length; i++) {
        // TODO: Comparar la longitud de la palabra actual con la más larga
        if (words[i].length > longestWord.length) {
            // Actualizar la palabra más larga
            longestWord = words[i];
            }
    }

    // TODO: Retornar la palabra más larga encontrada
    return longestWord;

}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"