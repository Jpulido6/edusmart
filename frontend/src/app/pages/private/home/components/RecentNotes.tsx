import { FileText, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";

export function RecentNotes() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mr-4">
          <FileText className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1 flex-1">
          <p className="text-sm font-medium leading-none">
            Examen Final de Matemáticas
          </p>
          <p className="text-sm text-muted-foreground">
            Notas sobre el examen final del primer semestre
          </p>
        </div>
        <Button variant="ghost" size="icon">
          <Pencil className="h-4 w-4" />
          <span className="sr-only">Editar</span>
        </Button>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mr-4">
          <FileText className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1 flex-1">
          <p className="text-sm font-medium leading-none">
            Proyecto de Ciencias
          </p>
          <p className="text-sm text-muted-foreground">
            Instrucciones para el proyecto final de ciencias
          </p>
        </div>
        <Button variant="ghost" size="icon">
          <Pencil className="h-4 w-4" />
          <span className="sr-only">Editar</span>
        </Button>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mr-4">
          <FileText className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1 flex-1">
          <p className="text-sm font-medium leading-none">Reunión de Padres</p>
          <p className="text-sm text-muted-foreground">
            Agenda para la próxima reunión con padres de familia
          </p>
        </div>
        <Button variant="ghost" size="icon">
          <Pencil className="h-4 w-4" />
          <span className="sr-only">Editar</span>
        </Button>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mr-4">
          <FileText className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1 flex-1">
          <p className="text-sm font-medium leading-none">Plan de Estudios</p>
          <p className="text-sm text-muted-foreground">
            Actualización del plan de estudios para el próximo semestre
          </p>
        </div>
        <Button variant="ghost" size="icon">
          <Pencil className="h-4 w-4" />
          <span className="sr-only">Editar</span>
        </Button>
      </div>
    </div>
  );
}
