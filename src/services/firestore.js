import { addDoc, collection, doc , setDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"
import DBData from "../model/DBData";
/**
 * 
 * @param {string} collectionName
 * @param {DBData} item 
 */
export async function addOne( collectionName , item ) {
    const itemRef = collection(db, collectionName );

    return await addDoc( itemRef , {...item} );
}
/**
 * 
 * @param {string} collectionName 
 * @param {DBData} item 
 */
export async function updateOne ( collectionName , item) {

    const itemRef = doc(db, collectionName, item.id);
    
    return await updateDoc( itemRef , item)
}