import { NaveEspacial } from './spaceship';
import { Planeta, TipoRecurso } from './planet';
import { Evento } from './event';
import { recolectarRecursos } from './resourceCollection';
import { manejarEventoAleatorio } from './eventHandler';
import { Direccion } from './exploration';


const nave: NaveEspacial = {
    salud: 100,
    capacidadCarga: 0,
    velocidad: 50,
};


const planetas: Planeta[] = [
    new Planeta("Tierra", TipoRecurso.Orgánico, ['Tormentas', 'Terremotos']),
    new Planeta("Marte", TipoRecurso.Mineral, ['Polvo', 'Radiación']),
    new Planeta("Júpiter", TipoRecurso.Gas, ['Tormentas de gas', 'Radiación']),
];

const eventosAleatorios: Evento[] = [
    new Evento("Tormenta de asteroides. Daño al casco.", (nave: NaveEspacial) => {
        nave.salud -= 10;
        console.log("¡Tormenta de asteroides! Daño al casco. Salud disminuida.");
    }),
    new Evento("Encuentro alienígena. Intercambio con extraterrestres.", (nave: NaveEspacial) => {
        console.log("¡Encuentro alienígena! Intercambio con extraterrestres.");
    }),
];

function obtenerElementoAleatorio<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

function jugar(): void {
    console.log("¡Bienvenido al Simulador de Exploración Espacial!");

    while (nave.salud > 0) {
        
        const planetaAleatorio = obtenerElementoAleatorio(planetas);
        console.log(`Explorando el planeta ${planetaAleatorio.nombre}...`);

        recolectarRecursos(planetaAleatorio, nave);

        const eventoAleatorio = obtenerElementoAleatorio(eventosAleatorios);
        manejarEventoAleatorio(nave, eventoAleatorio);

        console.log(`Salud actual de la nave: ${nave.salud}`);

        const direccion = obtenerElementoAleatorio(Object.values(Direccion)) as Direccion;
        switch (direccion) {
            case Direccion.Norte:
                console.log('Navegando hacia el Norte...');
                break;
            case Direccion.Sur:
                console.log('Navegando hacia el Sur...');
                break;
            case Direccion.Este:
                console.log('Navegando hacia el Este...');
                break;
            case Direccion.Oeste:
                console.log('Navegando hacia el Oeste...');
                break;
            default:
                console.log('Dirección no válida.');
        }
    }

    console.log("¡La nave ha sido destruida! Fin del juego.");
}

jugar();
