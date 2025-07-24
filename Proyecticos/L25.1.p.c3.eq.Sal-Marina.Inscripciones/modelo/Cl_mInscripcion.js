export default class Cl_mInscripcion {
    constructor({ cedula }) {
        this.cedula = cedula;
        this.materias = [];
    }

    set cedula(cedula) {
        this._cedula = +cedula;
    }

    get cedula() {
        return this._cedula;
    }
    
    existe(codigo) {
        return this.materias.some(materia => materia == codigo);
    }

    agregar(codigo) {
        if (this.existe(codigo)) {
            return "Materia ya registrada";
        }
        this.materias.push(codigo);
        return true;
    }

    eliminar(codigo) {
        if (this.existe(codigo)) {
            this.materias = this.materias.filter(materia => materia != codigo);
            return true;
        }
        return "Materia no registrada";
    }

    listado(materias) {
        return materias.array.map(materia => ({
            codigo: materia.codigo,
            semestre: materia.semestre,
            nombre: materia.nombre
        }));
    }
}