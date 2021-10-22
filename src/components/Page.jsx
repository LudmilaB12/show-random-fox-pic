import React from "react"
import { getImages } from "../actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Card from "./Card"




export default function Page(){
    const dispatch = useDispatch()
    const image = useSelector((state) => state.image);
    const [ buttonClicked, setButtonClicked ] = useState(false)



    useEffect(()=>{
        dispatch(getImages())
    }, [dispatch])

    function handleClick(e){
        e.preventDefault()
        dispatch(getImages);
        console.log("Action despachada")
        setButtonClicked(true)
    }



    return (
        <div>
            <button onClick={ e => handleClick(e)}>¡Muestrame la imagen!</button>
            { buttonClicked ? <Card/> : null }  
        </div>
    )
}