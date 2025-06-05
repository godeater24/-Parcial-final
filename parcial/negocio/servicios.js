
function agregarProducto(nombre, precio, cantidad) {
  const nuevo = { nombre, precio, cantidad };
  const productos = obtenerProductos();
  productos.push(nuevo);
  guardarProductos(productos);
}

function obtenerProductos() {
  return JSON.parse(localStorage.getItem("productos") || "[]");
}

function eliminarProductoPorIndice(index) {
  const productos = obtenerProductos();
  productos.splice(index, 1);
  guardarProductos(productos);
}

function calcularTotal() {
  const productos = obtenerProductos();
  const totalCantidad = productos.reduce((sum, p) => sum + p.cantidad, 0);
  const valorTotal = productos.reduce((sum, p) => sum + (p.precio * p.cantidad), 0);
  return { totalCantidad, valorTotal };
}
