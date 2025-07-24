export default class CL_mArticulo{
    constructor({cod, precio, costVent}){
        this.cod = cod;
        this.precio = precio;
        this.costVent = costVent;
    }

    set cod(cod){
        this._cod =cod;
    }

    get cod(){
        return this._cod
    }

    set precio(precio){
        this._precio = +precio;
    }

    get precio(){
        return this._precio
    }

    set costVent(costVent){
        this._costVent = +costVent;
    }

    get costVent(){
        return this._costVent
    }

    gananciaArticulo(){
        return this.costVent - this.precio
    }
}