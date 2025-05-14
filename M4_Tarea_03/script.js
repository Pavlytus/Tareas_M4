
// Crea un arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría. Puedes ver el código de ejemplo para este paso en el siguiente enlace:
// Usa filter() para obtener los productos que cuesten menos de $100.
// Usa sort() para ordenar esos productos alfabéticamente por su nombre.
// Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
// Muestra los resultados de la aplicación de cada métiodo en consola.
// (Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.

//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
  ];
  
// 1. Filtrar productos que cuesten menos de $100

let productosBaratos = productos.filter((valor)=>valor.precio < 100);
console.log("🟢 Productos baratos con precio < $100:");
console.log(productosBaratos);

// 2. Ordenar esos productos alfabéticamente por su nombre
let productosOrdenados = productosBaratos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("🔤 Productos ordenados alfabéticamente:");
console.log(productosOrdenados);

// 3. Crear un nuevo arreglo con solo los nombres de los productos
let nombresProductos = productos.map((valor)=>valor.nombre);
console.log("📋 Productos en existencia:");
console.log(nombresProductos);

// 4. (Opcional) Calcular el total de precios de productos baratos con reduce
let totalBaratos = productosBaratos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log("💰 Total del precio de productos baratos:");
console.log(`$${totalBaratos}`);

let VerificarExistencia = productos.some((valor)=>valor.nombre === "Camisteta");
console.log("🔍 ¿Tienes camisetas?");
if (VerificarExistencia){
  console.log("Sí, tenemos camisetas.")}
else{
  console.log("No, no tenemos camisetas.")}


  
  
  
 
  