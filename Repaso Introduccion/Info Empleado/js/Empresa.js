export default class CL_Empresa {
    constructor() {
        this.acuSueldoObreros = 0;
        this.acuSuedloAdmins = 0;
        this.cntObreros = 0;
        this.cntAdmins = 0;
    }

    procesarPersonal(pers) {
        if (pers.cargo === "O") {
            this.acuSueldoObreros += pers.sueldo
        } else { this.acuSuedloAdmins += pers.sueldo }

        if (pers.cargo === "O") {
            this.cntObreros++;
        }
        else { this.cntAdmins++ }
    }

    pagaObreros() {
        return this.acuSueldoObreros
    }

    promdObreros() {
        return this.acuSueldoObreros / this.cntObreros
    }

    pagaAdmins() {
        return this.acuSuedloAdmins
    }

    promdAdmins() {
        return this.acuSuedloAdmins / this.cntAdmins
    }
}