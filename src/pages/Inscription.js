
import React, { useState } from "react";
import { ColonneSaisiInformation } from "../composants/border/ColonneSaisiInformation";
import { ColonneAjoutPieceJointe } from "../composants/border/ColonneAjoutPieceJointe";
import { Footer } from "../composants/footer/Footer";
import { Header } from "../composants/header/Header";
import { inscrire } from "../middleware/etudiant";
import Etudiant from "../model/etudiant";
import { savePieceJointe } from "../services/storage";
// import { Dropdown } from "../composants/dropdown/Dropdown";
// import FileUploader from "../composants/uploadFile/button/UploadFileButton";
// import "./inscription.css";
// import { db } from "../firebase";
// import { addDoc, collection } from "firebase/firestore";

export function Inscription() {

    const [piece1, setPiece1] = useState(null);

    const [piece2, setPiece2] = useState(null);
    const [piece3, setPiece3] = useState(null);
    const [piece4, setPiece4] = useState(null);

    // const  submit = async (e) => {
    //     console.log("Envoyons les données")
    //     try {
    //         const docRef = await addDoc(collection(db, "Etudiant"), {
    //           name: name,
    //           firstName: firstName,
    //           birthDate: birthDate,
    //           gender : gender
    //         });
    //         console.log("Document written with ID: ", docRef.id);
    //       } catch (e) {
    //         console.error("Error adding document: ", e);
    //       }

    //   };
    /**
     * 
     * @param {Etudiant} etudiant 
     */
    async function sendInscription( etudiant ) {
        if (piece1) {
            const uri = await savePieceJointe(piece1)
            etudiant.piecesJointes.push(uri)
        }
        if (piece2) {
            const uri = await savePieceJointe(piece2)
            etudiant.piecesJointes.push(uri)
        }
        if (piece3) {
            const uri = await savePieceJointe(piece3)
            etudiant.piecesJointes.push(uri)
        }
        if (piece4) {
            const uri = await savePieceJointe(piece4)
            etudiant.piecesJointes.push(uri)
        }
        const res =await inscrire(etudiant);
       
        alert ("Votre inscription a été enregistré avc succès")
    }
    return (
        <div id="inscription-main">
            <Header />
            <main className="main-container" >
                <div style={{ gridColumn: "1/3" }}>
                    <h2 className="section-title">Fiche d'inscription</h2>
                </div>
                <form action="#" className="container row">
                    <ColonneSaisiInformation 
                    onSubmitEtudiant={(e) => {
                        console.log(e)
                        sendInscription(e)

                    }} 
                    disabled = {(piece1 == null || piece2 == null)}
                    />
                    <ColonneAjoutPieceJointe

                        onPiece1Uploaded={(f) => {
                            console.log(f)
                            setPiece1(f)
                        }}
                        onPiece2Uploaded={(f) => {
                            console.log(f)
                            setPiece2(f)
                        }}
                        onPiece3Uploaded={(f) => {
                            console.log(f)
                            setPiece3(f)
                        }}
                        onPiece4Uploaded={(f) => {
                            console.log(f)
                            setPiece4(f)
                        }}

                    />
                </form>
            </main >
            <Footer />
        </div>
    )
}