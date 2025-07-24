export default class mVentas {
    constructor() {
        this.arrayVentas = []
    }

    agregarVenta({ id, cedula, codPeli, cantInf, cantAdu }) {
        this.arrayVentas.push({ id, cedula, codPeli, cantInf, cantAdu })
    }

    peliculasDeCedula(cedula, cartelera) { //cartelera es un parametro que es instancia de Cl_mCartelera, se le da valor por el principal o controlador
        return this.arrayVentas.filter(v =>
            v.cedula === cedula).map(vt => {
                let peli = cartelera.listado().find(p => p.cod === vt.codPeli);
                return peli ? {
                    codigo: peli.cod,
                    nombre: peli.nombre,
                    cantInf: vt.cantInf,
                    cantAdu: vt.cantAdu,
                    montoPagado: (vt.cantInf * peli.preInf) +
                        (vt.cantAdu * peli.preAdu)
                } : null
            }).filter(pl => pl !== null);
    }

    cantInfAdultos() {
        let acumCantInf = 0,
            acumCantAdu = 0;

        this.arrayVentas.forEach((v) => {
            acumCantInf += v.cantInf

            acumCantAdu += v.cantAdu
        })

        return `Al cine asistieron una cantidad de ${acumCantInf} niños y ${acumCantAdu} adultos
        dando un total de ${acumCantInf + acumCantAdu} asistentes` 
        //la verdad creo que esto no es espesificamente lo que te piden reportar, creo que el enunciado 
        //solo pide el total de asistentes, asi q puedes ovbiar las cantidades individuales
    }

    vendidoPelicula({ codigo, cartelera }) {
        let peli = cartelera.listado().find(p => p.cod === codigo);
        if (!peli) return 0;

        return this.arrayVentas.filter(v => v.codPeli === codigo).reduce((acumVendidoPelicula, v) =>
            acumVendidoPelicula + (v.cantInf * peli.preInf) + (v.cantAdu * peli.preAdu), 0);

        //me es dificil explicar el reduce en esto comentarios. voy a dejar en la carpeta js una explicacion
        //en reduce.txt
    }

    informacionAsistentes( codigo, cartelera ) {
        let peli = cartelera.listado().find(p => p.cod === codigo);
        if (!peli) return 0;

        return this.arrayVentas.filter(v => v.codPeli === codigo).map(v => ({
            cedulaPagador: v.cedula,
            cantidadPersonas: v.cantInf + v.cantAdu,
            totalPagado: (v.cantInf * peli.preInf) + (v.cantAdu * peli.preAdu)
        }));
    }


}