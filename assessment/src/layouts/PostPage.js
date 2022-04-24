import Post from "../components/Post"
import CreatePost from "../components/CreatePost"

const PostPage = () => {
    return (
        <div style={{ padding:"20px"}}>
            <CreatePost />
            <Post />
        </div>
    )
}

export default PostPage