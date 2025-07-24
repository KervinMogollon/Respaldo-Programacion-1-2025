export default class Cl_vPasajero {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("pasajeroForm");
    this.vista.hidden = true;

    this.inNombre = document.getElementById("pasajeroForm_inNombre");
    this.inBolivares = document.getElementById("pasajeroForm_inBolivares");
    this.inDolares = document.getElementById("pasajeroForm_inDolares");

    this.btAceptar = document.getElementById("pasajeroForm_btAceptar");
    this.btAceptar.onclick = () => {
      this.controlador.activarVista("main");
      this.controlador.agregarPasajero();
    };

    this.btCancelar = document.getElementById("pasajeroForm_btCancelar");
    this.btCancelar.onclick = () => {
      this.controlador.activarVista("main");
    };
  }
  get nombre() {
    return this.inNombre.value;
  }
  get bolivares() {
    return +this.inBolivares.value;
  }
  get dolares() {
    return +this.inDolares.value;
  }
  iniciar(controlador) {
    this.controlador = controlador;
  }
}
