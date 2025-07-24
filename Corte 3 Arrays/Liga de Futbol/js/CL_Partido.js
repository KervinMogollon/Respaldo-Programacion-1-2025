export default class Partido {
    constructor(n, eq1, eq2, g1, g2) {
        this.numero = n;
        this.codigoEquipo1 = eq1;
        this.codigoEquipo2 = eq2;
        this.golesEquipo1 = g1;
        this.golesEquipo2 = g2;
    }

    set numero(n) {
        this._numero = n;
    }

    get numero(){
        return this._numero;
    }

    set codigoEquipo1(eq1) {
        this._codigoEquipo1 = eq1;
    }

    get codigoEquipo1(){
        return this._codigoEquipo1;
    }

    set codigoEquipo2(eq2) {
        this._codigoEquipo2 = eq2;
    }

    get codigoEquipo2(){
        return this._codigoEquipo2;
    }

    set golesEquipo1(g1) {
        this._golesEquipo1 = g1;
    }

    get golesEquipo1(){
        return this._golesEquipo1;
    }

    set golesEquipo2(g2) {
        this._golesEquipo2 = g2;
    }

    get golesEquipo2(){
        return this._golesEquipo2;
    }

    jugado(codigoEquipo){
        if (codigoEquipo === this.codigoEquipo1 || codigoEquipo === this.codigoEquipo2){ 
            // el || es un operador logico que significa "o", sirve para comparar dos condiciones
            return true;
        }
        return false;
    }

    ganado(codigoEquipo){
        if (codigoEquipo === this.codigoEquipo1 && this.golesEquipo1 > this.golesEquipo2){
            return true;
        }
        if (codigoEquipo === this.codigoEquipo2 && this.golesEquipo2 > this.golesEquipo1){
            return true;
        }
        return false;
    }

    perdido(codigoEquipo){
        if (codigoEquipo === this.codigoEquipo1 && this.golesEquipo1 < this.golesEquipo2){
            return true;
        }
        if (codigoEquipo === this.codigoEquipo2 && this.golesEquipo2 < this.golesEquipo1){
            return true;
        }
        return false;
    }

    empatado(codigoEquipo){
        if (codigoEquipo === this.codigoEquipo1 && this.golesEquipo1 === this.golesEquipo2){
            return true;
        }
        if (codigoEquipo === this.codigoEquipo2 && this.golesEquipo2 === this.golesEquipo1){
            return true;
        }
        return false;
    }
}