import React from "react";     
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{
    return(
        <div className="row">
            <div className="col-md-4 offset-md-4 text-center">
                <img src={item.img} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p>{item.desc}</p>
                <p><b>${item.precio} </b></p>
                <ItemCount stockItems = {30} />
            </div>
        </div>
    )
}

export default ItemDetail;