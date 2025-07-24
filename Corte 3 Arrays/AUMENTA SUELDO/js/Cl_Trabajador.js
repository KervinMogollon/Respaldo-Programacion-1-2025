export default class Trabajador {
    constructor(cedula, sueldoBase, tipoTrabajador) {
        this.cedula = cedula;
        this.sueldoBase = sueldoBase;
        this.tipoTrabajador = tipoTrabajador
    }

    set cedula(cedula) {
        this._cedula = cedula;
    }

    get cedula() {
        return this._cedula;
    }

    set sueldoBase(sueldoBase) {
        this._sueldoBase = +sueldoBase;
    }

    get sueldoBase() {
        return this._sueldoBase;
    }

    set tipoTrabajador(tipoTrabajador) {
        this._tipoTrabajador = +tipoTrabajador;
    }

    get tipoTrabajador() {
        return this._tipoTrabajador;
    }

    aumentoDeSueldo() {
        if (this.tipoTrabajador == 1)
            return this.sueldoBase * 0.20
        else if (this.tipoTrabajador == 2)
            return this.sueldoBase * 0.10
        else
            return 0
    }

    nuevoSueldo() {
        return this.sueldoBase + this.aumentoDeSueldo()
    }

    
}