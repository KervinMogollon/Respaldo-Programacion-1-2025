import Cl_mMaterias from "./Cl_mMaterias.js";
import Cl_mEstudiantes from "./Cl_mEstudiantes.js";
import Cl_mInscritos from "./Cl_mInscritos.js";

export default class Cl_Semestre {
    constructor({ nombre }) {
        this.nombre = nombre

        this.materias = new Cl_mMaterias();
        this.estudiantes = new Cl_mEstudiantes();
        this.inscritos = new Cl_mInscritos
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    agregarEstudiante(estudiante) {
        let resultado = this.estudiantes.agregar(estudiante);
        if (resultado === true) {
            this.estudiantes.agregar(estudiante);
        }
        return resultado;
    }


    modificarEstudiante(cedula, datos) {
        let resultado = this.estudiantes.modificar(cedula, datos);
        if (resultado === true) {
            this.estudiantes.modificar(cedula, datos);
        }
        return resultado;
    }

    eliminarEstudiante(cedula) {
        let index = this.inscritos.indexDe(cedula);
        if (index != -1) {
            return "El estudiante tiene materias inscritas. Elimínelas antes!";
        }
        return this.estudiantes.eliminar(cedula);
    }

    agregarMateria(materia) {
        let resultado = this.materias.agregar(materia);
        if (resultado === true) {
            this.materias.agregar(materia);
        }
        return resultado;
    }

    modificarMateria(codigo, datos) {
        let resultado = this.materias.modificar(codigo, datos);
        if (resultado === true) {
            this.materias.modificar(codigo, datos);
        }
        return resultado;
    }

    eliminarMateria(codigo) {
        let index = this.inscritos.indexDe(codigo);
        if (index != -1) {
            return "La materia tiene estudiantes inscritos. Retírelos antes!";
        }
        return this.materias.eliminar(codigo);
    }

    inscribirMateria(datosInscribir) {
        let resultado = this.inscritos.inscribirMateria(datosInscribir);
        if (resultado === true) {
            this.inscritos.inscribirMateria(datosInscribir);
        }
        return resultado;
    }

    retirarMateria(datosInscribir) {
        let resultado = this.inscritos.retirarMateria(datosInscribir);
        if (resultado === true) {
            this.inscritos.retirarMateria(datosInscribir);
        }
        return resultado;
    }
}