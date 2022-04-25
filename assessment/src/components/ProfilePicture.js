const ProfilePicture = ({imgLocation}) => {
    return (
        <div>
            <div>
                <img className="picture-formatter" src={imgLocation} />
            </div>
        </div>
    )
}

export default ProfilePicture