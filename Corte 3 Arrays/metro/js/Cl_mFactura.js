export default class Cl_mFactura {
    constructor(c, f) {
        this.codigo = c;
        this.fecha = f;
        this.articulos = [];
    }

    set codigo(c) {
        this._codigo = c;
    }

    get codigo() {
        return this._codigo;
    }

    set fecha(f) {
        this._fecha = f;
    }

    get fecha() {
        return this._fecha;
    }
    agregarArticulo(articulo, cantidad) {
        this.articulos.push({ articulo, cantidad });
    }

    info() {
        return {
            fecha: this.fecha,
            codigo: this.codigo,
            articulos: this.articulos.map(a => {
                let articulo = a.articulo;
                let cantidad = a.cantidad;
                return {
                    codigo: articulo.codigo,
                    nombre: articulo.nombre,
                    cantidad: cantidad,
                    precio: articulo.precio(),
                    subtotal: articulo.precio() * cantidad
                };
            })
        };
    }
}