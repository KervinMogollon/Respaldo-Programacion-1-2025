import CL_mEstudiante from "./CL_mEstudiante.js";
import CL_vEstudiante from "./CL_vEstudiante.js";

export default class CL_vExamen {
    constructor() {
        this.inMaxValor = document.getElementById("examForm_inMaxValor");
        this.inAprobatorio = document.getElementById("examForm_inAprobatorio");
        this.btIniciar = document.getElementById("examForm_btIniciar");

        this.controlador = null;
        this.vEstud = null;

        this.vEstud = new CL_vEstudiante();

        this.salida = document.getElementById("salida");
        this.tabla = document.getElementById("tabla");

        this.vEstud.btProcesar.onclick = () =>
            this.controlador.procesarEstudiante();

        this.btIniciar.onclick = () =>{
            this.controlador.datosExam(
                this.inMaxValor.value,
                this.inAprobatorio.value,
            );
            this.inMaxValor.disabled = true;
            this.inAprobatorio.disabled = true;
            this.btIniciar.hidden = true;
        }

    }

    datosEstud() {
        this.mEstud = new CL_mEstudiante({
            nombre: this.vEstud.nombre,
            cedula: this.vEstud.cedula,
            sexo: this.vEstud.sexo,
            nota: this.vEstud.nota,
        });
        return this.mEstud;
    }

    reporte(aprobadosT, mejor, aprobadas ) {
        this.tabla.innerHTML += `
        <tr>
            <td>${this.mEstud.nombre}</td>
            <td>${this.mEstud.cedula}</td>
            <td>${this.mEstud.sexo}</td>
            <td>${this.mEstud.nota}</td>
        <tr>
        `

        this.salida.innerHTML = `
        El Porcentaje de estudiantes aprobados es del: ${aprobadosT}%
        <br>El Estudiante con la mejor nota es: ${mejor}
        <br>El Porcentaje de chicas aprobadas es del: ${aprobadas}%
        `

    }
}