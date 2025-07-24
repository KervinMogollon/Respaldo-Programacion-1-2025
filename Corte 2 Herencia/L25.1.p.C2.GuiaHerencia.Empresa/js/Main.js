/**
En una empresa se conoce el nombre y edad de su personal, con un sueldo base de $150.
Trabajan obreros (1) y administrativos (2). Los obreros hasta con 3 hijos reciben $50 de
bono, con más de 3 hijos reciben $70. Los administrativos tienen nivel de estudio
(1=bachiller, 2=técnico, 3=universitario), y reciben un incentivo (sólo si son mayor de
edad) de $50 para bachilleres y $100 si tienen otro nivel.
 */

import CL_Obrero from "./CL_Obrero.js";
import CL_Administrativo from "./CL_Administrativo.js";

export default class CL_Main {
    constructor() {
        let admin1 = new CL_Administrativo("Luis", 15, 1),
            obre1 = new CL_Obrero("Ana", 20, 2),
            obre2 = new CL_Obrero("Raul", 17, 0),
            admin2 = new CL_Administrativo("Liz", 19, 3),
            obre3 = new CL_Obrero("Eva", 22, 5)
    }
}

