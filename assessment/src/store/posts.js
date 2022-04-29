import picture from "../assets/Terran.jpg"
const initialState = {
    posts: [
        // {
        //     id: 0,
        //     userOwner: {
        //         name: "Terran",
        //         profilePicture: picture
        //     },
        //     content: "comment content",
        //     reactions: {
        //         hypes: 98,
        //         comments: 20,
        //         shares: 30,
        //         views: 78
        //     }
        //     comments: [
        //      { 
                //     id: 0,
                //     userOwner: {
                //         name: ""
                //         profilePicture: picture
                //     }
                //     content: "comment content",
                //     reactions: {
                //         hypes: 98,
                //         comments: 20,
                //         shares: 30
                //     }
                // }
        //     ]
        // }
    ]
}

function postsReducer(state = initialState, action) {
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
        case 'HYPE_POST': {
            let {id} = action.payload;
            return {
                ...state,
                posts: state.posts.map(
                    (post) => post.id === id ? {
                        ...post,
                        reactions: {
                            ...post.reactions,
                            hypes: post.reactions.hypes + 1
                        }
                    } : post
                )
            }
        }
        case 'UNHYPE_POST': {
            let {id} = action.payload;
            return {
                ...state,
                posts: state.posts.map(
                    (post) => post.id === id ? {
                        ...post,
                        reactions: {
                            ...post.reactions,
                            hypes: post.reactions.hypes - 1
                        }
                    } : post
                )
            }
        }
        case 'HYPE_COMMENT': {
            let { postId, commentId } = action.payload;
            return {
                ...state,
                posts: state.posts.map(
                    (post) => post.id === postId ? {
                        ...post,
                        comments: post.comments.map(
                            (comment) => comment.id === commentId ? {
                                ...comment,
                                reactions: {
                                    ...comment.reactions,
                                    hypes: comment.reactions.hypes + 1
                                }
                            } : comment
                        )
                    } : post
                )
            }
        }
        case 'UNHYPE_COMMENT': {
            let { postId, commentId } = action.payload;
            return {
                ...state,
                posts: state.posts.map(
                    (post) => post.id === postId ? {
                        ...post,
                        comments: post.comments.map(
                            (comment) => comment.id === commentId ? {
                                ...comment,
                                reactions: {
                                    ...comment.reactions,
                                    hypes: comment.reactions.hypes - 1
                                }
                            } : comment
                        )
                    } : post
                )
            }
        }
        case 'ADD_COMMENT': {
            let {id, comment} = action.payload;
            return {
                ...state,
                posts: state.posts.map(
                    (post) => post.id === id ? {
                        ...post,
                        comments: [
                            ...post.comments,
                            comment
                        ]
                    } : post
                )
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