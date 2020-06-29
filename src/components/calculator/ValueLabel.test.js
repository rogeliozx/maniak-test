import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ValueLabel from './ValueLabel';

configure({ adapter: new Adapter() });

describe('Check good amount', () => {
    it('show value',()=>{
        const textTest='asdfa'
        const wrapper=shallow(<ValueLabel>{textTest}</ValueLabel>)
        const result =wrapper.text().includes(textTest);
        expect(result).toEqual(true)
    })
})