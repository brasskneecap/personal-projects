import CommentSVG from "./svg-components/CommentSVG"
import PostSubmitSVG from "./svg-components/PostSubmitSVG"

const AddComment = () => {
    return (
        <div className="comment-container">
            <div style={{ marginLeft:"16px", marginTop:"5px"}}>
                <CommentSVG height="18" width="18" />
            </div>
            <span style={{ marginLeft:"16px", color:"rgba(18, 21, 29, 0.6)", fontWeight:"500", fontSize:"14px"}}>Add comment</span>
            <div style={{ marginLeft:"16px", marginTop:"5px", marginLeft:"auto", marginRight:"11px"}}>
                <PostSubmitSVG />
            </div>
        </div>
    )
}

export default AddComment