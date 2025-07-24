export default class CL_vEstudiante{
    constructor(){
        this.inNombre = document.getElementById("studForm_inNombre");
        this.inCedula = document.getElementById("studForm_inCedula");
        this.inMes = document.getElementById("studForm_inMes");
        this.inNivel = document.getElementById("studForm_inNivel");
        this.inDesc = document.getElementById("studForm_inDesc");
        this.btProcesar = document.getElementById("studForm_btProcesar");
    }

    get nombre(){
        return this.inNombre.value;
    }

    get cedula(){
        return this.inCedula.value;
    }

    get mes(){
        return +this.inMes.value;
    }

    get nivel(){
        return +this.inNivel.value;
    }

    get desc(){
        return +this.inDesc.value;
    }
}