export default class Sobres {
    constructor() {
        this.arraySobres = [];
    }

    agregarSobre(s) {
        this.arraySobres.push(s)
    }

    contenidoSobres() {
        let numSobre = 1;

        return this.arraySobres.map((s) => ({
            nSobre: numSobre++,
            valorF: s.valor * s.cant
        }))
    }

    totalSobre(){
        return this.contenidoSobres().reduce((total, cs) =>
            total + cs.valorF, 0
        )
    }
}