import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn position-relative">
            <img src={"/images/carrito.png"} alt={"Carrito"} width={35} />
            <span className="position-absolute top-0 start-65 translate-middle badge rounded-pill bg-danger">14</span>
        </button>
    )
}

export default CartWidget;