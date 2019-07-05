import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Navbar from '../../components/Navbar';

test('should render Navbar correctly', () => {
    const wrapper = shallow(<Navbar />);
    expect(toJSON(wrapper)).toMatchSnapshot()
})