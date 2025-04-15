import { DialogComponent } from "@/components/dialog/Dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import FormAlumno from "../../alumnos/components/FormAlumnos";
import { Profesor } from "../domain/entities/profesor.entity";

const columns: ColumnDef<Profesor>[] = [
  {
    accessorKey: "nombre",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombres
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("nombre")}</div>
    ),
  },
  {
    accessorKey: "apellido",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Apellido
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("apellido")}</div>
    ),
  },
  {
    accessorKey: "materia",
    header: "Materia",
    cell: ({ row }) => <div>{row.getValue("materia")}</div>,
  },
  {
    id: "actions",
    header: "Acciones",
    enableHiding: false,
    cell: ({ row }) => {
      const name = row.original.nombres;
      const apellido = row.original.apellidos;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DialogComponent
              className="w-full"
              btnText="Info del alumno"
              title="Info del alumno"
              variant={"ghost"}
              description="Descripción del alumno"
              // buttonText="Crear"
              buttonOnClick={() => {}}
            >
              {/* <ShowInfoAlumno
                  nombre={name}
                  apellido={apellido}
                  grado={grado}
                  calificacion={notas}
                /> */}
            </DialogComponent>
            <DropdownMenuSeparator />
            <DialogComponent
              className="w-full"
              btnText="Agregar Calificación"
              title={"Agregar Calificación a: " + name + " " + apellido}
              variant={"ghost"}
              description="Complete los campos para agregar una calificación"
              // buttonText="Crear"
              buttonOnClick={() => {}}
            >
              <FormAlumno />
            </DialogComponent>
            <DropdownMenuSeparator />
            <DialogComponent
              btnText="Editar Alumno"
              title={"Editar alumno: " + name + " " + apellido}
              variant={"ghost"}
              description="Complete los campos para agregar una calificación"
              // buttonText="Crear"
              buttonOnClick={() => {}}
            >
              <FormAlumno />
            </DialogComponent>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default columns
