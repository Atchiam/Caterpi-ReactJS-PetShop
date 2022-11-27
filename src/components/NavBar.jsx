import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><img src={"images/logopet.png"} alt={"logopet"} width={64} /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/tienda">Tienda</a>
                                    </li>
                                    <li className="nav-item">
                                        <div class="dropdown">
                                            <a class="btn dropdown-toggle" href="categoriaPets" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Categoria Pets
                                            </a>

                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="gatos">Gatos</a></li>
                                                <li><a class="dropdown-item" href="perros">Perros</a></li>
                                                <li><a class="dropdown-item" href="peces">Peces</a></li>
                                                <li><a class="dropdown-item" href="aves">Aves</a></li>
                                                <li><a class="dropdown-item" href="roedores">Roedores</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/sucursales">Sucursales</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contacto">Contacto</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;