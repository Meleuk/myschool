import React from "react";


export function BorderCol2() {
    return (
        <div className=" col-lg-5 " >
            <div className="rounded " style={{
                borderRadius: "8px",
                padding: "10px",
                display:"flex",
                flexDirection: "column",
                boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                alignItems: "center",
                rowGap: "10px"
            }}>
                <h5 className="section-title">pieces jointes</h5>
                <div className="border-bottom: dashed black;">

                    <div className="rounded customiseUploadBorder ">
                        <div className="form-group ">


                            <input type="file" className="form-control-file" id="" />
                            <label htmlFor="uploadfile1"> Ajouter une piece</label>
                        </div>
                    </div>

                    <div className="rounded customiseUploadBorder" >
                        <div className="form-group">


                            <input type="file" className="form-control-file" id="" placeholder="+" />
                            <label htmlFor="uploadfile1"> Ajouter une piece</label>
                        </div>
                    </div>

                    <div className="rounded customiseUploadBorder">
                        <div className="form-group">


                            <input type="file" className="form-control-file" />
                            <label htmlFor="uploadfile1"> Ajouter une piece</label>
                        </div>
                    </div>

                    <div className="rounded customiseUploadBorder">
                        <div className="form-group">


                            <input type="file" className="form-control-file" />
                            <label htmlFor="uploadfile1"> Ajouter une piece</label>
                        </div>
                    </div>
                </div>

                <div className="col-12 d-flex align-items-center justify-content-center my-5">
                    <button type="" className="btn btn-secondary">
                        Imprimer
                    </button>
                </div>
            </div>    

        </div>
      );
}