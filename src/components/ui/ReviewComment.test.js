import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewComment from './ReviewComment';

configure({ adapter: new Adapter() });

describe('Check good amount', () => {
    it('show value',()=>{
        const textTest='fdasfasdf'
        const wrapper=shallow(<ReviewComment >{textTest}</ReviewComment>)
        const result =wrapper.text().includes(textTest);
        expect(result).toEqual(true)
    })
})