export default class CL_controlador{
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarPedido(){
        this.modelo.procesarPedido(this.vista.procesarPedido())
        this.vista.reporteComedor(
            this.modelo.restoEmpanadas(),
            this.modelo.restoPastelitos(),
            this.modelo.restosJugos(),
            
        )
    }
}