import React, { useState } from "react";

/**
 * @param {object} props
 * @param {Function} props.onPiece1Uploaded
 * @param {Function} props.onPiece2Uploaded
 * @param {Function} props.onPiece3Uploaded
 * @param {Function} props.onPiece4Uploaded
 * @returns 
 */
export function ColonneAjoutPieceJointe(props) {




    return (
        <div className=" col-lg-5 " >
            <div className="rounded " style={{
                borderRadius: "8px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                alignItems: "center",
                rowGap: "10px"
            }}>
                <h5 className="section-title">Ajouter des pieces jointes</h5>
                <div className="border-bottom: dashed black;">

                    <div className="rounded customiseUploadBorder ">
                        <div className="form-group ">


                            <input
                                type="file"
                                className="form-control-file"
                                id=""
                                onChange={(e) => {
                                    if (e.target.files[0]) {
                                        props.onPiece1Uploaded(e.target.files[0])
                                    }
                                }}


                            />
                            <label htmlFor="uploadfile1"> Ajouter une piece</label>
                        </div>
                    </div>

                    <div className="rounded customiseUploadBorder" >
                        <div className="form-group">


                            <input
                                type="file"
                                className="form-control-file"
                                id=""
                                placeholder="+"
                                onChange={(e) => {
                                    if (e.target.files[0]) {
                                        props.onPiece2Uploaded(e.target.files[0])
                                    }
                                }}
                            />
                            <label htmlFor="uploadfile1"> Ajouter une piece</label>
                        </div>
                    </div>

                    <div className="rounded customiseUploadBorder">
                        <div className="form-group">


                            <input type="file"
                                className="form-control-file"
                                onChange={(e) => {
                                    if (e.target.files[0]) {
                                        props.onPiece3Uploaded(e.target.files[0])
                                    }
                                }}
                            />
                            <label htmlFor="uploadfile1"> Ajouter une piece</label>
                        </div>
                    </div>

                    <div className="rounded customiseUploadBorder">
                        <div className="form-group">


                            <input
                                type="file"
                                className="form-control-file"
                                onChange={(e) => {
                                    if (e.target.files[0]) {
                                        props.onPiece4Uploaded(e.target.files[0])
                                    }
                                }}
                            />
                            <label htmlFor="uploadfile1"> Ajouter une piece</label>
                        </div>
                    </div>
                </div>

                <div className="col-12 d-flex align-items-center justify-content-center my-5">
                    <button
                        type=""
                        className="btn btn-secondary"
                        disabled
                    >
                        Imprimer
                    </button>
                </div>
            </div>

        </div>
    );
}