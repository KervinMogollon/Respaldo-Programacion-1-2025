export default class Cl_mTaxista {
  constructor(comienzaBs = 0, comienzaDolares = 0) {
    this.comienzaBs = comienzaBs;
    this.comienzaDolares = comienzaDolares;
    this.arrPasajeros = [];
  }
  set comienzaBs(comienzaBs) {
    this._comienzaBs = +comienzaBs;
  }
  get comienzaBs() {
    return this._comienzaBs;
  }
  set comienzaDolares(comienzaDolares) {
    this._comienzaDolares = +comienzaDolares;
  }
  get comienzaDolares() {
    return this._comienzaDolares;
  }
  agregarPasajero(pasajero) {
    this.arrPasajeros.push(pasajero);
  }
  listadoPasajerosBolivares() {
    return this.arrPasajeros.filter((pasajero) => pasajero.bolivares > 0);
  }
  listadoPasajerosDolares() {
    return this.arrPasajeros.filter((pasajero) => pasajero.dolares > 0);
  }
  listado(){
    return this.arrPasajeros
  }
  totalEnBolivares() {
    return (
      this.comienzaBs +
      this.arrPasajeros.reduce((ac, pasajero) => ac + pasajero.bolivares, 0)
    );
  }
  totalEnDolares() {
    return (
      this.comienzaDolares +
      this.arrPasajeros.reduce((ac, pasajero) => ac + pasajero.dolares, 0)
    );
  }
}
