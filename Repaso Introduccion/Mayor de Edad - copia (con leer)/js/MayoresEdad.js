export default class CL_MayoresEdad{
    constructor(){
        this.cntPers = 0;
        this.cntMayor18 = 0;
    }

    procesarPersona(pers){
        this.cntPers++

        if(pers.edad >= 18)
            this.cntMayor18++
    }

    totalPers(){
        return this.cntPers
    }

    totalPersMay18(){
        return this.cntMayor18
    }

    porcPersMay18(){
        return (this.cntMayor18 * 100) / this.cntPers
    }
}