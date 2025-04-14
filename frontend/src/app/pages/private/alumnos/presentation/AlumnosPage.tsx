import { SelectComponent } from "../components/Select";
import { DataTableAlumnos } from "../components/Tabla";
import { useAlumnos } from "../view-model/useAlumnos";

export default function AlumnosPage() {
  const { alumnosByGrado} = useAlumnos();


  return (
    <div className="flex flex-col gap-2">
      <SelectComponent />
      <DataTableAlumnos alumnos={alumnosByGrado} />
    </div>
  );
}
