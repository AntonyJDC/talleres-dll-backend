const datos = require("./datos.json");

/*
  Para correr este archivo, utilicen el comando
  $ node parcial1.js

  Para abrir el terminal desde la ubicacion de este folder, usen Ctrl + Shift + C.

  La variable importada "datos" contiene datos de estudiantes.
*/

/**
 * Implemente una funcion que reciba los datos de estudiantes y
 * retorne la cantidad de estudiantes en matricula condicional
 * (promedio por debajo de 3.3).
 *
 * Los 'estudiantes' vienen del archivo 'datos.json', que ya fue importado para ustedes.
 */
function puntoUno(estudiantes) {
  let estudiantesMatriculaCondicional = 0;

  for (let i = 0; i < estudiantes.length; i++) {
      let estudiante = estudiantes[i];
      let totalNotas = 0;

      for (let j = 0; j < estudiante.cursos.length; j++) {
          totalNotas += estudiante.cursos[j].nota;
      }

      let promedio = totalNotas / estudiante.cursos.length;

      if (promedio < 3.3) {
          estudiantesMatriculaCondicional++;
      }
  }

  return estudiantesMatriculaCondicional;
}

/**
 * Implemente una funcion que reciba los datos de estudiantes y
 * retorne una lista con el nombre completo de cada estudiante.
 *
 * Los 'estudiantes' vienen del archivo 'datos.json', que ya fue importado para ustedes.
 */
function puntoDos(estudiantes) {
    let nombres = [];
    for (let i = 0; i < estudiantes.length; i++) {
      nombres.push(estudiantes[i].nombre + " " + estudiantes[i].apellido);
    }
    return nombres;
  }
  