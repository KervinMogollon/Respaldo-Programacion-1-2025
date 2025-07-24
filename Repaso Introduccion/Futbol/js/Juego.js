export default class CL_juego{
    constructor(p){
        this.partido = p
    }

    set partido(p){
        this._partido = p
    }

    get partido(){
        return this._partido
    }
}