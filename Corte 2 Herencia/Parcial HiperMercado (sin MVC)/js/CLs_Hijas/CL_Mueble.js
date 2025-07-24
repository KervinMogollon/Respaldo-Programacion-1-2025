import Articulo from "../CL_Articulo.js";

export default class Mueble extends Articulo {
    constructor(cod, descripcion, costo, tipoArt, material) {
        super(cod, descripcion, costo, tipoArt);
        this.material = material
    }

    set material(material) {
        this._material = +material;
    }

    get material() {
        return this._material
    }

    precioVenta() {
        switch (this.material) {
            case 1:
                return this.costo + (this.costo * 0.2);
                break;
            case 2:
                return this.costo + (this.costo * 0.3);
                break;
            case 3:
                return this.costo + (this.costo * 0.35);
                break;
            default:
                return 0
        }
    }

    montPagar() {
        return this.precioVenta() - (this.precioVenta() * 0.10)
    }
}