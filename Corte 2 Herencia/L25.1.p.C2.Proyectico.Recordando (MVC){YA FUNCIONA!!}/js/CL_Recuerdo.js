export default class Recuerdo{
    constructor(cod, costBase){
        this.cod = cod;
        this.costBase = costBase
    }

    set cod(cod){
        this._cod = cod;
    }

    get cod(){
        return this._cod;
    }

    set costBase(costBase){
        this._costBase = +costBase;
    }

    get costBase(){
        return this._costBase;
    }
    
}
