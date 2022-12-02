import React from "react";

const ItemCount = () => {

    return(
        <div>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <tr>
                    <td class="texto fs-6 pe-3" scope="col2">Nombre del producto</td>
                    <td class="texto fs-3" scope="col1"><button type="button" className="btn btn-outline-primary"><bolt>-</bolt></button></td>
                    <td class="texto fs-6 px-2" scope="col2">Acción</td>
                    <td class="texto fs-3" scope="col3"><button type="button" className="btn btn-outline-primary"><bolt>+</bolt></button></td>
                    <td class="texto fs-3 ps-3" scope="col4"><button type="button" className="btn btn-outline-primary"><bolt>Agregar al carrito</bolt></button></td>
                    
                </tr>
            </div>
        </div>
    )
}

export default ItemCount