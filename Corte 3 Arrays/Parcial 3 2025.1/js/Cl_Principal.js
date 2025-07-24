import mCartelera from "./Cl_mCartelera.js";
import mPelicula from "./Cl_mPelicula.js";
import mVentas from "./Cl_mVentas.js";

export default class Principal {
    constructor() {
        let cartelera = new mCartelera();

        cartelera.agregarPelicula(new mPelicula(1, "Spider-Man", 5, 8));
        cartelera.agregarPelicula(new mPelicula(2, "Avatar", 6, 10));
        cartelera.agregarPelicula(new mPelicula(3, "Toy Story", 4, 7));

        let ventas = new mVentas();

        ventas.agregarVenta({ id: 1, cedula: "123", codPeli: 1, cantInf: 2, cantAdu: 1 });
        ventas.agregarVenta({ id: 2, cedula: "321", codPeli: 2, cantInf: 1, cantAdu: 3 });
        ventas.agregarVenta({ id: 3, cedula: "213", codPeli: 1, cantInf: 4, cantAdu: 0 });
        /*cuando haces push con paquete de datos, osea ({a, b, ..., n}), cuando hagas las instancias debes hacerlo asi
        con cada elemento que usaste en el push con los ":" aparte q deben llamarse igual*/

        let salida = document.getElementById("salida")
        salida.innerHTML = `
        peliculas vistaas por cedula dada ${JSON.stringify(ventas.peliculasDeCedula("123", cartelera)) /*aqui se usa como instancia a 
                                                        la clase mCartelera para la variable cartelera en mVentas */}<br>
        
        <br>Cantidad de niños y adultos que fueron al cine ${ventas.cantInfAdultos()}<br>
        
        <br>monto recaudado para una pelicula dada: ${ventas.vendidoPelicula({codigo: 1, cartelera})}<br>
        
        <br>Informacion de asistentes a una pelicula ${JSON.stringify(ventas.informacionAsistentes(1, cartelera))}
        `
    }
}