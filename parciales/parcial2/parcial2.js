const datos = require("./datos.json");

function puntoUno(estudiantes) {
  const estudiantesInnova = estudiantes.filter((estudiante) => {
    return estudiante.info_extra_curriculares.filter((extra) => extra.nombre === "INNOVA").length > 0;
  });
  return estudiantesInnova.map((estudiante) => estudiante.info_personal.correo);

}

function puntoDos(estudiantes) {
  return Object.values(
      estudiantes.map(est => {
      const maxSemestre = Math.max(...est.info_matricula.map(mat => mat.semestre));

      const materiasMaxSemestre = est.info_matricula.filter(mat => mat.semestre === maxSemestre);

      const promedio = materiasMaxSemestre
        .map(mat => mat.notas.reduce((acc, nota) => acc + nota.nota * nota.peso, 0))
        .reduce((acc, sum) => acc + sum, 0) / materiasMaxSemestre.length;

      return { nombreCompleto: `${est.info_personal.nombre} ${est.info_personal.apellido}`, semestre: maxSemestre, promedio };
    })
    .reduce((acc, est) => {
      if (!acc[est.semestre] || acc[est.semestre].promedio < est.promedio) {
        acc[est.semestre] = est;
      }
      return acc;
    }, {}))
    .map(est => est.nombreCompleto);
}

function puntoTres(estudiantes) {
  const estudiantesInfo = estudiantes
    .filter(estudiante => estudiante.info_matricula.every(curso => curso.semestre === 1))
    .map(estudiante => ({
      gender: estudiante.info_personal.gender,
      titulo: estudiante.info_personal.gender === "M" ? "Sr." : "Sra.",
      nombreCompleto: `${estudiante.info_personal.nombre} ${estudiante.info_personal.apellido}`,
      primerNombre: estudiante.info_personal.nombre,
      primerApellido: estudiante.info_personal.apellido,
      altura: estudiante.info_personal.altura * 100,
      edad: estudiante.info_personal.nacimiento ? new Date().getFullYear() - new Date(estudiante.info_personal.nacimiento).getFullYear() : null,
      nacimiento: estudiante.info_personal.nacimiento,
      correo: estudiante.info_personal.correo,
      usuario: estudiante.info_personal.correo.split("@")[0],
    }));

  return estudiantesInfo;
}