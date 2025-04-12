"use client";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DatePicker } from "./DayPickerEvent";
import { useStoreCalendar } from "../domain/useStoreCalendar";

export const FormSchema = z.object({
  title: z
    .string({
      required_error: "Título requerido",
    })
    .min(1),
  fecha: z.date({
    required_error: "Fecha de inicio requerida",
  }),
});
export default function EventForm() {
  // const { setHasEvent, hasEvent } = useCalendar();
  const setHasEvent = useStoreCalendar((state) => state.setHasEvent);
    const setIsLoading = useStoreCalendar((state) => state.setIsLoading);
  

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setHasEvent(false);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
      
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <Input
                onChange={field.onChange}
                value={field.value}
                placeholder="Escribe el título del evento"
                className=" pl-3 text-left font-normal"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fecha"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <DatePicker
                  label="Fecha del evento"
                  date={field.value}
                  setDate={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Crear</Button>
      </form>
    </Form>
  );
}
