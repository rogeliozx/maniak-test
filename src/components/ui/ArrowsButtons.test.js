import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArrowsButtons from './ArrowsButtons';

configure({ adapter: new Adapter() });

describe('Check good amount an function', () => {
    it('show value',()=>{
        const operation=jest.fn()
        const wrapper=mount(<ArrowsButtons operation={operation}/>)
       wrapper.find('button').at(0).simulate('click')
      
        expect(operation.mock.calls).toEqual([[1]])
    })
    it('show value',()=>{
        const operation=jest.fn()
        const wrapper=mount(<ArrowsButtons operation={operation} arrow='back'/>)
       wrapper.find('button').at(0).simulate('click')
      
        expect(operation.mock.calls).toEqual([[-1]])
    })
})