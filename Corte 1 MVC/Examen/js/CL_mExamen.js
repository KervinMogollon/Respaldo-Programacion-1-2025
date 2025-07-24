export default class CL_mExamen {
    constructor(maxValor = 0, minAprobatorio = 0) {
        this.maxValor = maxValor;
        this.minAprobatorio = minAprobatorio;
        this.estud = 0;
        this.cntAprobados = 0;
        this.notaMayor = 0;
        this.EstuMayor = "";
        this.cntChicas = 0;
        this.chicasAprobadas = 0;
    }

    set maxValor(maxValor) {
        this._maxValor = +maxValor;
    }

    get maxValor() {
        return this._maxValor;
    }

    set minAprobatorio(minAprobatorio) {
        this._minAprobatorio = +minAprobatorio;
    }

    get minAprobatorio() {
        return this._minAprobatorio;
    }



    procesarEstudiante(estud) {
        this.estud++

        if (estud.nota >= this.minAprobatorio)
            this.cntAprobados++

        if (estud.nota > this.notaMayor) {
            this.notaMayor = estud.nota
            this.EstuMayor = estud.nombre
        }

        if (estud.sexo === "F")
            this.cntChicas++

        if (estud.nota >= this.minAprobatorio && estud.sexo === "F")
            this.chicasAprobadas++
    }

    porcAprobados() {
        return (this.cntAprobados * 100) / this.estud
    }

    estudMejor() {
        return this.EstuMayor
    }

    porcChicasAprobadas() {
        if (this.cntChicas <= 0)
            return 0;
        else
            return (this.chicasAprobadas * 100) / this.cntChicas
    }
}