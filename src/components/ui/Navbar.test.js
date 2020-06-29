import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from './Navbar';
import { BrowserRouter as Router, } from 'react-router-dom';
configure({ adapter: new Adapter() });

describe('Check good amount', () => {
  it('show value', () => {
    const textTest = {
      page: 'asdfas',
      routes: [
        { route: 'test', text: 'test' },
        { route: 'test2', text: 'test2' },
      ],
    };
    const wrapper = mount(
      <Router>
        <Navbar menu={textTest} />
      </Router>
    );
    const result = wrapper.text().includes(textTest.routes[0].text);
    expect(result).toEqual(true);
  });
});
