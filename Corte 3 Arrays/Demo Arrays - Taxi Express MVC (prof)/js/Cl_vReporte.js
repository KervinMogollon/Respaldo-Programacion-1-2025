export default class Cl_vReporte {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("reportForm");
    this.vista.hidden = true;

    this.tabla = document.getElementById("reportForm_tabla");
    this.textoSalida = document.getElementById("reportForm_textoSalida");
    this.btVolver = document.getElementById("reportForm_btVolver");
    this.btVolver.onclick = () => this.controlador.activarVista("main");
  }
  iniciar(controlador) {
    this.controlador = controlador;
  }
  reportar({ infoTabla, textoSalida = "" }) {
    this.controlador.activarVista("reporte");
    this.tabla.innerHTML = "";
    infoTabla.map((pasajero) => {
      this.tabla.innerHTML += `<tr>
      <td>${pasajero.nombre}</td>
      <td>${pasajero.bolivares}</td>
      <td>${pasajero.dolares}</td>
      <td>${pasajero.caramelos ? "X" : ""}</td>
    </tr>`;
    });
    this.textoSalida.innerHTML = textoSalida;
  }
}
