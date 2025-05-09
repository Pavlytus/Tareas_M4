
import { agregarProducto, mostrarLista } from "./modulo.js";

agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Leche");  // Este producto no debe agregarse de nuevo

mostrarLista();  // Debería mostrar "Leche" y "Pan"