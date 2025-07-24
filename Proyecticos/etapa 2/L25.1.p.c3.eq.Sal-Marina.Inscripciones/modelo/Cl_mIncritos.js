import Cl_mInscripcion from "./Cl_mInscripcion.js"

export default class Cl_mInscritos {
    constructor() {
        this.array = []
    }

    indexEstudiante(cedula) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i].cedula == cedula) {
                return i;
            }
        }
        return -1;
    }

    inscribirMateria({ cedula, codigo }) {
        let index = this.indexEstudiante(cedula);
        if (index === -1) {
            let nuevaInscripcion = new Cl_mInscripcion(cedula);
            nuevaInscripcion.agregar(codigo);
            this.array.push({ cedula: cedula, inscripcion: nuevaInscripcion });
        } else {
            this.array[index].inscripcion.agregar(codigo);
        }
    }

    listado(dataEstudiantes) {
        return this.array.map(e => {
            let estudiante = dataEstudiantes.find(dataEstudiantes =>
                dataEstudiantes.cedula === e.cedula
            );
            if (estudiante) {
                return {
                    cedula: estudiante.cedula,
                    nombre: estudiante.nombre,
                    cntMaterias: e.inscripcion.materias.length,
                };
            }
            else
                return null
        }).filter(estudiante => estudiante !== null);
    }
}