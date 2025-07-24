import CL_Padre from "./CL_ClasePadre.js";

export default class CL_Hija1 extends CL_Padre{
    constructor(atribA, Atrib1){
        super(atribA);
        this.Atrib1 = Atrib1;
    }

    metodo1(){
        return this.atribA * this.Atrib1;
    }
}