export default class mCartelera {
    constructor() {
        this.arrayPeliculas = [];
    }

    agregarPelicula(p) {
        this.arrayPeliculas.push(p)
    }

    listado() {
        return this.arrayPeliculas.map((p) => ({
            cod: p.codigo,
            nombre: p.nombre,
            preInf: p.precioInfantil,
            preAdu: p.precioAdulto
        }))
    }
}