import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Entry from '../../components/Entry';

test('should render Entry correctly', () => {
    const wrapper = shallow(<Entry />);
    expect(toJSON(wrapper)).toMatchSnapshot()
})