export default class Cl_controlador {
  constructor(modelo, vista) {
    this.mTaxista = modelo;
    this.vTaxista = vista;
  }
  agregarPasajero() {
    this.mTaxista.agregarPasajero(this.vTaxista.agregarPasajero());
  }
  iniciarTaxi(comienzaBs, comienzaDolares) {
    this.mTaxista.comienzaBs = comienzaBs;
    this.mTaxista.comienzaDolares = comienzaDolares;
  }
  activarVista(vista) {
    this.vTaxista.vista.hidden = vista !== "main";
    this.vTaxista.vPasajero.vista.hidden = vista !== "pasajero";
    this.vTaxista.vReporte.vista.hidden = vista !== "reporte";
  }
  reportarBolivares() {
    this.vTaxista.reportarMoneda({
      infoTabla: this.mTaxista.listadoPasajerosBolivares(),
    });
  }
  reportarDolares() {
    this.vTaxista.reportarMoneda({
      infoTabla: this.mTaxista.listadoPasajerosDolares(),
    });
  }
  reportarIntegral() {
    this.vTaxista.reportarIntegral({
      infoTabla: this.mTaxista.listado(),
      textoSalida: `El taxista al final tiene: 
      Bs.${this.mTaxista.totalEnBolivares()} y 
      $${this.mTaxista.totalEnDolares()}`,
    });
  }
}
