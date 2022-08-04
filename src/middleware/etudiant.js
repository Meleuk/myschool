import Etudiant from "../model/etudiant";
import { addOne } from "../services/firestore";
import collectionName from "./collection";

/**
 * 
 * @param {Etudiant} etudiant 
 */
export async function inscrire (etudiant) {
    
    return await addOne(collectionName.etudiant , etudiant);

}