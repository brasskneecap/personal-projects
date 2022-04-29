import Interaction from "./Interaction"
import CameraSVG from "./svg-components/CameraSVG"
import VideoSVG from "./svg-components/VideoSVG"
import { useState } from 'react'
import { useDispatch } from "react-redux"

const CreatePost = (user) => {
    const [incrementer, setIncrementer] = useState(1)
    const [message, setMessage] = useState("")

    const dispatch = useDispatch();

    const handleCreatePost = () => {
        setIncrementer(incrementer + 1)
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
        setMessage("")
    }

    const handleInputChange = (e) => {
        setMessage(e.target.value)
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleCreatePost()
        }
    }

    return (
        <div className="base-container ">
            <input className="create-post-input" placeholder="What's on your mind?" value={message} onChange={handleInputChange} onKeyPress={handleKeyPress}/>
            <div className="create-post-footer">
                <Interaction component={<CameraSVG />} typeCount="Add Media"/>
                <Interaction component={<VideoSVG />} typeCount="Go Live"/>
                <button className="create-post-button" onClick={handleCreatePost} type="button">Post</button>
            </div>
        </div>
    )
}

export default CreatePost