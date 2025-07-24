export default class Cl_mMaterias{
    constructor(){
        this.array = [];
    }

    agregar(m){
        this.array.push(m)
    }

    listado(){
        return this.array
    }

    existe(codigo){
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i].codigo === codigo) { 
                return true;
            }
        }
        return false; 
    }
}