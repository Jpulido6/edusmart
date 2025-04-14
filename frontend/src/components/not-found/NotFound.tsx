import { Link } from "react-router";
interface NotFoundProps {
  text?: string;
}
export default function NotFound({ text }: NotFoundProps) {
  return (
    <div className="flex items-center justify-center gap-4 min-h-screen">
      <div className="font-bold border-r-2 text-6xl p-2">404</div>
      <div className="">
        <p className="text-2xl font-bold">Página no encontrada</p>
        <p className="text-m">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
          <span className="text-muted-foreground">{text ? text : " "}</span>
        </p>
        <Link
          to="/"
          className="text-center font-bold text-primary-500 hover:text-primary-600 transition-colors duration-200 ease-in-out"
        >
          {" "}
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
