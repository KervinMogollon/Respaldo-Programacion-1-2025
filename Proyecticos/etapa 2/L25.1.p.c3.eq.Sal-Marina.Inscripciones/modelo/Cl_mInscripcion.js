export default class Cl_mInscripcion{
    constructor({cedula}){
        this.cedula = cedula;
        this.materias = [];
    }

    set cedula(cedula){
        this._cedula = +cedula
    }

    get cedula(){
        return this._cedula
    }

    agregar(m){
        this.materias.push(m)

    }

    listado(){
        return this.materias
    }
}