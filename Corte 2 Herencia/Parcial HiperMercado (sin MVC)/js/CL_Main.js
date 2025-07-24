import Tienda from "./CL_Tienda.js";

import Electrodomestico from "./CLs_Hijas/CL_Electrodomestico.js";
import Mueble from "./CLs_Hijas/CL_Mueble.js";

export default class Main {
    constructor() {
        let tnd = new Tienda();

        let elec1 = new Electrodomestico("111", "Nevera", 350, 1, 1, 6),
            elec2 = new Electrodomestico("222", "Cocina", 250, 1, 2, 4),
            elec3 = new Electrodomestico("333", "Nevera", 650, 1, 1, 12);

        let mub1 = new Mueble("444", "Muble", 560, 2, 1),
            mub2 = new Mueble("555", "Muble Confort", 450, 2, 2),
            mub3 = new Mueble("666", "Muble Country", 340, 2, 3);

        tnd.procesarArticulo(elec1);
        tnd.procesarArticulo(elec2);
        tnd.procesarArticulo(elec3);
        tnd.procesarArticulo(mub1);
        tnd.procesarArticulo(mub2);
        tnd.procesarArticulo(mub3);

        let mostrarArticulo = (a) =>{
            return`<tr>
                <td>${a.cod}</td>
                <td>${(a.montPagar()).toFixed(2)} Bs.F</td>
            </tr>
            `;
        }

        let salida = document.getElementById("salida")
        salida.innerHTML =`
        <table>
            <tr>
                <th>Codigo</th>
                <th>Monto a Pagar</th>
            </tr>
            ${mostrarArticulo(elec1)}
            ${mostrarArticulo(elec2)}
            ${mostrarArticulo(elec3)}
            ${mostrarArticulo(mub1)}
            ${mostrarArticulo(mub2)}
            ${mostrarArticulo(mub3)}
        </table>

        <br>El total de Ventas es: ${(tnd.totalVentas()).toFixed(2)} Bs.F
        <br>Entre neveras y cocinas, ${tnd.elecMayorVendido()}
        <br>Porcentaje de muebles de madera en relacion al total de muebles: ${(tnd.porcMuebleMadera()).toFixed(2)}%
        `

    }
}