export default class CL_Edad {
    constructor(edad) {
        this.edad = edad;
    }
    set Edad(edad) {
        this._edad = +edad;
    }
    get Edad() {
        return this._edad;
    }

}