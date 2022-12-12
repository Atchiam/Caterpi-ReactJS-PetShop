import React from "react";  
import { Link } from "react-router-dom";

const Item = ({item}) =>{
    return(
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="card text-center m-3 p-2 bg-info text-dark bg-opacity-50 border border-dark rounded-1">
                <img className="card-img-top" src={item.img} alt={item.nombre} width="240px"/>
                <h3 className="text-center ">{item.nombre}</h3>
                <p className="text-center card-text">{item.desc}</p>
                <p className="card-title fs-5">precio: ${item.precio}</p>
                <button className="bg-info text-dark border border-dark rounded-1" id= {item.id}>Agregar al Carrito</button>
            </div>
        </Link>
    )
}

export default Item