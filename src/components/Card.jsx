import React from "react";
import { useSelector } from "react-redux";

export default function Card() {
    const image = useSelector((state) => state.images)
    return(
        <div>
            <h1>Imagen de un bonito zorrito para ti:</h1>
            {console.log(image.image)}
            <img src={image.image}/>
        </div>
    )

}