export enum TipoRecurso {
    Mineral,
    Gas,
    Orgánico,
}

export class Planeta {
    constructor(public nombre: string, public tipoRecurso: TipoRecurso, public peligros: string[]) {}
}