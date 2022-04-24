import Post from "./Post"
import CreatePost from "./CreatePost"
import { useSelector } from 'react-redux'

const PostPage = () => {
    const posts = useSelector((state) => state.posts)
    const user = useSelector((state) => state.user)
    const postsComponents = posts.posts.map((post) => {
        return <Post key={post.id} post={post}/>
     })

    return (
        <div style={{ padding:"20px"}}>
            <CreatePost user={user} />
            {
                postsComponents
            }
            
        </div>
    )
}

export default PostPage