En total fueron 7 archivos los creados, entre los cuales están: events.ts, eventHandler.ts, exploration.ts, main.ts, planet.ts, rosouceCollection.ts, spaceship.ts.

events.ts
Este código sirve para manejar eventos aleatorios en una nave espacial, ejecutando el efecto asociado a cada evento.

eventHandler.ts
Este código exporta una función llamada `manejarEventoAleatorio`, que toma dos argumentos: una instancia de la clase `NaveEspacial` y una instancia de la clase `Evento`. Esta función imprime la descripción del evento en la consola y luego ejecuta el efecto asociado al evento en la nave espacial.

exploration.ts
Este código define un enum `Direccion` con las direcciones cardinales y una función `explorar` que imprime la dirección indicada en la consola.

planet.ts
Este código define un enum `TipoRecurso` con distintos tipos de recursos y una clase
`Planeta` con propiedades como nombre, tipo de recurso y peligros asociados.

rosouceCollection.ts,
Este código exporta una función `recolectarRecursos` que simula la recolección de recursos en un planeta dado, aumentando la capacidad de carga de una nave espacial en 10 unidades

spaceship.ts
Este código define una interfaz `NaveEspacial` con propiedades numéricas para describir la salud, capacidad de carga y velocidad de una nave.

main.ts
Es el código en donde sucede todo el juego.  

Este código simula un juego de exploración espacial. Crea una nave espacial con ciertas características y una lista de planetas con recursos y peligros. También incluye eventos aleatorios como tormentas de asteroides y encuentros alienígenas. El juego continúa explorando planetas, recolectando recursos y enfrentando eventos hasta que la salud de la nave llega a cero.



link del video; https://www.youtube.com/watch?v=h51wmm-O9Iw