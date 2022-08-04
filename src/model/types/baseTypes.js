import DBData, { DBUserData } from "../DBData";

export class Gender {
    static Male = "Homme";
    static Female = "Femme"
}

export class Mention {
    static Bien = "Bien";
    static Passable = "Passable";
    static TresBien = "Très Bien";
    static Honnorable = "Honnorable";
    static Excellent = "Excellent";

}

export class Diploma extends DBData {
    static BAC = {
        C : "Baccalaureat C",
        A : "Baccalauréat A",
        D : "Baccalauréat D",
        E : "Baccalaureat E",
        TI : "Baccalaureat TI",
    }
    constructor ( name , type) {
        super();
        this.name = name;
        this.type = type
    }
}

export class ObtainedDiploma extends DBUserData {

    /**
     * 
     */
    constructor( diploma , mention ) {
        super();
        
    }
}