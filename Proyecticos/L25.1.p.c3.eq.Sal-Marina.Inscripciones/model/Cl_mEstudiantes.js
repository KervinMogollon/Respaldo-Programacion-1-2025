export default class Cl_mEstudiantes {
    constructor() {
        this.array = [];
    }

    agregar({ cedula, nombre, apellido }) {
        if (this.array.some((e) =>
            e.cedula == cedula)) {              //busca lo que le digas que busques y te devuelve 
            return "El estudiante ya existe";   //true o false si lo encuentra si lo encuentra
        }
        this.array.push({ cedula, nombre, apellido });
        return true
    }

    modificar({ cedula, nombre, apellido }) {
        let index = this.array.findIndex((e) =>
            e.cedula == cedula);                        // findIndex busca los que le digas que busque y
        if (index == -1) {                              // te devuelve el índice de la posición donde lo encontró
            return "El estudiante no existe";           // si no lo encuentra devuelve -1
        }
        this.array[index].nombre = nombre;
        this.array[index].apellido = apellido;
        return true;
    }

    eliminar(cedula) {
        let index = this.array.findIndex((e) =>
            e.cedula == cedula);
        if (index == -1) {
            return "El estudiante no existe";
        }
        this.array.splice(index, 1);
        return true;
    }


    listado() {
        return this.array.map((e) => ({ //map recorre el array y devuelve un nuevo array con los valores que le digas
            cedula: e.cedula,
            nombre: e.nombre,
            apellido: e.apellido
        }));
    }

    existe(cedula) {
    /*
    existe(cedula): boolean
        Indica si existe un estudiante
        cedula: el identificador de estudiante a buscar
        Retorno: true si existe, false caso contrario
    */
        if (this.array.some((e) => e.cedula === cedula)) {
            return true
        }
        else
            return false
    }

    indexDe() {
        /**
         * indexDe(cedula): int
            Determina el índice donde está un estudiante
            cedula: el identificador de estudiante a buscar
            Retorno: el índice donde está el estudiante, -1 si no existe
         */
        let index = this.array.findIndex((e) => e.cedula == cedula);
        if (index == -1) {
            return -1;
        }
        else {
            return index;
        }
    }

    estudiante(cedula) {
        /**
         * estudiante(cedula): Cl_mEstudiante | undefined
            Retorna la instancia en array del estudiante indicado
            cedula: el identificador de estudiante a buscar
            Retorno: la instancia del estudiante indicado, undefined si
            no existe
         */
        let index = this.array.findIndex((e) =>
            e.cedula == cedula);
        if (index == -1) {
            return undefined;
        }
        return this.array[index];
    }

    cedulaEntre({ cedulaMin, cedulaMax }) {
        return this.array.filter(estudiante =>
            estudiante.cedula >= cedulaMin && estudiante.cedula <= cedulaMax);

    }
}