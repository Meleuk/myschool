import DBData from "./DBData";
import { Diploma } from "./types/baseTypes";

export default class Etudiant extends DBData {

    constructor() {
        super();
        this.name = "";
        this.firstName = "";
        /**
         * @type {Gender}
         */
        this.gender = "";
        /**
         * @type {Date}
         */
        this.birthDate = null;
        this.birthPlace = "";
        /**
         * @type {Diploma[]}
         */
        this.diplomas = [];

        this.classId = "";

        this.motivation = "";
        /**
         * @type {string[]}
         */
        this.piecesJointes = []


    }
}