export default class CL_mEstudiante {
    constructor({ n, c, m, ni, d }) {
        this.nombre = n;
        this.cedula = c;
        this.mes = m;
        this.nivel = ni;
        this.desc = d;
    }

    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._nombre;
    }

    set cedula(c) {
        this._cedula = c;
    }

    get cedula() {
        return this._cedula;
    }

    set mes(m) {
        this._mes = +m;
    }

    get mes() {
        return this._mes;
    }

    set nivel(ni) {
        this._nivel = +ni;
    }

    get nivel() {
        return this._nivel;
    }

    set desc(d) {
        this._desc = +d;
    }

    get desc() {
        return this._desc;
    }

    montDesc() {
        if (this.mes == 1) {
            if (this.nivel == 1) {
                return (this.desc / 100) * 50
            }
            else if (this.nivel == 2) {
                return (this.desc / 100) * 100
            }
        }
        else
            return 0
    }

    pagoF() {
        if (this.nivel == 2)
            return (100 - this.montDesc()) + 20
        else if (this.nivel == 1)
            return 50 - this.montDesc()
        else
            return 0;
    }
}