const datos = require("./datos.json");

function puntoUno(estudiantes) {
  const estudiantesInnova = estudiantes.filter((estudiante) => {
    return estudiante.info_extra_curriculares.filter((extra) => extra.nombre === "INNOVA").length > 0;
  });
  return estudiantesInnova.map((estudiante) => estudiante.info_personal.correo);

}