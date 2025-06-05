import { datos } from '../datos/db.js';

export function obtenerProductos() {
  return datos.filter(p => p.estado === 'activo');
}

export function obtenerSuperiores() {
  return datos.filter(p => p.estado === 'activo' && p.categoria === 'Superior');
}

export function obtenerInferiores() {
  return datos.filter(p => p.estado === 'activo' && p.categoria === 'Inferior');
}

export function calcularPrecioTotal() {
  return datos
    .filter(p => p.estado === 'activo')
    .reduce((total, p) => total + p.precio, 0);
}
