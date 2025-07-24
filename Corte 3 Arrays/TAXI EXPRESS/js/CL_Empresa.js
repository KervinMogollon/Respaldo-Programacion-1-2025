export default class empresa {
    constructor() {
        this.arrayClientes = [];
    }

    agregarCliente(cliente) {
        this.arrayClientes.push(cliente);
    }

    cantidadFemeninasMayoresEdad() {
        let cntFemeninasMayorEdad = 0;
        this.arrayClientes.forEach(cliente => {
            if (cliente.sexo === 2 && cliente.edad >= 18) {
                cntFemeninasMayorEdad++;
            }
        });
        return cntFemeninasMayorEdad;
    }

    menorEdad() {
        let menor = Infinity;
        this.arrayClientes.forEach(cliente => {
            if (cliente.edad < menor) {
                menor = cliente.edad;
            }
        });
        return menor;
    }

    quienEsMenor() {
        let menor = this.menorEdad();
        return this.arrayClientes.filter(cliente =>
            cliente.edad === menor);
    }

    promedioEdad() {
        let sumaEdades = 0;
        this.arrayClientes.forEach(cliente => {
            sumaEdades += cliente.edad;
        });
        return sumaEdades / this.arrayClientes.length;
    }


}