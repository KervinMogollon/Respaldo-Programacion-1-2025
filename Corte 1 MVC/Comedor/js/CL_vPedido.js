export default class CL_vPedido{
    constructor(){
        this.inNombre = document.getElementById("pedidoForm_inNombre");
        this.inOrden = document.getElementById("pedidoForm_inOrden");
        this.inCantOrden = document.getElementById("pedidoForm_inCantOrden");
        this.inJugo = document.getElementById("pedidoForm_inJugo");
        this.brProcesar = document.getElementById("pedidoForm_brProcesar");
    }

    get nombre(){
        return this.inNombre.value;
    }

    get orden(){
        return this.inOrden.value;
    }

    get CantOrden(){
        return this.inCantOrden.value;
    }

    get jugo(){
        return this.inJugo.value;
    }
}