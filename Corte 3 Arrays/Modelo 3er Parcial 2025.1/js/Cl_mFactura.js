
export default class Cl_mFactura {
    constructor(c, f) {
        this.codigo = c;
        this.fecha = f;
        this.arrayArticulos = [];
    }

    // Agregar un item (artículo vendido con cantidad)
    agregarItem(codigoArticulo, cantidad) {
        this.arrayArticulos.push({ codigoArticulo, cantidad });
    }

    /*
    Programe el método correspondiente a Cl_mFactura.info(articulos), el cual debe retornar la siguiente info:
    fecha, código y datos de artículos vendidos (código, nombre, cantidad, precio y subtotal)
    */

    info(articulos) {
        // Se asume que articulos es una instancia de Cl_mArticulos
        let detalles = this.arrayArticulos.map(item => { //aqui el map cumple la función de recorrer el array de artículos vendidos y retornar un nuevo array con los detalles de cada artículo vendido
            // item es un objeto con las propiedades codigoArticulo y cantidad
            // Buscar el artículo en el array de artículos por su código
            let articulo = articulos.arrayArticulos.find(a => a.codigo === item.codigoArticulo); //el find busca el artículo por su código,si lo encuentra, retorna el artículo, si no lo encuentra, retorna undefined

            if (articulo) {
                let precio = articulo.precio();
                let subtotal = item.cantidad * precio;
                return {
                    codigo: articulo.codigo,
                    nombre: articulo.nombre,
                    cantidad: item.cantidad,
                    precio: precio,
                    subtotal: subtotal
                };
            } else {
                return null;  // En caso de no encontrar el artículo
            }
        });

        return {
            fecha: this.fecha,
            codigo: this.codigo,
            articulosVendidos: detalles
        };
    }

    total(articulos) {
        let total = 0;
        this.arrayArticulos.forEach(item => {
            let articulo = articulos.arrayArticulos.find(a => a.codigo === item.codigoArticulo);
            if (articulo) {
                total += item.cantidad * articulo.precio();
            }
        });
        return total;
    }

    
}