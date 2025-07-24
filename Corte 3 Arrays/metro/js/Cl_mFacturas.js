export default class Cl_mFacturas{
    constructor(){
        this.facturas = [];
    }

    agregarFactura(factura){
        this.facturas.push(factura);
    }

    listado(){
        return this.facturas.map(factura => {
            return {
                fecha: factura.fecha,
                codigo: factura.codigo,
                cantidadArticulos: factura.articulos.length,
                totalPagado: factura.articulos.reduce((total, a) => total + (a.articulo.precio() * a.cantidad), 0)
            };
        });
    }

    totalVendido(){
        return this.facturas.reduce((total, factura) => {
            return total + factura.articulos.reduce((subtotal, a) => subtotal + (a.articulo.precio() * a.cantidad), 0);
        }, 0);
    }

    
}