export default class CL_mTienda{
    constructor(){
        this.acuGanancia = 0;
        this.pVentaMayor = 0;
        this.codMayor = 0;
    }

    procesarArticulo(art){
        this.acuGanancia += art.gananciaArticulo();

        if (art.costVent > this.pVentaMayor){
            this.pVentaMayor = art.costVent
            this.codMayor = art.cod
        }
    }
}