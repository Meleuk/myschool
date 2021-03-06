
import React, { useState } from "react";
import { BorderCol1 } from "../composants/border/BorderCol1";
import { BorderCol2 } from "../composants/border/BorderCol2";
import { Footer } from "../composants/footer/Footer";
import { Header } from "../composants/header/Header";
// import { Dropdown } from "../composants/dropdown/Dropdown";
// import FileUploader from "../composants/uploadFile/button/UploadFileButton";
// import "./inscription.css";
// import { db } from "../firebase";
// import { addDoc, collection } from "firebase/firestore";

export function Inscription() {
    // const [name, setName] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [birthDate, setBirthDate] = useState(new Date());
    // const [gender, setGender] = useState("");

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




    return (
        <div>
            <Header />
            <main className="main-container-">
                <div style={{gridColumn: "1/3"}}>
                    <h2 className="section-title">Inscription en ligne</h2>
                </div>
                <form action="#" className="container row">
                    <BorderCol1/>
                    <BorderCol2/>
                </form>
            </main >
            <Footer/>
        </div>
    )
}