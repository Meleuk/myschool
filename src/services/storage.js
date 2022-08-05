import { getStorage, ref, uploadBytes } from "firebase/storage";

/**
 * 
 * @param {File} file 
 */

export async function savePieceJointe(file) {
    // Create a root reference
    const storage = getStorage();


    // Create a reference to 'images/mountains.jpg'
    const pieceRef = ref(storage, 'pieces-jointes/' + file.name);

    const res = await uploadBytes(pieceRef, file);

    return res.ref.fullPath;

}
