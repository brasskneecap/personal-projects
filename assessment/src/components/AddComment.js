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
        console.log(type)
        console.log(postId)
        if(type === "post") {
            dispatch({
                type: "ADD_COMMENT",
                payload: { id: postId, comment}
            })
        } else {
            console.log("comment clicked on comment")
        }

    }

    return (
        <div className="comment-container">
            <div style={{ marginLeft:"16px", marginTop:"5px"}}>
                <CommentSVG height="18" width="18" />
            </div>
            <input value={message} placeholder="Add comment" className="comment-input" onChange={handleInputChange} />
            <div style={{ marginTop:"5px", marginLeft:"auto", marginRight:"11px", cursor:"pointer"}} onClick={handleCommentSubmit}>
                <SubmitSVG />
            </div>
        </div>
    )
}

export default AddComment