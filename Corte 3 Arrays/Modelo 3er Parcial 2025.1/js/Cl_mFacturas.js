export default class Cl_mFacturas {
    constructor() {
        this.arrayFacturas = [];
    }

    agregarFactura(factura) {
        this.arrayFacturas.push(factura);
    }

    // Método listado(articulos): reporta para cada factura: fecha, código, cantidad total de artículos y total pagado.
    listado(articulos) {
        return this.arrayFacturas.map(f => {
            let cantidadTotal = f.arrayArticulos.reduce((total, item) => total + item.cantidad, 0);
            let totalPagado = f.total(articulos);
            return {
                codigo: f.codigo,
                fecha: f.fecha,
                cantidadTotal: cantidadTotal,
                totalPagado: totalPagado
            };
        });
    }

    totalVendido(articulos) {
        return this.arrayFacturas.reduce((total, factura) => {
            return total + factura.total(articulos);
        }, 0);
    }
}
