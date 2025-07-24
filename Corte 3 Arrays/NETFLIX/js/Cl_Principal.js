import Agencia from "./Cl_Angencia.js";
import Plan from "./Cl_Plan.js";

export default class Principal {
    constructor(){
        let agen = new Agencia();

        agen.agregarPlan(new Plan("111", "A"))
        agen.agregarPlan(new Plan("222", "B"))

        let salida = document.getElementById("salida")

        salida.innerHTML = `
        Porcentaje de suscriptores que no pagaron servicio de conexión: ${agen.porcNoConex()}%<br>
        Cuál es el plan favorito?: ${agen.planFav()}<br><br>
        `
        
        agen.listadoPago().forEach(p => {
            salida.innerHTML +=`
            El suscriptor con cedula ${p.cedula} paga ${(p.pago).toFixed(2)}$<br>
            `
        });
    }
}