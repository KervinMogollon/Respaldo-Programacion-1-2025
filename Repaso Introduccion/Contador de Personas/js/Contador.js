export default class CL_Contador {
    constructor() {
        this.pers = 0;
        this.cntHombre = 0;
        this.cntMujeres = 0;
    }

    procesarPersona(pers) {
        this.pers++

        if (pers.cSexo() === 1) {
            this.cntHombre++
        }

        if (pers.cSexo() === 2) {
            this.cntMujeres++
        }
    }

    totalPers() {
        return this.pers
    }

    hombres() {
        return this.cntHombre
    }

    mujeres() {
        return this.cntMujeres
    }
}