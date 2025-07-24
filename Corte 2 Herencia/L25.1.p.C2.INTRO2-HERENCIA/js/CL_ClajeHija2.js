import CL_Padre from "./CL_ClasePadre.js";

export default class CL_Hija2 extends CL_Padre{
    constructor(atribA, Atrib2){
        super(atribA);
        this.Atrib2 = Atrib2;
    }

    metodo2(){
        return this.atribA + this.Atrib2;
    }
}