export default class Cl_mPasajero {
  constructor({ nombre, bolivares = 0, dolares = 0 }) {
    this.nombre = nombre;
    this.bolivares = bolivares;
    this.dolares = dolares;
  }
  set bolivares(b) {
    this._bolivares = +b;
  }
  get bolivares() {
    return this._bolivares;
  }
  set dolares(d) {
    this._dolares = +d;
  }
  get dolares() {
    return this._dolares;
  }
  caramelos() {
    return this.dolares > 0;
  }
}
