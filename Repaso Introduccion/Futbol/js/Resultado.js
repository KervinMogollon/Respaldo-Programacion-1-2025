export default class CL_Resultados{
    constructor(){
        this.jue = 0
        this.cntVictorias = 0
    }

    procesarJuegos(jue){
        if (jue.partido === 1)
            this.cntVictorias++

        this.jue++
    }

    porcGanado(){
        return (this.cntVictorias * 100) / this.jue
    }
}