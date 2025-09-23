import CL_mPedido from "./CL_mPedido.js";
import CL_vPedido from "./CL_vPedido.js";
import CL_mComedor from "./CL_mComedor.js";

export default class CL_vComedor {
    constructor() {
        this.inIniEmpanada = document.getElementById("comedorForm_inIniEmpanada");
        this.inIniPastelitos = document.getElementById("comedorForm_inIniPastelitos");
        this.inIniJugo = document.getElementById("comedorForm_inIniJugo");
        this.btAceptar = document.getElementById("comedorForm_btAceptar")

        this.controlador = null;

        this.tabla = document.getElementById("comedorForm_tabla");

        this.salida = document.getElementById("comedorForm_salida");

        this.vPedido = new CL_vPedido();

        this.vPedido.brProcesar.onclick = () =>
            this.controlador.procesarPedido();

        this.btAceptar.onclick = () =>
            this.AgregarInventario();
    }

    get iniEmpenada() {
        return +this.inIniEmpanada.value
    }

    get iniPastelitos() {
        return +this.inIniPastelitos.value
    }

    get iniJugo() {
        return +this.inIniJugo.value
    }

    procesarPedido() {
        this.mPedido = new CL_mPedido({
            nombre: this.vPedido.nombre,
            orden: this.vPedido.orden,
            cantOrden: this.vPedido.CantOrden,
            jugo: this.vPedido.jugo,
        });
        return this.mPedido;
    }

    AgregarInventario() {
        this.mComedor = new CL_mComedor({
            iniEmpanadas: this.iniEmpenada,
            iniPastelistos: this.iniPastelitos,
            iniJugo: this.iniJugo,
        });
        return this.mComedor;

    }

    reporteComedor(restEmpa, restPast, restJug, recaCaf) {
        this.salida.innerHTML = `
        <br>Quedan ${restEmpa} empanadas
        <br>Quedan ${restPast} pastelitos
        <br>Quedan ${restJug} jugos
        <br>El cafetin ha recaudado ${recaCaf}$
`

        this.tabla.innerHTML += `
    <tr>
      <td>${this.mPedido.nombre}</td>
      <td>${this.mPedido.costoComida()}</td>
    </tr>`
    }


}