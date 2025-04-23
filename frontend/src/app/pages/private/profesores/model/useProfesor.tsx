import React from "react";
import {
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { columns } from "../config/config";
import { Profesor } from "../domain/entities/profesor.entity";


export const useProfesor = (data: Profesor[]) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

 

  const prof: Profesor[] = []

  const prof1 = new Profesor(1,
    'dasd',
    'a',
    'sad',
    'r')
  const prof2 = new Profesor(1,
    'dasd',
    'a',
    'sad',
    'r')
  prof.push(prof1, prof2)



  const table = useReactTable({
    data: data ? data : prof,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return {
    table,
    columns,
  };
};
