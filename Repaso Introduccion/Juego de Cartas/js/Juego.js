export default class CL_Juego{
    constructor() {
        this.part = 0;
        this.puntoMayor = 0;
        this.winer = "";
        this.cntMenores10 = 0;
    }

    procesarParticipante(part){
        this.part++

        if(part.puntos > this.puntoMayor){
            this.puntoMayor = part.puntos
            this.winer = part.nombre
        }

        if(part.puntos < 10)
            this.cntMenores10++
    }

    nombreWiner(){
        return this.winer
    }

    porcMenores10(){
        return (this.cntMenores10 * 100) / this.part
    }
}