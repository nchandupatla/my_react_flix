import React from 'react';
import renderer from 'react-test-renderer';
import CardComponent from './card-component';
import { mount } from 'enzyme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card, CardTitle, CardMedia} from 'material-ui';

configure({adapter: new Adapter()});


describe('<CardComponent />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CardComponent movie={{title:'test', overview:'test'}} />);
        wrapper.setProps({styles: true});
    });

    it('should render  <Card /> element', () => {
        expect(wrapper.find(Card)).toHaveLength(1);
    });

    it('should render  <CardMedia /> element', () => {
        expect(wrapper.find(CardMedia)).toHaveLength(1);
    });



});

  