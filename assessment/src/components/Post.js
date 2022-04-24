import PostHeader from "./PostHeader"
import PostContent from "./PostContent";
import PostInteraction from "./PostInteraction";
import AddComment from "./AddComment";

const Post = ({ post }) => {
    return (
        <div className="base-container">
            <PostHeader post={post} headerType="post-header"/>
            <PostContent content={ post.content }/>
            <PostInteraction reactions={post.reactions} />
            <AddComment />
        </div>
    )
}

export default Post