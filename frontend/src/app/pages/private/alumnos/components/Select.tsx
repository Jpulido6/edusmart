import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAlumnos } from "../view-model/useAlumnos";
export const SelectComponent = () => {
  const grados: string[] = ["6", "7", "8", "9", "10", "11"];

  const { setSelectedGrado } = useAlumnos();

  return (
    <Select onValueChange={setSelectedGrado}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Seleccione un grado" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Grado</SelectLabel>
          {grados.map((grado) => (
            <SelectItem key={grado} value={grado}>
              {grado}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
