export default class CL_vEstudiante {
    constructor(){
        this.inNombre = document.getElementById("estudForm_inNombre");
        this.inCedula = document.getElementById("estudForm_inCedula");
        this.inSexo = document.getElementById("estudForm_inSexo");
        this.inNota = document.getElementById("estudForm_inNota");
        this.btProcesar = document.getElementById("estudForm_btProcesar");
    }

    get nombre(){
        return this.inNombre.value;
    }

    get cedula(){
        return this.inCedula.value;
    }

    get sexo(){
        return this.inSexo.value;
    }

    get nota(){
        return +this.inNota.value;
    }
}