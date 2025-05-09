
//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
  ];
  
  // 1. Filtrar productos que cuesten menos de $100
  let productosBaratos = productos.filter(producto => producto.precio < 100);
  console.log("🟢 Productos con precio < $100:");
  console.log(productosBaratos);
  
  // 2. Ordenar esos productos alfabéticamente por su nombre
  let productosOrdenados = [...productosBaratos].sort((a, b) => a.nombre.localeCompare(b.nombre));
  console.log("🔤 Productos ordenados alfabéticamente:");
  console.log(productosOrdenados);
  
  // 3. Crear un nuevo arreglo con solo los nombres de los productos
  let nombresProductos = productosOrdenados.map(producto => producto.nombre);
  console.log("📋 Nombres de los productos ordenados:");
  console.log(nombresProductos);
  
  // 4. (Opcional) Calcular el total de precios de productos baratos con reduce
  let totalBaratos = productosBaratos.reduce((acc, producto) => acc + producto.precio, 0);
  console.log("💰 Total del precio de productos < $100:");
  console.log(`$${totalBaratos}`);