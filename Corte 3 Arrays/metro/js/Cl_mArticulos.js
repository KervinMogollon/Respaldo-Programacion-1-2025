export default class Cl_mArticulos{
    constructor(){
        this.articulos = [];
    }

    agregarArticulo(articulo){
        this.articulos.push(articulo);
    }

    listado(){
    return this.articulos.map(articulo => {
            return {
                codigo: articulo.codigo,
                nombre: articulo.nombre,
                costo: articulo.costo,
                precio: articulo.precio()
            };
        });
    }
}