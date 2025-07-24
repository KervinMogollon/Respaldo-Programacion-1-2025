export default class Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo
        this.vista = vista
    }

    procesarElectrodomestico(){
        this.modelo.procesarArticulo(this.vista.iniciarElectrodomestico())

        this.vista.ReporteElec(
            this.modelo.totalVentasElec(),
        )
    }

    procesarMueble(){
        this.modelo.procesarArticulo(this.vista.iniciarMueble())

        this.vista.ReporteMueb(
            this.modelo.totalVentasMueb(),
        )
    }

    reporteTienda(){
        this.vista.reporteTienda(
            this.modelo.totalVentas(),
            this.modelo.elecMayorVendido(),
            this.modelo.porcMuebleMadera(),
        )
    }
}