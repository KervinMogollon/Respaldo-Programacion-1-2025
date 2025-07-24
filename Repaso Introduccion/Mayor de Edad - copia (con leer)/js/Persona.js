export default class CL_Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre
    }

    set edad(edad) {
        this._edad = +edad;
    }

    get edad() {
        return this._edad
    }

    leerNombre() {
        return prompt("ingrese el nombre")
    }

    leerEdad() {
        return prompt("ingrese la edad")
    }

    solicitarOpc(){
        return prompt("va a ingresar mas datos? si = 1. No = ENTER")
    }
}