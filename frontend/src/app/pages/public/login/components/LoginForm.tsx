import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useLogin from "../view-model/useLogin";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Toaster } from "@/components/ui/toaster";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const { form, onSubmit, isPending } = useLogin();
  return (
    // <form className={cn("flex flex-col gap-6", className)} {...props}>
    //   <div className="flex flex-col items-center gap-2 text-center">
    //     <h1 className="text-2xl font-bold">Iniciar sesión</h1>
    //     <p className="text-balance text-sm text-muted-foreground">
    //       Inicia sesión con tu cuenta de correo electrónico
    //     </p>
    //   </div>
    //   <div className="grid gap-6">
    //     <div className="grid gap-2">
    //       <Label htmlFor="email">Email</Label>
    //       <Input
    //         id="email"
    //         type="email"
    //         placeholder="m@ejemplo.com"
    //         required
    //         value={email}
    //         onChange={handleChangeEmail}
    //       />
    //     </div>
    //     <div className="grid gap-2">
    //       <div className="flex items-center">
    //         <Label htmlFor="password">Contraseña</Label>
    //         <a
    //           href="#"
    //           className="ml-auto text-sm underline-offset-4 hover:underline"
    //         >
    //           Olvidaste tu contraseña?
    //         </a>
    //       </div>
    //       <Input
    //         id="password"
    //         type="password"
    //         required
    //         value={password}
    //         onChange={handleChangePassword}
    //       />
    //     </div>
    //     {isPending ? (
    //       <>
    //         <Button disabled>
    //           <Loader2 className="animate-spin" />
    //          Cargando
    //         </Button>
    //       </>
    //     ) : (
    //       <>
    //         <Button type="submit" className="w-full" onClick={onSubmit}>
    //           Login
    //         </Button>
    //       </>
    //     )}
    //   </div>
    //   <div className="text-center text-sm">
    //     No tienes una cuenta?{" "}
    //     <Link
    //       to={ROUTES.PUBLIC.REGISTER}
    //       className="underline underline-offset-4"
    //     >
    //       Regístrate
    //     </Link>
    //   </div>
    // </form>
    <Form {...form}>
      <Toaster/>
      <form
        className={cn("flex flex-col gap-6", className)}
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Iniciar sesión</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Inicia sesión con tu cuenta de correo electrónico
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password">Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Contraseña" {...field}/>
                  </FormControl>
                </FormItem>
              )}
            />
            {isPending ? (
              <>
                <Button disabled>
                  <Loader2 className="animate-spin" />
                  Cargando
                </Button>
              </>
            ) : (
              <>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}
