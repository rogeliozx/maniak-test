import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BadgeContainer from './BadgeContainer';

configure({ adapter: new Adapter() });

describe('Check good amount', () => {
    it('show value',()=>{
        const textTest=['fdasfasdf','sfadsadf']
        const wrapper=shallow(<BadgeContainer>{textTest.length}</BadgeContainer>)
        const result =wrapper.text().includes(2);
        expect(result).toEqual(true)
    })
})