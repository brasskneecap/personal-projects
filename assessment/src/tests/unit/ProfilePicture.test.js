import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ProfilePicture from '../../components/ProfilePicture';
import picture from "../../assets/Terran.jpg"

describe('ProfilePicture', () => {
    const wrapper = new ShallowRenderer()

    wrapper.render(
        <ProfilePicture imgLocation={picture} />
    );
    
    let componentRendered = wrapper.getRenderOutput();
    
    it('Should match ProfilePicture Snapshot', () => {
        expect(componentRendered).toMatchSnapshot();
    })

    it('Should contain image', () => {
        expect(componentRendered.props.children.props.children.props.src).toBe('Terran.jpg')
    })
})