export default class CL_controlador{
    constructor(m, v) {
        this.model = m;
        this.vits = v;
    }

    procesarPedido(){
        this.model.procesarPedido(this.vits.procesarPedido())
        this.vits.reporteComedor(
            this.model.restoEmpanadas(),
            this.model.restoPastelitos(),
            this.model.restosJugos(),
            this.model.recaudoCafetin()
            
        )
    }
}