import { useEffect, useState } from "react";

interface ShowInfoAlumnoProps {
  nombre: string;
  apellido: string;
  grado: string;
  calificacion: {
    nota1: string;
    nota2: string;
    nota3: string;
    nota4: string;
    notaFinal: string;
  };
}

export default function ShowInfoAlumno({
  nombre,
  apellido,
  grado,
  calificacion,
}: ShowInfoAlumnoProps) {
  const [isNota1, setIsNota1] = useState<number>(0);
  const [isNota2, setIsNota2] = useState<number>(0);
  const [isNota3, setIsNota3] = useState<number>(0);
  const [isNota4, setIsNota4] = useState<number>(0);
  const [isNotaFinal, setIsNotaFinal] = useState<number>(0);

  useEffect(() => {
    setIsNota1(parseFloat(calificacion.nota1));
    setIsNota2(parseFloat(calificacion.nota2));
    setIsNota3(parseFloat(calificacion.nota3));
    setIsNota4(parseFloat(calificacion.nota4));
    const porcentaje = (parseFloat(calificacion.nota1) +
      parseFloat(calificacion.nota2) +
      parseFloat(calificacion.nota3) +
      parseFloat(calificacion.nota4)) /
      4;
    

    calificacion.notaFinal = porcentaje.toString();

    setIsNotaFinal(parseFloat(calificacion.notaFinal));
  }, [calificacion]);
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {nombre} {apellido}
        </h2>
        <p className="text-sm text-muted-foreground">Grado: {grado}</p>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Nota 1: </p>
          <p className="text-sm font-bold">
            {isNota1 === null ? "-" : isNota1}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Nota 2: </p>
          <p className="text-sm font-bold">
            {isNota2 === null ? "-" : isNota2}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Nota 3: </p>
          <p className="text-sm font-bold">
            {isNota3 === null ? "-" : isNota3}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Nota 4: </p>
          <p className="text-sm font-bold">
            {isNota4 === null ? "-" : isNota4}
          </p>
        </div>
      </div>
      {/* <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Nota Final</p>
        <p className="text-sm font-bold">{isNotaFinal}</p>
      </div> */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Nota Final de la calificación
        </p>
        <p className="text-sm font-bold">{isNotaFinal}</p>
      </div>
    </div>
  );
}
