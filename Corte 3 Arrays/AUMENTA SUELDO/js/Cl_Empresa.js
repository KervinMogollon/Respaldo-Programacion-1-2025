export default class empresa {
    constructor() {
        this.arrayTrabajador = [];
    }

    agregarTrabajador(t) {
        this.arrayTrabajador.push(t)
    }


    sueldoNuevo() {
        return this.arrayTrabajador.map((n) => ({
            cedula: n.cedula,
            AnteriorSueldo: n.sueldoBase,
            sueldoNuevo: n.nuevoSueldo(),
            tipoTrabajador: n.tipoTrabajador
        }))
    }

    totalSoloAumento() {
        let acumAumento = 0;
        this.arrayTrabajador.forEach(t => {
            acumAumento += t.aumentoDeSueldo()
        });
        return acumAumento
    }

    porcObreros() {
        this.cntTrabajadores = 0;
        let cntObreros = 0;

        this.arrayTrabajador.forEach((t) => {
            this.cntTrabajadores++

            if (t.tipoTrabajador === 1)
                cntObreros++
        })
        return (cntObreros / this.cntTrabajadores) * 100
    }

    porcAdministrativos() {
        let cntAdministrativos = 0;

        this.arrayTrabajador.forEach((t) => {
            if (t.tipoTrabajador === 2)
                cntAdministrativos++
        })
        return (cntAdministrativos / this.cntTrabajadores) * 100 
    }
}