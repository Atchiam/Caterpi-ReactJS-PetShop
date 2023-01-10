import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import Loading from "./Loading";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items")
        const q = id ? query(itemsCollection, where("categoria", "==", id )): itemsCollection;
        getDocs(q).then((snapShot)=>{
            setItems(snapShot.docs.map((doce) =>({id:doce.id, ...doce.data()})))
            setLoading(false)
        })

    },[id])

    return (
        <div className="container py-5">
                {loading ? <Loading/> : <ItemList items={items}/>}
        </div>
    )
}

export default ItemListContainer;