export default class CL_Participante{
    constructor(nombre, puntos){
        this.nombre = nombre;
        this.puntos = puntos;
    }

    set nombre(nombre){
        this._nombre =nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set puntos(puntos){
        this._puntos =puntos;
    }

    get puntos(){
        return this._puntos;
    }
}