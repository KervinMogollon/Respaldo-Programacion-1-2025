export default class CL_persona {
    constructor(nombre, sexo) {
        this.nombre = nombre;
        this.sexo = sexo;
    }

    set nombre(nombre) {
        this._nombre = nombre
    }

    get nombre() {
        return this._nombre
    }

    set sexo(sexo) {
        this._sexo = sexo
    }

    get sexo() {
        return this._sexo
    }

    cSexo() {
        switch (this.sexo) {
            case "M":
                return 1;
                break;
            case "F":
                return 2;
                break;
            default:
                return 0;
        }
    }
}