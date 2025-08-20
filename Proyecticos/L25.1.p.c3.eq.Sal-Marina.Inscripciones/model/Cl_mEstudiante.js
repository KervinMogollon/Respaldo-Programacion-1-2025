export default class Cl_mEstudiante {
    constructor({ cedula, apellido, nombre }) {
        this.cedula = cedula;
        this.apellido = apellido;
        this.nombre = nombre;
    }

    toCamelCase(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    }

    set cedula(cedula) {
        this._cedula = +cedula;
    }

    get cedula() {
        return this._cedula
    }

    set apellido(apellido) {
        this._apellido = this.toCamelCase(apellido);
    }

    get apellido() {
        return this._apellido
    }

    set nombre(nombre) {
        this._nombre = this.toCamelCase(nombre);
    }

    get nombre() {
        return this._nombre
    }

    
}