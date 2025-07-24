export default class CL_mNetflix{
    constructor() {
        this.cntPlanes = null;
        this.cntPlanA = null;
        this.cntPlanB = null;
        this.cntPlanC = null;
    }

    procesarPlanes(pln){
        this.cntPlanes++;

        if (pln.tipo === "A")
            this.cntPlanA++

        if (pln.tipo === "B")
            this.cntPlanB++

        if (pln.tipo === "C")
            this.cntPlanC++
    }

    planFav(){
        if ((this.cntPlanA = this.cntPlanB) && (this.cntPlanA = this.cntPlanC)){
            return "Todos los Planes son Igual de Vavorito"
        }
        else if ((this.cntPlanA = this.cntPlanB) && (this.cntPlanA > this.cntPlanC)){
            return "El plan A y B son Igual de Favoritos"
        }
        else if ((this.cntPlanA = this.cntPlanC) && (this.cntPlanA > this.cntPlanB)){
            return "El plan A y C son Igual de Favoritos"
        }
        else if ((this.cntPlanB = this.cntPlanC) && (this.cntPlanB > this.cntPlanA)){
            return "El plan B y C son Igual de Favoritos"
        }
        else if ((this.cntPlanA > this.cntPlanB) && (this.cntPlanA > this.cntPlanC)){
            return "El Plan A es el Favorito"
        }
        else if ((this.cntPlanB > this.cntPlanA) && (this.cntPlanB > this.cntPlanC)){
            return "El Plan B es el Favorito"
        }
        else if ((this.cntPlanC > this.cntPlanA) && (this.cntPlanC > this.cntPlanB)){
            return "El Plan C es el Favorito"
        }
    }

    porcNoInstall(){
        return ((this.cntPlanC * 100) / this.cntPlanes).toFixed(2)
    }
}