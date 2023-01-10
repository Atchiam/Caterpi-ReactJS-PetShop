import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="bg-info bg-opacity-25 px-5">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={"/images/logopet.png"} alt={"logopet"} width={64} /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="NavLink btn mx-1 text-decoration-none" aria-current="page" to={"/home"}>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="NavLink btn mx-1 text-decoration-none" to={"/tienda"}>Tienda</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <NavLink className="btn mx-1 dropdown-toggle" to={"categoriaPets"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Categoria Pets
                                            </NavLink>

                                            <ul className="dropdown-menu">
                                                <li><NavLink className="dropdown-item mx-1" to={"category/gatos"}>Gatos</NavLink></li>
                                                <li><NavLink className="dropdown-item mx-1" to={"category/perros"}>Perros</NavLink></li>
                                                <li><NavLink className="dropdown-item mx-1" to={"category/peces"}>Peces</NavLink></li>
                                                <li><NavLink className="dropdown-item mx-1" to={"category/aves"}>Aves</NavLink></li>
                                                <li><NavLink className="dropdown-item mx-1" to={"category/roedores"}>Roedores</NavLink></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="NavLink text-decoration-none btn mx-1" to={"/cart"}>Carrito</NavLink>
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