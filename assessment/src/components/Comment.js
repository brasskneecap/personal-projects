import PostHeader from "./PostHeader"
import PostContent from "./PostContent";
import CommentInteraction from "./CommentInteraction";
import AddComment from "./AddComment";

const Comment = ({ comment, postId }) => {
    return (
        <div>
            <div className="divider"></div>
            <div className=".comment-section">
                <PostHeader post={comment} headerType="comment-header"/>
                <PostContent content={ comment.content }/>
                <CommentInteraction reactions={comment.reactions} postId={postId} commentId={comment.id} />
            </div>
        </div>
    )
}

export default Comment