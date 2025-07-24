export default class CL_Bodega{
    constructor(){
        this.acuGanancia = 0
    }

    procesarProducto(Prod){
        this.acuGanancia += Prod.ganancia()
    }

    gananciaTotal(){
        return this.acuGanancia
    }
}