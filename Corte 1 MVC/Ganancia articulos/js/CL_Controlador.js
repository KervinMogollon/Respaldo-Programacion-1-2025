export default class CL_Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarArticulo() {
        this.modelo.procesarArticulo(this.vista.procesarArticulo());
        this.vista.reportarArticulo(
            this.modelo.acuGanancia,
            this.modelo.codMayor,
        );
    }
}