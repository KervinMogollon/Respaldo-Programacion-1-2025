export default class Articulo {
    constructor(cod, descripcion, costo, tipoArt) {
        this.cod = cod;
        this.descripcion = descripcion;
        this.costo = costo;
        this.tipoArt = tipoArt;
    }

    set cod(cod) {
        this._cod = cod;
    }

    get cod() {
        return this._cod;
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    get descripcion() {
        return this._descripcion
    }

    set costo(costo) {
        this._costo = +costo;
    }

    get costo() {
        return this._costo;
    }

    set tipoArt(tipoArt) {
        this._tipoArt = +tipoArt;
    }

    get tipoArt() {
        return this._tipoArt;
    }
}

/*
    set (){
        this._ = ;
    }

    get (){
        return this._
    }

    
*/