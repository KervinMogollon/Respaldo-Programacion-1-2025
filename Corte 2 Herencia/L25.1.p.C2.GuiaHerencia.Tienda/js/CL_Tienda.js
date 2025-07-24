export default class CL_Tienda{
    constructor(nombre, costo){
        this.nombre = nombre;
        this.costo = costo;
    }

    aumentCost(){
        return this.costo + (this.costo * 0.20)
    }
}