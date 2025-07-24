import Fotocopia from "./Cl_Fotocopia.js";
import Empresa from "./Cl_Empresa.js";

export default class Principal {
    constructor() {
        let empre = new Empresa();

        empre.agregarCliente(new Fotocopia("111", 1, 3));
        empre.agregarCliente(new Fotocopia("222", 2, 4));
        empre.agregarCliente(new Fotocopia("333", 3, 5));
        empre.agregarCliente(new Fotocopia("444", 2, 4));
        empre.agregarCliente(new Fotocopia("555", 2, 1));
        empre.agregarCliente(new Fotocopia("666", 1, 5));
        empre.agregarCliente(new Fotocopia("777", 3, 4));
        empre.agregarCliente(new Fotocopia("888", 2, 1));
        empre.agregarCliente(new Fotocopia("999", 1, 3));

        

        let salida = document.getElementById("salida");
        salida.innerHTML += `
        <br>El(los) código()s del(los) cliente(s) que pagó menos por fotocopias tipo 1 es: ${empre.codMenorPrecioPagado(1).map((c) => c.cod)}
        <br>El(los) código()s del(los) cliente(s) que pagó menos por fotocopias tipo 2 es: ${empre.codMenorPrecioPagado(2).map((c) => c.cod)}
        <br>El(los) código()s del(los) cliente(s) que pagó menos por fotocopias tipo 3 es: ${empre.codMenorPrecioPagado(3).map((c) => c.cod)}
        <br>El monto total pagado por fotocopias tipo 1 es: ${empre.montoTotal(1)}$
        <br>El monto total pagado por fotocopias tipo 2 es: ${empre.montoTotal(2)}$
        <br>El monto total pagado por fotocopias tipo 3 es: ${empre.montoTotal(3)}$
        <br>Cual entre las fotocopias tipo 1 y 2 tiene menor cantidad vendida? R= ${empre.menorCantidad()}
        `

        let tablaListado = document.getElementById("tablaListado");
        tablaListado.innerHTML = `
            <tr>
                <th>Código Cliente</th>
                <th>Tipo</th>
                <th>Cantidad</th>
                <th>Precio</th>
            </tr>`;
        empre.listado().map((c) => {
            tablaListado.innerHTML += `
            <tr>
                <td>${c.cod}</td>
                <td>${c.tipo}</td>
                <td>${c.cant}</td>
                <td>${c.precio}$</td>
            </tr>`;
        })
    }


}