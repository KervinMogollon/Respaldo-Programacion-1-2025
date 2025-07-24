import Cl_mArticulo from "./Cl_mArticulo.js";

export default class Cl_mArticulos {
    constructor() {
        this.arrayArticulos = [];
    }

    agregarArticulo({codigo, nombre, costo}) {
        let articulo = new Cl_mArticulo(codigo, nombre, costo);
        this.arrayArticulos.push(articulo);
    }

    listado(){
        return this.arrayArticulos.map(a => {
            return {
                codigo: a.codigo,
                nombre: a.nombre,
                costo: a.costo,
                precio: a.precio()
            };
        });
    }
}