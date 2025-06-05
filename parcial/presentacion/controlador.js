
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formProducto");
  const lista = document.getElementById("listaProductos");
  const resumen = document.getElementById("resumen");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);
    agregarProducto(nombre, precio, cantidad);
    mostrarProductos();
    form.reset();
  });

  function mostrarProductos() {
    const productos = obtenerProductos();
    lista.innerHTML = productos.map((p, i) =>
      `<p>${p.nombre} - $${p.precio} x ${p.cantidad}
       <button onclick="eliminarProducto(${i})">Eliminar</button></p>`
    ).join("");

    const total = calcularTotal();
    resumen.innerHTML = `<p>Total productos: ${total.totalCantidad}, Valor total: $${total.valorTotal}</p>`;
  }

  window.eliminarProducto = (index) => {
    eliminarProductoPorIndice(index);
    mostrarProductos();
  };

  mostrarProductos();
});
