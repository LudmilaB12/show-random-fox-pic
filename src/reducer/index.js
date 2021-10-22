const initialState = {
    images: []
}

function rootReducer (state = initialState, action){
    switch(action.type) {
        case "GET_IMAGE":
            return{
                ...state,
                images: action.payload
            }

        default:
            return state
    }

}

export default rootReducer;