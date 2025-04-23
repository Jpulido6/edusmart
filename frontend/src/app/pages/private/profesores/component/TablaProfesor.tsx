// import React from "react";
// import { DialogComponent } from "@/components/dialog/Dialog";
// import { Input } from "@/components/ui/input";
// import {
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table";
// import { Toaster } from "@/components/ui/toaster";
// import { Button } from "@/components/ui/button";
// import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from "@tanstack/react-table";
// import { ArrowUpDown, ChevronDown, MoreHorizontal, Table } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { Profesor } from "../domain/entities/profesor.entity"

// import FormProfesor from "./FormProfesor";
// import { Profesor } from "../domain/entities/profesor.entity";
// import FormAlumno from "../../alumnos/components/FormAlumnos";


// interface TablaProps {
//   data: Profesor[]
// }

// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

// export default function TablaProfesor() {
//   // const { table, columns } = useProfesor(data);
//   const [sorting, setSorting] = React.useState<SortingState>([]);
//   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
//     []
//   );
//   const [columnVisibility, setColumnVisibility] =
//     React.useState<VisibilityState>({});
//   const [rowSelection, setRowSelection] = React.useState({});



//   const prof: Profesor[] = []

//   const prof1 = new Profesor(1,
//     'dasd',
//     'a',
//     'sad',
//     'r')
//   const prof2 = new Profesor(1,
//     'dasd',
//     'a',
//     'sad',
//     'r')
//   prof.push(prof1, prof2)

//   const payments: Payment[] = [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "489e1d42",
//       amount: 125,
//       status: "processing",
//       email: "example@gmail.com",
//     },
//     // ...
//   ]




//   const column: ColumnDef<Payment>[] = [
//     // {
//     //   accessorKey: "nombres",
//     //   header: ({ column }) => {
//     //     return (
//     //       <Button
//     //         variant="ghost"
//     //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//     //       >
//     //         Nombres
//     //         <ArrowUpDown />
//     //       </Button>
//     //     );
//     //   },
//     //   cell: ({ row }) => (
//     //     <div className="capitalize">{row.getValue("nombres")}</div>
//     //   ),
//     // },
//     // {
//     //   accessorKey: "apellidos",
//     //   header: ({ column }) => {
//     //     return (
//     //       <Button
//     //         variant="ghost"
//     //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//     //       >
//     //         Apellidos
//     //         <ArrowUpDown />
//     //       </Button>
//     //     );
//     //   },
//     //   cell: ({ row }) => (
//     //     <div className="capitalize">{row.getValue("apellidos")}</div>
//     //   ),
//     // },
//     // {
//     //   accessorKey: "materia",
//     //   header: "Materia",
//     //   cell: ({ row }) => <div>{row.getValue("materia")}</div>,
//     // },
//     // {
//     //   id: "actions",
//     //   header: "Acciones",
//     //   enableHiding: false,
//     //   cell: ({ row }) => {
//     //     const name = row.original.nombres;
//     //     const apellido = row.original.apellidos;
//     //     return (
//     //       <DropdownMenu>
//     //         <DropdownMenuTrigger asChild>
//     //           <Button variant="ghost" className="h-8 w-8 p-0">
//     //             <span className="sr-only">Open menu</span>
//     //             <MoreHorizontal />
//     //           </Button>
//     //         </DropdownMenuTrigger>
//     //         <DropdownMenuContent align="end">
//     //           <DropdownMenuLabel>Acciones</DropdownMenuLabel>
//     //           <DialogComponent
//     //             className="w-full"
//     //             btnText="Info del alumno"
//     //             title="Info del alumno"
//     //             variant={"ghost"}
//     //             description="Descripción del alumno"
//     //             // buttonText="Crear"
//     //             buttonOnClick={() => { }}
//     //           >
//     //             {/* <ShowInfoAlumno
//     //                 nombre={name}
//     //                 apellido={apellido}
//     //                 grado={grado}
//     //                 calificacion={notas}
//     //               /> */}
//     //           </DialogComponent>
//     //           <DropdownMenuSeparator />
//     //           <DialogComponent
//     //             className="w-full"
//     //             btnText="Agregar Calificación"
//     //             title={"Agregar Calificación a: " + name + " " + apellido}
//     //             variant={"ghost"}
//     //             description="Complete los campos para agregar una calificación"
//     //             // buttonText="Crear"
//     //             buttonOnClick={() => { }}
//     //           >
//     //             <FormAlumno />
//     //           </DialogComponent>
//     //           <DropdownMenuSeparator />
//     //           <DialogComponent
//     //             btnText="Editar Alumno"
//     //             title={"Editar alumno: " + name + " " + apellido}
//     //             variant={"ghost"}
//     //             description="Complete los campos para agregar una calificación"
//     //             // buttonText="Crear"
//     //             buttonOnClick={() => { }}
//     //           >
//     //             <FormAlumno />
//     //           </DialogComponent>
//     //         </DropdownMenuContent>
//     //       </DropdownMenu>
//     //     );
//     //   },
//     // },
//     {
//       accessorKey: "status",
//       header: "Status",
//     },
//     {
//       accessorKey: "email",
//       header: "Email",
//     },
//     {
//       accessorKey: "amount",
//       header: "Amount",
//     },

//   ];

//   // const table = useReactTable({
//   //   data: data ? data : prof,
//   //   columns,
//   //   onSortingChange: setSorting,
//   //   onColumnFiltersChange: setColumnFilters,
//   //   getCoreRowModel: getCoreRowModel(),
//   //   getPaginationRowModel: getPaginationRowModel(),
//   //   getSortedRowModel: getSortedRowModel(),
//   //   getFilteredRowModel: getFilteredRowModel(),
//   //   onColumnVisibilityChange: setColumnVisibility,
//   //   onRowSelectionChange: setRowSelection,
//   //   state: {
//   //     sorting,
//   //     columnFilters,
//   //     columnVisibility,
//   //     rowSelection,
//   //   },
//   // });
//   const table = useReactTable({
//     payments,
//     column,
//     getCoreRowModel: getCoreRowModel(),
//   })

//   return (
//     // <div className="w-full">
//     //   <Toaster />

//     //   <div className="flex items-center py-4 gap-2">
//     //     <Input
//     //       placeholder="Buscar por nombres"
//     //       value={(table.getColumn("nombres")?.getFilterValue() as string) ?? ""}
//     //       onChange={(event) =>
//     //         table.getColumn("nombres")?.setFilterValue(event.target.value)
//     //       }
//     //       className="max-w-sm"
//     //     />
//     //     <DropdownMenu>
//     //       <DropdownMenuTrigger asChild>
//     //         <Button variant="outline" className="ml-auto">
//     //           Columnas <ChevronDown />
//     //         </Button>
//     //       </DropdownMenuTrigger>
//     //       <DropdownMenuContent align="end">
//     //         {table
//     //           .getAllColumns()
//     //           .filter((column) => column.getCanHide())
//     //           .map((column) => {
//     //             return (
//     //               <DropdownMenuCheckboxItem
//     //                 key={column.id}
//     //                 className="capitalize"
//     //                 checked={column.getIsVisible()}
//     //                 onCheckedChange={(value) =>
//     //                   column.toggleVisibility(!!value)
//     //                 }
//     //               >
//     //                 {column.id}
//     //               </DropdownMenuCheckboxItem>
//     //             );
//     //           })}
//     //       </DropdownMenuContent>
//     //     </DropdownMenu>
//     //     <div>
//     //       <DialogComponent
//     //         btnText="Agregar profesor"
//     //         title="Agregar profesor"
//     //         description="Complete los campos para agregar un profesor"
//     //         // buttonText="Crear"
//     //         buttonOnClick={() => { }}
//     //       >
//     //         <FormProfesor />
//     //       </DialogComponent>
//     //     </div>
//     //   </div>
//     //   <div className="rounded-md border">
//     //     <Table>
//     //       <TableHeader>
//     //         {table.getHeaderGroups().map((headerGroup) => (
//     //           <TableRow key={headerGroup.id}>
//     //             {headerGroup.headers.map((header) => {
//     //               return (
//     //                 <TableHead key={header.id}>
//     //                   {header.isPlaceholder
//     //                     ? null
//     //                     : flexRender(
//     //                       header.column.columnDef.header,
//     //                       header.getContext()
//     //                     )}
//     //                 </TableHead>
//     //               );
//     //             })}
//     //           </TableRow>
//     //         ))}
//     //       </TableHeader>
//     //       <TableBody>
//     //         {table.getRowModel().rows?.length ? (
//     //           table.getRowModel().rows.map((row) => (
//     //             <TableRow
//     //               key={row.id}
//     //               data-state={row.getIsSelected() && "selected"}
//     //             >
//     //               {row.getVisibleCells().map((cell) => (
//     //                 <TableCell key={cell.id}>
//     //                   {flexRender(
//     //                     cell.column.columnDef.cell,
//     //                     cell.getContext()
//     //                   )}
//     //                 </TableCell>
//     //               ))}
//     //             </TableRow>
//     //           ))
//     //         ) : (
//     //           <TableRow>
//     //             <TableCell
//     //               colSpan={columns.length}
//     //               className="h-24 text-center"
//     //             >
//     //               No hay resultados.
//     //             </TableCell>
//     //           </TableRow>
//     //         )}
//     //       </TableBody>
//     //     </Table>
//     //   </div>
//     //   <div className="flex items-center justify-end space-x-2 py-4">
//     //     <div className="flex-1 text-sm text-muted-foreground">
//     //       {table.getFilteredSelectedRowModel().rows.length} of{" "}
//     //       {table.getFilteredRowModel().rows.length} fila(s) seleccionadas.
//     //     </div>
//     //     <div className="space-x-2">
//     //       <Button
//     //         variant="outline"
//     //         size="sm"
//     //         onClick={() => table.previousPage()}
//     //         disabled={!table.getCanPreviousPage()}
//     //       >
//     //         Anterior
//     //       </Button>
//     //       <Button
//     //         variant="outline"
//     //         size="sm"
//     //         onClick={() => table.nextPage()}
//     //         disabled={!table.getCanNextPage()}
//     //       >
//     //         Siguiente
//     //       </Button>
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="rounded-md border">
//     <Table>
//       <TableHeader>
//         {table.getHeaderGroups().map((headerGroup) => (
//           <TableRow key={headerGroup.id}>
//             {headerGroup.headers.map((header) => {
//               return (
//                 <TableHead key={header.id}>
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                 </TableHead>
//               )
//             })}
//           </TableRow>
//         ))}
//       </TableHeader>
//       <TableBody>
//         {table.getRowModel().rows?.length ? (
//           table.getRowModel().rows.map((row) => (
//             <TableRow
//               key={row.id}
//               data-state={row.getIsSelected() && "selected"}
//             >
//               {row.getVisibleCells().map((cell) => (
//                 <TableCell key={cell.id}>
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))
//         ) : (
//           <TableRow>
//             <TableCell colSpan={column.length} className="h-24 text-center">
//               No results.
//             </TableCell>
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   </div>

//   );
// }


export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

interface DataTableProps{
  data: Profesor[]
}
export default function TablaProfesor({
  data,
}: DataTableProps) {

  const columns: ColumnDef<Profesor>[] = [
    {
      accessorKey: "nombres",
      header: "Nombres",
    },
    {
      accessorKey: "apellidos",
      header: "Apellidos",
    },
    {
      accessorKey: "materia",
      header: "Materia",
    },
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

