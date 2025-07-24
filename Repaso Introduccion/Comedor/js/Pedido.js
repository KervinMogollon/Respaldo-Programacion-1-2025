export default class CL_Pedido {
    constructor(nombre, orden, cantOrden, jugo) {
        this.nombre = nombre;
        this.orden = orden;
        this.cantOrden = cantOrden;
        this.jugo = jugo;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre
    }

    set orden(orden) {
        this._orden = orden;
    }

    get orden() {
        return this._orden
    }

    set cantOrden(cantOrden) {
        this._cantOrden = cantOrden;
    }

    get cantOrden() {
        return this._cantOrden
    }

    set jugo(jugo) {
        this._jugo = jugo;
    }

    get jugo() {
        return this._jugo
    }

    comida() {
        switch (this.orden) {
            case "empanada":
                return 20;
                break;
            case "pastelito":
                return 10;
                break;
        }
    }

    qJugo() {
        switch (this.jugo) {
            case "si":
                return 5;
                break;
            default: return 0
        }
    }

    costoComida() {
        return (this.comida() * this.cantOrden) + this.qJugo()
    }
}