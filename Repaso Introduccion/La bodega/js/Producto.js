export default class CL_Producto{
    constructor(costo){
        this.costo = costo;
    }

    set costo(c){
        this._costo = c
    }

    get costo(){
        return this._costo
    }

    ganancia(){
        return this.costo * 0.5
    }
}