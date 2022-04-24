import PostHeader from "./PostHeader"
import PostContent from "./PostContent";
import picture from '../assets/Terran.jpg';

const Post = () => {
    let content = "Here's a story all about how my life got flipped turned upside down. I'd like to take a minute just sit right there all tell you all about how I slapped Chris Rock and kept my wifes name out of his mouth"

    return (
        <div>
            <PostHeader picture={picture} />
            <PostContent content={content}/>
        </div>
    )
}

export default Post