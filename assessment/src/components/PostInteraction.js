import HypeSVG from './svg-components/HypeSVG.js'
import CommentSVG from './svg-components/CommentSVG.js'
import ShareSVG from './svg-components/ShareSVG.js'
import Interaction from './Interaction.js'
import {useEffect, useState} from 'react'

const PostInteraction = ({ reactions }) => {
    const [hypeClicked, setHypeClicked] = useState(false);

    function handleHypeClick() {
        setHypeClicked(!hypeClicked);
        console.log('handleHypeClick');
    }

    function handleCommentClick() {
        console.log('handleCommentClick');
    }

    function handleShareClick() {
        console.log('handleShareClick');
    }

    return (
        <div className="post-interactions-container">
            <Interaction component={<HypeSVG color={hypeClicked ? "#F44900" : "#12151D"}/>} typeCount={reactions.hypes} typeText="Hypes" onClickHandler={handleHypeClick} />
            <Interaction component={<CommentSVG />} typeCount={reactions.comments} typeText="Comments" onClickHandler={handleCommentClick} />
            <Interaction component={<ShareSVG />} typeCount={reactions.shares} typeText="Shares" onClickHandler={handleShareClick} />
            <Interaction typeCount={reactions.views} typeText="Views" />
        </div>
    )
}

export default PostInteraction