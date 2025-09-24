export default class CL_controlador{
    constructor(m, v) {
        this.model = m;
        this.vits = v;
    }

    procesarPedido(){
        this.model.procesarPedido(this.vits.agregarPedido())

        this.vits.reporteComedor(
            this.model.restoEmpanadas(),
            this.model.restoPastelitos(),
            this.model.restosJugos(),
            this.model.recaudoCafetin(),
        )
    }

    agregarInventario(ie, ip, ij){
        this.model.iniEmpanadas += ie ;
        this.model.iniPastelitos += ip;
        this.model.iniJugo += ij;
    }
}