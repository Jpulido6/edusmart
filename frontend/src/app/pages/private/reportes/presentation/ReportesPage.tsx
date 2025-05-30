
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import BoletinPdf, { BoletinPDFProps } from "../components/Boletin"
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function ReportesPage() {
  const subjects = [
    {
      area: "HUMANIDADES: LENGUA CASTELLANA E INGLÉS",
      subjects: [
        {
          name: "Lengua Castellana",
          p1: "3.0",
          p2: "3.9",
          p3: "",
          p4: "",
          p5: "",
          prom: "3.5",
          desc: "Bs"
        },
        {
          name: "Inglés",
          p1: "4.5",
          p2: "4.5",
          p3: "",
          p4: "",
          p5: "",
          prom: "4.5",
          desc: "A"
        }
      ]
    }
    // Agrega más áreas según sea necesario...
  ];
  const director = "Dr. Juan Perez";
  const grado = "Primaria";
  const periodo = "2023";
  const estudiante = "Juan Perez";

  return (
    // <PDFDownloadLink document={
    //   <BoletinPdf subjects={subjects} director={director} grade={grado} period={periodo} student={estudiante} />
    // }
    //   fileName="boletin.pdf"

    // >

    //   {({ loading }) => (loading ? <Button disabled>
    //     <Loader2 className="animate-spin" />
    //     Cargando
    //   </Button> : <Button>Descargar Boletines</Button>)}

    // </PDFDownloadLink>
    <PDFViewer  className="h-[80vh]">
      <BoletinPdf subjects={subjects} director={director} grade={grado} period={periodo} student={estudiante} />
    </PDFViewer>
  )
}