import Cl_mInscripcion from "./Cl_mInscripcion.js";
export default class Cl_mInscritos {
    constructor() {
        this.array = [];
    }

    existe(cedula) {
        return this.array.some(estudiante =>
            estudiante.cedula == cedula);
    }

    indexDe(cedula) {
        return this.array.findIndex(estudiante =>
            estudiante.cedula == cedula);
    }

    inscribirMateria({ cedula, codigo }) {
        let index = this.indexDe(cedula);
        if (index === -1) {
            this.array.push(new Cl_mInscripcion({ cedula }));
            index = this.array.length - 1;
        }
        return this.array[index].agregar(codigo);
    }

    retirarMateria({ cedula, codigo }) {
        let index = this.indexDe(cedula);
        if (index === -1) {
            return "Estudiante no registrado";
        }
        this.array[index].eliminar(codigo);
    }

    listado(estudiantes) {
        return this.array.map(item => {
            const estudiante = estudiantes.find(estudiantes =>
                estudiantes.cedula === item.cedula);
            if (estudiante) {
                return {
                    cedula: estudiante.cedula,
                    nombre: estudiante.nombre,
                    cntMaterias: item.materias.length,
                };
            }
            return null;
        }).filter(estudiante => estudiante !== null);
    }

    materiasDe({ materias, cedula }) {
        let index = this.indexDe(cedula);
        if (index === -1) {
            return [];
        }
        return materias.filter(m =>
            this.array[index].existe(m.codigo));
    }

    cantidadMaterias(cedula) {
        let index = this.indexDe(cedula);
        if (index === -1) {
            return 0;
        }
        return this.array[index].materias.length;
    }

    cantidadPromedioMaterias() {
        if (this.array.length === 0)
            return 0;

        let totalMaterias = this.array.reduce((tm, inscripcion) =>
            tm + inscripcion.materias.length, 0);
        return totalMaterias / this.array.length;
    }

    /* nombresInscritosEn({ codigo, estudiantes }) {
         return this.array.filter(inscripcion =>
             inscripcion.existe(codigo)).map(inscripcion => {
                 let estudiante = estudiantes.find(e => e.cedula === inscripcion.cedula);
                 if (estudiante) {
                     return {
                         nombre: estudiante.nombre
                     };
                 }
                 return null;
             }).filter(e => e !== null);
     }*/ //no funciona xq retorna un array de objetos

    /*nombresInscritosEn({ codigo, estudiantes }) {
        return this.array.filter(inscripcion => 
            inscripcion.existe(codigo)).map(inscripcion => {
                let estudiante = estudiantes.find(e => e.cedula === inscripcion.cedula);
                return estudiante ? estudiante.nombre : null;
            })
            .filter(nombre => nombre !== null);
    }*/ // ver xq no funciona. comparar con el de abajo

    nombresInscritosEn({ codigo, estudiantes }) {
        return this.array.filter(i =>
            i.existe(codigo)).map(es => {
                let estudiante = estudiantes.find(e =>
                    e.cedula === es.cedula);

                return estudiante ? estudiante.nombre : null; // Solo devuelve el string del nombre
            })
            .filter(nombre => nombre !== null); // Filtra nombres nulos
    }

    estudiantesCantidadMaterias({ cantidad, estudiantes }) {
        return this.array.filter(i => i.materias.length === cantidad).map(es => {
                const estudiante = estudiantes.find(e => e.cedula === es.cedula);
                return estudiante
                    ? { cedula: estudiante.cedula, nombre: estudiante.nombre }
                    : null;
            }).filter(e => e !== null);
    }



}