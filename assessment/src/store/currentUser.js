import picture from "../assets/Terran.jpg"

const initialState = {
    name:"Terran",
    profilePicture: picture
}; 
  
function currentUserReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER': {
        return {
            ...state,
            user: action.payload
        }
        }
        default:
        return state
    }
}

//actions
export const setCurrentUser = (user) => ({
    type: "SET_USER",
    payload: user
})

export default currentUserReducer