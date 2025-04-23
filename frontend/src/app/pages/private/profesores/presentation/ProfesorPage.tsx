import { useQuery } from "@tanstack/react-query";
import TablaProfesor from "../component/TablaProfesor";
import { findProfesor } from "../service/profesor.services";

export default function ProfesorPage() {

  const { data } = useQuery({
    queryKey: ['profesores'],
    queryFn: findProfesor
  })

  return (
    <TablaProfesor data={data ? data : []} />
  )
}