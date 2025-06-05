import {
  obtenerProductos,
  obtenerSuperiores,
  obtenerInferiores,
  calcularPrecioTotal
} from '../negocio/servicios.js';

function renderizarProductos(lista) {
  const contenedor = document.getElementById('productos');
  contenedor.innerHTML = '';
  lista.forEach(p => {
    const div = document.createElement('div');
    div.className = 'producto';
    div.innerHTML = `
      <h3>${p.nombre}</h3>
      <p>Categoría: ${p.categoria}</p>
      <p>Precio: $${p.precio}</p>
    `;
    contenedor.appendChild(div);
  });
}

function renderizarTotal() {
  const total = calcularPrecioTotal();
  document.getElementById('total').innerText = `Total: $${total}`;
}

document.getElementById('btnTodos').addEventListener('click', () => {
  renderizarProductos(obtenerProductos());
  renderizarTotal();
});

document.getElementById('btnSuperiores').addEventListener('click', () => {
  renderizarProductos(obtenerSuperiores());
});

document.getElementById('btnInferiores').addEventListener('click', () => {
  renderizarProductos(obtenerInferiores());
});

window.onload = () => {
  renderizarProductos(obtenerProductos());
  renderizarTotal();
};
