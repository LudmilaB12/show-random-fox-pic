import axios from "axios";

export function getImages(){
    return async function(dispatch){
        var response = await axios.get("https://randomfox.ca/floof/")
        return dispatch({
            type: "GET_IMAGE",
            payload: response.data
        })
    }
}