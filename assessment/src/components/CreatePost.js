import Interaction from "./Interaction"
import CameraSVG from "./svg-components/CameraSVG"
import VideoSVG from "./svg-components/VideoSVG"

const CreatePost = () => {

    const handleCreatePost = () => {
        console.log("handleCreatePost called")
    }

    return (
        <div className="base-container ">
            <input className="create-post-input"clplaceholder="What's on your mind?"/>
            <div className="create-post-footer">
                <Interaction component={<CameraSVG />} typeCount="Add Media"/>
                <Interaction component={<VideoSVG />} typeCount="Go Live"/>
                <button className="create-post-button" onClick={handleCreatePost}>Post</button>
            </div>
        </div>
    )
}

export default CreatePost