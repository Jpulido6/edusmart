import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

export function StudentsList() {
  const students = [
    {
      id: 1,
      name: "Ana García",
      email: "ana.garcia@ejemplo.com",
      grade: "10°",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AG",
    },
    {
      id: 2,
      name: "Carlos López",
      email: "carlos.lopez@ejemplo.com",
      grade: "11°",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "CL",
    },
    {
      id: 3,
      name: "María Rodríguez",
      email: "maria.rodriguez@ejemplo.com",
      grade: "9°",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MR",
    },
    {
      id: 4,
      name: "Juan Pérez",
      email: "juan.perez@ejemplo.com",
      grade: "12°",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JP",
    },
    {
      id: 5,
      name: "Laura Martínez",
      email: "laura.martinez@ejemplo.com",
      grade: "10°",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "LM",
    },
  ]

  return (
    <div className="space-y-4">
      {students.map((student) => (
        <div key={student.id} className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={student.avatar} alt={student.name} />
              <AvatarFallback>{student.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{student.name}</p>
              <p className="text-sm text-muted-foreground">{student.email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-sm text-muted-foreground">{student.grade}</div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Más opciones</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

