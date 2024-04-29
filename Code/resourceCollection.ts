import { NaveEspacial } from './spaceship';
import { Planeta } from './planet';

export function recolectarRecursos(planeta: Planeta, nave: NaveEspacial): void {
    console.log(`Recolectando recursos en ${planeta.nombre}...`);
    nave.capacidadCarga += 10;
    console.log(`Recursos recolectados en ${planeta.nombre}. Capacidad de carga aumentada a ${nave.capacidadCarga}.`);
}
