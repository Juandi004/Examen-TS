export enum Direccion {
    Norte,
    Sur,
    Este,
    Oeste,
}

export function explorar(direccion: Direccion): void {
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
