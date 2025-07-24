export default class CL_vEdad{
    constructor(){
        this.inEdad = document.getElementById("edadForm_inEdad");
        this.btProcesar = document.getElementById("edadForm_btProcesar");
    }

    get edad(){
        return +this.inEdad.value;
    }
}