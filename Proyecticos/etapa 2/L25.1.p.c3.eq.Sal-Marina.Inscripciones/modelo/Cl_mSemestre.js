import Cl_mMaterias from "./CL_mMaterias.js";
import Cl_mEstudiantes from "./CL_mEstudiantes.js";
import Cl_mInscritos from "./Cl_mIncritos.js";

export default class Cl_Semestre {
    constructor(nombre) {
        this.nombre = nombre

        this.materias =  new Cl_mMaterias();
        this.estudiantes = new Cl_mEstudiantes();
        this.inscritos = new Cl_mInscritos
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }
}