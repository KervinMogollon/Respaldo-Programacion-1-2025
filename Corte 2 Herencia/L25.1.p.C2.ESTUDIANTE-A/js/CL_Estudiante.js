export default class Estudiante{
    constructor(nombre, notaTotal, cantMaterias){
        this.nombre = nombre;
        this.notaTotal = notaTotal;
        this.cantMaterias = cantMaterias;
    }

    promNotas(){
        return this.notaTotal / this.cantMaterias
    }
}