import CommentSVG from "./svg-components/CommentSVG"
import SubmitSVG from "./svg-components/SubmitSVG"
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux'
import picture from "../assets/Terran-small.jpg"

const AddComment = ({postId, type}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const [incrementer, setIncrementer] = useState(1)
    const [message, setMessage] = useState("")
    const [isHovered, setIsHovered] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const handleInputChange = (e) => {
        setMessage(e.target.value)
    }

    const handleCommentSubmit = () => {
        let comment = {
            id: incrementer,
            userOwner: {
                name: user.name,
                profilePicture: picture
            },
            content: message,
            reactions: {
                hypes: 0,
                comments: 0,
                shares: 0
            }
        }
        setIncrementer(incrementer + 1)
        if(type === "post") {
            dispatch({
                type: "ADD_COMMENT",
                payload: { id: postId, comment}
            })
        } else {
        }

        setMessage("")
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleCommentSubmit()
            setIsActive(false)
        }
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const handleFocus = () => {
        setIsActive(true)
    }

    const handleBlur = () => {
        setIsActive(false)
        setIsHovered(false)
    }

    function commentDisplay() {
        if(!isHovered && !isActive)
            return (
                <div className="comment-container">
                    <div style={{ marginLeft:"16px", marginTop:"5px"}}>
                    <CommentSVG height="18" width="18" />
                    </div>
                    <input placeholder="Add comment" className="comment-input" />
                    <div style={{ marginTop:"5px", marginLeft:"auto", marginRight:"11px", cursor:"pointer"}}>
                        <SubmitSVG />
                    </div>
                </div>
            )

        return (
            <div className="comment-container-active">
                <input autoFocus  value={message} placeholder="Add comment" className="comment-input" onFocus={handleFocus} onBlur={handleBlur} onKeyPress={handleKeyPress} onChange={handleInputChange} />
                <div style={{ marginLeft:"auto", marginRight:"11px", cursor:"pointer"}} onClick={handleCommentSubmit}>
                    <span>Post</span>
                </div>
            </div>
        )
    }
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {commentDisplay()}
        </div>
    )
}

export default AddComment