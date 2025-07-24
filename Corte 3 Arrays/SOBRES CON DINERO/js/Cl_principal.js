import Sobre from "./Cl_Sobre.js";
import Sobres from "./Cl_sobres.js";

export default class Principal {
    constructor() {
        let sobs = new Sobres();

        sobs.agregarSobre(new Sobre(1,3))
        sobs.agregarSobre(new Sobre(5,2))
        sobs.agregarSobre(new Sobre(10,4))
        sobs.agregarSobre(new Sobre(20,3))
        sobs.agregarSobre(new Sobre(50,2))

        let salida = document.getElementById("salida");
        let salidaT = document.getElementById("salidaT");

        sobs.contenidoSobres().forEach(cs => {
            salida.innerHTML += `
            El sobre Nº ${cs.nSobre} tiene ${cs.valorF}$<br>`
        });

        salidaT.innerHTML = `
        <br>El total entre todos los sobres es de ${sobs.totalSobre()}$`
    }
}