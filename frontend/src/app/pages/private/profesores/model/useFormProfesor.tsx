import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProfesor } from "../service/profesor.services";
import { profesorDto } from "../domain/dto/profesor.dto";

const formSchema = z.object({
  nombres: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  apellidos: z.string().min(2, {
    message: "El apellido debe tener al menos 2 caracteres.",
  }),
  email: z.string().min(2, {
    message: "El apellido debe tener al menos 2 caracteres.",
  }),
  especialiad: z.string().min(1, {
    message: "El grado debe tener al menos 1 carácter.",
  }),
});

export const useFormProfesor = () => {
  const toast = useToast();
  const { mutate, isPending } = useMutation({
    mutationFn: createProfesor,
    onSuccess: (data) => {
      console.log(data);
      toast.toast({
        title: "Registro exitoso",
        description: "El Profesor ha sido registrado correctamente.",
        action: <ToastAction altText="Cerrar">Cerrar</ToastAction>,
      });
    },
    onError: (error) => {
      toast.toast({
        title: "Error",
        description: `Hay un error en ${error}`,
        action: <ToastAction altText="Cerrar">Cerrar</ToastAction>,
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Aquí iría la lógica para enviar los datos al servidor
    const data: profesorDto = {
      nombres: values.nombres,
      apellidos: values.apellidos,
      email: values.email,
      especialidad: values.especialiad,
    };
    mutate(data);
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombres: "",
      apellidos: "",
      email: "",
      especialiad: "",
    },
  });

  return {
    isPending,
    form,
    onSubmit,
  };
};
