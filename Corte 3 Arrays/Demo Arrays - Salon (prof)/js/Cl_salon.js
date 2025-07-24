export default class Cl_salon {
  constructor() {
    this.estudiantes = [];
  }
  agregarEstudiante(estudiante) {
    this.estudiantes.push(estudiante);
  }
  eliminarEstudiante(index) {
    this.estudiantes.splice(index, 1);
  }
  edadPromedio() {
    let acEdad = 0,
      cntEstudiantes = 0;
    this.estudiantes.forEach((estudiante) => {
      acEdad += estudiante.edad;
      cntEstudiantes++;
    });
    return acEdad / cntEstudiantes;
  }
  cantEncimaDelPromedio() {
    let promedio = this.edadPromedio(),
      cnt = 0;
    this.estudiantes.forEach((estudiante) => {
      if (estudiante.edad > promedio) 
        cnt++;
    });
    return cnt;
  }
  quienesEncimaPromedio() {
    let prom = this.edadPromedio();
    return this.estudiantes.filter((e) => e.edad > prom);
  }
  edadMayor() {
    let mayor = 0;
    this.estudiantes.forEach((e) => {
      if (e.edad > mayor) mayor = e.edad;
    });
    return mayor;
  }
  quienesEdadMayor() {
    let mayor = this.edadMayor(),
      quienes = this.estudiantes.filter((e) => e.edad === mayor);
    return quienes;
  }
  quienesConEdad(edad) {
    return this.estudiantes.filter((e) => e.edad === edad);
  }
}
