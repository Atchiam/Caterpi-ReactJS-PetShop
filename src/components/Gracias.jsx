import React from "react";
import { useParams, Link } from "react-router-dom";

const Gracias = () => {
    const {id} = useParams();

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-primary " role="alert">
                        <h1>Muchas gracias por comprar en Caterpi!</h1>
                        <p>podes seguir tu compra con este codigo: <b>{id}</b></p>
                        <p>no lo pierdas.</p>
                    </div>
                    <Link to={"/"} className="btn">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Gracias;