import React , { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getDoc, getFirestore, doc} from "firebase/firestore"
import Loading from "./Loading";

const ItemDetailContainer = () =>{
    const [item, setItem] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const db= getFirestore();
        const documento = doc(db,"items", id)
        getDoc(documento).then((snapShot)=>{
            if(snapShot.exists()){
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false)
            } else{
                console.log("error wachem")
            }
            
        })
    },[id]);

    return(
        <div className="container">
            {loading ? <Loading/> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;