import { ROUTES } from "@/app/routes/routesConfig";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "react-day-picker";
import { Link } from "react-router";
import { Label } from "recharts";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Crear cuenta</CardTitle>
          <CardDescription>Ingresa tus datos para registrarte</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Nombre</Label>
            <Input id="name" placeholder="Tu nombre" required />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@ejemplo.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Contraseña</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            Registrarse
          </Button>
        </CardFooter>
        <div className="text-center text-sm p-2">
          Tienes una cuenta?{" "}
          <Link
            to={ROUTES.PUBLIC.LOGIN}
            className="underline underline-offset-4"
          >
            Iniciar sesion
          </Link>
        </div>
      </Card>
    </div>
  );
}
