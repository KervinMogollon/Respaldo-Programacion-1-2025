export default class Cl_vReporteMaterias {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("Cl_vReporteMateriasForm");
    this.vista.hidden = true;

    this.tabla = document.getElementById("Cl_vReporteMateriasForm_tabla");
    this.btVolver = document.getElementById("Cl_vReporteMateriasForm_btVolver");
    this.btVolver.onclick = () => this.controlador.activarVista("main");
  }
  iniciar(controlador) {
    this.controlador = controlador;
  }
  reportar({ infoMaterias }) {
    this.controlador.activarVista("reporteMaterias");
    this.tabla.innerHTML = "";
    infoMaterias.map((materia) => {
      this.tabla.innerHTML += `<tr>
      <td>${materia.codigo}</td>
      <td>${materia.semestre}</td>
      <td>${materia.nombre}</td>
    </tr>`;
    });
  }
}
