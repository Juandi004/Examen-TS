// eventHandler.ts
import { NaveEspacial } from './spaceship';
import { Evento } from './event';

export function manejarEventoAleatorio(nave: NaveEspacial, evento: Evento): void {
    console.log(`Evento: ${evento.descripcion}`);
    evento.efecto(nave);
}