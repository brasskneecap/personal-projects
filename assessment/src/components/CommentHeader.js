import ProfilePicture from "./ProfilePicture"

const CommentHeader = ({ post, headerType})=> {
    return (
        <div className={headerType}>
            <ProfilePicture imgLocation={post.userOwner.profilePicture}/>
            <div className="titles-container">
                <div className="primary-title">
                    { post.userOwner.name}
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

export default CommentHeader