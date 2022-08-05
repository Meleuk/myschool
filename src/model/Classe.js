import { getAll, getAllFromSubCollection } from "../services/firestore";
import DBData from "./DBData";

export default class Classe extends DBData {

    constructor() {
        super();
    }

}

export class Filiere extends DBData {
    constructor( name ) {   
        this.name = name;
    }
}

export class Option extends DBData {
    constructor( name ) {   
        this.name = name;
    }
}

/**
 * @returns {Promise<Filiere[]>}
 */
export async function getAllFiliere() {
    const filieresRef = await getAll("Filieres");

    return filieresRef.docs.map((el)=>({ id : el.id ,...el.data()}))
}
/**
 * 
 * @param {string} filiereId 
 * @returns {Promise<Option[]>}
 */
export async function getAllOptionsOfFiliere( filiereId) {

    const filieresRef = await getAllFromSubCollection("Filieres", filiereId , "Options" );

    return filieresRef.docs.map((el)=>({ id : el.id ,...el.data()}))
}