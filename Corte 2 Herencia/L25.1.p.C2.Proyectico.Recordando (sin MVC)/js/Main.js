/*
RECORDANDO
Una Tienda Fotográfica, ofrece promociones para cubrir sus eventos especiales en videos o
fotografías. Se conoce de cada cliente: su código y costo base. 

Además, se sabe que si la promoción es de Fotografías tendrá un tipo de foto (D: Digital o I: Impresa), 
teniendo en cuenta si es Digital tendrá un descuento del 18% sobre el costo y si las fotos son impresas 
tendrán un incremento del 13%. 

Por otro lado, si la promoción es de videos se debe tomar en cuenta si el
mismo se graba en formato HD (High Definition: SI-NO) de ser así este tendrá un incremento
del 20% sobre el costo. 

La Tienda requiere determinar al final de su jornada laboral: el precio
de cada cliente, el total vendido y el promedio de ventas de promociones de fotos digitales
vendidas.
*/

import Tienda from "./CL_Tienda.js";
import Fotografia from "./CL_Fotografia.js";
import Video from "./CL_Video.js";

export default class CL_Main {
    constructor() {
        let tnd = new Tienda();

        let fot1 = new Fotografia("22", 20, "I"),
            fot2 = new Fotografia("11", 10, "D"),
            fot3 = new Fotografia("55", 30, "I"),
            fot4 = new Fotografia("88", 20, "D");

        let vid1 = new Video("44", 100, "SI"),
            vid2 = new Video("33", 200, "SI"),
            vid3 = new Video("77", 250, "NO"),
            vid4 = new Video("66", 300, "SI");

        tnd.procesarRecuerdo(fot1);
        tnd.procesarRecuerdo(fot2);
        tnd.procesarRecuerdo(fot3);
        tnd.procesarRecuerdo(fot4);
        tnd.procesarRecuerdo(vid1);
        tnd.procesarRecuerdo(vid2);
        tnd.procesarRecuerdo(vid3);
        tnd.procesarRecuerdo(vid4);

        let mostrarRecuerdo = (r) => {
            return `
            <tr>
                <td>${r.cod}</td>
                <td>${(r.montPagar()).toFixed(2)}</td>
            </tr>
            `;
        }

        let salida = document.getElementById("salida");
        salida.innerHTML = `
        <table>
            <tr>
                <th>Codigo</th>
                <th>Monto a Pagar</th>
            </tr>
        ${mostrarRecuerdo(fot1)}
        ${mostrarRecuerdo(fot2)}
        ${mostrarRecuerdo(fot3)}
        ${mostrarRecuerdo(fot4)}
        ${mostrarRecuerdo(vid1)}
        ${mostrarRecuerdo(vid2)}
        ${mostrarRecuerdo(vid3)}
        ${mostrarRecuerdo(vid4)}
        </table>
        
        <br>Total vendido ${(tnd.montoFinal()).toFixed(2)}$
        <br>El promedio de ventas de promociones de fotos digitales vendidas ${(tnd.promdDigital()).toFixed(2)} 
        `
    }
}