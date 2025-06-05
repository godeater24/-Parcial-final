
const productos = [];
const pedidos = [];

function registrarProducto() {
    const nombre = document.getElementById('prodNombre').value;
    const stock = parseInt(document.getElementById('prodStock').value);
    productos.push({ nombre, stock });
    actualizarListaStock();
}

function registrarPedido() {
    const nombre = document.getElementById('pedidoNombre').value;
    const cantidad = parseInt(document.getElementById('pedidoCantidad').value);
    const producto = productos.find(p => p.nombre === nombre);
    if (producto && producto.stock >= cantidad) {
        producto.stock -= cantidad;
        pedidos.push({ nombre, cantidad, fecha: new Date() });
        actualizarListaStock();
    } else {
        alert("Producto no encontrado o stock insuficiente.");
    }
}

function actualizarListaStock() {
    const lista = document.getElementById('listaStock');
    lista.innerHTML = "";
    productos.forEach(p => {
        const li = document.createElement('li');
        li.textContent = `${p.nombre} - Stock: ${p.stock}`;
        lista.appendChild(li);
    });
}

function mostrarStockBajo() {
    const reporte = document.getElementById('reporte');
    reporte.innerHTML = "";
    productos.filter(p => p.stock < 5).forEach(p => {
        const li = document.createElement('li');
        li.textContent = `¡Stock bajo! ${p.nombre} - ${p.stock}`;
        reporte.appendChild(li);
    });
}

function mostrarVentasRecientes() {
    const reporte = document.getElementById('reporte');
    reporte.innerHTML = "";
    pedidos.slice(-5).forEach(p => {
        const li = document.createElement('li');
        li.textContent = `Venta: ${p.nombre} - Cantidad: ${p.cantidad} - Fecha: ${p.fecha.toLocaleString()}`;
        reporte.appendChild(li);
    });
}
