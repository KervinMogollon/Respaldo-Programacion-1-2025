export default class Cl_salon {
  constructor() {
    this.estuds = []
  }
  agregarEstud(e) {
    this.estuds.push(e);
  }
  eliminarEstud(index) {
    this.estuds.splice(index, 1);
  }
  
  edadPromedio() {
    let acumEdad = 0,
      cntEstuds = 0;
    this.estuds.forEach((estud) => {
      acumEdad += estud.edad;
      cntEstuds++;
    });
    if (cntEstuds === 0)
      return 0
    else
      return acumEdad / cntEstuds;
  }


  cantEncimaDelPromedio() {
    let promedio = this.edadPromedio(),
      cant = 0;
    this.estuds.forEach((estud) => {
      if (estud.edad > promedio)
        cant++;
    });
    return cant;
  }
  quienesEncimaPromedio() {
    let prom = this.edadPromedio();
    return this.estuds.filter((e) => e.edad > prom);
  }

  edadMayor() {
    let mayor = 0;
    this.estuds.forEach((e) => {
      if (e.edad > mayor) mayor = e.edad;
    });
    return mayor;
  }

  quienesEdadMayor() {
    let mayor = this.edadMayor();
    return this.estuds.filter((e) => e.edad === mayor);
  }

  quienesConEdad(edad) {
    return this.estuds.filter((e) => e.edad === edad);
  }
}
