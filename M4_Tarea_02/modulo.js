
// Lista vacía para almacenar productos
let listaDeCompras = [];

// Agrega un producto a la lista
let agregarProducto = (nombre) => {
  let existe = listaDeCompras.some(producto => producto.nombre === nombre);
  if (!existe) {
    listaDeCompras.push({ nombre });
  } else {
    console.log(`⚠️ El producto "${nombre}" ya está en la lista.`);
  }
};

// Elimina un producto por nombre
let eliminarProducto = (nombre) => {
  listaDeCompras = listaDeCompras.filter(producto => producto.nombre !== nombre);
};

// Muestra todos los productos en la consola
let mostrarLista = () => {
  console.log("🛒 Lista de Compras:");
  
  if (listaDeCompras.length === 0) {
    console.log("La lista está vacía.");
    return;
  }

  listaDeCompras.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto.nombre}`);
  });
};

// Exportar funciones para uso externo (por ejemplo, en otro módulo)
export { agregarProducto, eliminarProducto, mostrarLista };