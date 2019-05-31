import React from 'react';
import { shallow } from 'enzyme'
import { Header } from '../../components/Header';

const startLogout = jest.fn()

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={startLogout} />)
    expect(wrapper).toMatchSnapshot()
})

test('should call startLogout on button click', () => {
    const wrapper = shallow(<Header startLogout={startLogout} />)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})