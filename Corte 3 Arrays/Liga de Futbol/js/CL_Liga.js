export default class liga{
    constructor(){
        this.partidos = [];
    }

    agregarPartido(partido){
        this.partidos.push(partido);
    }

    juegosJugados(codigoEquipo){
        let cntJugados = 0;
        this.partidos.forEach(p => {
            if (p.jugado(codigoEquipo)){
                cntJugados++;
            }
        });
        return cntJugados;
    }

    juegosGanados(codigoEquipo){
        let cntGanados = 0;
        this.partidos.forEach(p => {
            if (p.ganado(codigoEquipo)){
                cntGanados++;
            }
        });
        return cntGanados;
    }

    juegosPerdidos(codigoEquipo){
        let cntPerdidos = 0;
        this.partidos.forEach(p => {
            if (p.perdido(codigoEquipo)){
                cntPerdidos++;
            }
        });
        return cntPerdidos;
    }

    juegosEmpatados(codigoEquipo){
        let cntEmpatados = 0;
        this.partidos.forEach(p => {
            if (p.empatado(codigoEquipo)){
                cntEmpatados++;
            }
        });
        return cntEmpatados;
    }
}