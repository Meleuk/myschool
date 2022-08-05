
import { addDoc, collection, collectionGroup, doc, getDoc, getDocs, setDoc, updateDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase"
import collectionName from "../middleware/collection";
import DBData from "../model/DBData";
/**
 * 
 * @param {string} collectionName
 * @param {DBData} item 
 */
export async function addOne(collectionName, item) {
    console.log(item)
    const itemRef = collection(db, collectionName);

    return await addDoc(itemRef, { ...item });
}

/**
 * 
 * @param {string} collectionName
 * @param {DBData} item 
 */
 export async function getAll(collectionName) {
    
    const collectionRef = collection(db, collectionName);

    return await getDocs(collectionRef);
}


export async function getAllFromSubCollection (  collectionMere, idMere , subCollectionName) {
   
    const collectionRef = collection(db, collectionMere,idMere, subCollectionName);

    return  await getDocs(collectionRef)
}
/**
 * 
 * @param {string} collectionName 
 * @param {DBData} item 
 */
export async function updateOne(collectionName, item) {

    const itemRef = doc(db, collectionName, item.id);

    return await updateDoc(itemRef, item)
}

/**
 * 
 * @param {string} collectionName 
 * @param {any[]} items 
 */
export async function bulkAdd(collectionName, items) {

    // Get a new write batch
    const batch = writeBatch(db);

    // Set the value of 'NYC'
    
    items.forEach((item) => {
        const itemsRef = collection(db, collectionName);
        console.log(item)
        batch.set(itemsRef,{...item});
    } )

    return await batch.commit();
}
