/**
 * 23. EL TAXISTA 
Un taxista comienza con cierta cantidad de Bs. y cierta cantidad de dólares. Los pasajeros 
indican si pagan en Bs. o en dólares. El pasaje es a Bs.40 o $1. Además reciben 1 caramelo si 
pagan en dólares. Se desea conocer quien recibe caramelos, cuánto tiene el taxista al final en 
Bs. y en dólares, cuántos caramelos se repartieron y qué porcentaje de pasajeros paga en Bs. 
El taxista comenta que transportó a 10 personas y comenzó con Bs.600 y $20, Peter pagó 
en $, Fátima en Bs., Paul en $, Pedro en $, Rita en Bs., Linda pagó en $, Carmen en Bs., Robert 
en $, Flor en $ y Frank en $. Según esta info, la salida sería así: 
Peter, Paul, Pedro, Linda, Robert, Flor, Frank reciben caramelos 
El taxista al final tiene $27 y Bs.720 
Se repartieron 7 caramelos 
El 30% de los pasajeros pagó en Bs.
*/

import Cl_vTaxista from "./Cl_vTaxista.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_mTaxista from "./Cl_mTaxista.js";
import Cl_mPasajero from "./Cl_mPasajero.js";

export default class Cl_principal {
  constructor() {
    let vista = new Cl_vTaxista();
    let modelo = new Cl_mTaxista();
    let controlador = new Cl_controlador(modelo, vista);
    vista.controlador = controlador;
    modelo.comienzaBs = 600;
    modelo.comienzaDolares = 20;
    modelo.agregarPasajero(new Cl_mPasajero({ nombre: "Peter", dolares: 1 }));
    modelo.agregarPasajero(
      new Cl_mPasajero({ nombre: "Fátima", bolivares: 40 })
    );
    modelo.agregarPasajero(new Cl_mPasajero({ nombre: "Paul", dolares: 1 }));
    modelo.agregarPasajero(new Cl_mPasajero({ nombre: "Pedro", dolares: 1 }));
    modelo.agregarPasajero(
      new Cl_mPasajero({ nombre: "Rita", bolivares: 40 })
    );
    modelo.agregarPasajero(new Cl_mPasajero({ nombre: "Linda", dolares: 1 }));
    modelo.agregarPasajero(
      new Cl_mPasajero({ nombre: "Carmen", bolivares: 40 })
    );
    modelo.agregarPasajero(
      new Cl_mPasajero({ nombre: "Robert", dolares: 1 })
    );
    modelo.agregarPasajero(new Cl_mPasajero({ nombre: "Flor", dolares: 1 }));
    modelo.agregarPasajero(new Cl_mPasajero({ nombre: "Frank", dolares: 1 }));
  }
}
