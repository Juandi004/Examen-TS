import { NaveEspacial } from "./spaceship";

export class Evento {
    constructor(public descripcion: string, public efecto: (nave: NaveEspacial) => void) {}
}