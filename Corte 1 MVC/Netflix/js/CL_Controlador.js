export default class CL_Controlador{
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarPlanes(){
        this.modelo.procesarPlanes(this.vista.procesarPlanes());

        this.vista.ReporteFinal(
        )
    }
}