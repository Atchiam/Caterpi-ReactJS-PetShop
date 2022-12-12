import React, {useState} from "react";

const ItemCount = ({stockItems}) => {

    const [cantidad , setCantidad] = useState(1);
    const [stock, setStock] = useState(stockItems)


    const sumarProducto= () =>{
        if (cantidad < stock) {
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

    const onAdd= () =>{
        if (cantidad <= stock){
            setStock(stock - cantidad)
            setCantidad(stock - cantidad)
            console.log("la cantidada de productos es: " + cantidad)
        }
    }

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
                            <td className="texto fs-3 ps-3"><button type="button" onClick={onAdd} className="btn btn-outline-primary">Agregar al carrito</button></td>
                        </tr>
                    </thead>
                </table>
            </div>

        {/*  <div>
            <h4 className=" texto">Carrito de compras</h4>
            <table className="table texto">
                <thead id="tabla-prod">
                    <tr>
                        <td className="texto fs-5" scope="col1">#</td>
                        <td className="texto fs-5" scope="col1">img</td>
                        <td className="texto fs-5" scope="col2">Item</td>
                        <td className ="texto fs-5" scope="col3">precio c/u</td>
                        <td className="texto fs-5" scope="col4">Cantidad</td>
                        <td className="texto fs-5" scope="col5">Acción</td>
                        <td className="texto fs-5" scope="col6">Total</td>
                    </tr>
                </thead>
            </table>


            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <table>
                    <thead>
                        <tr>
                            <td className="texto fs-6 pe-3">Nombre del producto</td>
                            <td className="texto fs-3"><button type="button" onClick={restarProducto} className="btn btn-outline-primary">-</button></td>
                            <td className="texto fs-6 px-2">{cantidad}</td>
                            <td className="texto fs-3"><button type="button" onClick={sumarProducto} className="btn btn-outline-primary">+</button></td>
                            <td className="texto fs-3 ps-3"><button type="button" onClick={agregarCarrito} className="btn btn-outline-primary">Agregar al carrito</button></td>
                        </tr>
                    </thead>
                </table>
            </div>


            <div>
                <td className="texto text-center" id="e1" scope="col1">
                    <svg className="my-0 mx-0 btn btn-info btn-sm btnBorrarProducto" xmlns="http   www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                    </svg>
                </td>  
                <td className="texto text-center" ><img style="width: 3rem; height: 3rem" src="" alt=""/>  </td>
                <td className="texto text-center" >$</td>
                <td className="texto text-center" >$ <span id="e9"></span>--</td>
                <td className="texto text-center" >--</td>
                <td className="texto text-center" >
                    <button style="width: 3rem; height: 3rem" className="my-0 btn btn-agg btn-info btn-sm">
                        +
                </button>
                    <button style="width: 3rem; height: 3rem" className="my-0 btn btn-agg btn-info btn-sm">
                    -
                    </button>
                </td>
                <td className="texto text-center">$ 
                    <span id="precio" >$</span>
                </td>
             </div> */}
            
        </div>
    )
}

export default ItemCount