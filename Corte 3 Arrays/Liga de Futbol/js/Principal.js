import liga from "./CL_Liga.js";
import Partido from "./CL_Partido.js";

export default class Principal {
    constructor() {
        let lig = new liga();


        let part1 = new Partido(1, 111, 222, 1, 2),
            part2 = new Partido(2, 333, 444, 0, 0),
            part3 = new Partido(3, 555, 666, 3, 0),
            part4 = new Partido(4, 777, 888, 1, 1),

            part5 = new Partido(5, 111, 444, 2, 1),
            part6 = new Partido(6, 333, 222, 0, 2),
            part7 = new Partido(7, 555, 888, 1, 2),
            part8 = new Partido(8, 777, 666, 1, 0),

            part9 = new Partido(9, 111, 333, 1, 2),
            part10 = new Partido(10, 222, 444, 0, 0),
            part11 = new Partido(11, 555, 777, 3, 0),
            part12 = new Partido(12, 666, 888, 1, 1) ;


        lig.agregarPartido(part1);
        lig.agregarPartido(part2);
        lig.agregarPartido(part3);
        lig.agregarPartido(part4);
        lig.agregarPartido(part5);
        lig.agregarPartido(part6);
        lig.agregarPartido(part7);
        lig.agregarPartido(part8);
        lig.agregarPartido(part9);
        lig.agregarPartido(part10);
        lig.agregarPartido(part11);
        lig.agregarPartido(part12);


        /*
        mostras mediantes tablas:
        a) partidos jugados por cada equipo (mostrar el codigo del equipo )
        b) partidos ganados por cada equipo (mostrar el codigo del equipo )
        c) partidos perdidos por cada equipo (mostrar el codigo del equipo )
        d) partidos empatados por cada equipo (mostrar el codigo del equipo )
        */

        let tablas = document.getElementById("tablas");
        tablas.innerHTML = `<h2>Resultados de la Liga</h2>
        <table>
            <tr>
                <th>Codigo Equipo</th>
                <th>Partidos Jugados</th>
                <th>Partidos Ganados</th>
                <th>Partidos Perdidos</th>
                <th>Partidos Empatados</th>
            </tr>`;
        let equipos = lig.partidos.map(p =>
            p.codigoEquipo1).concat(lig.partidos.map(p => p.codigoEquipo2));
                                                                            // el metodo map crea un nuevo array con los resultados de la funcion que se le pasa como argumento
        equipos = [...new Set(equipos)];                                    // eliminar duplicados
                                                                            // el operador (...) es el operador de propagacion, sirve para descomponer un array en sus elementos individuales
                                                                            // el metodo Set elimina los duplicados de un array
        equipos.forEach(e => {
            tablas.innerHTML += `
            <tr>
                <td>${e}</td>
                <td>${lig.juegosJugados(e)}</td>
                <td>${lig.juegosGanados(e)}</td>
                <td>${lig.juegosPerdidos(e)}</td>
                <td>${lig.juegosEmpatados(e)}</td>
            </tr>`;
        });

        let salida = document.getElementById("salida");
        salida.innerHTML = `<h2>Resultados de la Liga</h2>
        <strong>Numero de Partido</strong>  <strong>Codigo Equipo 1</strong> <strong>Codigo Equipo 2</strong> <strong>Goles Equipo 1</strong> <strong>Goles Equipo 2</strong>`;
        lig.partidos.forEach(p => {
            salida.innerHTML += `
            <p>Partido ${p.numero}: ${p.codigoEquipo1} vs ${p.codigoEquipo2} - ${p.golesEquipo1}:${p.golesEquipo2}</p>`;
        });



    }
}