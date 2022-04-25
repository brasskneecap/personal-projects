import PostHeader from "./PostHeader"
import PostContent from "./PostContent";
import PostInteraction from "./PostInteraction";
import Comment from "./Comment";
import AddComment from "./AddComment";

const Post = ({ post }) => {
    console.log(post)
    const commentComponents = post.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment}/>
     })
    return (
        <div className="base-container">
            <PostHeader post={post} headerType="post-header"/>
            <PostContent content={ post.content }/>
            <PostInteraction reactions={post.reactions} />
            <AddComment postId={post.id} type="post" />
            {commentComponents}
        </div>
    )
}

export default Post