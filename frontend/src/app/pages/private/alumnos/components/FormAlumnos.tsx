import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";


const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  apellido: z.string().min(2, {
    message: "El apellido debe tener al menos 2 caracteres.",
  }),
  grado: z.string().min(1, {
    message: "El grado debe tener al menos 1 carácter.",
  }),
  // fechaNacimiento: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
  //   message: "Ingrese una fecha válida en formato YYYY-MM-DD.",
  // }),
  // email: z.string().email({
  //   message: "Ingrese un correo electrónico válido.",
  // }),
  // identificacion: z.string().min(5, {
  //   message: "El número de identificación debe tener al menos 5 caracteres.",
  // }),
});

export default function FormAlumno() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Aquí iría la lógica para enviar los datos al servidor
    console.log(values);
    toast({
      title: "Registro exitoso",
      description: "El alumno ha sido registrado correctamente.",
    });
  }

  return (  
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Juan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="apellido"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input placeholder="Pérez" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField control={form.control} name="grado" render={({ field }) => (
            <FormItem>
              <FormLabel>Grado</FormLabel>
              <FormControl>
                <Input type="number" placeholder="6" {...field} value={field.value}  onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
          {/* <FormField
            control={form.control}
            name="fechaNacimiento"
            render={({ field }) => (
              <FormItem>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !z.date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      { date  ? format(date, "PPP")  : <span>Fecha de Nacimiento</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      {...field}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={() => (
              <FormItem>
                <SelectComponent/>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="identificacion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de Identificación</FormLabel>
                <FormControl>
                  <Input placeholder="12345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <Button type="submit" className="w-full dark:bg-primary-600">
            Registrar Alumno
          </Button>
        </form>
      </Form>
  );
}
