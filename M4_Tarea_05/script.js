// Ejercicio 1: Recursividad
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// TODO: Completa esta función para que busque recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista
    if (gifts[index] === giftName) {
            return `${giftName} está en la posición ${index}.`;
        }
        if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
    return findGift(gifts, giftName, index + 1);
}
// Ejemplo de uso
console.log(findGift(gifts, "Lego"));
console.log(findGift(gifts, "Camión"));

