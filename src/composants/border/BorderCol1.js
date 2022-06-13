import React from "react";


export function BorderCol1 (){
    return (
        <div className="rounded col-lg-7" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
        borderRadius: "8px", padding: "10px",
        display:"flex", 
        flexDirection: "column",
        rowGap: "10px"
        }}>
            <h5 className="section-title">Fiche d'inscription</h5>
            <div className="form-group row">
                <div className="form-group row p-0 m-0">
                    <label htmlFor="name" className="col-sm-2 col-lg-4 col-form-label" style={{whiteSpace:"nowrap"}}>Nom :</label>
                    <div className="col-sm-10 col-lg-8">
                        <input type="text" className="form-control" id="" placeholder="" required />
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="prenom" className="col-sm-2 col-lg-4 col-form-label" style={{whiteSpace:"nowrap"}}>Prenom :</label>
                <div className="col-sm-10 col-lg-8">
                    <input type="text" className="form-control" id="" placeholder="" required />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="birthDate" className="col-sm-2 col-lg-4 col-form-label" style={{whiteSpace:"nowrap"}}>Date de naissance
                    :</label>
                <div className="col-sm-10 col-lg-8">
                    <input type="date" className="form-control" id="" placeholder="" required />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="lieudenaissance" className="col-sm-2 col-lg-4 col-form-label" style={{whiteSpace:"nowrap"}}>Lieu de
                    Naissance :</label>
                <div className="col-sm-10 col-lg-8">
                    <input type="text" className="form-control" id="" placeholder="" required />
                </div>
            </div>
            <div className="form-group row ">
                <label htmlFor="diplome" className="col-sm-2 col-lg-4  col-form-label" style={{whiteSpace:"nowrap"}}>Dernier diplome
                    obtenu</label>
                <div className="col-sm-10 col-lg-8">
                    <select id="" className="form-control">
                        <option>BAC A</option>
                        <option>BAC C</option>
                        <option>BAC D</option>
                        <option>BAC ESF</option>
                        <option>Autre</option>
                    </select>
                </div>
            </div>
            <fieldset className="form-group ">
                <div className="row ">
                    <legend className="col-form-label col-sm-2 pt-0">Mention obtenu</legend>
                    <div className="col-sm-10 ">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                honnorable
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                excelent
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                            <label className="form-check-label" htmlFor="gridRadios3">
                                tres bien
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                            <label className="form-check-label" htmlFor="gridRadios3">
                                bien
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                            <label className="form-check-label" htmlFor="gridRadios3">
                                passable
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div className="form-group row">
                <label htmlFor="diplome" className="col-sm-2 col-lg-4 col-form-label" style={{whiteSpace:"nowrap"}}>Filiere
                    choisie</label>
                <div className="col-sm-10 col-lg-8">
                    <select id="" className="form-control">
                        <option>Genie informatique</option>
                        <option>Genie culinaire</option>
                        <option>Genie civil</option>
                        <option>Sante</option>
                        <option>Autre</option>
                    </select>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="diplome" className="col-sm-2 col-lg-4  col-form-label" style={{whiteSpace:"nowrap"}}>Option</label>
                <div className="col-sm-10 col-lg-8">
                    <select id="" className="form-control" required>
                        <option>BAC A</option>
                        <option>BAC C</option>
                        <option>BAC D</option>
                        <option>BAC ESF</option>
                        <option>Autre</option>
                    </select>
                </div>
            </div>
            <div className="col-12">
                <label htmlFor="diplome" className="col-sm-2 col-form-label" style={{whiteSpace:"nowrap"}}>Motivation</label>
                <textarea name="comment" id="" className="form-control mb-4" placeholder="" required></textarea>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center my-5">
                <button type="submit" className="btn btn-primary">
                    Envoyer
                </button>
            </div>
        </div>
    );
}