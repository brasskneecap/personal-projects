import CommentSVG from "./svg-components/CommentSVG"
import PostSubmitSVG from "./svg-components/PostSubmitSVG"
import {useState} from 'react'

const AddComment = () => {
    const [comment, setComment] = useState("")

    const handleInputChange = (e) => {
        setComment(e.target.value)
    }
    return (
        <div className="comment-container">
            <div style={{ marginLeft:"16px", marginTop:"5px"}}>
                <CommentSVG height="18" width="18" />
            </div>
            <input value={comment} placeholder="Add comment" className="comment-input" onChange={handleInputChange} />
            <div style={{ marginLeft:"16px", marginTop:"5px", marginLeft:"auto", marginRight:"11px"}}>
                <PostSubmitSVG />
            </div>
        </div>
    )
}

export default AddComment