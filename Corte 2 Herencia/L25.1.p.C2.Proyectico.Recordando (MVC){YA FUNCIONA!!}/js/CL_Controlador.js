export default class Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarFoto() {
        this.modelo.procesarRecuerdo(this.vista.iniciarFotografia());

        this.vista.reporte1(
            this.modelo.montoFinal(),
            this.modelo.promdDigital(),
        )


    }

    procesarVideo() {
        this.modelo.procesarRecuerdo(this.vista.iniciarVideo());

        this.vista.reporte2(
            this.modelo.montoFinal(),
            this.modelo.promdDigital(),
        )


    }
}