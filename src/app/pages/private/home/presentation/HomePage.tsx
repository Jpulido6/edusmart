import CardDashboard from "../components/CardDashboard";
import { Activity, BookOpen, LineChart, Link, Plus, Users } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { DashboardShell } from "../components/DashboardShell";
import { DashboardHeader } from "../components/DashboardHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecentNotes } from "../components/RecentNotes";
// import { GradeDistribution } from "../components/GradeDistribution";
import { StudentsList } from "../components/StudentsList";
import Loading from "@/components/loading/Loading";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("timeout");
      setIsLoading(false);
    }, 5000);
  }, []);
  const cardDashboards = [
    {
      title: "Alumnos",
      description: "Gestión de alumnos",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
      number: 10,
    },
    {
      title: "Notas",
      description: "Gestión de notas",
      icon: <BookOpen className="h-4 w-4 text-muted-foreground" />,
      number: 10,
    },
    {
      title: "Calificaciones",
      description: "Gestión de calificaciones",
      icon: <Activity className="h-4 w-4 text-muted-foreground" />,
      number: 10,
    },
  ];
  return (
    <>
      <DashboardShell>
        <DashboardHeader
          heading="Dashboard"
          text="Gestión de alumnos notas y calificaciones"
        >
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <LineChart className="mr-2 h-4 w-4" />
              Reportes
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Nueva Nota
            </Button>
          </div>
        </DashboardHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cardDashboards.map((cardDashboard, i) => (
            <CardDashboard
              key={i}
              icon={cardDashboard.icon}
              number={cardDashboard.number}
              title={cardDashboard.title}
            ></CardDashboard>
          ))}
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Vista General</TabsTrigger>
            <TabsTrigger value="students">Estudiantes</TabsTrigger>
            <TabsTrigger value="grades">Calificaciones</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            {isLoading ? (
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ) : (
              <>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Notas Recientes</CardTitle>
                      <CardDescription>
                        Has creado 12 notas en los últimos 7 días
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentNotes />
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/notes">Ver todas las notas</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Tareas Pendientes</CardTitle>
                      <CardDescription>
                        Tareas que requieren tu atención
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              Calificar exámenes de Matemáticas
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Vence hoy
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              Preparar reporte de progreso
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Vence en 2 días
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              Actualizar plan de estudios
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Vence en 3 días
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              Reunión con padres
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Vence en 7 días
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/tasks">Ver todas las tareas</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </>
            )}
          </TabsContent>
          <TabsContent value="students" className="space-y-4">
            {isLoading ? (
              <Loading size="sm" />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Estudiantes</CardTitle>
                  <CardDescription>
                    Lista de estudiantes registrados en el sistema
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <StudentsList />
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/students">Ver todos los estudiantes</Link>
                  </Button>
                </CardFooter>
              </Card>
            )}
            {/* <Card>
              <CardHeader>
                <CardTitle>Estudiantes</CardTitle>
                <CardDescription>
                  Lista de estudiantes registrados en el sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <StudentsList />
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/students">Ver todos los estudiantes</Link>
                </Button>
              </CardFooter>
            </Card> */}
          </TabsContent>
          <TabsContent value="grades" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Calificaciones Recientes</CardTitle>
                <CardDescription>
                  Últimas calificaciones registradas en el sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 text-sm font-medium text-muted-foreground">
                    <div>Estudiante</div>
                    <div>Curso</div>
                    <div>Calificación</div>
                    <div>Fecha</div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4 text-sm">
                    <div>Ana García</div>
                    <div>Matemáticas</div>
                    <div>9.5</div>
                    <div>12/03/2025</div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4 text-sm">
                    <div>Carlos López</div>
                    <div>Ciencias</div>
                    <div>8.7</div>
                    <div>11/03/2025</div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4 text-sm">
                    <div>María Rodríguez</div>
                    <div>Historia</div>
                    <div>7.8</div>
                    <div>10/03/2025</div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4 text-sm">
                    <div>Juan Pérez</div>
                    <div>Literatura</div>
                    <div>9.2</div>
                    <div>09/03/2025</div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4 text-sm">
                    <div>Laura Martínez</div>
                    <div>Matemáticas</div>
                    <div>8.5</div>
                    <div>08/03/2025</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/grades">Ver todas las calificaciones</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </DashboardShell>
    </>
  );
}
