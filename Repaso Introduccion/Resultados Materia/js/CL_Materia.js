export default class CL_Materia {
    constructor() {
        this.cntEstudiantes = 0;
        this.cntAprobados = 0;
        this.cntReprobados = 0;
        this.acNotas = 0;
    }

    procesarEstudiante(e) {
        this.cntEstudiantes++;

        if (e.nota >= 48)
            this.cntAprobados++;

        if (e.nota < 48)
            this.cntReprobados++;

        this.acNotas += e.nota;
    }

    EstAprobados() {
        return this.cntAprobados;
    }

    EstReprobados() {
        return this.cntReprobados;
    }

    PromSección() {
        return this.acNotas/this.cntEstudiantes ;
    }
}