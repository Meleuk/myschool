import { bulkAdd } from "../../services/firestore";
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
    /**
     * 
     * @param {string} name 
     * @param {string} type 
     * @param {string} sigle 
     */
    constructor (  type, segment , sigle) {
        super();
        this.segment = segment;
        this.type = type;
        this.sigle = sigle;
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

export async function initDiploma () {
    /**
     * @type {Diploma[]}
     */
    const diplomas = [];

    diplomas.push(new Diploma("Baccalauréat" , "Mathématiques et technique", "BAC E"));
    diplomas.push(new Diploma("Baccalauréat" , "Mathématiques et sciences physiques", "BAC C"));
    diplomas.push(new Diploma("Baccalauréat" , "Mathématiques et sciences naturelles", "BAC D"));
    diplomas.push(new Diploma("Baccalauréat" , "Mathématiques et sciences agronomiques", "BAC D'"));
    diplomas.push(new Diploma("Baccalauréat" , "Sciences de l'Ingénieur", "BAC S.I."));
    diplomas.push(new Diploma("Baccalauréat" , "Sciences de la Vie et de la Terre", "BAC S.V.T."));
    diplomas.push(new Diploma("Baccalauréat" , "Écologie, Agronomie et Territoires", "BAC E.A.T."));

    const res = await bulkAdd( "Diplomes" , diplomas);
    console.log(res)


}