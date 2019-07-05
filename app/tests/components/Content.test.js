import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Content from '../../components/Content';

test('should render Content correctly', () => {
    const wrapper = shallow(<Content />);
    expect(toJSON(wrapper)).toMatchSnapshot()
})
