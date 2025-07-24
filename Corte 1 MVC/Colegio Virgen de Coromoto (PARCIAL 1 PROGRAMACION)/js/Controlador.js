export default class CL_Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarEstudiante() {
        this.modelo.procesarEstudiante(this.vista.IniciarEstudiante())

        this.vista.reporte(
            this.modelo.montFinCaja(),
            this.modelo.porcInscJul(),
        )
    }
    

    iniciarColegio(ic) {
        this.modelo.iniCaja = ic;
    }
}