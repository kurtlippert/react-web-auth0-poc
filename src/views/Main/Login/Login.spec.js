import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Login from './Login'
import styles from './styles.module.css'

describe('<Login />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Login />)
  })

  it('should have props for location and auth', () => {
    expect(wrapper.props().location).to.be.defined
    expect(wrapper.props().auth).to.be.defined
  });
});
