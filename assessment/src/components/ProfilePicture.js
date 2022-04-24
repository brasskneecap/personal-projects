const ProfilePicture = ({imgLocation}) => {
    return (
        <div>
            <div className="picture-container">
                <img className="picture-formatter" src={imgLocation} />
            </div>
        </div>
    )
}

export default ProfilePicture