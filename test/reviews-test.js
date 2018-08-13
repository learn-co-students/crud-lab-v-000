import { expect } from 'chai';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import RestaurantInput from '../src/components/restaurants/RestaurantInput';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import manageRestaurant, { cuidFn } from '../src/reducers/manageRestaurant';
import App from '../src/App';
import Restaurants from '../src/components/restaurants/Restaurants';
import Restaurant from '../src/components/restaurants/Restaurant';
import ReviewInput from '../src/components/reviews/ReviewInput';
import Reviews from '../src/components/reviews/Reviews';
import ReviewsContainer from '../src/containers/ReviewsContainer';
import Review from '../src/components/reviews/Review';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('ReviewInput Component', () => {

});

// move on to testing the reviews component
describe('Reviews Component', () => {

});
