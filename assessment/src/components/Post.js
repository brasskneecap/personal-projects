import PostHeader from "./PostHeader"
import PostContent from "./PostContent";
import PostInteraction from "./PostInteraction";
import Comment from "./Comment";
import AddComment from "./AddComment";

const Post = ({ post }) => {
    const commentComponents = post.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} postId={post.id} />
     })
    return (
        <div className="base-container">
            <PostHeader post={post} headerType="post-header"/>
            <PostContent content={ post.content }/>
            <PostInteraction reactions={post.reactions} postId={post.id} />
            <AddComment postId={post.id} type="post" />
            {commentComponents}
        </div>
    )
}

export default Post