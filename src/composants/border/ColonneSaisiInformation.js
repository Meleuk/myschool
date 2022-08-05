import React, { useState } from "react";
import { inscrire } from "../../middleware/etudiant";
import Etudiant from "../../model/etudiant";
import { Diploma, Gender, Mention } from "../../model/types/baseTypes";


export function ColonneSaisiInformation() {


    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState(new Date());
    const [birthPlace, setBirthPlace] = useState("");
    const [mention, setMention] = useState("");
    const [option, setOption] = useState("");
    const [motivation, setMotivation] = useState("");
    const [diplome, setDiplome] = useState("")
    const [classe, setClasse] = useState("");


    const [options, setOptions] = useState(["BAC A", "BAC C", "BAC D", "BAC ESF", "Autre"]);
    const listOptions = options.map(el => <option key={el} value={el} >{el}</option>);

    const [classes, setClasses] = useState(["Genie informatique", "Genie culinaire", "Genie civil", "Sante", "Autre"]);
    const listClasses = classes.map(el => <option key={el} value={el} >{el}</option>);


    const [diplomes, setDiplomes] = useState(["BAC A", "BAC C", "BAC D", "BAC ESF", "Autre"])
    const listDiplome = diplomes.map(el => <option key={el} value={el} >{el}</option>);

    const [mentions, setMentions] = useState([Mention.Honnorable, Mention.Bien, Mention.Excellent, Mention.Passable, Mention.TresBien, "Test"])

    const listMentions = mentions.map(el =>
        <div className="form-check">
            <input 
            className="form-check-input" 
            type="radio" 
            name="gridRadios" 
            id={el} 
            value={el}
            onSelect = {(ele)=>{
                setMention(el)
            }} 
            
            />
            <label className="form-check-label" htmlFor={el}>
                {el}
            </label>
        </div>)


    async function sendRequestInscription () {
        alert("On a cliquer sur le boutton iscrire")

        const etudiant = new Etudiant();
        etudiant.name = name;
        etudiant.firstName = lastName;
        etudiant.birthDate = birthDate;
        etudiant.birthPlace = birthPlace;
        etudiant.diplomas.push(diplome);
        etudiant.gender = Gender.Male;
        etudiant.motivation = motivation;

        const res = await inscrire(etudiant);
    };
    

    return (
        <div className="rounded col-lg-7" style={{
            boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
            borderRadius: "8px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            rowGap: "10px"
        }}>
            <h5 className="section-title">Saisissez les informations</h5>
            <div className="form-group row">
                <div className="form-group row p-0 m-0">
                    <label htmlFor="name" className="col-sm-2 col-lg-4 col-form-label" style={{ whiteSpace: "nowrap" }}>Nom :</label>
                    <div className="col-sm-10 col-lg-8">
                        <input
                            type="text"
                            className="form-control"
                            id=""
                            placeholder=""
                            required

                            onChange={(el) => {
                                setName(el.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="prenom" className="col-sm-2 col-lg-4 col-form-label" style={{ whiteSpace: "nowrap" }}>Prenom :</label>
                <div className="col-sm-10 col-lg-8">
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        required
                        onChange={(el) => {
                            setLastName(el.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="birthDate" className="col-sm-2 col-lg-4 col-form-label" style={{ whiteSpace: "nowrap" }}>Date de naissance
                    :</label>
                <div className="col-sm-10 col-lg-8">
                    <input type="date" className="form-control" id="" placeholder="" required value={birthDate}
                        onChange={(e) => {
                            setBirthDate(e.target.value)
                        }}
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="lieudenaissance" className="col-sm-2 col-lg-4 col-form-label" style={{ whiteSpace: "nowrap" }}>Lieu de
                    Naissance :</label>
                <div className="col-sm-10 col-lg-8">
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        required
                        onChange={(el) => {
                            setBirthPlace(el.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="form-group row ">
                <label htmlFor="diplome" className="col-sm-2 col-lg-4  col-form-label" style={{ whiteSpace: "nowrap" }}>Dernier diplome
                    obtenu</label>
                <div className="col-sm-10 col-lg-8">
                    <select
                        id=""
                        className="form-control"
                        onChange={(el) => {
                            setDiplome(el.target.value);
                        }}
                    >
                        {listDiplome}
                    </select>
                </div>
            </div>
            <fieldset className="form-group ">
                <div className="row ">
                    <legend className="col-form-label col-sm-2 pt-0">Mention obtenu</legend>
                    <div className="col-sm-10 ">
                        {listMentions}
                    </div>
                </div>
            </fieldset>

            <div className="form-group row">
                <label htmlFor="diplome" className="col-sm-2 col-lg-4 col-form-label" style={{ whiteSpace: "nowrap" }}>Filiere
                    choisie</label>
                <div className="col-sm-10 col-lg-8">
                    <select 
                    id="" 
                    className="form-control"
                    onChange={ (el)=> {
                        setClasse(el.target.value);
                    }}
                    >
                        {listClasses}
                    </select>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="diplome" className="col-sm-2 col-lg-4  col-form-label" style={{ whiteSpace: "nowrap" }}>Option</label>
                <div className="col-sm-10 col-lg-8">
                    <select 
                    id="" 
                    className="form-control" 
                    required

                    onChange={ (el)=> {
                        setOption(el.target.value);
                    }}
                    >
                        {listOptions}

                    </select>
                </div>
            </div>
            <div className="col-12">
                <label htmlFor="diplome" className="col-sm-2 col-form-label" style={{ whiteSpace: "nowrap" }}>Motivation</label>
                <textarea 
                name="comment" 
                id="" 
                className="form-control mb-4" 
                placeholder="" 
                required
                onChange={ (el)=> {
                    setMotivation(el.target.value);
                }}
                ></textarea>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center my-5">
                <button 
                type="submit" 
                className="btn btn-primary"
                onClick={ (el)=> {
                    el.preventDefault();
                    sendRequestInscription();
                }}
                >
                    Envoyer
                </button>
            </div>
        </div>
    );
}