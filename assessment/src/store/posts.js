import picture from "../assets/Terran.jpg"
const initialState = {
    posts: [
        // {
        //     id: 0,
        //     userOwner: {
        //         name: "Terran",
        //         profilePicture: picture
        //     },
        //     content: "Here's a story all about how my life got flipped turned upside down. I'd like to take a minute just sit right there all tell you all about how I slapped Chris Rock and kept my wifes name out of his mouth",
        //     reactions: {
        //         hypes: 98,
        //         comments: 20,
        //         shares: 30,
        //         views: 78
        //     }
        // }
    ]
}

function postsReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case 'ADD_POST': {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.payload
                ]
            }
        }
        default:
            return state
    }
}

//actions
export const addPost = (post) => ({
    type: "ADD_POST",
    payload: post
})

export default postsReducer