import Recuerdo from "./CL_Recuerdo.js";

export default class Video extends Recuerdo {
    constructor(cod, costBase, formato) {
        super(cod, costBase);
        this.formato = formato
    }



    montPagar() {
        switch (this.formato) {
            case "SI":
                return this.costBase + (this.costBase * 0.20)
                break;
            case "NO":
                return this.costBase
                break;
            default:
                return 0
        }
    }
}