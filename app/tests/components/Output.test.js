import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Output from '../../components/Output';

test('should render Output correctly', () => {
    const wrapper = shallow(<Output />);
    expect(toJSON(wrapper)).toMatchSnapshot()
})