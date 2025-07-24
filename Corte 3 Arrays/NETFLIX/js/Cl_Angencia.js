export default class Agencia {
    constructor() {
        this.arrayPlanes = [];
    }

    agregarPlan(p) {
        this.arrayPlanes.push(p)
    }

    listadoPago() {
        return this.arrayPlanes.map(p => ({
            cedula: p.cedu,
            pago: p.valorPlan()
        }))
    }

    porcNoConex() {
        let cntPlanC = 0;

        this.arrayPlanes.forEach(p => {
            if (p.tipo === "C")
                cntPlanC++
        });

        if (this.arrayPlanes.length < 1)
            return 0
        else
            return (cntPlanC / this.arrayPlanes.length) * 100
    }

    /*planFav() {
        let planA = 0,
            planB = 0,
            planC = 0;

        this.arrayPlanes.forEach(p => {
            if (p.tipo === "A")
                planA++

            if (p.tipo === "B")
                planB++

            if (p.tipo === "C")
                planC++
        })

        if ((planA > planB) && (planA > planC)) {
            return `El Plan A`
        }
        else if ((planB > planA) && (planB > planC)) {
            return `El Plan B`
        }
        else if ((planC > planA) && (planC > planB)) {
            return `El Plan C`
        }
        else if ((planA === planB) && (planA > planC)) {
            return `Los Planes A y B son Igual de solicitados`
        }
        else if ((planA === planC) && (planA > planB)) {
            return `Los Planes A y C son Igual de solicitados`
        }
        else if ((planB === planC) && (planB > planA)) {
            return `Los Planes B y C son Igual de solicitados`
        }
        else
            return `Los 3 planes son igual de Solicitados`
    }*/


    planFav() {
        let planA = this.arrayPlanes.filter(a => a.tipo === "A").length,
            planB = this.arrayPlanes.filter(b => b.tipo === "B").length,
            planC = this.arrayPlanes.filter(c => c.tipo === "C").length;

        if ((planA > planB) && (planA > planC)) {
            return `El Plan A`
        }
        else if ((planB > planA) && (planB > planC)) {
            return `El Plan B`
        }
        else if ((planC > planA) && (planC > planB)) {
            return `El Plan C`
        }
        else if ((planA === planB) && (planA > planC)) {
            return `Los Planes A y B son Igual de solicitados`
        }
        else if ((planA === planC) && (planA > planB)) {
            return `Los Planes A y C son Igual de solicitados`
        }
        else if ((planB === planC) && (planB > planA)) {
            return `Los Planes B y C son Igual de solicitados`
        }
        else
            return `Los 3 planes son igual de Solicitados`
    }

    /*
    planFav de la IA
    planFav() {
        // Contabiliza la cantidad de solicitudes para cada plan.
        let planCounts = {
            A: this.arrayPlanes.filter(p => p.tipo === "A").length,
            B: this.arrayPlanes.filter(p => p.tipo === "B").length,
            C: this.arrayPlanes.filter(p => p.tipo === "C").length
        };

        // Encuentra el número máximo de solicitudes
        let maxCount = Math.max(planCounts.A, planCounts.B, planCounts.C);

        // Se obtienen los planes que tienen el máximo
        let ganadores = Object.keys(planCounts).filter(plan => planCounts[plan] === maxCount);

        if (ganadores.length === 1) {
            return `El Plan ${ganadores[0]}`;
        } else if (ganadores.length === 2) {
            return `Los Planes ${ganadores[0]} y ${ganadores[1]} son igual de solicitados`;
        } else {
            return `Los 3 planes son igual de solicitados`;
        }
    }*/

}