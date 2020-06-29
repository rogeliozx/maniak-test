import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProducDesc from './ProducDesc';

configure({ adapter: new Adapter() });

describe('Check good amount', () => {
    it('show value',()=>{
        const textTest='fdasfasdf'
        const wrapper=shallow(<ProducDesc>{textTest}</ProducDesc>)
        const result =wrapper.text().includes(textTest);
        expect(result).toEqual(true)
    })
})
