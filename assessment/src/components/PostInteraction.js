import HypeSVG from './svg-components/HypeSVG.js'
import CommentSVG from './svg-components/CommentSVG.js'
import ShareSVG from './svg-components/ShareSVG.js'
import Interaction from './Interaction.js'
import {useEffect, useState} from 'react'

const PostInteraction = () => {
    const [hypeClicked, setHypeClicked] = useState(false);

    useEffect(() => {
        //edit this to be set by redux state
        //setHypeClicked(hypeClicked);
    }, [hypeClicked])

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
            <Interaction component={<HypeSVG color={hypeClicked ? "#F44900" : "#12151D"}/>} typeCount="100" typeText="Hypes" onClickHandler={handleHypeClick} />
            <Interaction component={<CommentSVG />} typeCount="24" typeText="Comments" onClickHandler={handleCommentClick} />
            <Interaction component={<ShareSVG />} typeCount="12" typeText="Shares" onClickHandler={handleShareClick} />
            <Interaction typeCount="100" typeText="Views" />
        </div>
    )
}

export default PostInteraction