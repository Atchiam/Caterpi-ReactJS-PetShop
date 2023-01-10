import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const {cartTotal}= useContext(CartContext)


    return (
        <Link to= {"/cart"} className="btn position-relative">
            <img src={"/images/carrito.png"} alt={"Carrito"} width={35} />
            <span className="position-absolute top-0 start-65 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link>
    )
}

export default CartWidget;