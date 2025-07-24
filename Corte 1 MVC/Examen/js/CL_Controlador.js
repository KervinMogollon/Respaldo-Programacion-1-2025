export default class CL_Controlador{
    constructor(modelo, vista){
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarEstudiante(){
        this.modelo.procesarEstudiante(this.vista.datosEstud());

        this.vista.reporte(
            this.modelo.porcAprobados(),
            this.modelo.estudMejor(),
            this.modelo.porcChicasAprobadas()
        )
    }

    datosExam(notaMax, minAprob){
        this.modelo.maxValor = notaMax;
        this.modelo.minAprobatorio = minAprob;
    }
}