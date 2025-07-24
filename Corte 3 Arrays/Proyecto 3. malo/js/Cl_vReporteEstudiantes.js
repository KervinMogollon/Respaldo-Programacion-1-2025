export default class Cl_vReporteEstudiantes {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("Cl_vReporteEstudiantesForm");
    this.vista.hidden = true;

    this.tabla = document.getElementById("Cl_vReporteEstudiantesForm_tabla");
    this.btVolver = document.getElementById("Cl_vReporteEstudiantesForm_btVolver");
    this.btVolver.onclick = () => this.controlador.activarVista("main");
  }
  iniciar(controlador) {
    this.controlador = controlador;
  }
  reportar({ infoEstudiantes }) {
    this.controlador.activarVista("reporteEstudiantes");
    this.tabla.innerHTML = "";
    infoEstudiantes.map((estudiante) => {
      this.tabla.innerHTML += `<tr>
      <td>${estudiante.cedula}</td>
      <td>${estudiante.apellido}</td>
      <td>${estudiante.nombre}</td>
    </tr>`;
    });
  }
}
