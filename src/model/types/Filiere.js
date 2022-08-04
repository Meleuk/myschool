import DBData from "../DBData";

export class Filiere extends DBData {

    constructor() {
        super()
    }
}


export class FiliereOptions extends DBData {

    constructor() {
        super()
        this.filiereParent = "";
        
    }
}