import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PostHeader from '../../components/PostHeader';

describe('PostHeader', () => {
    const wrapper = new ShallowRenderer()

    let post = {
        id: 1,
        userOwner: {
            name: "Test User",
        },
        content: "Test message", 
        reactions: {
            hypes: 0,
            comments: 0,
            shares: 0,
            views: 0
        },
        comments: []
    }

    wrapper.render(
    <PostHeader post={post} headerType="post-header" />
    );
    
    let componentRendered = wrapper.getRenderOutput();
    
    it('Interaction Snapshot', () => {
        expect(componentRendered).toMatchSnapshot();
    })

    it('Should have post-header className', () => {
        expect(componentRendered.props.className).toBe("post-header")
    })
    
    it('Should have User name in title', () => {
        expect(componentRendered.props.children[1].props.children[0].props.children).toBe("Test User")
    })
})