import HypeSVG from './svg-components/HypeSVG.js'
import CommentSVG from './svg-components/CommentSVG.js'
import ShareSVG from './svg-components/ShareSVG.js'
import Interaction from './Interaction.js'
import { useDispatch } from "react-redux"
import {useState} from 'react'

const PostInteraction = ({ reactions, postId }) => {
    const [hypeClicked, setHypeClicked] = useState(false);
    const dispatch = useDispatch();

    function handleHypeClick() {
        if(!hypeClicked) {
            dispatch({
                type: "HYPE_POST",
                payload: { id: postId}
            })
        }else {
            dispatch({
                type: "UNHYPE_POST",
                payload: { id: postId}
            })
        }
        setHypeClicked(!hypeClicked);
    }

    function handleCommentClick() {
        console.log('handleCommentClick');
    }

    function handleShareClick() {
        console.log('handleShareClick');
    }

    return (
        <div className="post-interactions-container">
            <Interaction component={<HypeSVG color={hypeClicked ? "#F44900" : "#12151D"}/>} reactionClass={"hype-background"} typeCount={reactions.hypes} typeText="Hypes" onClickHandler={handleHypeClick} />
            <Interaction component={<CommentSVG />} typeCount={reactions.comments} typeText="Comments" onClickHandler={handleCommentClick} />
            <Interaction component={<ShareSVG />} typeCount={reactions.shares} typeText="Shares" onClickHandler={handleShareClick} />
            <div className="interaction-content">
                <span className="count-display view-display">{reactions.views}</span><span className="type-display">Views</span>
            </div>
        </div>
    )
}

export default PostInteraction