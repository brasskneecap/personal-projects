import HypeSVG from './svg-components/HypeSVG.js'
import CommentSVG from './svg-components/CommentSVG.js'
import ShareSVG from './svg-components/ShareSVG.js'
import Interaction from './Interaction.js'
import { useDispatch } from "react-redux"
import {useState} from 'react'

const CommentInteraction = ({ reactions, postId, commentId }) => {
    const [hypeClicked, setHypeClicked] = useState(false);
    const dispatch = useDispatch();

    function handleHypeClick() {
        if(!hypeClicked) {
            dispatch({
                type: "HYPE_COMMENT",
                payload: { postId, commentId }
            })
        }else {
            dispatch({
                type: "UNHYPE_COMMENT",
                payload: { postId, commentId }
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
        </div>
    )
}

export default CommentInteraction