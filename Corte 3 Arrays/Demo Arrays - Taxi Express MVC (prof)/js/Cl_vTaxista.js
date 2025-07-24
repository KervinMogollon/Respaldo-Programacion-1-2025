import Cl_vPasajero from "./Cl_vPasajero.js";
import Cl_mPasajero from "./Cl_mPasajero.js";
import Cl_vReporte from "./Cl_vReporte.js";
export default class Cl_vTaxista {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("mainForm");
    this.vPasajero = new Cl_vPasajero();
    this.vReporte = new Cl_vReporte();

    this.inIniciaConBolivares = document.getElementById(
      "mainForm_iniciaConBolivares"
    );
    this.inIniciaConDolares = document.getElementById(
      "mainForm_iniciaConDolares"
    );

    this.btIniciar = document.getElementById("mainForm_btIniciar");
    this.btIniciar.onclick = () => this.iniciar();

    this.btAgregarPasajero = document.getElementById(
      "mainForm_btAgregarPasajero"
    );
    this.btAgregarPasajero.hidden = true;
    this.btAgregarPasajero.onclick = () =>
      this.controlador.activarVista("pasajero");

    this.btReportarBolivares = document.getElementById(
      "mainForm_btReportarBolivares"
    );
    this.btReportarBolivares.hidden = true;
    this.btReportarBolivares.onclick = () =>
      this.controlador.reportarBolivares();

    this.btReportarDolares = document.getElementById(
      "mainForm_btReportarDolares"
    );
    this.btReportarDolares.hidden = true;
    this.btReportarDolares.onclick = () => this.controlador.reportarDolares();

    this.btReporteIntegral = document.getElementById(
      "mainForm_btReportarIntegral"
    );
    this.btReporteIntegral.hidden = true;
    this.btReporteIntegral.onclick = () => this.controlador.reportarIntegral();
  }
  set controlador(controlador) {
    this._controlador = controlador;
    if (controlador) {
      this.vPasajero.iniciar(controlador);
      this.vReporte.iniciar(controlador);
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
    this.inIniciaConBolivares.disabled = true;
    this.inIniciaConDolares.disabled = true;
    this.btIniciar.hidden = true;
    this.btAgregarPasajero.hidden = false;
    this.btReportarBolivares.hidden = false;
    this.btReportarDolares.hidden = false;
    this.btReporteIntegral.hidden = false;
  }
  agregarPasajero() {
    return new Cl_mPasajero({
      nombre: this.vPasajero.nombre,
      bolivares: this.vPasajero.bolivares,
      dolares: this.vPasajero.dolares,
    });
  }
  reportarMoneda({infoTabla}) {
    this.vReporte.reportar({ infoTabla });
  }
  reportarIntegral({infoTabla, textoSalida}) {
    this.vReporte.reportar({ infoTabla, textoSalida });
  }
}
