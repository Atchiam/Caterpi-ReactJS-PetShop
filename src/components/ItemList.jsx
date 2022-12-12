import React from "react";
import Item from "./Item";

function ItemList ({items}){
    return(
        <div className="row bg-info text-dark bg-opacity-25">
            {
                items.map(item => 
                    <div className="col-md-4" key={item.id}>
                        <Item item={item}/>
                    </div>
                )
            }
        </div>
    )
}

export default ItemList