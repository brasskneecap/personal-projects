import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PostContent from '../../components/PostContent';

describe('PostContent', () => {
    const wrapper = new ShallowRenderer()

    wrapper.render(
    <PostContent content="This is a test" />
    );
    
    let componentRendered = wrapper.getRenderOutput();
    
    it('Interaction Snapshot', () => {
        expect(componentRendered).toMatchSnapshot();
    })

    it('Should contain the passed in content', () => {
        expect(componentRendered.props.children.props.children).toBe('This is a test');
    })
    
})