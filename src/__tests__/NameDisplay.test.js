import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme';

import React from 'react';
import NameDisplay from '../components/NameDisplay';

describe('NameDisplay tests', () => {
  test('inital value test', () => {
    let componenet = shallow(<NameDisplay />);
    expect(componenet.state('name')).toBe('Sarah Smalls');
  });

  test('updates test', () => {
    let componenet = shallow(<NameDisplay />);
    let fakeEvent = { target: { value: 'Joel Watson' } };
    componenet.find('input').simulate('change', fakeEvent);
    expect(componenet.state('name')).toBe('Joel Watson');
  });

  test('can see child', () => {
    let component = mount(<NameDisplay />);
    let child = component.find('.child');
    expect(child.html()).toBe('<p class="child">Im a Child</p>');
  });
});
