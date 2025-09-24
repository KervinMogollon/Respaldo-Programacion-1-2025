export default class CL_mPedido {
    constructor({ nombre, orden, cantOrden, jugo }) {
        this.nombre = nombre;
        this.orden = orden;
        this.cantOrden = cantOrden;
        this.jugo = jugo;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set orden(orden) {
        this._orden = +orden;
    }

    get orden() {
        return this._orden;
    }

    set cantOrden(cantOrden) {
        this._cantOrden = +cantOrden;
    }

    get cantOrden() {
        return this._cantOrden;
    }

    set jugo(jugo) {
        this._jugo = +jugo;
    }

    get jugo() {
        return this._jugo;
    }

    comida() {
        if (this.orden === 1)
            return 20;
        else if (this.orden === 2)
            return 10;
        else
            return 0;

    }

    qJugo() {
        if (this.jugo == 1)
            return 5;
        else
            return 0

    }

    costoComida() {
        return (this.comida() * this.cantOrden) + this.qJugo()
    }
}