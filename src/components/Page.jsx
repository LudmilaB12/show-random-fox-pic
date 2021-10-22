import React from "react"
import { getImages } from "../actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"





export default function Page(){
    const dispatch = useDispatch()
    const image = useSelector((state) => state.image);

    useEffect(()=>{
        dispatch(getImages())
    }, [dispatch])

    function handleClick(e){
        e.preventDefault()
        dispatch(getImages);
        console.log("Action despachada")
    }



    return (
        <div>
            <button onClick={ e => handleClick(e)}>¡Muestrame la imagen!</button>
        </div>
    )
}