import ProfilePicture from "./ProfilePicture"

const PostHeader = ({picture})=> {
    return (
        <div className="post-header">
            <ProfilePicture imgLocation={picture}/>
            <div className="titles-container">
                <div className="primary-title">
                    Title Here
                </div>
                <div className="secondary-title">
                    0 Minutes ago
                </div>
            </div>
            <div className="post-options">
                ...
            </div>
        </div>
    )
}

export default PostHeader