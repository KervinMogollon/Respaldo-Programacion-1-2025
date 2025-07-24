export default class CL_Controlador{
    constructor(modelo, vista){
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarFlores(){
        this.modelo.procesarRamo(this.vista.iniciarFlores())
    
        this.vista.reporte1(
            this.modelo.montoFinalFlores(),
            this.modelo.montoFinal(),
            this.modelo.cantFloresNatu(),
            this.modelo.cantFloresNatuEnvaMed(),
            this.modelo.porcFloresNaturaEnvaMediano(),
            this.modelo.cantRamosMayor1(),
            this.modelo.porcRamosIgual1(),

        )
    }

    procesarFrutas(){
        this.modelo.procesarRamo(this.vista.iniciarFrutas())
    
        this.vista.reporte2(
            this.modelo.montoFinalFrutas(),
            this.modelo.montoFinal(),
            this.modelo.cantFloresNatu(),
            this.modelo.cantFloresNatuEnvaMed(),
            this.modelo.porcFloresNaturaEnvaMediano(),
            this.modelo.cantRamosMayor1(),
            this.modelo.porcRamosIgual1(),
        )
    }
}