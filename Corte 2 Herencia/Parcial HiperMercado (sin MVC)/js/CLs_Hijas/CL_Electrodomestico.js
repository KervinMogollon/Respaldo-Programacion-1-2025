import Articulo from "../CL_Articulo.js";

export default class Electrodomestico extends Articulo {
    constructor(cod, descripcion, costo, tipoArt, tipoElec, mesesGarantia) {
        super(cod, descripcion, costo, tipoArt);
        this.tipoElec = tipoElec;
        this.mesesGarantia = mesesGarantia
    }

    set tipoElec(tipoElec) {
        this._tipoElec = +tipoElec;
    }

    get tipoElec() {
        return this._tipoElec
    }

    set mesesGarantia(mesesGarantia) {
        this._mesesGarantia = +mesesGarantia;
    }

    get mesesGarantia() {
        return this._mesesGarantia
    }

    precioVenta() {
        if (this.mesesGarantia > 6)
            return this.costo + (this.costo * 0.5)
        else
            return this.costo + (this.costo * 0.4)
    }

    montPagar() {
        return this.precioVenta() + (this.precioVenta() * 0.03)
    }
}