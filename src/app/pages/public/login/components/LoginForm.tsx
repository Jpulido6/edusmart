import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useLogin from "../view-model/useLogin";
import { Link } from "react-router";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {

    const { email, password, handleChangeEmail, handleChangePassword, handleLogin } = useLogin();
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Iniciar sesión</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Inicia sesión con tu cuenta de correo electrónico
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@ejemplo.com" required value={email} onChange={handleChangeEmail} />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Contraseña</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Olvidaste tu contraseña?
            </a>
          </div>
          <Input id="password" type="password" required value={password} onChange={handleChangePassword} />
        </div>
        <Button type="submit" className="w-full" onClick={handleLogin}>
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Tienes una cuenta?{" "}
        <Link  to="/register" className="underline underline-offset-4">
          Regístrate
        </Link>
      </div>
    </form>
  );
}
