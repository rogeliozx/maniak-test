import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SliderCalculator from './SliderCalculator';
configure({ adapter: new Adapter() });
describe('Test slider', () => {
    it('amount and onchange',()=>{
        const calculate=jest.fn()
        const wrapper=shallow(<SliderCalculator calculate={calculate}/>)
        wrapper.find('input').at(0).simulate('change',{target:{value:'10'}});
       expect(calculate.mock.calls).toEqual([])
        
    })
})
