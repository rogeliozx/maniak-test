import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Amount from './Amount';

configure({ adapter: new Adapter() });

describe('Check good amount', () => {
    it('show value',()=>{
        const textTest='fdasfasdf'
        const wrapper=shallow(<Amount>{textTest}</Amount>)
        const result =wrapper.text().includes(textTest);
        expect(result).toEqual(true)
    })
})