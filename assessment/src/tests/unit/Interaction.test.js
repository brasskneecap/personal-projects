import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Interaction from '../../components/Interaction';
import CommentSVG from '../../components/svg-components/CommentSVG.js'

describe('Interaction', () => {
    const wrapper = new ShallowRenderer()

    const mockHandler = () => {
        console.log('test')
    }
    
    wrapper.render(
    <Interaction onClickHandler={mockHandler} component={<CommentSVG />} typeCount="1" typeText="test" />
    );
    
    let componentRendered = wrapper.getRenderOutput();
    
    it('Interaction Snapshot', () => {
        expect(componentRendered).toMatchSnapshot();
    })

    it('Should containt commentSVG', () => {
        expect(componentRendered.props.children[0].props.children.type).toBe(CommentSVG)
    })
})