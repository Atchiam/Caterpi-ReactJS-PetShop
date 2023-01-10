import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {

    const [cantidad , setCantidad] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false)


    const sumarProducto= () =>{
        if (cantidad < itemStock) {
            setCantidad (cantidad + 1);
        }
        else{
            prompt ("no hay mas stock")
        }
    }

    const restarProducto= () =>{
        if (cantidad > 0) {
            setCantidad (cantidad - 1);
        }
    }

    const addToCart= (quantity) =>{
        setItemStock(itemStock-quantity);
        setCantidad(1);
        setVendido(true);
        onAdd (quantity);
    }

    useEffect(()=>{
        setItemStock(stock);
    },[stock])

    return(
        <div>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <table>
                    <thead>
                        <tr>
                            <td className="texto fs-6 pe-3">Nombre del producto</td>
                            <td className="texto fs-3"><button type="button" onClick={restarProducto} className="btn btn-outline-primary">-</button></td>
                            <td className="texto fs-6 px-2">{cantidad}</td>
                            <td className="texto fs-3"><button type="button" onClick={sumarProducto} className="btn btn-outline-primary">+</button></td>
                            <td className="texto fs-3 ps-3">
                                {vendido ? 
                                <Link to={"/cart"} className="btn btn-outline-primary"> Finalizar compra. </Link> :
                                <button type="button" onClick={()=>{addToCart(cantidad)}} 
                                className="btn btn-outline-primary">Agregar al carrito</button>}
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>            
        </div>
    )
}

export default ItemCount