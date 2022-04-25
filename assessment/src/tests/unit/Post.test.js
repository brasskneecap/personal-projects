import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Post from '../../components/Post';

describe('Post no comments', () => {
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
    <Post post={post} />
    );
    
    let componentRendered = wrapper.getRenderOutput();
    
    it('Post Snapshot', () => {
        expect(componentRendered).toMatchSnapshot();
    })

    it('Should contain the passed in content', () => {
        expect(componentRendered.props.children[4].length).toBe(0)
    })
    
})

describe('Post with comments', () => {
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
        comments: [
            {
                id: 1
            },
            {
                id: 2
            }
        ]
    }

    wrapper.render(
    <Post post={post} />
    );
    
    let componentRendered = wrapper.getRenderOutput();
    
    it('Post Snapshot', () => {
        expect(componentRendered).toMatchSnapshot();
    })

    it('Should contain the passed in content', () => {
        expect(componentRendered.props.children[4].length).toBe(2)
    })
    
})