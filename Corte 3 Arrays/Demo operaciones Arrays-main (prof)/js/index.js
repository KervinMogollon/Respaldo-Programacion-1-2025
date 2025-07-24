import Cl_demosArrays from "./Cl_demosArrays.js";
import Cl_salon from "./Cl_salon.js";

export default class Cl_index {
  constructor() {
    this.salida = document.getElementById("salida");
    this.salida.innerHTML = this.opciones();
    this.opcion = document.getElementById("opcion");
    this.demos = new Cl_demosArrays();
    this.opcion.onclick = () => this.mostrarDemo();
  }
  opciones() {
    return `
    A. Ejemplo creación de arrays<br>
    B. Ejemplo acceso de elementos<br>
    C. Ejemplo acceso de elementos<br>
    D. Ejemplo push<br>
    E. Ejemplo unshift<br>
    F. Ejemplo pop<br>
    G. Ejemplo shift<br>
    H. Ejemplo splice<br>
    I. Ejemplo map() -1-<br>
    J. Ejemplo map() -2-<br>
    K. Ejemplo con ciclos tradicionales<br>
    L. Ejemplo con método forEach<br>
    M. Ejemplo con método filter<br>
    N. Ejemplo con método sort<br>
    O. Ejemplo Salón de Clases
    `;
  }

  demoSalonClases() {
    let salon = new Cl_salon();
    salon.agregarEstud({ nombre: "Luis", edad: 18 });
    salon.agregarEstud({ nombre: "Ana", edad: 20 });
    salon.agregarEstud({ nombre: "Eva", edad: 16 });
    salon.agregarEstud({ nombre: "Ray", edad: 20 });
    alert(`
Demo salón de clases

==> Edad promedio= ${salon.edadPromedio()}

==> Cantidad encima promedio= ${salon.cantEncimaDelPromedio()}

==> Quiénes encima promedio= ${JSON.stringify(salon.quienesEncimaPromedio())}

==> Edad mayor= ${salon.edadMayor()}

==> Quiénes con edad mayor= ${JSON.stringify(salon.quienesEdadMayor())}

==> Quiénes con edad 18= ${JSON.stringify(salon.quienesConEdad(18))}

==> Quiénes con edad 20= ${JSON.stringify(salon.quienesConEdad(20))}
      `);
  }
  mostrarDemo() {
    let opc = prompt("Seleccione una opción:").toUpperCase();
    switch (opc) {
      case "A":
        this.demos.ejemploCreacion();
        break;
      case "B":
        this.demos.ejemploAcceso1();
        break;
      case "C":
        this.demos.ejemploAcceso2();
        break;
      case "D":
        this.demos.ejemploPush();
        break;
      case "E":
        this.demos.ejemploUnshift();
        break;
      case "F":
        this.demos.ejemploPop();
        break;
      case "G":
        this.demos.ejemploShifty();
        break;
      case "H":
        this.demos.ejemploSplice();
        break;
      case "I":
        this.demos.metodoMap1();
        break;
      case "J":
        this.demos.metodoMap2();
        break;
      case "K":
        this.demos.ciclosTradicionales();
        break;
      case "L":
        this.demos.metodoForEach();
        break;
      case "M":
        this.demos.metodoFilter();
        break;
      case "N":
        this.demos.metodoSort();
        break;
      case "O":
        this.demoSalonClases();
        break;
      default:
        alert("Opción no disponible");
    }
  }
}
