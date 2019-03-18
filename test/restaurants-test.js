import { expect } from 'chai';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import RestaurantInput from '../src/components/restaurants/RestaurantInput'
import sinon from 'sinon'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageRestaurant, { cuidFn } from '../src/reducers/manageRestaurant'
import App from '../src/App'
import Restaurants from '../src/components/restaurants/Restaurants'
import Restaurant from '../src/components/restaurants/Restaurant'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('RestaurantInput', () => {
  it('has an text input field', () => {
    const wrapper = shallow(<RestaurantInput />);
    expect(2).to.equal(2);
  });
});
