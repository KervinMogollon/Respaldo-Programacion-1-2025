/**
 * Para saber cuáles estudiantes de una sección tienen edad por encima del promedio es preciso:
 * PRIMERO: calcular el promedio (esto amerita un ciclo completo a todos los datos)
 * SEGUNDO: ver en cada estudiante su edad y compararla con el promedio, contarlo si la edad es mayor que el promedio
 * Otros ejemplos:
 * Cuántos estudiantes tienen la edad mayor
 * Cuántos estudiantes tienen la misma edad que el último estudiante
 */
import Cl_estudiante from "./Cl_estudiante.js";
import Cl_salon from "./Cl_salon.js";

let salon = new Cl_salon();
salon.agregarEstudiante(new Cl_estudiante("Luis", 18));
salon.agregarEstudiante(new Cl_estudiante("Ana", 20));
salon.agregarEstudiante(new Cl_estudiante("Eva", 16));
salon.agregarEstudiante(new Cl_estudiante("Ray", 20));

alert(`Edad promedio: ${salon.edadPromedio()}`);

alert(
  `Cantidad de estudiantes encima del promedio: ${salon.cantEncimaDelPromedio()}`
);

alert(`Estudiantes encima del promedio: ${JSON.stringify(salon.quienesEncimaPromedio())}`);

alert(`Edad mayor: ${salon.edadMayor()}`);

alert(`Estudiantes con la edad mayor: ${JSON.stringify(salon.quienesEdadMayor())}`);

alert(`Estudiantes con 20 años: ${JSON.stringify(salon.quienesConEdad(20))}`);

alert(`Estudiantes con 18 años: ${JSON.stringify(salon.quienesConEdad(18))}`);

alert(`Estudiantes con 15 años: ${JSON.stringify(salon.quienesConEdad(15))}`);

alert(`Estudiantes con 25 años: ${JSON.stringify(salon.quienesConEdad(25))}`);
