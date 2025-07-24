import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_mMateria from "./Cl_mMateria.js";
import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_vMateria from "./Cl_vMateria.js";
import Cl_vReporteEstudiantes from "./Cl_vReporteEstudiantes.js";
import Cl_vReporteMaterias from "./Cl_vReporteMaterias.js";
export default class Cl_vAplicacion {
  constructor() {
    this.controlador = null;
    this.vistaApp = document.getElementById("appForm");

    this.vEstudiante = new Cl_vEstudiante();
    this.vReporteEstudiantes = new Cl_vReporteEstudiantes();

    this.vMateria = new Cl_vMateria();
    this.vReporteMaterias = new Cl_vReporteMaterias();

    this.btIniciar = document.getElementById("mainForm_btIniciar");
    this.btIniciar.onclick = () => this.iniciar();

    this.btAgregarEstudiante = document.getElementById(
      "mainForm_btAgregarEstudiante"
    );
    this.btAgregarEstudiante.hidden = true;
    this.btAgregarEstudiante.onclick = () =>
      this.controlador.activarVista("Estudiante");

    this.btReportarEstudiantes = document.getElementById(
      "mainForm_btReportarEstudiantes"
    );
    this.btReportarEstudiantes.onclick = () =>
      this.controlador.reportarEstudiantes();

    this.btReportarMaterias = document.getElementById(
      "mainForm_btReportarMaterias"
    );
    this.btReportarMaterias.onclick = () => this.controlador.reportarMaterias();
  }
  set controlador(controlador) {
    this._controlador = controlador;
    if (controlador) {
      this.vEstudiante.iniciar(controlador);
      this.vReporteEstudiantes.iniciar(controlador);
      this.vMateria.iniciar(controlador);
      this.vReporteMaterias.iniciar(controlador);
    }
  }
  get controlador() {
    return this._controlador;
  }
  iniciar() {
    this.controlador.iniciarTaxi(
      this.inIniciaConBolivares.value,
      this.inIniciaConDolares.value
    );
    this.btAgregarEstudiante.hidden = false;
    this.btReportarEstudiantes.hidden = false;
    this.btReportarDolares.hidden = false;
    this.btReporteIntegral.hidden = false;
  }
  agregarEstudiante() {
    return new Cl_mEstudiante({
      nombre: this.vEstudiante.cedula,
      bolivares: this.vEstudiante.apellido,
      dolares: this.vEstudiante.nombre,
    });
  }
  agregarMateria() {
    return new Cl_mMateria({
      codigo: this.vMateria.codigo,
      semestre: this.vMateria.semestre,
      nombre: this.vMateria.nombre,
    });
  }
  reportarEstudiantes({ infoEstudiantes }) {
    this.vReporteEstudiantes.reportar({ infoEstudiantes });
  }
  reportarMaterias({ infoMaterias }) {
    this.vReporteMaterias.reportar({ infoMaterias });
  }
}
