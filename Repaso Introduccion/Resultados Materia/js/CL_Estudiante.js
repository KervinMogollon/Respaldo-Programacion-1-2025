export default class CL_Estudiante {
    constructor(cedula, nota) {
        this.cedula = cedula;
        this.nota = nota;
    }

    set Cedula(cedula) {
        this._cedula = +cedula;
    }
    get Cedula() {
        return this._cedula;
    }

    set Nota(nota) {
        this._nota = +nota;
    }
    get Nota() {
        return this._nota;
    }
}