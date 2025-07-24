export default class Cl_mMaterias{
    constructor(){
        this.array = [];
    }

    agregar({codigo, semestre, nombre}){
        if (this.array.some((e) => e.codigo == codigo)) {
            return "La materia ya existe";
        }
        this.array.push({codigo, semestre, nombre});
        return true;
        
    }

    modificar({codigo, semestre, nombre}){
        let index = this.array.findIndex((e) => e.codigo == codigo);
        if (index == -1) {
            return "La materia no existe";
        }
        this.array[index].semestre = semestre;
        this.array[index].nombre = nombre;
        return true;
    }

    eliminar(codigo) {
        let index = this.array.findIndex((e) =>
            e.codigo == codigo);
        if (index == -1) {
            return "La materia no existe";
        }
        this.array.splice(index, 1);
        return true;
    }


    listado(){
        return this.array.map((e) => ({
            codigo: e.codigo,
            semestre: e.semestre,
            nombre: e.nombre
        }));
    }

    existe(codigo){
        if (this.array.some((e) => e.codigo === codigo)) {
            return true
        }
        else
            return false
    }

    indexDe(codigo){
        /**
         * indexDe(codigo): int
            Determina el índice donde está una materia
            codigo: el identificador de materia a buscar
            Retorno: el índice donde está la materia, -1 si no existe
         */
        let index = this.array.findIndex((e) => e.codigo == codigo);
        if (index == -1) {
            return -1;
        }
        return index;
    }

    materia(codigo){
        /**
         * materia(codigo): object
            Determina la materia que corresponde a un código
            codigo: el identificador de materia a buscar
            Retorno: el objeto materia, null si no existe
         */
        let index = this.indexDe(codigo);
        if (index == -1) {
            return undefined;
        }
        return this.array[index];
    }

    semestre(semestre) {
        return this.array.filter(materia => 
            materia.semestre == semestre).map(materia => ({
                codigo: materia.codigo,
                nombre: materia.nombre
            }))
    }

    
}