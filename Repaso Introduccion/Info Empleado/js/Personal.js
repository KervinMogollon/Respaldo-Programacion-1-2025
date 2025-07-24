export default class CL_Personal{
    constructor(nombre, cargo, sueldo){
        this.nombre = nombre;
        this.cargo = cargo;
        this.sueldo = sueldo;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set cargo(cargo){
        this._cargo = cargo;
    }

    get cargo(){
        return this._cargo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    get sueldo(){
        return this._sueldo;
    }

    
}