import CL_Padre from "./CL_ClasePadre.js";

export default class CL_Hija extends CL_Padre{
    constructor(atriA, AtribB){
        super(atriA);
        this.AtribB = AtribB;
    }
}