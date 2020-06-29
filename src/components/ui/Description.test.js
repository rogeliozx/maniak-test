import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Description from './Description';

configure({ adapter: new Adapter() });

describe('Check good amount', () => {
    it('show value',()=>{
        const textTest='fdasfasdf'
        const wrapper=shallow(<Description>{textTest}</Description>)
        const result =wrapper.text().includes(textTest);
        expect(result).toEqual(true)
    })
})