import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_vMateria from "./Cl_vMateria.js";
import Cl_vInscripcion from "./Cl_vInscripcion.js";
import Cl_vEstudiantes from "./Cl_vEstudiantes.js";
import Cl_vMaterias from "./Cl_vMaterias.js";
import vistas from "../data/vistas.js";
export default class Cl_vAplicacion {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("appForm");

    this.vEstudiante = new Cl_vEstudiante();
    this.vEstudiantes = new Cl_vEstudiantes();

    this.vMateria = new Cl_vMateria();
    this.vMaterias = new Cl_vMaterias();

    this.vInscripcion = new Cl_vInscripcion();

    this.lblLapso = document.getElementById("appForm_lblLapso");

    this.btCambiarLapso = document.getElementById("appForm_btCambiarLapso");
    this.btCambiarLapso.onclick = () => this.controlador.cambiarLapso();

    this.btEstudiantes = document.getElementById("appForm_btEstudiantes");
    this.btEstudiantes.onclick = () =>
      this.controlador.activarVista({ vista: vistas.estudiantes });

    this.btEstudiantesEnMaterias = document.getElementById("materiasForm_btEstudiantes")
    this.btEstudiantesEnMaterias.onclick = () =>
      this.controlador.activarVista({ vista: vistas.estudiantes });

    this.btMaterias = document.getElementById("appForm_btMaterias");
    this.btMaterias.onclick = () =>
      this.controlador.activarVista({ vista: vistas.materias });

    this.btMateriasEnEstudiante = document.getElementById("estudiantesForm_btMaterias")
    this.btMateriasEnEstudiante.onclick = () =>
      this.controlador.activarVista({ vista: vistas.materias });

    this.btInscribirMateria = document.getElementById(
      "appForm_btInscribirMateria"
    );
    this.btInscribirMateria.onclick = () =>
      this.controlador.activarVista({ vista: vistas.inscripcion });

    this.tabla = document.getElementById("appForm_tabla");

    this.reportesVarios();

  }
  set controlador(controlador) {
    this._controlador = controlador;
    if (controlador) {
      this.vEstudiante.iniciar(controlador);
      this.vEstudiantes.iniciar(controlador);
      this.vMateria.iniciar(controlador);
      this.vMaterias.iniciar(controlador);
      this.vInscripcion.iniciar(controlador);
    }
  }
  get controlador() {
    return this._controlador;
  }
  activarVista({ vista }) {
    this.vista.hidden = vista !== vistas.app;
    if (vista === vistas.app) {
      this.reportarInscritos({
        info: this.controlador.mSemestre.inscritos.listado(
          this.controlador.mSemestre.estudiantes.listado()
        ),
      });
      this.lblLapso.innerHTML = this.controlador.mSemestre.nombre;
    }
  }



  reportarInscritos({ info }) {
    this.tabla.innerHTML = "";
    info.map((inscripcion) => {
      this.tabla.innerHTML += `<tr>
      <td>${inscripcion.cedula}</td>
      <td>${inscripcion.nombre}</td>
      <td>${inscripcion.cntMaterias}</td>
    </tr>`;
    });
  }

  reportesVarios() {
    this.btCantidadMaterias = document.getElementById(
      "appForm_btCantidadMaterias"
    );
    this.btCantidadMaterias.onclick = () => {
      let cedula = +prompt("Indique la cedula: "),
        reporte = `La cantidad de materias de ${cedula} es: 
      ${this.controlador.mSemestre.inscritos.cantidadMaterias(cedula)}`;
      alert(reporte);
    };

    this.btCantidadPromedioMaterias = document.getElementById(
      "appForm_btCantidadPromedioMaterias"
    );
    this.btCantidadPromedioMaterias.onclick = () => {
      let reporte = `La cantidad promedio de materias por estudiante es: 
      ${this.controlador.mSemestre.inscritos
          .cantidadPromedioMaterias()
          .toFixed(2)}`;
      alert(reporte);
    };

    this.btNombresInscritosEn = document.getElementById(
      "appForm_btNombresIncritosEn"
    );
    this.btNombresInscritosEn.onclick = () => {
      let codigo = prompt("Indique el codigo de la materia: ").toUpperCase(),
        reporte = `Los nombres de los estudiantes que asistieron a la materia ${codigo} son: \n`;
      this.controlador.mSemestre.inscritos
        .nombresInscritosEn({
          codigo,
          estudiantes: this.controlador.mSemestre.estudiantes.listado(),
        })
        .forEach(((nombre) => (reporte += `${nombre}\n`)));
      alert(reporte);
    };

    this.btEstudiantesCantidadMaterias = document.getElementById(
      "appForm_btEstudiantesCantidadMaterias"
    );
    this.btEstudiantesCantidadMaterias.onclick = () => {
      let cantidad = +prompt("Indique la cantidad de materias: "),
        reporte = `Los estudiantes que cursan ${cantidad} materias son: \n`;
      this.controlador.mSemestre.inscritos
        .estudiantesCantidadMaterias({
          cantidad,
          estudiantes: this.controlador.mSemestre.estudiantes.listado(),
        })
        .forEach(
          (estudiante) =>
            (reporte += `${estudiante.cedula} - ${estudiante.nombre}\n`)
        );
      alert(reporte);
    };

    this.btEstudiantesCedulaEntre = document.getElementById(
      "appForm_btEstudiantesCedulaEntre"
    );
    this.btEstudiantesCedulaEntre.onclick = () => {
      let cedulaMin = +prompt("Indique El valor mínimo de la cedula "),
        cedulaMax = +prompt("Indique El valor máximo de la cedula "),
        reporte = `Los estudiantes con cedula entre ${cedulaMin} y ${cedulaMax} son: \n`;
      this.controlador.mSemestre.estudiantes.cedulaEntre({
        cedulaMin,
        cedulaMax,
      }).forEach(
        (e) =>
          (reporte += `${e.cedula} - ${e.nombre} ${e.apellido}\n`)
      );
      alert(reporte);
    };

    this.btMateriasSemestre = document.getElementById(
      "appForm_btMateriasSemestre"
    );
    this.btMateriasSemestre.onclick = () => {
      let semestre = +prompt("Indique el semestre: "),
        reporte = `Las materias del semestre ${semestre} son: \n`;
      this.controlador.mSemestre.materias.semestre(semestre).forEach(
        (m) =>
          (reporte += `${m.codigo} - ${m.nombre}\n`)
      );
      alert(reporte);
    };

    this.btInscritosMateriaDe = document.getElementById(
      "appForm_btInscritosMateriasDe"
    );

    this.btInscritosMateriaDe.onclick = () => {
      let cedula = +prompt("Indique la cedula del estudiante: "),
        reporte = `Las materias inscritas por el estudiante con cedula ${cedula} son: \n`;
      this.controlador.mSemestre.inscritos.materiasDe({
          materias: this.controlador.mSemestre.materias.listado(),
          cedula,}).forEach(
          (m) =>
            (reporte += `${m.codigo} - ${m.nombre}\n`)
        );
      alert(reporte);
    };

  }
}
