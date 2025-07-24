export default class Plan {
    constructor(cedu, tipo) {
        this.cedu = cedu;
        this.tipo = tipo;
    }

    valorPlan() {
        switch (this.tipo) {
            case "A":
                return 3 * 1.10;
            case "B":
                return 5 * 1.10;
            case "C":
                return 10;
            default:
                return 0

        }
    }
}