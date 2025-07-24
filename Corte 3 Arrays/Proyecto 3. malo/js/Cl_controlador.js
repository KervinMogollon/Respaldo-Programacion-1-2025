export default class Cl_controlador {
  constructor({mEstudiante, mMateria, vista}) {
    this.mEstudiante = mEstudiante;
    this.mMateria = mMateria;
    this.vista = vista;
  }
  activarVista(vista) {
    this.vista.vista.hidden = vista !== "main";
    this.vista.vEstudiante.vista.hidden = vista !== "estudiante";
    this.vista.vMateria.vista.hidden = vista !== "materia";
    this.vista.vReporteEstudiantes.vista.hidden = vista !== "reporteEstudiantes";
    this.vista.vReporteMaterias.vista.hidden = vista !== "reporteMaterias";
  }
  agregarEstudiante() {
    this.mEstudiante.agregarEstudiante(this.vista.agregarEstudiante());
  }
  agregarMateria() {
    this.mMateria.agregarMateria(this.vista.agregarMateria());
  }
  reportarEstudiantes() {
    this.vista.reportarMoneda({
      infoTabla: this.mTaxista.listadoPasajerosBolivares(),
    });
  }
  reportarMaterias() {
    this.vista.reportarMoneda({
      infoTabla: this.mTaxista.listadoPasajerosDolares(),
    });
  }
}
