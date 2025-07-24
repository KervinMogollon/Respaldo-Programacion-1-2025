export default class Cl_mArticulo {
    constructor(c, n, ct) {
        this.codigo = c;
        this.nombre = n;
        this.costo = ct;
    }

    set codigo(c) {
        this._codigo = c;
    }

    get codigo() {
        return this._codigo;
    }

    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._nombre;
    }

    set costo(ct) {
        this._costo = ct;
    }

    get costo() {
        return this._costo;
    }

    precio() {
        return this.costo * 1.25;
    }
}