export default class Fotocopia {
    constructor(codCliente, tipo, cant) {
        this.codCliente = codCliente;
        this.tipo = tipo;
        this.cant = cant;
    }

    set codCliente(codCliente) {
        this._codCliente = codCliente;
    }

    get codCliente() {
        return this._codCliente;
    }

    set tipo(tipo) {
        this._tipo = +tipo;
    }

    get tipo() {
        return this._tipo;
    }

    set cant(cant) {
        this._cant = +cant;
    }

    get cant() {
        return this._cant;
    }

    precio() {
        let precio = 0;
        switch (this.tipo) {
            case 1:
                precio = 1;
                break;
            case 2:
                precio = 1.5;
                break;
            case 3:
                precio = 2;
                break;
            default:
                0;
        }
        return precio * this.cant;
    }
}