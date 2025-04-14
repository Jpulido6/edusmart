import React from "react";
import { alumnos } from "../config/config";

export const useAlumnos = () => {
  const [selectedGrado, setSelectedGrado] = React.useState<string>("6");

  const filterALumnosByGrado = ( grado: string) => {
    return alumnos.filter((alumno) => {
      return alumno.grado === grado;
    });
  };

  const alumnosByGrado = alumnos.filter((alumno) => {
    return alumno.grado === selectedGrado;
  });
  return {
    filterALumnosByGrado,
    selectedGrado,
    setSelectedGrado,
    alumnosByGrado,
  };
};
