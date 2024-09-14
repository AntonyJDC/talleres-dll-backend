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
  
/**
 * Implemente una funcion que reciba los datos de estudiantes y
 * retorne una lista con los id de cada estudiante unicamente, y tras
 * ser ordenados ascendentemente por altura.
 *
 * Los 'estudiantes' vienen del archivo 'datos.json', que ya fue importado para ustedes.
 */
function puntoTres(estudiantes) {
    let ids = [];
    for (let i = 0; i < estudiantes.length; i++) {
      ids.push(estudiantes[i]._id);
    }
    return ids.sort((a, b) => a - b);
  }

/**
 * Implemente una funcion que reciba una lista de numeros y
 * retorne el promedio de la lista.
 */
function puntoCuatro(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
  
    return suma / numeros.length;
  }
  
  
  /**
   * Implemente una funcion que reciba una palabra y retorne si
   *  la palabra es palindroma o no.
   */
  function puntoCinco(palabra) {
    let palabraInvertida = puntoSeis(palabra);
    if (palabra === palabraInvertida) {
      return true;
    }
    return false;
  }

  /**
 * Implemente una funcion que reciba una palabra y la invierta.
 */
function puntoSeis(palabra) {
    let palabraInvertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
      palabraInvertida += palabra[i];
    }
  
    return palabraInvertida;
  }
  
  /**
   * Implemente una funcion que reciba una lista de objetos cualquiera
   * y un parametro y retorne la lista de objetos ordenada ascendemente
   * segun el valor del parametro.
   */
  
  
  function puntoSiete(lista, parametro) {
    return lista.sort((a, b) => a[parametro] - b[parametro]);
  }
  
  module.exports = {
    puntoUno,
    puntoDos,
    puntoTres,
    puntoCuatro,
    puntoCinco,
    puntoSeis,
    puntoSiete,
  };
  