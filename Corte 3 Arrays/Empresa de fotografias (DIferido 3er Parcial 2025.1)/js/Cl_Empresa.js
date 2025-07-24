export default class Empresa {
    constructor() {
        this.clientes = [];
    }

    agregarCliente(c) {
        this.clientes.push(c);
    }

    listado() {
        return this.clientes.map((c) => ({
            cod: c.codCliente,
            tipo: c.tipo,
            cant: c.cant,
            precio: c.precio()
        }))
    }

    codMenorPrecioPagado(tipo) {
        let menorPrecio = Infinity;

        this.listado().forEach(c => {
            if (c.tipo === tipo) {
                if (c.precio < menorPrecio) {
                    menorPrecio = c.precio;
                }
            }
        });

        return this.listado().filter(c =>
            c.precio === menorPrecio && c.tipo === tipo)
    }

    /* montoTotal(tipo) {
         return this.clientes.filter(c =>
             c.Tipo === tipo).reduce((total, c) => total + c.precio(), 0);
     }*/

    montoTotal(tipo) {
        let total = 0;
        this.clientes.forEach(c => {
            if (c.tipo === tipo) {
                total += c.precio();
            }
        });
        return total;
    }

    //cual entre las fotocopias tipo 1 y 2 tiene menor cantidad vendida (con 1= carta y 2 = oficio)
    menorCantidad() {
        let cntTipo1 = 0;
        let cntTipo2 = 0;

        this.clientes.forEach(c => {
            if (c.tipo === 1) {
                cntTipo1 += c.cant;
            } else if (c.tipo === 2) {
                cntTipo2 += c.cant;
            }
        });

        if (cntTipo1 < cntTipo2) {
            return `Fotocopia tipo carta tiene menor cantidad vendida que las tipo oficio`;
        } else if (cntTipo2 < cntTipo1) {
            return `Fotocopia tipo oficio tiene menor cantidad vendida que las tipo carta`;
        } else {
            return 'Ambos tipos tienen la misma cantidad vendida';
        }
    }
}