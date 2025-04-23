import { Response } from "@/config/interfaces/interfaces";
import { Profesor } from "../domain/entities/profesor.entity";
import { IProfesorRes } from "../service/profesor.services";

export const responseToProfesor = (prof: Response<IProfesorRes[]>): Profesor[] => {

    const profesor: Profesor[] = []
    prof.data.map((res) => {
        const prof = new Profesor(
            res.props.id,
            res.props.nombres,
            res.props.apellidos,
            res.props.email,
            res.props.especialidad
        )
        profesor.push(prof)
    })

    return profesor

}