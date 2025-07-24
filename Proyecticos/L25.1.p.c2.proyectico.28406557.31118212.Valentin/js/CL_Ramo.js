export default class Ramos {
    constructor(cod, envase, costBase, cantRamos) {
        this.cod = cod;
        this.envase = envase;
        this.costBase = costBase;
        this.cantRamos = cantRamos;
    }

    set cod(cod) {
        this._cod = cod;
    }

    get cod() {
        return this._cod
    }

    set envase(envase) {
        this._envase = +envase;
    }

    get envase() {
        return this._envase
    }

    set costBase(costBase) {
        this._costBase = +costBase;
    }

    get costBase() {
        return this._costBase
    }

    set cantRamos(cantRamos){
        this._cantRamos = +cantRamos
    }

    get cantRamos(){
        return this._cantRamos
    }
}