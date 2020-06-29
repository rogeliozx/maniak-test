import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewPerson from './ReviewPerson';

configure({ adapter: new Adapter() });

describe('Check good amount', () => {
    it('show value',()=>{
        const textTest='fdasfasdf'
        const nameTest='lele'
        const wrapper=shallow(<ReviewPerson position={textTest} name={nameTest}/>)
        const result =wrapper.text().includes(textTest);
        const result2 =wrapper.text().includes(nameTest);
        expect(result).toEqual(true)
        expect(result2).toEqual(true)
    })
})