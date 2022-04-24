import Interaction from "./Interaction"
import CameraSVG from "./svg-components/CameraSVG"
import VideoSVG from "./svg-components/VideoSVG"
import addPost from "../store/posts"
import { useState } from 'react'
import { useDispatch } from "react-redux"

const CreatePost = (user) => {
    const [incrementer, setIncrementer] = useState(2)
    const [message, setMessage] = useState("")

    const dispatch = useDispatch();

    const handleCreatePost = () => {
        console.log("handleCreatePost called")
        setIncrementer(incrementer + 1)
        console.log(message)
        let post = {
                id: incrementer,
                userOwner: user.user,
                content: message, 
                reactions: {
                    hypes: 0,
                    comments: 0,
                    shares: 0,
                    views: 0
                },
                comments: []
            }
        dispatch({
            type: "ADD_POST",
            payload: post
        })
    }

    const handleInputChange = (e) => {
        setMessage(e.target.value)
    }

    return (
        <div className="base-container ">
            <input className="create-post-input" placeholder="What's on your mind?" onChange={handleInputChange}/>
            <div className="create-post-footer">
                <Interaction component={<CameraSVG />} typeCount="Add Media"/>
                <Interaction component={<VideoSVG />} typeCount="Go Live"/>
                <button className="create-post-button" onClick={handleCreatePost} type="button">Post</button>
            </div>
        </div>
    )
}

export default CreatePost